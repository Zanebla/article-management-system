import { deleteArticle, listArticle } from '@/services/api/article';
import { convertPageData } from '@/utils/request';
import { openConfirm } from '@/utils/ui';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { ActionType, PageContainer, ProColumns, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef, useState } from 'react';
import InputDialog from './InputDialog';


export default () => {
  const refAction = useRef<ActionType>(null);
  const [selectedRowKeys, selectRow] = useState<number[]>([]);
  const [article, setArticle] = useState<API.ArticleVO>();
  const [visible, setVisible] = useState(false);
  const columns: ProColumns<API.ArticleVO>[] = [
    {
      title: '文章ID',
      dataIndex: 'id',
      width: 100,
      search: false,
    },
    {
      title: '文章标题',
      dataIndex: 'title',
      width: 100,
      render: (dom, record) => {
        return (
          <a
            onClick={() => {
              setArticle(record);
              setVisible(true);
            }}
          >
            {dom}
          </a>
        );
      },
    },
    {
      title: '文章作者',
      dataIndex: 'author',
      width: 100,
      // search: false,
    },
    {
      title: '文章来源',
      dataIndex: 'source',
      width: 100,
      search: false,
    },
    {
      title: '内容',
      dataIndex: 'content',
      width: 600,
      search: false,
      ellipsis: true,
    },
    {
      title: '发表时间',
      dataIndex: 'publishTime',
      // search: false,
    },
    // {
    //   title: '文章地址',
    //   dataIndex: 'url',
    //   width: 500,
    //   render: (dom, record) => {
    //     return (
    //       <a
    //         href="https://www.wanfangdata.com.cn/"
    //         // onClick={() => {
    //         //   setArticle(record);
    //         //   setVisible(true);
    //         // }}
    //       >
    //         {dom}
    //       </a>
    //     );
    //   },
    // },
    {
      title: '创建人',
      dataIndex: 'createdByDesc',
      width: 100,
      search: false,
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      width: 150,
      search: false,
    },
  ];

  const handleDelete = async () => {
    if (!selectedRowKeys?.length) return;
    openConfirm(`您确定删除${selectedRowKeys.length}条记录吗`, async () => {
      await deleteArticle(selectedRowKeys);
      refAction.current?.reload();
    });
  };

  return (
    <PageContainer>
      <ProTable<API.ArticleVO>
        actionRef={refAction}
        rowKey="id"
        request={async (params = {}) => {
          return convertPageData(await listArticle(params));
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              setArticle(undefined);
              setVisible(true);
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
          <Button
            type="primary"
            key="primary"
            danger
            onClick={handleDelete}
            disabled={!selectedRowKeys?.length}
          >
            <DeleteOutlined /> 删除
          </Button>,
        ]}
        columns={columns}
        rowSelection={{
          onChange: (rowKeys) => {
            selectRow(rowKeys as number[]);
          },
        }}
      />
      <InputDialog
        detailData={article}
        onClose={(result) => {
          setVisible(false);
          result && refAction.current?.reload();
        }}
        visible={visible}
      />
    </PageContainer>
  );
};

import { search1 } from '@/services/api/article';
import { convertPageData } from '@/utils/request';
import { ActionType, PageContainer, ProColumns, ProTable, ProFormTextArea } from '@ant-design/pro-components';
import { useRef, useState } from 'react';



export default () => {
    const refAction = useRef<ActionType>(null);
    const [selectedRowKeys, selectRow] = useState<number[]>([]);
    const [article, setArticle] = useState<API.LuceneResultBookVO>();
    const [visible, setVisible] = useState(false);
    const columns: ProColumns<API.LuceneResultBookVO>[] = [
      {
        title: '文章ID',
        dataIndex: 'bookId',
        width: 100,
        search: false,
      },
      {
        title: '文章标题',
        dataIndex: 'title',
        width: 150,
        search: false,
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
      // {
      //   title: '文章作者',
      //   dataIndex: 'author',
      //   width: 100,
      //   search: false,
      // },
      {
        title: '文章内容',
        dataIndex: 'content',
        width: 800,
        render: (_: any, record) => {
          const text = record?.highlights?.join('...') || '';
          return <div dangerouslySetInnerHTML={{ __html: text }}></div>
          // <div style={{height: 1}}>
          // </div>
          // return <ProFormTextArea> dangerouslySetInnerHTML={{ __html: text }} </ProFormTextArea>
        }
      },
      {
        title: '相关度',
        dataIndex: 'score',
        search: false,
      },

    ];
  
    return (
      <PageContainer>
        <ProTable<API.LuceneResultBookVO>
          actionRef={refAction}
          rowKey="bookID"
          manualRequest = {true}
          request={async (params = {}) => {
            return convertPageData(await search1(params));
          }}
          columns={columns}
          rowSelection={{
            onChange: (rowKeys) => {
              selectRow(rowKeys as number[]);
            },
          }}
        />
      </PageContainer>
    );
  };
  
import { ModalForm, ProFormGroup, ProFormInstance, ProFormText, ProFormTextArea, ProFormDatePicker } from '@ant-design/pro-components';
import { message } from 'antd';
import { useEffect, useRef } from 'react';
import { waitTime } from '@/utils/request';
import { addArticle, updateArticle } from '@/services/api/article';
import moment from 'moment';

interface InputDialogProps {
  detailData?: API.ArticleDTO;
  visible: boolean;
  onClose: (result: boolean) => void;
}

export default function InputDialog(props: InputDialogProps) {
  const form = useRef<ProFormInstance>(null);

  useEffect(() => {
    waitTime().then(() => {
      if (props.detailData) {
        form?.current?.setFieldsValue(props.detailData);
      } else {
        form?.current?.resetFields();
      }
    });
  }, [props.detailData, props.visible]);

  const onFinish = async (values: any) => {
    const { id, title,author,source, publishTime, url, content} = values;
    const data: API.ArticleDTO = {
      // id: props.detailData?.id,
      id,
      title,
      author,
      source,
      publishTime,
      url,
      content
    };
    if (props.detailData) {
      await updateArticle(data);
    } else {
      await addArticle(data);
    }
    message.success('保存成功');
    props.onClose(true);
    return true;
  };

  return (
    <ModalForm
      width={600}
      onFinish={onFinish}
      formRef={form}
      modalProps={{
        destroyOnClose: true,
        onCancel: () => props.onClose(false),
      }}
      title={props.detailData ? '修改文章' : '新建文章'}
      open={props.visible}
    >
      <ProFormGroup>
      <ProFormText
        name="id"
        label="序号"
        rules={[
          {
            required: true,
            message: '请输入文章序号！',
          },
        ]}
      />
      <ProFormText
        name="title"
        label="文章标题"
        rules={[
          {
            required: true,
            message: '请输入文章标题！',
          },
        ]}
      />
      </ProFormGroup>

        <ProFormText
          name="author"
          label="文章作者"
          rules={[
            {
              required: true,
              message: '请输入文章作者姓名！',
            },
          ]}
        />
        <ProFormText
          name="source"
          label="文章来源"
          rules={[
            {
              required: true,
              message: '请输入文章来源！',
            },
          ]}
        />
        {/* <ProFormText
          name="url"
          label="文章地址"
          rules={[
            {
              required: true,
              message: '请输入文章地址！',
            },
          ]}
        /> */}
        <ProFormTextArea
          name="content"
          label="文章内容"
          rules={[
            {
              required: true,
              message: '请输入文章内容！',
            },
          ]}
        />
        {/* <ProFormText
          name="publishTime"
          label="发表时间"
          rules={[
            {
              required: true,
              message: '请输入发表时间！',
            },
          ]}
        /> */}
        <ProFormDatePicker
          name="publishTime"
          label="文章发表日期"
          initialValue={moment()}
          rules={[
            {
              required: true,
              message: '请输入发表日期！',
            },
          ]}
        />
    </ModalForm>


  );
}

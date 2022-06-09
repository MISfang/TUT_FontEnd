import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'actionId',
      width: 40,
    },
    {
      title: '发布人学号',
      dataIndex: 'number',
      width: 100,
    },
    {
      title: '发布类别',
      dataIndex: 'type',
      width: 100,
      filters: [
        { text: '个人动态', value: '1' },
        { text: '失物招领', value: '2' },
        { text: '有偿悬赏', value: '3' },
        { text: '二手交易', value: '4' },
        { text: '校内拼车', value: '5' },
      ],
    },
    {
      title: '评论数量',
      dataIndex: 'commentNum',
      sorter: (a, b) => a.commentNum - b.commentNum,
      width: 60,
    },
    {
      title: '点赞数量',
      dataIndex: 'likeNum',
      sorter: (a, b) => a.likeNum - b.likeNum,
      width: 60,
    },
    {
      title: '发布时间',
      dataIndex: 'releaseTime',
      width: 130,
    },
    {
      title: '内容',
      dataIndex: 'text',
      width: 120,
    },
  ];
}

export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 180,
    schemas: [
      {
        field: 'number',
        label: '学号',
        component: 'Input',
        colProps: {
          xl: 10,
          xxl: 8,
        },
      },
    ],
  };
}

export function getDetailColumns(): BasicColumn[] {
  return [
    {
      title: '学号',
      dataIndex: 'commentatorUserNumber',
      width: 100,
    },
    {
      title: '微信昵称',
      dataIndex: 'commentatorUserNickName',
      width: 100,
    },
    {
      title: '评论内容',
      dataIndex: 'commentText',
      width: 200,
    },
    {
      title: '评论时间',
      dataIndex: 'commentTime',
      width: 120,
    },
    {
      title: '点赞数量',
      dataIndex: 'likeNum',
      width: 80,
      sorter: (a, b) => a.likeNum - b.likeNum,
    },
  ];
}

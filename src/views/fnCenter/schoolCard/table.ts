import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: '丢卡人学号',
      dataIndex: 'student_number',
      width: 100,
    },
    {
      title: '丢卡人姓名',
      dataIndex: 'student_name',
      width: 100,
    },
    {
      title: '拾卡人学号',
      dataIndex: 'number',
      width: 100,
    },
    {
      title: '联系电话',
      dataIndex: 'phone',
      width: 120,
    },
    {
      title: '取卡地点',
      dataIndex: 'address',
      width: 200,
    },
    {
      title: '登记时间',
      dataIndex: 'time',
      width: 200,
    },
    {
      title: '备注信息',
      dataIndex: 'describe',
      width: 200,
    },
    {
      title: '拾取状态',
      dataIndex: 'isPickedText',
      filters: [
        { text: '未拾取', value: '0' },
        { text: '已拾取', value: '1' },
      ],
      width: 100,
    },
  ];
}

export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 180,
    schemas: [
      {
        field: 'student_number',
        label: '拾卡人学号搜索',
        component: 'Input',
        colProps: {
          xl: 6,
          xxl: 12,
        },
      },
      {
        field: 'number',
        label: '丢失人学号搜索',
        component: 'Input',
        colProps: {
          xl: 6,
          xxl: 12,
        },
      },
      {
        field: 'student_name',
        label: '丢失人姓名搜索',
        component: 'Input',
        colProps: {
          xl: 6,
          xxl: 12,
        },
      },
    ],
  };
}

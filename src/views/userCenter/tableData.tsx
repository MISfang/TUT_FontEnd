import { FormProps, FormSchema } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: 'ID号',
      dataIndex: 'id',
      fixed: 'left',
      width: 50,
    },
    {
      title: '学号',
      dataIndex: 'number',
      width: 100,
    },
    {
      title: '所属年级',
      dataIndex: 'grade',
      width: 100,
      filters: [
        { text: '2018级', value: '2018级' },
        { text: '2019级', value: '2019级' },
        { text: '2020级', value: '2020级' },
        { text: '2021级', value: '2021级' },
        { text: '未认证', value: '暂未认证' },
      ],
    },
    {
      title: '微信名称',
      dataIndex: 'nickname',
      width: 100,
    },
    {
      title: '上次教务认证时间',
      dataIndex: 'lastdate',
      width: 120,
    },
  ];
}

export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 180,
    schemas: [...getAdvanceSchema()],
  };
}

export const getAdvanceSchema = (itemNumber = 2): FormSchema[] => {
  const text: string[] = ['学号', '微信昵称'];
  const arr: any = [];
  for (let index = 0; index < itemNumber; index++) {
    arr.push({
      field: text[index] === '学号' ? 'number' : 'nickname',
      label: text[index],
      component: 'Input',
      colProps: {
        xl: 8,
        xxl: 18,
      },
    });
  }
  return arr;
};

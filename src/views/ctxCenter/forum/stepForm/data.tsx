import { FormSchema } from '/@/components/Form';

export const step1Schemas: FormSchema[] = [
  {
    field: 'text',
    component: 'InputTextArea',
    label: '内容',
    required: true,
  },
  {
    field: 'position',
    component: 'Input',
    label: '地址/定位',
    required: true,
  },
  {
    field: 'type',
    component: 'RadioButtonGroup',
    label: '动态类型',
    required: true,
    colProps: {
      span: 36,
    },
    componentProps: {
      options: [
        {
          label: '个人动态',
          value: '1',
        },
        {
          label: '失物招领',
          value: '2',
        },
        {
          label: '有偿悬赏',
          value: '3',
        },
        {
          label: '二手交易',
          value: '4',
        },
        {
          label: '校内拼车',
          value: '5',
        },
      ],
    },
  },
];

export const transFormType = (number) => {
  let type: string = '';
  switch (+number) {
    case 1:
      type = '个人动态';
      break;
    case 2:
      type = '失物招领';
      break;
    case 3:
      type = '有偿悬赏';
      break;
    case 4:
      type = '二手交易';
      break;
    case 5:
      type = '校内拼车';
      break;
  }
  return type;
};

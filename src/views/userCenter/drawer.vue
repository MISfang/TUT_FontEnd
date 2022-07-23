<template>
  <BasicDrawer v-bind="$attrs" @register="register" title="新建管理员" width="30%">
    <div>
      <BasicForm @register="registerForm" @submit="createAdmin" />
    </div>
  </BasicDrawer>
</template>
<script setup lang="ts">
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { message } from 'ant-design-vue';
  import { createAdminAPi } from '../../api/demo/user';

  const schemas: FormSchema[] = [
    {
      field: 'number',
      component: 'Input',
      label: '学号',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'password',
      component: 'Input',
      label: '密码',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'repassword',
      component: 'Input',
      label: '确认密码',
      colProps: {
        span: 24,
      },
    },
  ];
  const [register, { closeDrawer }] = useDrawerInner();
  const [registerForm, { getFieldsValue, resetFields }] = useForm({
    labelWidth: 60,
    schemas,
    showActionButtonGroup: true,
    submitButtonOptions: {
      text: '提交',
    },
    actionColOptions: {
      span: 16,
    },
  });

  const createAdmin = async () => {
    const { number, password, repassword } = getFieldsValue();
    if (password !== repassword) {
      message.error('两次密码不一致，请重新输入');
      resetFields();
      return;
    }
    const res = await createAdminAPi({ number, password });
    if (res) {
      message.success('新建管理员成功！');
      setTimeout(() => {
        closeDrawer();
      }, 500);
    }
  };
</script>

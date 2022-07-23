<template>
  <div>
    <BasicTable @register="registerTable" :api="isAdmin ? getAllAdmin : getAllUser">
      <template #avatar="{ record }">
        <TableImg :imgList="[record.photo]" :size="100" />
      </template>
      <template #toolbar>
        <a-button v-if="isAdmin" type="primary" @click="createAdmin"> 新建管理员 </a-button>

        <a-button type="primary" @click="toggleIsAdmin">
          {{ isAdmin ? '查看普通用户界面' : '查看管理员界面' }}
        </a-button>
      </template>
    </BasicTable>

    <Drawer @register="register" />
  </div>
</template>
<script setup lang="ts">
  import { BasicTable, useTable, TableImg } from '/@/components/Table';
  import { getBasicColumns, getFormConfig } from './tableData';
  import { getAllUser, getAllAdmin } from '/@/api/demo/user';
  import { ref } from 'vue';
  import { message } from 'ant-design-vue';
  import Drawer from './drawer.vue';
  import { useDrawer } from '/@/components/Drawer';

  const [registerTable, { reload, setLoading }] = useTable({
    title: '用户列表',
    columns: getBasicColumns(),
    useSearchForm: true,
    formConfig: getFormConfig(),
    showTableSetting: true,
    tableSetting: { fullScreen: true },
    bordered: true,
    showIndexColumn: true,
    rowKey: 'id',
    actionColumn: {
      width: 100,
      title: '用户头像',
      dataIndex: 'avatar',
      slots: { customRender: 'avatar' },
    },
    titleHelpMessage: '用户基本信息表',
    canColDrag: true,
    pagination: {
      pageSizeOptions: ['5', '10', '20'],
      defaultPageSize: 5,
      pageSize: 5,
    },
  });

  const isAdmin = ref(false);

  const toggleIsAdmin = async () => {
    setLoading(true);
    isAdmin.value = !isAdmin.value;
    setTimeout(() => {
      reload();
      message.success(`切换成${isAdmin.value ? '管理员' : '用户'}界面`);
      setLoading(false);
    }, 1200);
  };

  const [register, { openDrawer }] = useDrawer();

  const createAdmin = () => {
    openDrawer();
  };
</script>

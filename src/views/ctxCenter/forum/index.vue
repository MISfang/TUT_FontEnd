<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="createData">新增</a-button>
      </template>
      <template #expandedRowRender="{ record }">
        <div>完整内容: {{ record.text }}</div>
        <div>地址/定位: {{ record.position }}</div>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '查看详情',
              onClick: detailHandle.bind(null, record),
            },
            {
              label: record.isTop ? '已置顶' : '置顶',
              icon: record.isTop ? 'lucide:check-circle' : 'ic:baseline-arrow-circle-up',
              popConfirm: {
                title: `${record.isTop ? '取消' : '确定'}置顶该动态？`,
                confirm: zhiding.bind(null, record),
              },
            },
            {
              label: '删除',
              icon: 'ic:outline-delete-outline',
              popConfirm: {
                title: '确定删除',
                confirm: deleteHandle.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>

    <Modal @register="registerModal" />

    <Modal2 @register="registerModal2" :id="id" />
  </div>
</template>
<script setup lang="ts">
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getBasicColumns, getFormConfig } from '../tableData1';
  import { getActionList, actionZhiDing, actionDelete } from '/@/api/demo/action';
  import { ref } from 'vue';
  import Modal from './modal.vue';
  import Modal2 from './modal2.vue';
  import { useModal } from '/@/components/Modal';
  import { message } from 'ant-design-vue';

  const [registerTable, { reload }] = useTable({
    title: '论坛列表',
    api: getActionList,
    columns: getBasicColumns(),
    useSearchForm: true,
    formConfig: getFormConfig(),
    showTableSetting: true,
    tableSetting: { fullScreen: true },
    bordered: true,
    showIndexColumn: false,
    rowKey: 'actionId',
    titleHelpMessage: '动态表',
    actionColumn: {
      width: 160,
      title: '操作组',
      dataIndex: 'action',
      slots: { customRender: 'action' },
    },
    pagination: {
      pageSizeOptions: ['10', '20', '40'],
      defaultPageSize: 10,
      pageSize: 10,
    },
  });
  const id = ref(5);
  const [registerModal, { openModal }] = useModal();
  const [registerModal2, { openModal: openModal2 }] = useModal();

  const zhiding = ({ actionId, isTop }) => {
    actionZhiDing(actionId).then(() => {
      reload();
      message.success(`${isTop ? '取消' : ''}置顶ID为${actionId}成功`);
    });
  };
  const deleteHandle = ({ actionId }) => {
    actionDelete(actionId).then(() => {
      reload();
      message.success(`删除ID为${actionId}成功`);
    });
  };
  const createData = () => {
    openModal();
  };
  const detailHandle = async ({ actionId }) => {
    id.value = actionId;
    openModal2();
  };
</script>

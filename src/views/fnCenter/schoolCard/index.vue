<template>
  <BasicTable @register="registerTable">
    <!-- <template #expandedRowRender="{ record }">
      <span>完整备注: {{ record.describe }} </span>
    </template> -->
    <template #action="{ record }">
      <TableAction
        :actions="[
          {
            label: record.isPicked ? '改成未获取' : '改成已获取',
            icon: record.isPicked ? 'lucide:check-circle-2' : 'akar-icons:question',
            type: record.isPicked ? 'ghost' : 'primary',
            popConfirm: {
              title: `确定修改成${record.isPicked ? '未获取' : '已获取'}？`,
              confirm: toggle.bind(null, record),
            },
          },
        ]"
      />
    </template>
  </BasicTable>
</template>
<script setup lang="ts">
import { BasicTable, useTable, TableAction } from "/@/components/Table";
import { getBasicColumns, getFormConfig } from "./table";
import { getLostCardData, toggleIsPicked } from "/@/api/demo/fnCenter";
import { message } from "ant-design-vue";

const [registerTable, { reload }] = useTable({
  title: "校园卡列表",
  api: getLostCardData,
  columns: getBasicColumns(),
  useSearchForm: true,
  formConfig: getFormConfig(),
  showTableSetting: true,
  tableSetting: { fullScreen: true },
  rowKey: "actionId",
  bordered: true,
  actionColumn: {
    width: 180,
    title: "操作组",
    dataIndex: "action",
    slots: { customRender: "action" },
  },
});
const toggle = ({ actionId }) => {
  console.log(
    "%c 🥦 actionId: ",
    "font-size:20px;background-color: #6EC1C2;color:#fff;",
    actionId
  );
  toggleIsPicked(actionId).then(() => {
    reload();
    message.success("修改状态成功");
  });
};
</script>

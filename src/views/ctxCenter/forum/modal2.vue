<script setup lang="ts">
  import { defineProps, nextTick, reactive, ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { Description } from '/@/components/Description/index';
  import { getActionDetail } from '../../../api/demo/action';
  import { schema } from './detailForm';
  import { BasicTable, TableAction } from '/@/components/Table';
  import { getDetailColumns } from '../tableData1';
  import { deleteComment } from '../../../api/demo/comment';
  import { message } from 'ant-design-vue';
  import { PageWrapper } from '/@/components/Page';
  import { Alert } from 'ant-design-vue';

  const data = reactive({
    data1: {},
    data2: [],
  });

  const props = defineProps({
    id: {
      type: Number,
      required: true,
    },
  });

  const [register, { setModalProps }] = useModalInner((data) => {
    data && onDataReceive(data);
  });

  async function onDataReceive(id) {
    nextTick(() => {
      setModalProps({ title: `ID为${id}的动态详情` });
    });
    const { items } = await getActionDetail(id);
    const {
      releaseUser: { releaseUserNumber, releaseUserNickName },
      commentList,
      releaseTime,
      commentNum,
      likeNum,
      type,
      picList,
      text,
    } = items;
    data.data1 = {
      number: releaseUserNumber,
      nickName: releaseUserNickName,
      releaseTime,
      commentNum,
      likeNum,
      type,
      ImgList: picList,
      text,
    };

    data.data2 = commentList;
  }

  function handleVisibleChange(v) {
    v && props.id && nextTick(() => onDataReceive(props.id));
  }
  //img
  const imgSrc =
    'data:image/png;base64,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';

  //img

  // 表格区域
  const canResize = ref(false);
  const loading = ref(false);
  const striped = ref(true);
  const border = ref(true);
  const pagination = ref<any>(false);
  const config = {
    width: 60,
    title: '操作组',
    dataIndex: 'action',
    slots: { customRender: 'action' },
  };

  const deleteHandle = async ({ commentId }) => {
    const { items } = await deleteComment(commentId);
    if (items) {
      message.success(`删除ID为${commentId}成功`);
    } else {
      message.error('请稍后重试');
    }
  };
</script>

<template>
  <BasicModal
    v-bind="$attrs"
    title="`ID为1的详情`"
    :helpMessage="['动态详细信息']"
    width="1000px"
    @register="register"
    @visible-change="handleVisibleChange"
  >
    <Description
      title="发布人信息"
      :collapseOptions="{ canExpand: true, helpMessage: '发布人信息' }"
      :column="3"
      :data="data.data1"
      :schema="schema"
      class="mb-4"
    />
    <!-- 中间内容 -->
    <PageWrapper title="该动态内容">
      <div class="myPage">
        <div>
          <a-card hoverable style="width: 300px"> {{ data.data1.text }} </a-card>
        </div>
        <div class="fenge"></div>
        <div>
          <div v-if="!data.data1.ImgList?.length">
            <Alert message="没有图片" show-icon />
          </div>

          <a-image-preview-group v-else class="ImgList">
            <a-image
              v-for="(src, index) in data.data1.ImgList"
              :key="index"
              class="Img"
              :width="200"
              :src="src"
              :fallback="imgSrc"
            />
          </a-image-preview-group>
        </div>
      </div>
    </PageWrapper>
    <!-- 中间内容结束 -->
    <BasicTable
      title="评论列表"
      titleHelpMessage="这个动态的评论列表"
      :columns="getDetailColumns()"
      :dataSource="data.data2"
      :canResize="canResize"
      :loading="loading"
      :striped="striped"
      :bordered="border"
      showTableSetting
      :pagination="pagination"
      :actionColumn="config"
    >
      <template #expandedRowRender="{ record }">
        <span>完整内容: {{ record.commentText }} </span>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '删除',
              type: 'primary',
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
  </BasicModal>
</template>

<style scoped lang="less">
  .myPage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border: 3px solid #cccccc;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 16px;
    .fenge {
      width: 95%;
      height: 2px;
      background-color: #cccccc;
      margin: 10px auto;
    }
    .Img {
      margin-right: 10px;
    }
  }
</style>

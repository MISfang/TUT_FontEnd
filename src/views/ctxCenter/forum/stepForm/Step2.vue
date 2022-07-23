<template>
  <div class="step2">
    <a-alert message="确认上一步骤信息无误 上传图片为1到3张，可以不传" show-icon />
    <a-descriptions :column="1" class="mt-5">
      <a-descriptions-item label="内容"> {{ text }} </a-descriptions-item>
      <a-descriptions-item label="定位/地址"> {{ position }} </a-descriptions-item>
      <a-descriptions-item label="类型"> {{ transFormType(type) }} </a-descriptions-item>
    </a-descriptions>
    <a-divider />
    <BasicForm @register="register" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form';
  import { transFormType } from './data';
  import { Alert, Divider, Descriptions } from 'ant-design-vue';
  import { uploadApi } from '../../../../api/sys/upload';
  import { FormSchema } from '/@/components/Form';
  import { useUserStore } from '../../../../store/modules/user';
  import { createAction } from '../../../../api/demo/action';

  export default defineComponent({
    components: {
      BasicForm,
      [Alert.name]: Alert,
      [Divider.name]: Divider,
      [Descriptions.name]: Descriptions,
      [Descriptions.Item.name]: Descriptions.Item,
    },
    props: {
      step1Values: Object,
    },
    emits: ['next', 'prev'],
    setup(props, { emit }) {
      const step2Schemas: FormSchema[] = [
        {
          field: 'imgList',
          component: 'Upload',
          label: '图片上传',
          colProps: {
            span: 24,
          },
          rules: [{ required: false, message: '请选择上传图片' }],
          componentProps: {
            api: uploadApi,
            emptyHidePreview: true,
            helpText: '最多上传三张图片',
            maxNumber: 3,
          },
        },
      ];

      const [register, { validate, setProps }] = useForm({
        labelWidth: 80,
        schemas: step2Schemas,
        actionColOptions: {
          span: 14,
        },
        resetButtonOptions: {
          text: '上一步',
        },
        submitButtonOptions: {
          text: '提交',
        },
        resetFunc: customResetFunc,
        submitFunc: customSubmitFunc,
      });

      async function customResetFunc() {
        emit('prev');
      }

      async function customSubmitFunc() {
        try {
          setProps({
            submitButtonOptions: {
              loading: true,
            },
          });
          const values = await validate();

          // 从vuex中获取数据
          const {
            //@ts-ignore
            userInfo: { realName },
            //@ts-ignore
            imgUrlList,
          } = useUserStore();
          const urlList = Object.values(imgUrlList);

          await createAction({
            nickName: realName,
            urlList,
            data: props.step1Values,
          });

          setTimeout(() => {
            setProps({
              submitButtonOptions: {
                loading: false,
              },
            });
            emit('next', values);
          }, 1500);
        } catch (error) {}
      }

      return { register, ...props.step1Values, transFormType };
    },
  });
</script>
<style lang="less" scoped>
  .step2 {
    width: 450px;
    margin: 0 auto;
  }
</style>

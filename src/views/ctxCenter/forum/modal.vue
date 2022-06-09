<template>
  <BasicModal
    width="1200px"
    v-bind="$attrs"
    title="新增动态"
    :showCancelBtn="false"
    :showOkBtn="false"
    helpMessage="点击×号关闭"
  >
    <div class="step-form-form">
      <a-steps :current="current">
        <a-step title="填写动态信息" />
        <a-step title="选择是否上传图片" />
        <a-step title="完成" />
      </a-steps>
    </div>
    <div class="mt-5">
      <Step1 @next="handleStep1Next" v-show="current === 0" />
      <Step2
        @prev="handleStepPrev"
        @next="handleStep2Next"
        v-show="current === 1"
        v-if="initSetp2"
        :step1Values="step1Values"
      />
      <Step3 v-show="current === 2" @redo="handleRedo" v-if="initSetp3" />
    </div>
  </BasicModal>
</template>
<script lang="ts">
import { defineComponent, ref, toRefs, reactive } from "vue";
import { BasicModal } from "/@/components/Modal";
import Step1 from "./stepForm/Step1.vue";
import Step2 from "./stepForm/Step2.vue";
import Step3 from "./stepForm/Step3.vue";
import { Steps } from "ant-design-vue";

export default defineComponent({
  components: {
    BasicModal,
    Step1,
    Step2,
    Step3,
    [Steps.name]: Steps,
    [Steps.Step.name]: Steps.Step,
  },
  props: {
    userData: { type: Object },
  },
  setup() {
    const current = ref(0);

    const state = reactive({
      initSetp2: false,
      initSetp3: false,
      step1Values: null,
    });

    function handleStep1Next(step1Values: any) {
      current.value++;
      state.initSetp2 = true;
      state.step1Values = step1Values;
    }

    function handleStepPrev() {
      current.value--;
    }

    function handleStep2Next() {
      current.value++;
      state.initSetp3 = true;
    }

    function handleRedo() {
      current.value = 0;
      state.initSetp2 = false;
      state.initSetp3 = false;
    }

    return {
      current,
      handleStep1Next,
      handleStep2Next,
      handleRedo,
      handleStepPrev,
      ...toRefs(state),
    };
  },
});
</script>

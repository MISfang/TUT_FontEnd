<template>
  <div class="m-5 result-error">
    <Result status="error" title="有待开发">
      <template #extra>
        <a-button key="console" type="primary"> 知道了 </a-button>
      </template>
    </Result>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Result } from 'ant-design-vue';
  export default defineComponent({
    components: {
      Result,
    },
  });
</script>
<style lang="less" scoped>
  .result-error {
    padding: 48px 32px;
    background-color: @component-background;

    &__content {
      padding: 24px 40px;
      background-color: @background-color-light;

      &-title {
        margin-bottom: 16px;
        font-size: 16px;
        font-weight: 500;
      }

      &-icon {
        color: #ff4d4f;
      }
    }
  }
</style>

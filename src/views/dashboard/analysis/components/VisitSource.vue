<template>
  <Card title="用户年级分布" :loading="loading">
    <div ref="chartRef" :style="{ width, height }"></div>
  </Card>
</template>
<script lang="ts" setup>
import { Ref, ref, watch } from "vue";
import { Card } from "ant-design-vue";
import { useECharts } from "/@/hooks/web/useECharts";
import { getUserGradeData } from "../../../../api/demo/user";

const props = defineProps({
  loading: Boolean,
  width: {
    type: String as PropType<string>,
    default: "100%",
  },
  height: {
    type: String as PropType<string>,
    default: "300px",
  },
});

const chartRef = ref<HTMLDivElement | null>(null);
const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);

watch(
  () => props.loading,
  async () => {
    if (props.loading) {
      return;
    }
    const res = await getUserGradeData();

    setOptions({
      tooltip: {
        trigger: "item",
      },
      legend: {
        bottom: "-11%",
        left: "center",
      },
      series: [
        {
          color: ["#5ab1ef", "#b6a2de", "#67e0e3", "#2ec7c9", "#471565"],
          name: "年级比例",
          type: "pie",
          radius: ["40%", "85%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "12",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: res.items,
          animationType: "scale",
          animationEasing: "exponentialInOut",
          animationDelay: function () {
            return Math.random() * 100;
          },
        },
      ],
    });
  },
  { immediate: true }
);
</script>

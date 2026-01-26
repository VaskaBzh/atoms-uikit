<template>
  <el-progress
    class="progress"
    :percentage="percentage"
    :status="status"
    :type="type"
    :format="format"
    :stroke-width="!strokeWidth && isTextInside && type === 'line' ? 26 : strokeWidth"
    :text-inside="isTextInside"
    :indeterminate="isIndeterminate"
    :duration="duration"
    :striped="isStriped"
    :striped-flow="isStripedFlow"
  >
    <template #default="{ percentage }" v-if="$slots.default">
      <slot name="default" :percentage="percentage" />
    </template>
  </el-progress>
</template>

<script setup lang="ts">
import { ProgressPropsContract } from "./contracts";

withDefaults(
  defineProps<ProgressPropsContract>(),
  {
    status: "",
    type: "line",
    isTextInside: false,
    isIndeterminate: false,
    isStriped: false,
    isStripedFlow: false,
  }
)
</script>

<style scoped lang="scss">
:global(.progress.el-progress--circle),
:global(.progress.el-progress--dashboard) {
  width: fit-content;
}
</style>
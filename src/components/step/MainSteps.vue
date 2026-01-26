<template>
  <el-steps
    class="steps"
    :active="activeIndex"
    :finish-status="finishStatus"
    :process-status="processStatus"
    :align-center="isAlignCenter"
    :direction="direction"
    :simple="isSimple"
    :space="space"
  >
    <slot />
  </el-steps>
</template>

<script setup lang="ts">
import { StepsPropsContract } from "./contracts";

withDefaults(
  defineProps<StepsPropsContract>(),
  {
    finishStatus: "success",
    activeIndex: 0,
    isAlignCenter: true,
    isSimple: false,
    direction: "horizontal",
  }
)
</script>

<style scoped lang="scss">
// TODO: el-step__line top 50%
:global(.steps .el-step.is-horizontal .el-step__line) {
  top: 50%;
  transform: translateY(-50%);
}
:global(.steps .el-step.is-horizontal .is-text) {
  transform: translateY(-3px);
}
:global(.steps .el-step.is-horizontal .is-success .is-text),
:global(.steps .el-step.is-horizontal .is-finish .is-text),
:global(.steps .el-step.is-horizontal .is-error .is-text),
:global(.steps .el-step.is-horizontal .is-wait .is-text), {
  transform: translateY(-2px);
}
:global(.steps .el-step.is-horizontal .el-icon) {
  height: auto;
}
:global(.steps .el-step.is-vertical .el-step__icon) {
  transform: translateY(-10px);
}
:global(.steps .el-step.is-horizontal .is-icon) {
  transform: translateY(12%);
}
:global(.steps .is-error .is-status) {
  width: 16px;
  height: 16px;
}
</style>
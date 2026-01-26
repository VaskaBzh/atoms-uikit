<template>
  <el-tour-step
    :target="target"
    :title="title"
    :description="description"
    :mask="isMask"
  >
    <template v-if="$slots.default">
      <slot />
    </template>
  </el-tour-step>
</template>

<script setup lang="ts">
import { TourItemPropsContract } from "./contracts";

withDefaults(
  defineProps<TourItemPropsContract>(),
  {
    isMask: true,
  }
);
</script>

<style scoped lang="scss">
</style>
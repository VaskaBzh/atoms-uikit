<template>
  <el-skeleton
    class="skeleton"
    :animated="isAnimated"
    :rows="rows"
    :loading="isLoading"
    :count="count"
    :throttle="throttle"
  >
    <!-- Skeleton slot (count prop working here only) -->
    <template #template v-if="$slots.template">
      <slot name="template" />
    </template>
    <!-- Loading complete slots (content) -->
    <template #default v-if="$slots.default">
      <slot name="default" />
    </template>
  </el-skeleton>
</template>

<script setup lang="ts">
import { SkeletonPropsContract } from "./contracts";

withDefaults(
  defineProps<SkeletonPropsContract>(),
  {
    isAnimated: true,
    isLoading: true,
    rows: 4,
  }
)
</script>

<style scoped lang="scss">
.skeleton {
  --el-skeleton-circle-size: 100px
}
</style>
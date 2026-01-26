<template>
  <el-skeleton-item
    :variant="variant"
  />
</template>

<script setup lang="ts">
import { SkeletonItemPropsContract } from "./contracts";

defineProps<SkeletonItemPropsContract>();
</script>

<style scoped lang="scss">
</style>
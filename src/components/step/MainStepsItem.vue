<template>
  <el-step
    :title="title"
    :description="description"
    :icon="icon"
    :status="status"
  />
</template>

<script setup lang="ts">
import { StepsItemPropsContract } from "./contracts";

defineProps<StepsItemPropsContract>();
</script>

<style scoped lang="scss">
</style>
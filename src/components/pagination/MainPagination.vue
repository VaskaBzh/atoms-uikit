<template>
  <el-pagination
    :current-page="currentPage"
    :layout="layout"
    :total="total"
    :page-size="pageSize"
    :pager-count="pagerCount"
    :background="isBackground"
    :size="size"
    :hide-on-single-page="isHideOnSinglePage"
    :disabled="isDisable"
    @current-change="$emit('current-change', $event)"
  />
</template>

<script setup lang="ts">
import { PaginationPropsContract } from "./contracts";

withDefaults(
  defineProps<PaginationPropsContract>(),
  {
    size: "default",
    pageSize: 10,
    currentPage: 1,
    isDisable: false,
    isHideOnSinglePage: true,
    isBackground: false,
  }
)

defineEmits<{
  (event: "current-change", currentPage: number): void,
}>()
</script>

<style scoped lang="scss">
</style>
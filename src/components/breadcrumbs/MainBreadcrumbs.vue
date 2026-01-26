<template>
  <el-breadcrumb
    :separator="separator"
    :separator-icon="separatorIcon"
  >
    <el-breadcrumb-item
      v-for="(route, routeIndex) in routeHistory"
      :key="route.title + routeIndex"
      :to="route.path"
			:title="route.title"
    >
      {{ route.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { BreadcrumbsPropsContract } from "./contracts";

defineProps<BreadcrumbsPropsContract>()
</script>

<style scoped lang="scss">
</style>
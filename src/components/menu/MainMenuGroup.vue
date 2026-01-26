<template>
  <el-menu-item-group
    :title="title"
  >
    <!-- u can use prop title or slot #title -->
    <template #title>
      <slot name="title" />
    </template>
    <slot />
  </el-menu-item-group>
</template>

<script setup lang="ts">
import { MenuGroupPropsContract } from "./contracts";

defineProps<MenuGroupPropsContract>()
</script>

<style scoped lang="scss">
</style>
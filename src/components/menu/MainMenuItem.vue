<template>
  <el-menu-item
    :index="index"
    :disabled="isDisable"
  >
    <!-- u can use slot #title -->
    <template #title>
      <slot name="title" />
    </template>
    <slot />
  </el-menu-item>
</template>

<script setup lang="ts">
import { MenuItemPropsContract } from "./contracts";

withDefaults(
  defineProps<MenuItemPropsContract>(),
  {
    isDisable: false,
  }
)
</script>

<style scoped lang="scss">
</style>
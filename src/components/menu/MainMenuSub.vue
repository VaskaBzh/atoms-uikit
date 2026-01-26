<template>
  <el-sub-menu
    :index="index"
  >
    <!-- u can use slot #title -->
    <template #title>
      <slot name="title" />
    </template>
    <slot />
  </el-sub-menu>
</template>

<script setup lang="ts">
import { MenuSubPropsContract } from "./contracts";

defineProps<MenuSubPropsContract>()
</script>

<style scoped lang="scss">
</style>
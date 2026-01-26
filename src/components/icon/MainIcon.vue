<template>
  <el-icon
    :size="size"
    :color="color"
  >
    <component :is="icon" />
  </el-icon>
</template>

<script setup lang="ts">
import { IconPropsContract } from "./contracts";

withDefaults(
  defineProps<IconPropsContract>(),
  {
    size: 16
  }
)
</script>

<style scoped lang="scss">
</style>
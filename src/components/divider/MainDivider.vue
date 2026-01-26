<template>
  <el-divider
    :direction="direction"
    :border-style="borderStyle"
    :content-position="contentPosition"
  >
    <slot />
  </el-divider>
</template>

<script setup lang="ts">
import { DividderPropsContract } from "./contracts";

withDefaults(
  defineProps<DividderPropsContract>(),
  {
    direction: "horizontal",
  }
);
</script>

<style scoped lang="scss">
</style>
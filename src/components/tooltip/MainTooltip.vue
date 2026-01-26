<template>
  <el-tooltip
    :effect="effect"
    :content="content"
    :placement="placement"
    :raw-content="isRawContent"
  >
    <template #content>
      <slot name="content" />
    </template>
    <slot />
  </el-tooltip>
</template>

<script setup lang="ts">
import { TooltipPropsContract } from "./contracts";

withDefaults(
    defineProps<TooltipPropsContract>(),
    {
      isRawContent: false,
    }
)
</script>

<style scoped lang="scss">
</style>
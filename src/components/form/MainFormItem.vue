<template>
  <el-form-item
    :label="label"
    :error="!$slots.error ? error : undefined"
    :prop="prop"
    :rules="rules"
  >
    <template #label="{ label }">
      <slot name="label" :label="label" />
    </template>
    <slot />
    <template #error>
      <slot name="error" />
    </template>
  </el-form-item>
</template>

<script setup lang="ts">
import { FormItemPropsContract } from "./contracts";

withDefaults(
  defineProps<FormItemPropsContract>(),
  {
    required: false,
  }
)
</script>

<style scoped lang="scss">
</style>
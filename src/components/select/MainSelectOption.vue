<template>
  <el-option
    :label="label"
    :value="value"
		:disabled="isDisabled"
  >
    <!-- have just default slot -->
    <slot />
  </el-option>
</template>

<script setup lang="ts">
import { SelectOptionPropsContract } from "./contracts";

defineProps<SelectOptionPropsContract>()
</script>

<style scoped lang="scss">
</style>
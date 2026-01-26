<template>
  <el-countdown
    :title="title"
    :value="value"
    :format="format"
  >
    <template #title v-if="$slots.title">
      <slot name="title" />
    </template>
  </el-countdown>
</template>

<script setup lang="ts">
import { CountdownPropsContract } from "./contracts";

defineProps<CountdownPropsContract>();
</script>

<style scoped lang="scss">
</style>
<template>
  <el-statistic
    class="statistic"
    :title="title"
    :value="value"
  >
    <template #title v-if="$slots.title">
      <slot name="title" />
    </template>
    <template #suffix v-if="$slots.suffix">
      <slot name="suffix" />
    </template>
  </el-statistic>
</template>

<script setup lang="ts">
import { StatisticPropsContract } from "./contracts";

defineProps<StatisticPropsContract>();
</script>

<style scoped lang="scss">
.statistic {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
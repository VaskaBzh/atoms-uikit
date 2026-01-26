<template>
  <el-tour
    v-model="modelValue"
    :type="type"
    :mask="isMask"
  >
    <template #default>
      <slot>
        <el-tour-step
          v-for="(step, stepIndex) in steps"
          :key="stepIndex"
          :target="step.target"
          :title="step.title"
          :description="step.description"
          :mask="step.isMask"
        >
          <slot :name="`step${stepIndex}`" />
        </el-tour-step>
      </slot>
    </template>
    <!-- Custom indicators -->
    <template #indicators="{ current, total }" v-if="$slots.indicators">
      <slot name="indicators" :current="current" :total="total" />
    </template>
  </el-tour>
</template>

<script setup lang="ts">
import { TourPropsContract } from "./contracts";
import { ModelRef } from "vue";

withDefaults(
  defineProps<TourPropsContract>(),
  {
    isMask: true,
    type: "default",
  }
);

const modelValue: ModelRef<boolean | undefined> = defineModel();
</script>

<style scoped lang="scss">
</style>
<template>
  <el-tour
    v-model="modelValue"
    :type="type"
    :mask="isMask"
  >
    <template #default>
      <slot>
        <main-tour-item
          v-for="(step, stepIndex) in steps"
          :key="stepIndex"
          v-bind="step"
          :prev-button-props="step.prevButtonProps ?? prevButtonProps"
          :prev-button-text="step.prevButtonText ?? prevButtonText"
          :next-button-props="step.nextButtonProps ?? nextButtonProps"
          :next-button-text="step.nextButtonText ?? nextButtonText"
          :finish-button-props="step.finishButtonProps ?? finishButtonProps"
          :finish-button-text="step.finishButtonText ?? finishButtonText"
          :is-last="stepIndex === steps.length - 1"
        >
          <slot :name="`step${stepIndex}`" />
        </main-tour-item>
      </slot>
    </template>
    <template v-if="$slots.indicators" #indicators="{ current, total }">
      <slot name="indicators" :current="current" :total="total" />
    </template>
  </el-tour>
</template>

<script setup lang="ts">
import { ModelRef } from "vue";
import { TourPropsContract } from "./contracts";
import MainTourItem from "./MainTourItem.vue";

withDefaults(defineProps<TourPropsContract>(), {
  isMask: true,
  type: "default",
});

const modelValue: ModelRef<boolean | undefined> = defineModel();
</script>

<style scoped lang="scss">
</style>

<template>
  <!--  v-model="modelValue"-->
  <el-input-number
    v-model="modelValue"
    :disabled="isDisable"
    :step-strictly="isStepStrictly"
    :min="min"
    :max="max"
    :step="step"
    :size="size"
    :precision="precision"
    :controls-position="controlsPosition"
		:value-on-clear="valueOnClear"
  >
    <!-- to see input number slots, look https://element-plus.org/en-US/component/input-number.html -->
    <slot />
  </el-input-number>
</template>

<script setup lang="ts">
import { InputNumberPropsContract } from "./contracts";
import { ModelRef } from "vue";

withDefaults(
  defineProps<InputNumberPropsContract>(),
  {
    size: "default",
    isDisable: false,
    isStepStrictly: false,
		valueOnClear: "min",
  }
)

const modelValue: ModelRef<number | undefined> = defineModel();
</script>

<style scoped lang="scss">
.checkbox {

}
</style>
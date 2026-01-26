<template>
  <el-checkbox-group v-if="modelValue" v-model="modelValue">
    <slot>
      <main-checkbox
        v-for="(checkbox, checkboxIndex) in checkboxes"
        :size="size"
        :key="checkbox.label + checkboxIndex"
        :label="checkbox.label"
        :value="checkbox.value"
        :is-border="isBorder ? isBorder : checkbox.isBorder"
        :is-disable="isDisable ? isDisable : checkbox.isDisable"
      />
    </slot>
  </el-checkbox-group>
</template>

<script setup lang="ts">
import { CheckboxGroupPropsContract } from "./contracts";
import MainCheckbox from "./MainCheckbox.vue";
import { ModelRef } from "vue";

withDefaults(
  defineProps<CheckboxGroupPropsContract>(),
  {
    isDisable: false,
    isBorder: false,
    size: "default"
  }
)

const modelValue: ModelRef<(string | number)[] | undefined> = defineModel();
</script>

<style scoped lang="scss">
</style>
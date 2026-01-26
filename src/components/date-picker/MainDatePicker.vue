<template>
  <el-date-picker
    v-model="modelValue"
    :type="type"
    :placeholder="placeholder"
    :size="size"
    :format="format"
    :disabled-date="disabledDate"
    :value-format="valueFormat"
    :disabled="isDisable"
    :clearable="isClearable"
    :shortcuts="shortCuts"
    :range-separator="rangeSeparator"
    :start-placeholder="startPlaceholder"
    :end-placeholder="endPlaceholder"
    :default-value="defaultValue"
    :prefix-icon="prefixIcon"
    :clear-icon="clearIcon"
		:popper-class="popperClass"
  >
    <!-- to correct custom stols use https://element-plus.org/en-US/component/date-picker.html#date-formats -->
    <slot />
  </el-date-picker>
</template>

<script setup lang="ts">
import { DatePickerPropsContract } from "./contracts";
import { DateTypeEnum } from "./enums";
import { ModelRef } from "vue";

withDefaults(
  defineProps<DatePickerPropsContract>(),
  {
    size: "default",
    type: DateTypeEnum.Date,
    isDisable: false,
    isClearable: false
  }
)

const modelValue: ModelRef<Date | [Date, Date] | [string, string] | string | undefined, string> = defineModel();
</script>

<style scoped lang="scss">
.button {

}
</style>
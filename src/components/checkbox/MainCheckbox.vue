<template>
  <el-checkbox
    class="checkbox"
    :label="label"
    :value="value"
    v-model="modelValue"
    :size="size"
    :disabled="isDisable"
    :border="isBorder"
		@change="$emit('change', $event)"
  />
</template>

<script setup lang="ts">
import { CheckboxPropsContract } from "./contracts";
import { ModelRef } from "vue";

withDefaults(
  defineProps<CheckboxPropsContract>(),
  {
    isDisable: false,
    isBorder: false,
    size: "default"
  }
)

const modelValue: ModelRef<boolean | undefined> = defineModel();

defineEmits<{
	(event: "change", checkboxValue: string | number | boolean): void
}>();
</script>

<style scoped lang="scss">
.checkbox {
  --el-checkbox-checked-bg-color: #0094d2;
  --el-checkbox-checked-text-color: #0094d2;
}
:global(.el-checkbox.is-bordered.is-checked) {
  border-color: var(--el-checkbox-checked-bg-color);
}
</style>
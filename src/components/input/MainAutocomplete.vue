<template>
  <el-autocomplete
    v-model="modelValue"
    :fetch-suggestions="fetchSuggestions"
    :trigger-on-focus="isTriggerOnFocus"
    :clearable="isClearable"
    :popper-class="popperClass"
    @select="$emit('select', $event)"
  >
		<!-- :placeholder="placeholder" -->
    <!-- If callback is not complete -->
    <template #loading v-if="$slots.loading">
      <slot name="loading" />
    </template>
    <!-- Slot to change icon -->
    <template #suffix v-if="$slots.suffix">
      <slot name="suffix" />
    </template>
    <!-- Slot to complete box (options) -->
    <template #default="{ item }" v-if="$slots.default">
      <slot :item="item" />
    </template>
  </el-autocomplete>
</template>

<script setup lang="ts">
import { AutocompletePropsContract, AutocompleteItemType } from "./contracts";
import { ModelRef } from "vue";

withDefaults(
  defineProps<AutocompletePropsContract>(),
  {
    isClearable: false,
    isTriggerOnFocus: true,
  }
)

const modelValue: ModelRef<string | number | undefined> = defineModel();

defineEmits<{
  (event: 'select', item: AutocompleteItemType): void;
}>()
</script>

<style scoped lang="scss">
@use "./styles/input";
</style>
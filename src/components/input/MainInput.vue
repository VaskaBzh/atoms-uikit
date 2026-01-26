<template>
  <!-- TODO: textarea no visible scroll -->
  <el-input
    :class="`input-${type}`"
    class="input"
    :placeholder="placeholder"
    v-model="modelValue"
    :type="type"
    :disabled="isDisable"
    :clearable="isClearable"
    :show-password="isShowPassword"
    :suffix-icon="suffixIcon"
    :prefix-icon="prefixIcon"
    :autosize="autosize"
    :maxlength="maxlength"
    :show-word-limit="isShowWordLimit"
    :formatter="formatter"
    :parser="parser"
    :size="size"
  >
		<template #prepend v-if="$slots.prepend">
			<slot name="prepend" />
		</template>
		<template #default v-if="$slots.default">
			<!-- to see input slots, look https://element-plus.org/en-US/component/input.html -->
			<slot />
		</template>
		<template #append v-if="$slots.append">
			<slot name="append" />
		</template>
  </el-input>
</template>

<script setup lang="ts">
import { InputPropsContract } from "./contracts";
import { ModelRef } from "vue";

withDefaults(
  defineProps<InputPropsContract>(),
  {
    size: "default",
    isDisable: false,
    isClearable: false,
    type: "text",
    isShowPassword: false,
    isShowWordLimit: false,
  }
)

const modelValue: ModelRef<string | number | undefined> = defineModel();
</script>

<style scoped lang="scss">
@use "./styles/input";
</style>
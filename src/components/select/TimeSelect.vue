<template>
	<el-time-select
		v-model="modelValue"
		:start="start"
		:step="step"
		:end="end"
		:placeholder="placeholder"
		:disabled="isDisabled"
		:editable="isEditable"
		:clearable="isClearable"
		:size="size"
		:name="name"
		:effect="effect"
		:prefix-icon="prefixIcon"
		:clear-icon="clearIcon"
		:min-time="minTime"
		:max-time="maxTime"
		:format="format"
		:empty-values="emptyValues"
		:value-on-clear="valueOnClear"
	/>
</template>

<script setup lang="ts">
import { ModelRef } from "vue";
import { TimeSelectPropsContract } from "./contracts";

withDefaults(
	defineProps<TimeSelectPropsContract>(),
	{
		start: "00:00",
		end: "23:45",
		step: "00:15",
		clearIcon: "CircleClose",
		format: "HH:mm",
		isDisabled: false,
		isEditable: false,
		isClearable: false,
		size: "default",
		effect: "light"
	}
);

const modelValue: ModelRef<string | undefined> = defineModel();
</script>

<style scoped lang="scss">

</style>
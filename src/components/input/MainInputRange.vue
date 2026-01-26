<template>
	<range
		class="input-range"
		v-if="
			modelValue !== undefined
			&& (typeof modelValue === 'number'
			|| Array.isArray(modelValue))
		"
		v-model="modelValue"
		:size="size"
		:vertical="isVertical"
		:addable="isAddable"
		:thumb-type="thumbType"
		:thumb-size="thumbSize"
		:render-top="renderTop as RangeRenderFn<number>"
		:render-top-on-active="isRenderTopOnActive"
		:render-bottom="renderBottom as RangeRenderFn<number>"
		:render-bottom-on-active="isRenderBottomOnActive"
		:min="min"
		:max="max"
		:step="step"
		:limit="limit"
		:smooth="isSmooth"
		:deduplicate="isDeduplicate"
		:range-highlight="isRangeHighlight"
		:show-stops="isShowStops"
	>
		<template #top="{ data }: { data: number }">
			<slot name="top" :data="data" />
		</template>
		<template #bottom="{ data }: { data: number }">
			<slot name="bottom" :data="data" />
		</template>
	</range>
</template>

<script setup lang="ts">
import "vue-range-multi/style.css";
import { ModelRef } from "vue";
import { Range, RangeRenderFn } from "vue-range-multi";
import { InputRangePropsContract } from "./contracts";

withDefaults(
	defineProps<InputRangePropsContract>(),
	{
		size: "small",
		isVertical: false,
		isAddable: false,
		thumbType: "rect",
		thumbSize: "medium",
		isRenderTopOnActive: false,
		isRenderBottomOnActive: false,
		min: 0,
		max: 100,
		step: 1,
		limit: 100,
		isSmooth: false,
		isDeduplicate: false,
		isRangeHighlight: false,
		isShowStops: false
	}
);

const modelValue: ModelRef<number[] | number | undefined> = defineModel();
</script>

<style scoped lang="scss">
.input-range {
	--range-primary: var(--el-color-primary);
	--range-fill: #E4E7ED;
	--range-fill-stop: #F5F5F5;
	--range-fill-thumb: #fff;
	--range-drop: var(--el-color-primary);

	--un-translate-y: -50%;
	--c-primary: var(--range-primary, var(--el-color-primary));
	--c-fill: var(--range-fill);
	--c-fill-stop: var(--range-fill-stop);
	--c-fill-thumb: var(--range-fill-thumb);
	--c-drop: var(--range-drop, var(--c-primary));
}

:global(.input-range .m-range-thumb) {
	border-color: var(--c-fill);
	transition: border-color 0.2s ease 0s;
	cursor: pointer;
	top: -50%;
}

:global(.input-range .m-range-thumb-small) {
	width: 0.5rem;
	height: 0.5rem;
}

:global(.input-range .m-range-thumb-medium) {
	width: 0.75rem;
	height: 0.75rem;
}

:global(.input-range .m-range-thumb-large) {
	width: 1rem;
	height: 1rem;
}

:global(.input-range .m-range-thumb-active) {
	border-color: var(--c-primary);
	filter: none;
}
</style>
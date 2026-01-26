<template>
	<el-select
		v-model="modelValue"
		class="select"
		ref="selectRef"
		:placeholder="placeholder"
		:size="size"
		:disabled="isDisable"
		:multiple="isMultiple"
		:collapse-tags="isCollapseTags"
		:collapse-tags-tooltip="isCollapseTagsTooltip"
		:max-collapse-tags="maxCollapseTags"
		:remote="isRemote"
		:filterable="isFilterable"
		:allow-create="isAllowCreate"
		@change="$emit('change', $event)"
	>
		<!-- to see input slots, look https://element-plus.org/en-US/component/select.html -->
		<template #label="{ label, value }" v-if="$slots.label">
			<slot name="label" :label="label" :value="value" />
		</template>
		<!-- if u want use main select option with custom content (using inner slot) -->
		<slot>
			<main-select-option
				v-for="(selectOption, optionIndex) in selectOptions"
				:key="String(selectOption.value) + optionIndex"
				:label="selectOption.label"
				:value="selectOption.value"
				:is-disabled="selectOption.isDisabled"
				class="select__option"
				:class="{
          'select__option-with-image': Boolean(selectOption.img)
        }"
			>
				<template #default v-if="selectOption.img">
          <span class="select__option_label" v-if="!isOnlyImage">
            {{ selectOption.label }}
          </span>
					<img
						v-if="typeof selectOption.img === 'string' && selectOption.img.split('/').length > 1"
						class="select__option_image"
						:src="selectOption.img"
						alt=""
					>
					<main-icon
						v-else
						:size="21"
						:icon="selectOption.img"
					/>
				</template>
			</main-select-option>
		</slot>
	</el-select>
</template>

<script setup lang="ts">
import MainSelectOption from "./MainSelectOption.vue";
import { SelectPropsContract } from "./contracts";
import { ModelRef, Ref, ref } from "vue";
import { ElSelect } from "element-plus";
import { MainIcon } from "../icon";

withDefaults(
	defineProps<SelectPropsContract>(),
	{
		isFilterable: false,
		isAllowCreate: false,
    remoteMethod: undefined,
		isDisable: false,
		isOnlyImage: false,
		isMultiple: false,
		isCollapseTags: false,
		isCollapseTagsTooltip: false,
		isRemote: false
	}
);

const selectRef: Ref<typeof ElSelect | undefined> = ref();

let focus = (): void => {
	selectRef.value?.focus();
};
let blur = (): void => {
	selectRef.value?.blur();
};

const modelValue: ModelRef<string | number | undefined> = defineModel();

defineEmits<{
	(event: "change", selectValue: string | number | undefined): void
}>();

defineExpose({
	focus,
	blur
})
</script>

<style scoped lang="scss">
.select {
	&__option {
		&-with-image {
			padding: 0 20px;
			display: flex;
			gap: 4px;
			align-items: center;
		}

		&_image {
			width: 21px;
			height: 21px;
		}
	}
}

:global(.select .el-select__selected-item img) {
	width: 20px;
	height: 20px;
}
</style>
<template>
	<el-popover
		:visible="isVisible"
		:trigger="trigger"
		:title="title"
		:effect="effect"
		:content="content"
		:width="width"
		:placement="placement"
		:disabled="isDisabled"
		:offset="offset"
		:transition="transition"
		:show-arrow="isShowArrow"
		:popper-options="popperOptions"
		:popper-class="popperClass"
		:popper-style="popperStyle"
		:show-after="showAfter"
		:hide-after="hideAfter"
		:auto-close="autoClose"
		:tabindex="tabindex"
		:teleported="isTeleported"
		:persistent="isPersistent"
		@show="$emit('show')"
		@before-enter="$emit('before-enter')"
		@after-enter="$emit('after-enter')"
		@hide="$emit('hide')"
		@before-leave="$emit('before-leave')"
		@after-leave="$emit('after-leave')"
	>
		<template #default v-if="$slots.default">
			<slot />
		</template>
		<template #reference v-if="$slots.reference">
			<slot name="reference" />
		</template>
	</el-popover>

</template>

<script setup lang="ts">
import { PopoverPropsContract } from "./contracts";

withDefaults(
  defineProps<PopoverPropsContract>(),
  {
		trigger: "hover",
		effect: "light",
		width: "min-width: 150px",
		placement: "bottom",
		isDisabled: false,
		offset: 0,
		transition: "el-fade-in-linear",
		isShowArrow: true,
		isTeleported: true,
		isPersistent: true
  }
);

defineSlots<{
	default(): any,
	reference(): any
}>();

defineEmits<{
	// triggers when popover shows	—
	(event: "show"): void,
	// triggers when the entering transition before	—
	(event: "before-enter"): void,
	// triggers when the entering transition ends	—
	(event: "after-enter"): void,
	// triggers when popover hides	—
	(event: "hide"): void,
	// triggers when the leaving transition before	—
	(event: "before-leave"): void,
	// triggers when the leaving transition ends	—
	(event: "after-leave"): void,
}>();
</script>

<style scoped lang="scss">
</style>
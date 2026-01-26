<template>
	<el-button
		class="button"
		:type="type"
		:size="size"
		:disabled="isDisable"
		:link="isLink"
		:text="isText"
		:plain="isPlain"
		:round="isRound"
		:circle="isCircle"
		:loading="isLoading"
		:loading-icon="loadingIcon"
		:dark="isDark"
		:bg="isBg"
	>
		<main-icon
			class="button_icon"
			:class="{
        'button_icon-left': icon && $slots.default
      }"
			v-if="!isIconRight && icon && !isLoading"
			:icon="icon"
			:size="size === 'small' ? 14 : undefined"
		/>
		<slot />
		<main-icon
			class="button_icon button_icon-right"
			v-if="isIconRight && icon && !isLoading"
			:icon="icon"
			:size="size === 'small' ? 14 : undefined"
		/>
	</el-button>
</template>

<script setup lang="ts">
import { ButtonPropsContract } from "./contracts";
import { isDark } from "@/composables";
import { MainIcon } from "@/components/icon";

withDefaults(
	defineProps<ButtonPropsContract>(),
	{
		type: "primary",
		isDark: false,
		isDisable: false,
		isBg: false,
		isIconRight: false,
		isLink: false,
		isText: false,
		isRound: false,
		isCircle: false,
		isPlain: false,
		isLoading: false,
		size: "default"
	}
);
</script>

<style scoped lang="scss">
.button {
	--el-button-size: 1.5rem;
	--el-button-font-size: 0.5rem;

	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	-webkit-appearance: none !important;
	touch-action: manipulation;
	font-family: Metropolis, "Avenir Next", "Helvetica Neue", Arial, sans-serif;
	min-width: 1.5rem;
	max-width: 15rem;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	text-align: center;
	text-transform: uppercase;
	vertical-align: middle;
	line-height: 1.5rem;
	letter-spacing: 0.12em;
	font-size: calc(var(--el-button-font-size));
	height: var(--el-button-size);
	font-weight: 500;
	padding: 0 0.40rem;

	&_icon {
		&-right {
			margin-left: 6px;
		}

		&-left {
			margin-right: 6px;
		}
	}
}

:global(.el-button--primary) {
	--el-button-hover-bg-color: #004d8a;
	--el-button-hover-border-color: #004d8a;
}

:global(.el-button--success) {
	--el-button-hover-bg-color: #266900;
	--el-button-hover-border-color: #266900;
}

:global(.el-button--info) {
	--el-button-hover-bg-color: #7d8085;
	--el-button-hover-border-color: #7d8085;
}

:global(.el-button--warning) {
	--el-button-hover-bg-color: #b87d00;
	--el-button-hover-border-color: #b87d00;
}

:global(.el-button--danger) {
	--el-button-hover-bg-color: #c92100;
	--el-button-hover-border-color: #c92100;
}

:global(.el-button.el-button--large) {
	--el-button-size: 1.7rem;
	--el-button-font-size: 0.55rem;
}

:global(.el-button.el-button--small) {
	--el-button-size: 1.3rem;
	--el-button-font-size: 0.45rem;
	min-width: 1.4rem;
}

:global(.el-button.is-link) {
	text-transform: capitalize;
	color: var(--el-color-primary);
	font-weight: 600;
	width: fit-content;
}

:global(.el-button.is-link:hover) {
	color: #00507e;
}

:global(.button>span) {
	white-space: inherit;
	text-overflow: inherit;
	overflow: inherit;
	text-align: inherit;
	vertical-align: inherit;
	line-height: inherit;
	align-items: inherit;
	display: inherit;
	justify-content: inherit;
	padding: 0 0.1rem;
}

:global(.button.is-loading.el-button--small>span) {
	padding: 0;
	margin: 0;
}
</style>
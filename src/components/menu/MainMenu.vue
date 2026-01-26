<template>
  <el-menu
    :default-active="defaultActive"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    :background-color="backgroundColor"
    :text-color="textColor"
    :active-text-color="activeTextColor"
    :mode="mode"
    :popper-offset="popperOffset"
    :router="isRouter"
		@select="selectHandler"
		@close="closeHandler"
		@open="openHandler"
	>
    <slot />
  </el-menu>
</template>

<script setup lang="ts">
import { MenuPropsContract } from "./contracts";

const selectHandler = (
	index: string,
	indexPath: string[],
	item: {
		index: string;
		indexPath: string[];
		route?: any
	}
): void => {
	emit('select', {
		index: index,
		indexPath: indexPath,
		item: item
	});
}
const closeHandler = (index: string, indexPath: string[]): void => {
	emit('close', { index: index, indexPath: indexPath });
}
const openHandler = (index: string, indexPath: string[]): void => {
	emit('open', { index: index, indexPath: indexPath });
}

withDefaults(
  defineProps<MenuPropsContract>(),
  {
    isCollapse: false,
    isRouter: false,
    defaultActive: "1",
    mode: "vertical",
    popperOffset: 0,
  }
)

const emit = defineEmits<{
  (event: "close", menuItem: { index: string, indexPath: string[] }): void,
  (event: "open", menuItem: { index: string, indexPath: string[] }): void,
  (event: "select", menuItem: {
		index: string,
		indexPath: string[],
		item: {
			index: string;
			indexPath: string[];
			route?: any
		}
	}): void,
}>()
</script>

<style scoped lang="scss">
</style>
<template>
	<el-empty
		:image="image"
		:description="description"
		:image-size="imageSize"
	>
		<slot />
	</el-empty>
</template>

<script setup lang="ts">
import { EmptyPropsContract } from "./contracts";
import { withDefaults } from "vue";

withDefaults(
	defineProps<EmptyPropsContract>(),
	{
		// @ts-ignore
		description: "No data"
	}
);
</script>

<style scoped lang="scss">
</style>
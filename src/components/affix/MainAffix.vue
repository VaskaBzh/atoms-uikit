<template>
  <el-affix
    :position="position"
    :offset="offset"
    :z-index="zIndex"
    :target="target"
    @scroll="$emit('scroll', $event)"
    @change="$emit('change', $event)"
  >
    <slot />
  </el-affix>
</template>

<script setup lang="ts">
import { AffixPropsContract } from "./contracts";

withDefaults(
  defineProps<AffixPropsContract>(),
  {
    offset: 0,
    position: "top",
  }
)

defineEmits<{
  (event: "change", isFixed: boolean): void,
  (event: "scroll", scrollData: {
		scrollTop: number;
		fixed: boolean;
	}): void
}>()
</script>

<style scoped lang="scss">
</style>
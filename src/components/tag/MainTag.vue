<template>
  <el-tag
    class="tag"
    :type="type"
    :effect="effect"
    :round="isRound"
    :hit="isHit"
    :closable="isClosable"
    :disable-transitions="isDisableTransition"
  >
    <slot />
  </el-tag>
</template>

<script setup lang="ts">
import { TagPropsContract } from "./contracts";

withDefaults(
  defineProps<TagPropsContract>(),
  {
    type: "primary",
    size: "default",
    isClosable: false,
    isRound: true,
    isHit: false,
    isDisableTransition: false,
    effect: "dark",
  }
)
</script>

<style scoped lang="scss">
.tag {
  --el-tag-font-size: 0.45rem;

  width: fit-content;
  touch-action: manipulation;
  font-family: Metropolis, "Avenir Next", "Helvetica Neue", Arial, sans-serif;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
  vertical-align: middle;
  line-height: 1.5rem;
  letter-spacing: 0.12em;
  font-size: calc(var(--el-tag-font-size));
  //height: var(--el-button-size);
  font-weight: 500;
  padding: 0 0.40rem;
}
</style>
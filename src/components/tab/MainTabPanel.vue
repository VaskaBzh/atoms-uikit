<template>
  <el-tab-pane
    class="tab"
    :label="label"
    :name="name"
    :disabled="isDisabled"
    :closable="isClosable"
    :lazy="isLazy"
  >
    <template #default v-if="$slots.default">
      <slot />
    </template>
    <template #label v-if="$slots.label">
      <slot name="label" />
    </template>
  </el-tab-pane>
</template>

<script setup lang="ts">
import { TabPanelPropsContract } from "./contracts";

withDefaults(
    defineProps<TabPanelPropsContract>(),
    {
      isDisabled: false,
      isClosable: false,
      isLazy: false,
    }
)
</script>

<style scoped lang="scss">
.tab {
  //--el-tag-font-size: 0.45rem;
  //
  //width: fit-content;
  //touch-action: manipulation;
  //font-family: Metropolis, "Avenir Next", "Helvetica Neue", Arial, sans-serif;
  //white-space: nowrap;
  //text-overflow: ellipsis;
  //overflow: hidden;
  //text-align: center;
  //vertical-align: middle;
  //line-height: 1.5rem;
  //letter-spacing: 0.12em;
  //font-size: calc(var(--el-tag-font-size));
  ////height: var(--el-button-size);
  //font-weight: 500;
  //padding: 0 0.40rem;
}
</style>
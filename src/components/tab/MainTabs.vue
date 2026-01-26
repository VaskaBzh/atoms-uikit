<template>
  <el-tabs
    v-model="modelValue"
    :type="type"
    :closable="isClosable"
    :addable="isAddable"
    :editable="isEditable"
    :tab-position="tabPosition"
    :stretch="isStretch"
    @tab-change="$emit('tabChange', $event)"
    @tab-remove="$emit('tabRemove', $event)"
    @tab-add="$emit('tabAdd')"
  >
		<!-- @tab-click="$emit('tabClick', $event)" -->
    <slot>
      <main-tab-panel
        v-for="(tab, tabIndex) in tabs"
        :key="tabIndex"
        :label="tab.label"
        :name="tab.name"
        :is-disabled="tab.isDisabled"
        :is-closable="tab.isClosable"
        :is-lazy="tab.isLazy"
      >
        <template #default v-if="$slots[`tab${tabIndex}`]">
          <slot :name="`tab${tabIndex}`" />
        </template>
      </main-tab-panel>
    </slot>
  </el-tabs>
</template>

<script setup lang="ts">
import { TabsPropsContract } from "./contracts";
import { ModelRef } from "vue";
import MainTabPanel from "./MainTabPanel.vue";

withDefaults(
  defineProps<TabsPropsContract>(),
  {
    type: "",
    isClosable: false,
    isAddable: false,
    isEditable: false,
    isStretch: false,
    tabPosition: "top",
  }
)

defineEmits<{
  // (event: "tabClick", ev: Event): void,
  (event: "tabChange", name: string | number): void,
  (event: "tabRemove", name: string | number): void,
  (event: "tabAdd"): void,
}>()

const modelValue: ModelRef<string | number | undefined> = defineModel();
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
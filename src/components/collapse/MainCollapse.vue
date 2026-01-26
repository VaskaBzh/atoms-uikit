<template>
  <el-collapse
    v-model="modelValue"
    :accordion="isAccordion"
    class="collapse"
    :class="{
      'collapse-flex': isFlex
    }"
  >
    <!-- @change="openedCollapseName = $event" -->
    <el-collapse-item
      class="collapse_item"
      v-for="(collapseItem, collapseIndex) in collapseItems"
      :key="String(collapseItem.name) + collapseIndex"
      :title="collapseItem.title ? collapseItem.title : undefined"
      :name="collapseItem.name"
      :disabled="collapseItem.isDisabled ?? isDisabled ?? false"
    >
      <template #title>
        <slot :name="`title${collapseItem.name}`" />
      </template>
      <!-- u can see slots in document https://element-plus.org/en-US/component/collapse.html -->
      <slot :name="collapseItem.name">
        {{ collapseItem.text }}
      </slot>
    </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts">
import { CollapsePropsContract } from "./contracts";
import { ModelRef } from "vue";

withDefaults(
  defineProps<CollapsePropsContract>(),
  {
    isAccordion: false,
    isFlex: false,
  }
)

const modelValue: ModelRef<(string | number)[] | string | number | undefined> = defineModel();
</script>

<style scoped lang="scss">
.collapse {
  &-flex {
    display: flex;
    .collapse {
      &_item {
        width: 100%;
      }
    }
  }
}
:global(.collapse-flex .collapse_item .el-collapse-item__wrap) {
  border-bottom: none;
  margin-bottom: 1px;
}
:global(.collapse-flex .collapse_item .el-collapse-item__header) {
  border-radius: 0;
}
:global(.collapse_item .el-collapse-item__header) {
  outline: none;
  font-size: 0.6rem;
}
</style>
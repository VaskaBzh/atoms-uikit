<template>
  <el-table-column
      :prop="prop"
      :label="label"
      :width="width"
      :type="type"
      :show-overflow-tooltip="isShowOverflowTooltip"
      :fixed="isFixed ? fixPosition : isFixed"
      :sortable="isSortable"
      :sort-orders="sortOrders"
      :sort-method="sortMethod"
      :selectable="selectable"
  >
    <template
        #default="scope"
        v-if="$slots.default"
    >
      <slot
          :scope="scope"
          :prop="prop"
      />
    </template>
    <template
        #header
        v-if="$slots.header"
    >
      <slot name="header" />
    </template>
  </el-table-column>
</template>

<script
    setup
    lang="ts"
>
import { TableColumnPropsContract } from "./contracts";

defineProps<TableColumnPropsContract>()

defineEmits<{
    (event: "select", selectedData: Array<{ [key: string]: string }>): void,
    (event: "select-all", selectedData: Array<{ [key: string]: string }>): void
}>()
</script>

<style
    scoped
    lang="scss"
>
</style>
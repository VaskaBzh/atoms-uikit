<template>
    <el-tree
        class="tree"
        :data="data"
        :empty-text="emptyText"
        :node-key="nodeKey"
        :props="props"
        :render-after-expand="isRenderAfterExpand"
        :load="load"
        :render-content="renderContent"
        :highlight-current="isHighlightCurrent"
        :default-expand-all="isDefaultExpandAll"
        :expand-on-click-node="isExpandOnClickNode"
        :check-on-click-node="isCheckOnClickNode"
        :auto-expand-parent="isAutoExpandParent"
        :default-expanded-keys="defaultExpandedKeys"
        :default-checked-keys="defaultCheckedKeys"
        :show-checkbox="isShowCheckbox"
        :check-strictly="isCheckStrictly"
        :current-node-key="currentNodeKey"
        :filter-node-method="filterNodeMethod"
        :accordion="isAccordion"
        :indent="indent"
        :icon="icon"
        :lazy="isLazy"
        :draggable="isDraggable"
        :allow-drag="allowDrag"
        :allow-drop="allowDrop"
        @check="checkHandler"
        @check-change="checkChangeHandler"
        @current-change="currentChangeHandler"
        @node-click="nodeClickHandler"
        @node-collapse="nodeCollapseHandler"
        @node-contextmenu="nodeContextmenuHandler"
        @node-drag-end="nodeDragEndHandler"
        @node-drag-enter="nodeDragEnterHandler"
        @node-drag-leave="nodeDragLeaveHandler"
        @node-drag-over="nodeDragOverHandler"
        @node-drag-start="nodeDragStartHandler"
        @node-drop="nodeDropHandler"
        @node-expand="nodeExpandHandler"
    >
          <template
              #default="{ node, data }"
              v-if="$slots.default"
          >
              <slot
                  :node="node"
                  :data="data"
              />
          </template>
          <template
              #empty
              v-if="$slots.empty"
          >
              <slot name="empty" />
          </template>
    </el-tree>
</template>

<script
    setup
    lang="ts"
>
import {
    TreePropsContract,
    TreeEmitsContract
} from "./contracts";
import { TreeType } from "@/types";
import Node from "element-plus/es/components/tree/src/model/node";

const checkHandler = (...args: any[]): void => {
    emit("check", ...args);
}
const checkChangeHandler = (...args: any[]): void => {
    emit("checkChange", ...args);
}
const currentChangeHandler = (...args: any[]): void => {
    emit("currentChange", ...args);
}
const nodeClickHandler = (...args: any[]): void => {
    emit("nodeClick", ...args);
}
const nodeCollapseHandler = (...args: any[]): void => {
    emit("nodeCollapse", ...args);
}
const nodeContextmenuHandler = (...args: any[]): void => {
    emit("nodeContextmenu", ...args);
}
const nodeDragEndHandler = (...args: any[]): void => {
    emit("nodeDragEnd", ...args);
}
const nodeDragEnterHandler = (...args: any[]): void => {
    emit("nodeDragEnter", ...args);
}
const nodeDragLeaveHandler = (...args: any[]): void => {
    emit("nodeDragLeave", ...args);
}
const nodeDragOverHandler = (...args: any[]): void => {
    emit("nodeDragOver", ...args);
}
const nodeDragStartHandler = (...args: any[]): void => {
    emit("nodeDragStart", ...args);
}
const nodeDropHandler = (...args: any[]): void => {
    emit("nodeDrop", ...args);
}
const nodeExpandHandler = (...args: any[]): void => {
    emit("nodeExpand", ...args);
}

withDefaults(
    defineProps<TreePropsContract>(),
    {
        isRenderAfterExpand: true,
        isHighlightCurrent: false,
        isDefaultExpandAll: false,
        isExpandOnClickNode: true,
        isCheckOnClickNode: false,
        isAutoExpandParent: true,
        isShowCheckbox: false,
        isCheckStrictly: false,
        isAccordion: false,
        indent: 18,
        isLazy: false,
        isDraggable: false
    }
);

defineSlots<{
    default(props: {
        node: Node,
        data: TreeType
    }): void;
    empty(): void;
}>();

const emit = defineEmits<TreeEmitsContract>();
</script>

<style
    scoped
    lang="scss"
>
:global(.el-tree-node__content) {
    min-height: 48px;
    height: auto;
    white-space: pre-wrap;
}
</style>
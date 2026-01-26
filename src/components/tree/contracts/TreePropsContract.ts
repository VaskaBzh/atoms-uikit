import { TreeType } from "@/types";
import { VNode } from "@vue/runtime-core";
import type Node from 'element-plus/es/components/tree/src/model/node'
import type { Component, ComponentInternalInstance } from "vue";
import { hType } from "element-plus/es/components/tree/src/tree.type";
import type TreeStore from "element-plus/es/components/tree/src/model/tree-store";

export interface TreePropsContract {
    data: TreeType[],
    emptyText?: string,
    nodeKey?: string,
    props?: {
        children?: string;
        label?: string | ((data: Record<string, any>, node: Node) => string);
        disabled?: string | ((data: Record<string, any>, node: Node) => boolean);
        isLeaf?: string | ((data: Record<string, any>, node: Node) => boolean);
        class?: (data: Record<string, any>, node: Node) => string | {
            [key: string]: boolean;
        };
    },
    isRenderAfterExpand?: boolean,
    // only works when lazy is true
    load?: (
        /* node */ rootNode: Node,
        /* resolve */ loadedCallback: (data: (TreeType & Record<string, any>)[]) => void,
        stopLoading: () => void
    ) => void,
    renderContent?: (h: hType, context: {
        _self: ComponentInternalInstance,
        node: Node,
        data: Record<string, any>,
        store: TreeStore
    }) => VNode | VNode[]
    isHighlightCurrent?: boolean,
    isDefaultExpandAll?: boolean,
    isExpandOnClickNode?: boolean,
    isCheckOnClickNode?: boolean,
    isAutoExpandParent?: boolean,
    // [0, 5, 2]
    defaultExpandedKeys?: (string | number)[],
    defaultCheckedKeys?: (string | number)[],
    isShowCheckbox?: boolean,
    // whether checked state of a node not affects its father and child nodes when show-checkbox is true
    isCheckStrictly?: boolean,
    currentNodeKey?: string | number,
    // this function will be executed on each node when use filter method. if return false, tree node will be hidden.
    filterNodeMethod?: (value: any, data: Record<string, any>, child: Node) => boolean,
    isAccordion?: boolean,
    indent?: number,
    icon?: string | Component,
    // whether to lazy load leaf node, used with load attribute
    isLazy?: boolean,
    isDraggable?: boolean,
    // this function will be executed before dragging a node. If false is returned, the node can not be dragged
    allowDrag?: (node: Node) => boolean,
    // this function will be executed before the dragging node is dropped. If false is returned, the dragging node can not be dropped at the target node. type has three possible values: 'prev' (inserting the dragging node before the target node), 'inner' (inserting the dragging node to the target node) and 'next' (inserting the dragging node after the target node)
    allowDrop?: (draggingNode: Node, dropNode: Node, type: 'inner' | 'prev' | 'next') => boolean
}
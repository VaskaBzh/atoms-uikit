// import { TreeType } from "@/types";

export interface TreeEmitsContract {
    (event: "nodeClick", ...args: any[]): void, // triggers when a node is clicked	four parameters: node object corresponding to the node clicked, node property of TreeNode, TreeNode itself, event object
    (event: "nodeContextmenu", ...args: any[]): void, // triggers when a node is clicked by right button	four parameters: event, node object corresponding to the node clicked, node property of TreeNode, TreeNode itself
    (event: "checkChange", ...args: any[] /* , data: TreeType, checked: boolean, indeterminate: boolean */): void, // triggers when the selected state of the node changes	three parameters: node object corresponding to the node whose selected state is changed, whether the node is selected, whether node's subtree has selected nodes
    (event: "check", ...args: any[]): void, // triggers after clicking the checkbox of a node	two parameters: node object corresponding to the node that is checked / unchecked, tree checked status object which has four props: checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys
    (event: "currentChange", ...args: any[]): void, // triggers when current node changes	two parameters: node object corresponding to the current node, node property of TreeNode
    (event: "nodeExpand", ...args: any[]): void, // triggers when current node open	three parameters: node object corresponding to the node opened, node property of TreeNode, TreeNode itself
    (event: "nodeCollapse", ...args: any[]): void, // triggers when current node close	three parameters: node object corresponding to the node closed, node property of TreeNode, TreeNode itself
    (event: "nodeDragStart", ...args: any[]): void, // triggers when dragging starts	two parameters: node object corresponding to the dragging node, event.
    (event: "nodeDragEnter", ...args: any[]): void, // triggers when the dragging node enters another node	three parameters: node object corresponding to the dragging node, node object corresponding to the entering node, event.
    (event: "nodeDragLeave", ...args: any[]): void, // triggers when the dragging node leaves a node	three parameters: node object corresponding to the dragging node, node object corresponding to the leaving node, event.
    (event: "nodeDragOver", ...args: any[]): void, // triggers when dragging over a node (like mouseover event)	three parameters: node object corresponding to the dragging node, node object corresponding to the dragging over node, event.
    (event: "nodeDragEnd", ...args: any[]): void, // triggers when dragging ends	four parameters: node object corresponding to the dragging node, node object corresponding to the dragging end node (may be undefined), node drop type (before / after / inner), event.
    (event: "nodeDrop", ...args: any[]): void, // triggers after the dragging node is dropped	four parameters: node object corresponding to the dragging node, node object corresponding to the dropped node, node drop type (before / after / inner), event.
}
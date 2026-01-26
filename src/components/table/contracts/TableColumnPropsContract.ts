import { TableDataType } from "./TablePropsContract";

export interface TableColumnPropsContract {
    // undefined if type === selection
    label?: string,
    // undefined if type === selection
    // reading property by table data
    prop?: string,
    width?: string | number,
    minWidth?: string | number,
    // column type (selection - add checkbox in column)
    // type expand - collapse row
    type?: "selection" | "expand" | string,
    // show content in tooltip with main content (can use with much content been sliced)
    isShowOverflowTooltip?: boolean,
    // fixing column in table (not scrolling)
    isFixed?: boolean,
    fixPosition?: "left" | "right",
    // if u use defaultSort prop
    isSortable?: boolean,
    selectable?: (row: TableDataType) => boolean,
    sortOrders?: ("descending" | "ascending" | null)[],
    sortMethod?: (a: TableDataType, b: TableDataType) => number,
}
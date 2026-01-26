import { TableColumnPropsContract } from "./TableColumnPropsContract";
import { UniversalObjectType } from "@/types";

export type TableDataType = UniversalObjectType;

export interface  TablePropsContract {
	emptyText?: string,
	// main table data
	tableData: TableDataType[],
	// array by columns length
	// if u dont use default slot
	columnParams?: TableColumnPropsContract[],
	selectedRows?: TableDataType[],
	// selectionFindKey?: keyof TableDataType,
	height?: string | number,
	isBorder?: boolean,
	// styling param (add every second row other style)
	isStriped?: boolean,
	// to display columns
	tableLayout?: "fixed" | "auto",
	// sorting column, that use column param prop isSortable: true
	defaultSort?: {
		prop: string,
		order: "descending" | "ascending",
	},
	selectable?: (row: TableDataType) => boolean,
	// base: 'hasChildren', 'children'
	treeProps?: { hasChildren: string, children: string },
	// add class all rows
	rowClassName?: string | ((data: { row: TableDataType[keyof TableDataType], rowIndex: number }) => string),
	rowKey?: string
}
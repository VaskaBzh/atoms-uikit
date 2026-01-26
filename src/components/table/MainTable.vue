<template>
	<el-table
        ref="tableRef"
        :empty-text="emptyText"
        :height="height"
        :data="tableData"
        :border="isBorder"
        :stripe="isStriped"
        :table-layout="tableLayout"
        :default-sort="defaultSort"
        :row-class-name="rowClassName"
        :tree-props="treeProps"
        :row-key="rowKey"
        @select="$emit('select', $event)"
        @select-all="$emit('select-all', $event)"
        @row-click="rowClickHandler"
        @expand-change="expandHandler"
    >
		<slot>
			<main-table-column
                v-for="(columnParam, columnIndex) in columnParams"
                :key="columnIndex"
                :prop="columnParam.prop"
                :label="columnParam.label"
                :width="columnParam.width"
                :type="columnParam.type"
                :is-show-overflow-tooltip="columnParam.isShowOverflowTooltip"
                :is-fixed="columnParam.isFixed"
                :fix-position="columnParam.fixPosition"
                :is-sortable="columnParam.isSortable"
                :sort-orders="columnParam.sortOrders"
                :selectable="selectable ?? columnParam.selectable"
                :sort-method="columnParam.sortMethod"
            >
				<template
                    #default="scope"
                    v-if="$slots[`column${columnIndex}`]"
                >
					<slot
                        :name="`column${columnIndex}`"
                        :scope="scope"
                        :prop="columnParam.prop"
                    />
				</template>
				<template
                    #header
                    v-if="$slots[`header${columnIndex}`]"
                >
					<slot :name="`header${columnIndex}`" />
				</template>
			</main-table-column>
		</slot>
	</el-table>
</template>

<script
    setup
    lang="ts"
>
import { TableColumnPropsContract, TablePropsContract, TableDataType } from "./contracts";
import MainTableColumn from "./MainTableColumn.vue";
import { TableInstance } from "element-plus";
import { computed, ComputedRef, onMounted, ref, watch } from "vue";

const tableRef = ref<TableInstance>();

const props = withDefaults(
    defineProps<TablePropsContract>(),
    {
        isBorder: false,
        isStriped: false,
        tableLayout: "auto",
        treeProps: () => ({
            hasChildren: 'hasChildren',
            children: 'children'
        })
    }
);

const isTableWithSelection: ComputedRef<boolean | undefined> = computed(() =>
    props.columnParams
    && props.columnParams.filter(
        (columnParam: TableColumnPropsContract): undefined | boolean => {
            if (!columnParam) {
                return;
            }

            return columnParam.type === "selection";
        }
    ).length > 0
);

const expandHandler = (row: TableDataType, expandedRows: TableDataType[]) => {
    emit('expand', row, expandedRows);
}

const rowClickHandler = (tableRow: TableDataType, event: any): void => {
    if (event.className === "el-table__expand-column") {
        tableRef.value?.toggleRowExpansion(tableRow);

        return;
    }

    if (
        isTableWithSelection.value
        && (
            !props.selectable
            || (
                props.selectable
                && props.selectable(tableRow)
            )
        )
    ) {
        tableRef.value!.toggleRowSelection(
            tableRow,
            !tableRef.value!.getSelectionRows()
                .find((selectedTableRow: TableDataType) => selectedTableRow === tableRow)
        );

        emit("select", tableRef.value!.getSelectionRows());
        emit("select-all", tableRef.value!.getSelectionRows());
    }

    emit("row-click", tableRow);
};

const setSelectedRows = () => {
    tableRef.value?.clearSelection();

    if (props.selectedRows) {
        // if (props.selectionFindKey) {
        // 	let customSelectedRowIndexList: number[] = [];
        //
        // 	props.tableData.forEach((tableRow: TableDataType, tableIndex: number) => {
        // 		props.selectedRows?.forEach((selectedRow: TableDataType) => {
        // 			if (tableRow[props.selectionFindKey as keyof TableDataType] === selectedRow[props.selectionFindKey as keyof TableDataType]) {
        // 				customSelectedRowIndexList.push(tableIndex);
        // 			}
        // 		});
        // 	});
        //
        // 	customSelectedRowIndexList.forEach((selectedRowIndex: number) => {
        // 		tableRef.value?.toggleRowSelection(props.tableData[selectedRowIndex], true);
        // 	});
        //
        // 	return;
        // }

        props.selectedRows.forEach((selectedRow: TableDataType) => {
            tableRef.value?.toggleRowSelection(selectedRow, true);
        });
    }
};

const toggleRowExpansion = (row: any, isExpanded?: boolean) => {
    tableRef.value?.toggleRowExpansion(row, isExpanded);
}

watch(() => props.tableData, () => {
    setSelectedRows();
}, { deep: true });

watch(() => props.selectedRows, () => {
    setSelectedRows();
});

onMounted(() => {
    setSelectedRows();
});

const emit = defineEmits<{
    (event: "select", selectedData: TableDataType[]): void,
    (event: "select-all", selectedData: TableDataType[]): void,
    (event: "row-click", clickedRow: TableDataType): void,
    (event: "expand", expandedRow: TableDataType, expandedRows: TableDataType[]): void,
}>();

defineExpose({
    toggleRowExpansion
});
</script>

<style
    scoped
    lang="scss"
>
</style>
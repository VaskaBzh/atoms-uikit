import { VNode } from "vue";

export interface InputRangePropsContract {
	modelValue: number | number[];
	// marks?: RangeMarks;
	size?: "small" | "medium" | "large";
	isVertical?: boolean;
	isAddable?: boolean;
	thumbType?: "circle" | "rect" | "square";
	thumbSize?: "small" | "medium" | "large";
	renderTop?: ((data: number) => VNode | number);
	isRenderTopOnActive?: boolean;
	renderBottom?: ((data: number) => VNode | number);
	isRenderBottomOnActive?: boolean;
	min?: number;
	max?: number;
	step?: number;
	// addData?: ((value: number) => RangeData<T, U>);
	limit?: number;
	isSmooth?: boolean;
	isDeduplicate?: boolean;
	isRangeHighlight?: boolean;
	isShowStops?: number | boolean;
}
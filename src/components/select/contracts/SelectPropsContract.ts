import { SizeType } from "@/types";
import { SelectOptionPropsContract } from "./SelectOptionPropsContract";

export interface SelectPropsContract {
	modelValue: string | number | undefined,
	selectOptions: SelectOptionPropsContract[],
	placeholder: string,
	size?: SizeType,
	isFilterable?: boolean,
	isAllowCreate?: boolean,
	isOnlyImage?: boolean,
	isDisable?: boolean,
	isRemote?: boolean,
	remoteMethod?: (query: string) => void,
	// multiple params
	isMultiple?: boolean,
	// collapse selected tags, when multiple
	isCollapseTags?: boolean,
	// u can see tags in tooltip
	isCollapseTagsTooltip?: boolean,
	// collapse start params
	maxCollapseTags?: number,
}
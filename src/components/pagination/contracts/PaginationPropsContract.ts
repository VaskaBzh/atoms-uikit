import { SizeType } from "@/types";

export interface PaginationPropsContract {
    size?: SizeType,
    isDisable?: boolean,
    // can be prev (add prev page button) | pager (add page list) | next (add NEXT page button) | jumper (add input to jump by page)
    layout?: string,
    isHideOnSinglePage?: boolean,
    // page params
    total?: number,
    pageSize?: number,
    pagerCount?: number,
    currentPage?: number,
    // add background to buttons
    isBackground?: boolean,
}
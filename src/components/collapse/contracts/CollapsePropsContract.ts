type CollapseItemType = {
    title: string,
    name: string | number,
    isDisabled?: boolean,
    text?: string,
}

export interface CollapsePropsContract {
    collapseItems: CollapseItemType[],
    isAccordion?: boolean,
    isFlex?: boolean,
    isDisabled?: boolean,
}
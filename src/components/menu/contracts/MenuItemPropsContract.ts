export interface MenuItemPropsContract {
    // a way in menu tree, building by parent index (example - "1-4-1") "-" - divider
    index: string,
    isDisable?: boolean,
}
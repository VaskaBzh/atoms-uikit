export interface MenuPropsContract {
    defaultActive?: string,
    isCollapse?: boolean,
    isRouter?: boolean,
    // change coloring
    backgroundColor?: string,
    textColor?: string,
    activeTextColor?: string,
    mode?: "horizontal" | "vertical",
    // u can change popover & menu gap
    popperOffset?: number,
}
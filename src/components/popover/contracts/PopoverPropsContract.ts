export interface PopoverPropsContract {
    // library use v-model:visible. Component has defineModel (base)
    isVisible?: boolean,
    // how the popover is triggered
    trigger?: "click" | "focus" | "hover" | "contextmenu",
    // popover title
    title: string,
    // popover theme
    effect?: "dark" | "light",
    // can be replaced with a default slot
    content?: string,
    // popover width. Example "min-width: 150px"
    width?: string | number,
    // popover placement. base "bottom"
    placement?: "top"
        | "top-start"
        | "top-end"
        | "bottom"
        | "bottom-start"
        | "bottom-end"
        | "left"
        | "left-start"
        | "left-end"
        | "right"
        | "right-start"
        | "right-end",
    // whether Popover is disabled
    isDisabled?: boolean,
    // popover offset
    offset?: number,
    // popover transition animation
    transition?: string,
    // whether a tooltip arrow is displayed or not. For more info, please refer to ElPopper
    isShowArrow?: boolean,
    // parameters for popper.js	object	please refer to popper.js
    popperOptions?: {},
    // custom class name for popover
    popperClass?: string,
    // custom style for popover
    popperStyle?: string | {},
    // delay of appearance, in millisecond
    showAfter?: number,
    //delay of disappear, in millisecond
    hideAfter?: number,
    // timeout in milliseconds to hide tooltip
    autoClose?: number,
    // tabindex of Popover
    tabindex?: number,
    // whether popover dropdown is teleported to the body
    isTeleported?: boolean,
    // when popover inactive and persistent is false , popover will be destroyed
    isPersistent?: boolean
}
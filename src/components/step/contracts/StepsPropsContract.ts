export interface StepsPropsContract {
    finishStatus?: "wait" | "process" | "finish" | "error" | "success",
    processStatus?: "wait" | "process" | "finish" | "error" | "success",
    activeIndex?: number,
    space?: number,
    isAlignCenter?: boolean,
    isSimple?: boolean,
    direction?: "vertical" | "horizontal",
}
export interface StepsItemPropsContract {
    title?: string,
    description?: string,
    icon?: string,
    status?: "" | "wait" | "process" | "finish" | "error" | "success",
}
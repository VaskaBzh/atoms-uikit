export interface AlertPropsContract {
    title: string,
    type?: "success" | "info" | "warning" | "error",
    description?: string,
    closeText?: string,
    isShowIcon?: boolean,
    isCenter?: boolean,
    isClosable?: boolean,
    effect?: "light" | "dark",
}
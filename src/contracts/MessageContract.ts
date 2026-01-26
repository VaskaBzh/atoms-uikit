export interface MessageParamsContract {
    message: string,
    type?: "" | "success" | "warning" | "error" | "info",
    plain?: boolean,
    showClose?: boolean,
    center?: boolean,
    dangerouslyUseHTMLString?: boolean,
    // not continue duplicate
    grouping?: boolean,
    repeatNum?: number,
    icon?: string,
    // class to customize message
    customClass?: string,
    offset?: number,
    appendTo?: string | HTMLElement,
    duration?: number;
    id?: string;
    zIndex?: number;
}
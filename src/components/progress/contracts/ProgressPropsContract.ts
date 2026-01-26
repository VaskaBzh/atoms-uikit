export interface ProgressPropsContract {
    percentage: number,
    // progress info text work flow
    format?: (percentage: number) => string,
    isTextInside?: boolean,
    // states
    status?: "" | "success" | "exception" | "warning",
    type?: "circle" | "line" | "dashboard",
    isStriped?: boolean,
    isStripedFlow?: boolean,
    // custom color
    color?: string,
    // line width
    strokeWidth?: number,
    // static animation
    isIndeterminate?: boolean,
    // if use isIndeterminate or isStripedFlow
    duration?: number,
}
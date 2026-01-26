import { SizeType } from "@/types";
import { FormItemRule } from "element-plus";

export interface FormPropsContract {
    formValue: {},
    size?: SizeType,
    labelPosition?: "left" | "right" | "top",
    labelWidth?: "auto" | string,
    rules?: { [key: string]: FormItemRule[] },
    isStatusIcon?: boolean,
    isDisabled?: boolean,
    isScrollToError?: boolean,
    isShowMessage?: boolean,
    isLoading?: boolean,
}
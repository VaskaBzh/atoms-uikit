import { FormItemRule } from "element-plus";

export interface FormItemPropsContract {
    label?: string,
    error?: string,
    prop?: string | string[],
    rules?: FormItemRule | FormItemRule[],
    required?: boolean,
}
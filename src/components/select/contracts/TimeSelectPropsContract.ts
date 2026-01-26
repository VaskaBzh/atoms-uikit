import { SizeType } from "@/types";

export interface TimeSelectPropsContract {
    modelValue: string,
    placeholder: string,
    start?: string,
    step?: string,
    end?: string,
    isDisabled?: boolean,
    isEditable?: boolean,
    isClearable?: boolean,
    size?: SizeType,
    name?: string,
    effect?: "dark" | "light",
    prefixIcon?: string,
    clearIcon?: string,
    minTime?: string,
    maxTime?: string,
    format?: string,
    emptyValues?: string[],
    valueOnClear?: string,
}
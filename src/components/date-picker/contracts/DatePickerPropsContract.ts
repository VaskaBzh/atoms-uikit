import { SizeType } from "@/types";
import { DateTypeEnum } from "../enums";

type ShortCutType = {
    text: string,
    value: Date[] | Date | (() => Date[] | Date),
}

export interface DatePickerPropsContract {
    placeholder?: string,
    size?: SizeType,
    // type of picking date
    type?: DateTypeEnum,
    // shortcuts in date picker outside
    shortCuts?: ShortCutType[]
    // boolean datepicker params
    isDisable?: boolean,
    isClearable?: boolean,
    // format in input
    format?: string,
    // model value format
    valueFormat?: string,
    // correct icons
    prefixIcon?: string | object,
    clearIcon?: string | object,
    // params to use with range picker
    rangeSeparator?: string,
    startPlaceholder?: string,
    endPlaceholder?: string,
    // default value in date picker popover
    defaultValue?: Date | [Date, Date],
    popperClass?: string,
    disabledDate?: (date: Date) => boolean,
}
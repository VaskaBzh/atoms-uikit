import { SizeType } from "@/types";
import { InputTypeHTMLAttribute } from "vue";

export interface InputPropsContract {
    placeholder: string,
    type?: 'text' | 'textarea' | 'password' | 'button' | 'checkbox' | 'file' | 'number' | 'radio' | InputTypeHTMLAttribute,
    size?: SizeType,
    isDisable?: boolean,
    isClearable?: boolean,
    // if type password (visual eye icon)
    isShowPassword?: boolean,
    // custom icons
    suffixIcon?: string,
    prefixIcon?: string,
    // to textarea type
    autosize?: boolean | { minRows: number, maxRows: number }
    // limit symbols
    maxlength?: number | string,
    isShowWordLimit?: boolean,
    // format input value
    formatter?: (value: string) => string
    // format using value (model value)
    parser?: (value: string) => string
}
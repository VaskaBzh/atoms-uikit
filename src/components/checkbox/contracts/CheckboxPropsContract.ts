import { SizeType } from "@/types";

export interface CheckboxPropsContract {
    label: string,
    size?: SizeType,
    value?: string | number,
    isDisable?: boolean,
    isBorder?: boolean,
}
import { SizeType } from "@/types";
import { CheckboxPropsContract } from "./CheckboxPropsContract";

export interface CheckboxGroupPropsContract {
    checkboxes: CheckboxPropsContract[],
    size?: SizeType,
    isDisable?: boolean,
    isBorder?: boolean,
}
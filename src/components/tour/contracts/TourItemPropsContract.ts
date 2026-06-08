import { ButtonPropsContract } from "../../button";

export interface TourItemPropsContract {
    target?: string,
    title: string,
    description?: string,
    // position
    placement?: "top" | "right" | "left" | "bottom",
    // default | disable | custom style background
    isMask?: boolean | { [key: string]: string },
    nextButtonProps?: ButtonPropsContract,
    nextButtonText?: string,
    prevButtonProps?: ButtonPropsContract,
    prevButtonText?: string,
    finishButtonProps?: ButtonPropsContract,
    finishButtonText?: string,
    isLast?: boolean,
}
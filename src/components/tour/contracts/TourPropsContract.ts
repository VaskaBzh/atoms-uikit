import { TourItemPropsContract } from "./TourItemPropsContract";
import { ButtonPropsContract } from "../../button";

export interface TourPropsContract {
    steps: TourItemPropsContract[],
    type?: "default" | "primary",
    // default | disable | custom style background
    isMask?: boolean | { [key: string]: string },
    nextButtonProps?: ButtonPropsContract,
    nextButtonText?: string,
    prevButtonProps?: ButtonPropsContract,
    prevButtonText?: string,
    finishButtonProps?: ButtonPropsContract,
    finishButtonText?: string,
}
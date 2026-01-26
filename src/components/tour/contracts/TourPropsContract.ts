import { TourItemPropsContract } from "./TourItemPropsContract";

export interface TourPropsContract {
    steps: TourItemPropsContract[],
    type?: "default" | "primary",
    // default | disable | custom style background
    isMask?: boolean | { [key: string]: string },
}
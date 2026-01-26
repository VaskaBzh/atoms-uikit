import { ColorType, SizeType } from "@/types";

export interface TagPropsContract {
    // props to set color type
    type?: ColorType,
    size?: SizeType,
    isClosable?: boolean,
    isRound?: boolean,
    isHit?: boolean,
    isDisableTransition?: boolean,
    effect?: "light" | "dark" | "plain",
}
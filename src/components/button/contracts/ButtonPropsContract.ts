import { ColorType, SizeType } from "@/types";

export interface ButtonPropsContract {
    // props to set color type
    type?: ColorType,
    size?: SizeType,
    isDisable?: boolean,
    // other button types by props
    isLink?: boolean,
    isText?: boolean,
    isRound?: boolean,
    isCircle?: boolean,
    isPlain?: boolean,
    // props to set fix background
    isBg?: boolean,
    // icon in button options
    isIconRight?: boolean,
    icon?: string,
    // loading params
    isLoading?: boolean,
    loadingIcon?: string,
    // to use loading icon u can use props.loading-icon/loadingIcon or <template #loading></template>
}
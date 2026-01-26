import { SizeType } from "@/types";

type RadioDataType = {
	label: string,
	value: string
	isDisabled?: boolean
	isBorder?: boolean
}

export interface RadioPropsContract {
	modelValue: string | number | boolean | undefined,
	radiosData: RadioDataType[],
	size?: SizeType,
	isDisable?: boolean,
	isBorder?: boolean,
	// custom style to radio active state
	textColor?: string,
	fill?: string,
}
import { SizeType } from "@/types";

export interface InputNumberPropsContract {
	modelValue: number | undefined,
	size?: SizeType,
	isDisable?: boolean,
	// limit symbols
	max?: number,
	min?: number,
	// if u need steps
	step?: number,
	// input value can only be multiple of step
	isStepStrictly?: boolean,
	precision?: number,
	// if u need to transform controls
	controlsPosition?: "right" | "",
	// incorrect value converting
	valueOnClear?: number | "min" | "max",
}
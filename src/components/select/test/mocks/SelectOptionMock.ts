import { markRaw } from "vue";
import { Apple } from "@element-plus/icons-vue";

export const SELECT_OPTION_LIST_MOCK = [
	{
		label: "First select option",
		value: "0",
	},
	{
		label: "Second select option",
		value: "1",
		img: "Apple/Apple",
	},
	{
		label: "Third select option",
		value: "2",
		img: "Apple",
	},
	{
		label: "Fourth select option",
		value: "3",
		img: markRaw(Apple),
	},
]
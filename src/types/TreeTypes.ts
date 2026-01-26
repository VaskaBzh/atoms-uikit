export type TreeType<TreeContent = {}> = {
	label: string,
	children: TreeType[]
} & TreeContent;
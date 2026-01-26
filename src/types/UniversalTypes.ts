export type UniversalObjectType = {
	[key: string]: string | boolean | number | never | unknown
		| (string | boolean | number | never | unknown | UniversalObjectType)[]
		| UniversalObjectType
}
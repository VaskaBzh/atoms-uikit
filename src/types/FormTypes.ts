export type FormInvalidFieldType = {
	message?: string;
	fieldValue?: any;
	field?: string;
};

export type FormInvalidFieldsType = Record<string, FormInvalidFieldType[]>;
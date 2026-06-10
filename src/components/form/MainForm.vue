<template>
	<el-form
		ref="formRef"
		:model="formValue"
		:label-width="labelWidth"
		:label-position="labelPosition"
		:size="size"
		:status-icon="isStatusIcon"
		:disabled="isDisabled"
		:scroll-to-error="isScrollToError"
		:show-message="isShowMessage"
		:rules="rules"
		@validate="handleValidate"
		@click="clickHandler"
		@keypress="keyPressHandler"
	>
		<!-- Can have button data-submit -->
		<slot />
	</el-form>
</template>

<script setup lang="ts">
import { FormPropsContract } from "./contracts";
import { FormInstance } from "element-plus";
import { Ref, ref } from "vue";
import { ButtonSelectorConst } from "./consts";
import { FormInvalidFieldsType } from "@/types";

const formRef: Ref<FormInstance | undefined> = ref();

const emit = defineEmits<{
	(event: "submit"): void,
	(event: "submitInvalid"): void,
	(event: "validate", validateData: {
		prop: string | string[],
		isValid: boolean,
		message: string
	}): void
}>();

const props = withDefaults(
	defineProps<FormPropsContract>(),
	{
		size: "default",
		labelPosition: "right",
		labelWidth: "auto",
		isStatusIcon: false,
		isDisabled: false,
		isScrollToError: false,
		isShowMessage: true,
		isLoading: false
	}
);

const handleValidate = (prop: string | string[], isValid: boolean, message: string) => {
	emit("validate", { prop, isValid, message });
}

const validate = async (): Promise<FormInvalidFieldsType | undefined> => {
	if (!formRef.value) {
		return;
	}

    return new Promise((resolve, reject) => {
        formRef.value!.validate((valid: boolean, invalidFields?: FormInvalidFieldsType) => {
            if (valid) {
                resolve(undefined);
            } else {
                reject(invalidFields);
            }
        });
    });
};

const validateFields = async (fields?: string | string[]): Promise<FormInvalidFieldsType | undefined> => {
	if (!formRef.value) {
		return;
	}

    return new Promise((resolve, reject) => {
        formRef.value!.validateField(fields, (valid: boolean, invalidFields?: FormInvalidFieldsType) => {
            if (valid) {
                resolve(undefined);
            } else {
                reject(invalidFields);
            }
        });
    });
};

const clearValidate = (fields?: string | string[]): void => {
    if (!formRef.value) {
        return;
    }

    formRef.value!.clearValidate(fields);
};

const submitForm = (): void => {
	if (!formRef.value) {
		return;
	}

	formRef.value.validate((valid) => {
		if (valid) {
			emit("submit");
		} else {
			emit("submitInvalid");
			console.error("error submit!");
		}
	});
};

// @ts-ignore
const clickHandler = (event): void => {
	if (!props.isLoading) {
		const submitButton = event.target.closest(ButtonSelectorConst);

		if (submitButton) {
			event.preventDefault();

			submitForm();
		}
	}
};
const keyPressHandler = (event: KeyboardEvent): void => {
	if (!props.isLoading) {
		if (event.keyCode === 13 && !event.shiftKey) {
			event.preventDefault();

			submitForm();
		}
	}
};


defineExpose({
	validate,
    validateFields,
	clearValidate
})
</script>

<style scoped lang="scss">
</style>
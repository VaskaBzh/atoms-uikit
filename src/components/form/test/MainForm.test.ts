import { describe, expect, it } from "vitest";
import { AttributesTrait, ElementFinderTrait, MountFactory } from "@/test-utils";
import { FORM_ITEM_RULE_LIST_MOCK, FORM_VALUE_MOCK } from "./mocks";

const componentName = "form";

describe(`check ${componentName} props`, () => {
	it("provided props", () => {
		const formSize = "small";
		const formLabelPosition = "left";
		const formLabelWidth = "custom label width";
		const formIsStatusIcon = true;
		const formIsDisabled = true;
		const formIsScrollToError = true;
		const formIsShowMessage = false;

		const wrapper = MountFactory.constructMount(
			componentName,
			true,
			{
				props: {
					formValue: FORM_VALUE_MOCK,
					size: formSize,
					labelPosition: formLabelPosition,
					labelWidth: formLabelWidth,
					rules: FORM_ITEM_RULE_LIST_MOCK,
					isStatusIcon: formIsStatusIcon,
					isDisabled: formIsDisabled,
					isScrollToError: formIsScrollToError,
					isShowMessage: formIsShowMessage
				}
			}
		);

		const elFormComponent = ElementFinderTrait.findComponentByName(wrapper, "ElForm");

		expect(AttributesTrait.getProp(elFormComponent, "model")).toStrictEqual(FORM_VALUE_MOCK);
		expect(AttributesTrait.getProp(elFormComponent, "size")).toBe(formSize);
		expect(AttributesTrait.getProp(elFormComponent, "labelPosition")).toBe(formLabelPosition);
		expect(AttributesTrait.getProp(elFormComponent, "labelWidth")).toBe(formLabelWidth);
		expect(AttributesTrait.getProp(elFormComponent, "rules")).toStrictEqual(FORM_ITEM_RULE_LIST_MOCK);
		expect(AttributesTrait.getProp(elFormComponent, "statusIcon")).toBe(formIsStatusIcon);
		expect(AttributesTrait.getProp(elFormComponent, "disabled")).toBe(formIsDisabled);
		expect(AttributesTrait.getProp(elFormComponent, "scrollToError")).toBe(formIsScrollToError);
		expect(AttributesTrait.getProp(elFormComponent, "showMessage")).toBe(formIsShowMessage);
	});

	it("default props", () => {
		const defaultFormSize = "default";
		const defaultFormLabelPosition = "right";
		const defaultFormLabelWidth = "auto";
		const defaultFormIsStatusIcon = false;
		const defaultFormIsDisabled = false;
		const defaultFormIsScrollToError = false;
		const defaultFormIsShowMessage = true;
		const defaultFormIsLoading = false;

		const wrapper = MountFactory.constructMount(
			componentName,
			true,
			{
				props: {
					formValue: FORM_VALUE_MOCK,
				}
			}
		);

		expect(AttributesTrait.getProp(wrapper, "size")).toBe(defaultFormSize);
		expect(AttributesTrait.getProp(wrapper, "labelPosition")).toBe(defaultFormLabelPosition);
		expect(AttributesTrait.getProp(wrapper, "labelWidth")).toBe(defaultFormLabelWidth);
		expect(AttributesTrait.getProp(wrapper, "isStatusIcon")).toBe(defaultFormIsStatusIcon);
		expect(AttributesTrait.getProp(wrapper, "isDisabled")).toBe(defaultFormIsDisabled);
		expect(AttributesTrait.getProp(wrapper, "isScrollToError")).toBe(defaultFormIsScrollToError);
		expect(AttributesTrait.getProp(wrapper, "isShowMessage")).toBe(defaultFormIsShowMessage);
		expect(AttributesTrait.getProp(wrapper, "isLoading")).toBe(defaultFormIsLoading);
	});
});

// TODO: need tests to custom functional

// it(`check ${componentName} default slot`, () => {
// 	const formDefaultContent = "My form default content";
//
// 	const wrapper = MountFactory.constructMount(
// 		componentName,
// 		false,
// 		{
// 			props: {
// 				formValue: FORM_VALUE_MOCK,
// 			},
// 			slots: {
// 				default: formDefaultContent
// 			}
// 		}
// 	);
//
// 	expect(wrapper.text()).toBe(formDefaultContent);
// });
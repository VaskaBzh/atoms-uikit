import { describe, expect, it } from "vitest";
import { AttributesTrait, ElementFinderTrait, MountFactory } from "@/test-utils";
import { FORM_ITEM_RULE_LIST_MOCK } from "./mocks";

const componentName = "formItem";

describe(`check ${componentName} props`, () => {
	it("provided props", () => {
		const formItemLabel = "My form item label";
		const formItemError = "My form item error";
		const formItemProp = "username";
		const formItemRequired = true;

		const wrapper = MountFactory.constructMount(
			componentName,
			true,
			{
				props: {
					label: formItemLabel,
					error: formItemError,
					prop: formItemProp,
					rules: FORM_ITEM_RULE_LIST_MOCK,
					required: formItemRequired
				}
			}
		);

		const elFormItemComponent = ElementFinderTrait.findComponentByName(wrapper, "ElFormItem");

		expect(AttributesTrait.getProp(elFormItemComponent, "label")).toBe(formItemLabel);
		expect(AttributesTrait.getProp(elFormItemComponent, "error")).toBe(formItemError);
		expect(AttributesTrait.getProp(elFormItemComponent, "prop")).toBe(formItemProp);
		expect(AttributesTrait.getProp(elFormItemComponent, "rules")).toStrictEqual(FORM_ITEM_RULE_LIST_MOCK);
		// expect(AttributesTrait.getProp(elFormItemComponent, "required")).toBe(formItemRequired);
	});

	// it("default props", () => {
	// 	const defaultFormItemRequired = false;
	//
	// 	const wrapper = MountFactory.constructMount(
	// 		componentName,
	// 		true
	// 	);
	//
	// 	const elFormItemComponent = ElementFinderTrait.findComponentByName(wrapper, "ElFormItem");
	//
	// 	// expect(AttributesTrait.getProp(elFormItemComponent, "required")).toBe(defaultFormItemRequired);
	// });
});

it("check symbiosis of error prop with error slot", () => {
	const formItemErrorSlotSlug = "error slug";

	const wrapper = MountFactory.constructMount(
		componentName,
		true,
		{
			props: {
				error: formItemErrorSlotSlug,
			},
			slots: {
				error: formItemErrorSlotSlug
			}
		}
	);

	const elFormItemComponent = ElementFinderTrait.findComponentByName(wrapper, "ElFormItem");

	expect(AttributesTrait.getProp(elFormItemComponent, "error")).toBeUndefined;
});

describe(`check ${componentName} slots`, () => {
	it(`default slot`, () => {
		const formItemDefaultContent = "My form item default content";

		const wrapper = MountFactory.constructMount(
			componentName,
			false,
			{
				slots: {
					default: formItemDefaultContent
				}
			}
		);

		expect(wrapper.text()).toBe(formItemDefaultContent);
	});

	// it.only(`default slot`, () => {
	// 	const formItemErrorContent = "My custom form item error";
	//
	// 	const wrapper = MountFactory.constructMount(
	// 		componentName,
	// 		false,
	// 		{
	// 			slots: {
	// 				error: formItemErrorContent
	// 			}
	// 		}
	// 	);
	//
	// 	const elFormItemComponent = ElementFinderTrait.findComponentByName(wrapper, "ElFormItem");
	//
	// 	// expect(wrapper.text()).toBe(formItemErrorContent);
	// });

	it(`label slot`, () => {
		const formItemLabelContent = "My form item default content";

		const wrapper = MountFactory.constructMount(
			componentName,
			false,
			{
				slots: {
					label: formItemLabelContent
				}
			}
		);

		expect(wrapper.text()).toBe(formItemLabelContent);
	});
});
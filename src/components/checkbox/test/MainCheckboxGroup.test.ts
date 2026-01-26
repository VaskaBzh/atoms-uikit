import { beforeEach, describe, expect, it } from "vitest";
import { AttributesTrait, ElementFinderTrait, MountFactory } from "@/test-utils";
import { CHECKBOX_LIST_MOCK } from "./mocks";
import { VueWrapper } from "@vue/test-utils";
// @ts-ignore
import type { DOMWrapper } from "@vue/test-utils/dist/domWrapper";

const componentName = "checkboxGroup";

// const checkboxSizeBaseClass = "el-checkbox--";
const checkboxDisabledClass = "is-disabled";
const checkboxBorderedClass = "is-bordered";

describe(`check ${componentName} group props`, () => {
	describe(`${componentName} list props`, () => {
		let wrapper: VueWrapper;
		let labelInGroupList: DOMWrapper[];

		beforeEach(() => {
			wrapper = MountFactory.constructMount(
				componentName,
				false,
				{
					props: {
						checkboxes: CHECKBOX_LIST_MOCK,
						modelValue: []
					}
				}
			);

			labelInGroupList = ElementFinderTrait.findElementList(wrapper, "label");
		});

		it("base props", () => {
			const inputInGroupList = ElementFinderTrait.findElementList(wrapper, "input");

			labelInGroupList.forEach((labelElement, labelElementIndex: number) => {
				expect(
					AttributesTrait.getAttribute(
						inputInGroupList[labelElementIndex],
						"value"
					)
				).toBe(CHECKBOX_LIST_MOCK[labelElementIndex].value);
				expect(labelElement.text()).toBe(CHECKBOX_LIST_MOCK[labelElementIndex].label);
			});
		});

		it("state props", () => {
			expect(AttributesTrait.getClass(labelInGroupList[1], checkboxDisabledClass)).toBeTruthy();
			expect(AttributesTrait.getClass(labelInGroupList[1], checkboxBorderedClass)).toBeTruthy();
		});
	});

	it("own multi checkbox state props ", () => {
		// const checkboxGroupSize = "small";
		// const checkboxGroupIsDisable = true;
		// const checkboxGroupIsBorder = true;
		//
		// const wrapper = MountFactory.constructMount(
		// 	componentName,
		// 	false,
		// 	{
		// 		props: {
		// 			modelValue: [],
		// 			checkboxes: CHECKBOX_LIST_MOCK,
		// 			size: checkboxGroupSize,
		// 			isDisable: checkboxGroupIsDisable,
		// 			isBorder: checkboxGroupIsBorder
		// 		}
		// 	}
		// );
		//
		// const labelInGroupList = ElementFinderTrait.findElementList(wrapper, "label");
		//
		// expect(labelInGroupList.length).not.toBe(0);

		// labelInGroupList.forEach((labelElement) => {
			// expect(AttributesTrait.getClass(labelElement, checkboxSizeBaseClass + checkboxGroupSize)).toBeTruthy();
			// expect(AttributesTrait.getAttribute(labelElement, "is-disabled")).toBeTruthy();
			// expect(AttributesTrait.getAttribute(labelElement, "is-border")).toBeTruthy();
		// });
	});

	it("default props ", () => {
		const defaultCheckboxGroupSize = "default";
		const defaultCheckboxGroupIsDisable = false;
		const defaultCheckboxGroupIsBorder = false;

		const wrapper = MountFactory.constructMount(
			componentName,
			false,
			{
				props: {
					modelValue: [],
					checkboxes: CHECKBOX_LIST_MOCK
				}
			}
		);

		expect(AttributesTrait.getProp(wrapper, "isDisable")).toBe(defaultCheckboxGroupIsDisable);
		expect(AttributesTrait.getProp(wrapper, "isBorder")).toBe(defaultCheckboxGroupIsBorder);
		expect(AttributesTrait.getProp(wrapper, "size")).toBe(defaultCheckboxGroupSize);
	});
});

describe(`check ${componentName} modelValue`, () => {
	describe("modelValue mutating", () => {
		const defaultCheckboxGroupModelValue = [CHECKBOX_LIST_MOCK[0].value];
		let wrapper: VueWrapper;

		beforeEach(() => {
			wrapper = MountFactory.constructMount(
				componentName,
				false,
				{
					props: {
						checkboxes: CHECKBOX_LIST_MOCK,
						modelValue: defaultCheckboxGroupModelValue,
						"onUpdate:modelValue": (newModelValueData: string[]) => wrapper.setProps({ modelValue: newModelValueData })
					}
				}
			);
		});

		it("add", async () => {
			const updatedCheckboxGroupModelValue: string[] = [...defaultCheckboxGroupModelValue, CHECKBOX_LIST_MOCK[2].value];

			await ElementFinderTrait.findElementList(wrapper, "input")[2].setValue(true);

			const actualModelValue: string[] = AttributesTrait.getProp<string[]>(wrapper, "modelValue");

			actualModelValue.forEach((checkboxGroupModelValueElement: string, modelValueElementIndex: number) => {
				expect(checkboxGroupModelValueElement).toBe(updatedCheckboxGroupModelValue[modelValueElementIndex]);
			});
		});

		it("delete", async () => {
			await ElementFinderTrait.findElementList(wrapper, "input")[0].setValue(false);

			const actualModelValue: string[] = AttributesTrait.getProp<string[]>(wrapper, "modelValue");

			expect(actualModelValue.length).toBe(0);
		});
	});

	it("empty", async () => {
		const wrapper = MountFactory.constructMount(
			componentName,
			false,
			{
				props: {
					checkboxes: CHECKBOX_LIST_MOCK
				}
			}
		);

		expect(wrapper.html()).toBeUndefined;
	});
});

it(`check ${componentName} default slot`, () => {
	const checkboxGroupDefaultContent: "My empty checkbox group" = "My empty checkbox group";

	const wrapper = MountFactory.constructMount(
		componentName,
		false,
		{
			props: {
				checkboxes: CHECKBOX_LIST_MOCK,
				modelValue: []
			},
			slots: {
				default: checkboxGroupDefaultContent
			}
		}
	);

	expect(wrapper.text()).toBe(checkboxGroupDefaultContent);
	expect(ElementFinderTrait.findElement(wrapper, "label")).toBeUndefined;
});
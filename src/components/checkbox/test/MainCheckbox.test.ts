import { describe, expect, it } from "vitest";
import { AttributesTrait, ElementFinderTrait, MountFactory } from "@/test-utils";

const componentName = "checkbox";
const checkboxLabel = "My checkbox";

describe(`check ${componentName} props`, () => {
	it("provided props", () => {
		const checkboxSize = "small";
		const checkboxValue = "111";
		const checkboxIsDisable = true;
		const checkboxIsBorder = true;

		const wrapper = MountFactory.constructMount(
			componentName,
			true,
			{
				props: {
					label: checkboxLabel,
					size: checkboxSize,
					value: checkboxValue,
					isDisable: checkboxIsDisable,
					isBorder: checkboxIsBorder
				}
			}
		);

		const elCheckboxComponent = ElementFinderTrait.findComponentByName(wrapper, "ElCheckbox")

		expect(AttributesTrait.getProp(elCheckboxComponent, "label")).toBe(checkboxLabel);
		expect(AttributesTrait.getProp(elCheckboxComponent, "size")).toBe(checkboxSize);
		expect(AttributesTrait.getProp(elCheckboxComponent, "value")).toBe(checkboxValue);
		expect(AttributesTrait.getProp(elCheckboxComponent, "disabled")).toBe(checkboxIsDisable);
		expect(AttributesTrait.getProp(elCheckboxComponent, "border")).toBe(checkboxIsBorder);
	});

	it("default props", () => {
		const checkboxDefaultSize = "default";
		const checkboxIsDisable = false;
		const checkboxIsBorder = false;

		const wrapper = MountFactory.constructMount(
			componentName,
			true,
			{
				props: {
					label: checkboxLabel
				}
			}
		);

		expect(AttributesTrait.getProp(wrapper, "size")).toBe(checkboxDefaultSize);
		expect(AttributesTrait.getProp(wrapper, "isDisable")).toBe(checkboxIsDisable);
		expect(AttributesTrait.getProp(wrapper, "isBorder")).toBe(checkboxIsBorder);
	});
});

it(`check ${componentName} modelValue`, async () => {
	const defaultCheckboxModelValue = true;
	const updatedCheckboxModelValue = false;

	const wrapper = MountFactory.constructMount(
		componentName,
		false,
		{
			props: {
				label: checkboxLabel,
				modelValue: defaultCheckboxModelValue,
				"onUpdate:modelValue": (newModelValueData: boolean) => wrapper.setProps({ modelValue: newModelValueData })
			}
		}
	);

	await ElementFinderTrait.findElement(wrapper,"input").setValue(updatedCheckboxModelValue)

	expect(wrapper.props("modelValue" as never)).toBe(updatedCheckboxModelValue);
});
import { expect, it, describe } from "vitest";
import { ElementFinderTrait, MountFactory } from "@/test-utils";

const componentName = "inputRange";

describe(`${componentName} component render without error`, () => {
	it.each([
		[`with number modelValue`, 0, true],
		[`with number array modelValue`, [0, 2], true],
		[`with undefined modelValue`, undefined, false],
		[`with string modelValue`, "My model value", false]
	])(`${componentName} %s`, (_, inputRangeModelValue, expectExistRangeComponent) => {
		const wrapper = MountFactory.constructMount(
			componentName,
			false,
			{
				props: {
					modelValue: inputRangeModelValue
				}
			}
		);

		const rangeComponent = ElementFinderTrait.findComponentByName(wrapper, "Range");

		expect(wrapper.exists()).toBeTruthy();
		expect(rangeComponent.exists()).toBe(expectExistRangeComponent);
	});
});
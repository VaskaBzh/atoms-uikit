import { expect, it, describe } from "vitest";
import { AttributesTrait, ElementFinderTrait, MountFactory } from "@/test-utils";
import { RADIO_DATA_LIST_MOCK } from "./mocks";

const componentName = "radio";

const radioModelValue = "0";

describe(`${componentName} component custom multi state (disabled, border)`, () => {
	it.each([
		[`with default state props`, [undefined, undefined], [2, 2]],
		[`with isDisabled state prop`, [true, undefined], [4, 2]],
		[`with isBorder state props`, [undefined, true], [2, 4]],
	])(`${componentName} %s`, (
		_,
		[isDisabled, isBorder],
		[expectDisabledRadioLength, expectBorderedRadioLength]
	) => {
		const disabledRadioList: boolean[] = [];
		const borderedRadioList: boolean[] = [];

		const wrapper = MountFactory.constructMount(
			componentName,
			false,
			{
				props: {
					radiosData: RADIO_DATA_LIST_MOCK,
					modelValue: radioModelValue,
					isDisable: isDisabled,
					isBorder: isBorder
				}
			}
		);

		const elRadioComponentList = ElementFinderTrait.findComponentListByName(wrapper, "ElRadio");

		elRadioComponentList.forEach((radio) => {
			const isRadioDisabled: boolean = Boolean(AttributesTrait.getProp(radio, "disabled"));
			const isRadioBordered: boolean = Boolean(AttributesTrait.getProp(radio, "border"));

			if (isRadioDisabled) {
				disabledRadioList.push(isRadioDisabled);
			}
			if (isRadioBordered) {
				borderedRadioList.push(isRadioBordered);
			}
		});

		expect(wrapper.exists()).toBeTruthy();
		expect(disabledRadioList.length).toBe(expectDisabledRadioLength);
		expect(borderedRadioList.length).toBe(expectBorderedRadioLength);
	});
});
import { describe, expect, it } from "vitest";
import { AttributesTrait, ElementFinderTrait, MountFactory } from "@/test-utils";
import { DATEPICKER_SHORTCUT_LIST_MOCK } from "./mocks";
// @ts-ignore
import { DOMWrapper } from "@vue/test-utils/dist/domWrapper";
import { DateTypeEnum } from "@/components";

const componentName = "datePicker";
const datePickerPopperClass = "my-popper-class";

describe(`check ${componentName} props`, () => {
	it("provided props", () => {
		const datePickerModelValue = "10.10.2000";
		const datePickerPlaceholder = "My placeholder";
		const datePickerSize = "small";
		const datePickerType = DateTypeEnum.Year;
		const datePickerIsDisable = true;
		const datePickerIsClearable = true;
		const datePickerFormat = "dd.mm.yyyy";
		const datePickerValueFormat = "dd.yyyy";
		const datePickerPrefixIcon = "Apple";
		const datePickerClearIcon = "Apple";
		const datePickerRangeSeparator = "/";
		const datePickerStartPlaceholder = "My start placeholder";
		const datePickerEndPlaceholder = "My end placeholder";
		const datePickerDefaultValue = new Date("10.10.1000");

		const wrapper = MountFactory.constructMount(
			componentName,
			true,
			{
				props: {
					shortCuts: DATEPICKER_SHORTCUT_LIST_MOCK,
					modelValue: datePickerModelValue,
					placeholder: datePickerPlaceholder,
					size: datePickerSize,
					type: datePickerType,
					isDisable: datePickerIsDisable,
					isClearable: datePickerIsClearable,
					format: datePickerFormat,
					valueFormat: datePickerValueFormat,
					prefixIcon: datePickerPrefixIcon,
					clearIcon: datePickerClearIcon,
					rangeSeparator: datePickerRangeSeparator,
					startPlaceholder: datePickerStartPlaceholder,
					endPlaceholder: datePickerEndPlaceholder,
					popperClass: datePickerPopperClass,
					defaultValue: datePickerDefaultValue
				}
			}
		);

		const elDatePickerComponent = ElementFinderTrait.findComponentByName(wrapper, "ElDatePicker");

		expect(AttributesTrait.getProp(elDatePickerComponent, "shortcuts")).toStrictEqual(DATEPICKER_SHORTCUT_LIST_MOCK);
		expect(AttributesTrait.getProp(elDatePickerComponent, "placeholder")).toBe(datePickerPlaceholder);
		expect(AttributesTrait.getProp(elDatePickerComponent, "size")).toBe(datePickerSize);
		expect(AttributesTrait.getProp(elDatePickerComponent, "type")).toBe(datePickerType);
		expect(AttributesTrait.getProp(elDatePickerComponent, "disabled")).toBe(datePickerIsDisable);
		expect(AttributesTrait.getProp(elDatePickerComponent, "clearable")).toBe(datePickerIsClearable);
		expect(AttributesTrait.getProp(elDatePickerComponent, "format")).toBe(datePickerFormat);
		expect(AttributesTrait.getProp(elDatePickerComponent, "valueFormat")).toBe(datePickerValueFormat);
		expect(AttributesTrait.getProp(elDatePickerComponent, "prefixIcon")).toBe(datePickerPrefixIcon);
		expect(AttributesTrait.getProp(elDatePickerComponent, "clearIcon")).toBe(datePickerClearIcon);
		expect(AttributesTrait.getProp(elDatePickerComponent, "rangeSeparator")).toBe(datePickerRangeSeparator);
		expect(AttributesTrait.getProp(elDatePickerComponent, "startPlaceholder")).toBe(datePickerStartPlaceholder);
		expect(AttributesTrait.getProp(elDatePickerComponent, "endPlaceholder")).toBe(datePickerEndPlaceholder);
		expect(AttributesTrait.getProp(elDatePickerComponent, "popperClass")).toBe(datePickerPopperClass);
		// TODO: need to know how test Date
		// expect(new Date(AttributesTrait.getAttribute(wrapper, "defaultvalue"))).toBe(datePickerDefaultValue);
		expect(AttributesTrait.getProp(elDatePickerComponent, "modelValue")).toBe(datePickerModelValue);
	});

	it("default props", () => {
		const datePickerSize = "default";
		const datePickerType = DateTypeEnum.Date;
		const datePickerIsDisable = false;
		const datePickerIsClearable = false;

		const wrapper = MountFactory.constructMount(
			componentName,
			true,
			{
				props: {
					size: datePickerSize,
					type: datePickerType,
					isDisable: datePickerIsDisable,
					isClearable: datePickerIsClearable
				}
			}
		);

		const elDatePickerComponent = ElementFinderTrait.findComponentByName(wrapper, "ElDatePicker");

		expect(AttributesTrait.getProp(elDatePickerComponent, "size")).toBe(datePickerSize);
		expect(AttributesTrait.getProp(elDatePickerComponent, "type")).toBe(datePickerType);
		expect(AttributesTrait.getProp(elDatePickerComponent, "disabled")).toBe(datePickerIsDisable);
		expect(AttributesTrait.getProp(elDatePickerComponent, "clearable")).toBe(datePickerIsClearable);
	});
});

it(`check ${componentName} default slot`, () => {
	const datePickerCustomDefaultSlot = "My custom ${componentName} default slot";

	MountFactory.constructMount(
		componentName,
		false,
		{
			props: {
				popperClass: datePickerPopperClass
			},
			slots: {
				default: datePickerCustomDefaultSlot
			}
		}
	);

	const datePopper = document.querySelector("." + datePickerPopperClass);

	if (datePopper) {
		expect(datePopper.textContent).toContain(datePickerCustomDefaultSlot);
	}
});
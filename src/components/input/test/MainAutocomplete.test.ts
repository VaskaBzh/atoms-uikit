import { describe, expect, it } from "vitest";
import { AttributesTrait, ElementFinderTrait, MountFactory, SlotTrait } from "@/test-utils";
import { AUTOCOMPLETE_ITEM_MOCK } from "@/components/input/test/mocks";

const componentName = "autocomplete";

const autocompleteFetchSuggestions = (queryString: string, callback: any) => {
	callback(queryString);
};

describe(`check ${componentName} props`, () => {
	it("provided props", () => {
		const expectAutocompleteModelValue = 24;
		const expectAutocompleteIsClearable = true;
		const expectAutocompleteIsTriggerOnFocus = false;
		const expectAutocompletePopperClass = "my-custom-autocomplete";

		const wrapper = MountFactory.constructMount(
			componentName,
			true,
			{
				props: {
					modelValue: expectAutocompleteModelValue,
					fetchSuggestions: autocompleteFetchSuggestions,
					isClearable: expectAutocompleteIsClearable,
					isTriggerOnFocus: expectAutocompleteIsTriggerOnFocus,
					popperClass: expectAutocompletePopperClass
				},
			}
		);

		const elAutocompleteComponent = ElementFinderTrait.findComponentByName(wrapper, "ElAutocomplete");

		expect(AttributesTrait.getProp(elAutocompleteComponent, "modelValue")).toBe(expectAutocompleteModelValue);
		expect(AttributesTrait.getProp(elAutocompleteComponent, "fetchSuggestions")).toBe(autocompleteFetchSuggestions);
		expect(AttributesTrait.getProp(elAutocompleteComponent, "clearable")).toBe(expectAutocompleteIsClearable);
		expect(AttributesTrait.getProp(elAutocompleteComponent, "triggerOnFocus")).toBe(expectAutocompleteIsTriggerOnFocus);
		expect(AttributesTrait.getProp(elAutocompleteComponent, "popperClass")).toBe(expectAutocompletePopperClass);
	});

	it("default prop", () => {
		const defaultAutocompleteIsClearable = false;
		const defaultAutocompleteIsTriggerOnFocus = true;

		const wrapper = MountFactory.constructMount(
			componentName,
			true,
			{
				props: {
					fetchSuggestions: autocompleteFetchSuggestions
				}
			}
		);

		expect(AttributesTrait.getProp(wrapper, "isClearable")).toBe(defaultAutocompleteIsClearable);
		expect(AttributesTrait.getProp(wrapper, "isTriggerOnFocus")).toBe(defaultAutocompleteIsTriggerOnFocus);
	});
});

it.each([
	"loading",
	"suffix",
	"default"
])(`check ${componentName} %s slots`, (slotName) => {
	const autocompleteCustomContent = `My ${slotName} custom content`;

	const wrapper = MountFactory.constructMount(
		componentName,
		true,
		{
			props: {
				fetchSuggestions: autocompleteFetchSuggestions
			},
			slots: {
				[slotName]: autocompleteCustomContent
			}
		}
	);

	expect(SlotTrait.findSlotContent(wrapper, slotName)).toBe(autocompleteCustomContent);
});

it(`check ${componentName} select emit`, () => {
	// const autocompleteModelValue = 24;
	const wrapper = MountFactory.constructMount(
		componentName,
		true,
		{
			props: {
				fetchSuggestions: autocompleteFetchSuggestions
			}
		}
	);

	const elAutocompleteComponent = ElementFinderTrait.findComponentByName(wrapper, "ElAutocomplete");

	elAutocompleteComponent.vm.$emit("select", AUTOCOMPLETE_ITEM_MOCK);

	expect(wrapper.emitted("select")).toStrictEqual([[AUTOCOMPLETE_ITEM_MOCK]]);
});

it(`check ${componentName} modelValue`, () => {
	const wrapper = MountFactory.constructMount(
		componentName,
		true,
		{
			props: {
				fetchSuggestions: autocompleteFetchSuggestions
			}
		}
	);

	const elAutocompleteComponent = ElementFinderTrait.findComponentByName(wrapper, "ElAutocomplete");

	elAutocompleteComponent.vm.$emit("select", AUTOCOMPLETE_ITEM_MOCK);

	expect(wrapper.emitted("select")).toStrictEqual([[AUTOCOMPLETE_ITEM_MOCK]]);
});
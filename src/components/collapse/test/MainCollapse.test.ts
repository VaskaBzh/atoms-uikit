import { describe, expect, it } from "vitest";
import { AttributesTrait, ElementFinderTrait, MountFactory } from "@/test-utils";
import { COLLAPSE_LIST_MOCK } from "./mocks";
// @ts-ignore
import { DOMWrapper } from "@vue/test-utils/dist/domWrapper";

const componentName: "collapse" = "collapse";
const collapseItemDisabledClass: "is-disabled" = "is-disabled";
// const collapseItemIsOpenClass: "is-active" = "is-active";

describe(`check ${componentName} props`, () => {
	it("collapse items prop", () => {
		const wrapper = MountFactory.constructMount(
			componentName,
			false,
			{
				props: {
					collapseItems: COLLAPSE_LIST_MOCK
				}
			}
		);

		const collapseItemList = ElementFinderTrait.findComponentListByName(wrapper, "ElCollapseItem");

		expect(collapseItemList[2].text()).toContain(COLLAPSE_LIST_MOCK[2].text);
		expect(AttributesTrait.getClass(collapseItemList[1], collapseItemDisabledClass)).toBeTruthy();
		collapseItemList.forEach((collapseItem, collapseItemIndex: number) => {
			expect(collapseItem.text()).toContain(COLLAPSE_LIST_MOCK[collapseItemIndex].title);
		});
	});


	it("provided props", () => {
		const collapseIsAccordion: true = true;
		const defaultCollapseModelValue: number[] = [COLLAPSE_LIST_MOCK[0].name];

		const wrapper = MountFactory.constructMount(
			componentName,
			true,
			{
				props: {
					collapseItems: COLLAPSE_LIST_MOCK,
					modelValue: defaultCollapseModelValue,
					isAccordion: collapseIsAccordion
				}
			}
		);

		const elCollapseComponent = ElementFinderTrait.findComponentByName(wrapper, "ElCollapse");

		expect(AttributesTrait.getProp(elCollapseComponent, "accordion")).toBe(collapseIsAccordion);
		expect(AttributesTrait.getProp(elCollapseComponent, "modelValue")).toStrictEqual(defaultCollapseModelValue);
	});

	it("own flex prop", () => {
		const collapseIsFlex: true = true;
		const collapseFlexClassName: "collapse-flex" = "collapse-flex";

		const wrapper = MountFactory.constructMount(
			componentName,
			true,
			{
				props: {
					collapseItems: COLLAPSE_LIST_MOCK,
					isFlex: collapseIsFlex
				}
			}
		);

		expect(AttributesTrait.getClass(wrapper, collapseFlexClassName)).toBeTruthy();
	});

	it("default props", () => {
		const defaultIsAccordion: false = false;
		const defaultIsFlex: false = false;

		const wrapper = MountFactory.constructMount(
			componentName,
			true,
			{
				props: {
					collapseItems: COLLAPSE_LIST_MOCK
				}
			}
		);

		expect(AttributesTrait.getProp(wrapper, "isFlex")).toBe(defaultIsFlex);
		expect(AttributesTrait.getProp(wrapper, "isAccordion")).toBe(defaultIsAccordion);
	});
});

describe(`check ${componentName} modelValue`, () => {
	// describe("modelValue mutating", () => {
	// 	const defaultCollapseModelValue: number[] = [COLLAPSE_LIST_MOCK[0].name];
	// 	let wrapper: VueWrapper;
	//
	// 	beforeEach(() => {
	// 		wrapper = MountFactory.constructMount(
	// 			componentName,
	// 			false,
	// 			{
	// 				props: {
	// 					collapseItems: COLLAPSE_LIST_MOCK,
	// 					modelValue: defaultCollapseModelValue,
	// 					"onUpdate:modelValue": (newModelValueData: string[]) => wrapper.setProps({ modelValue: newModelValueData })
	// 				}
	// 			}
	// 		);
	// 	});
	//
	// 	// it("add", async () => {
	// 	// 	const collapseItemList = ElementFinderTrait.findElementList(wrapper, "button")
	//
	// 		// collapseItemList[0].trigger()
	// 		//
	// 		// console.log(collapseItemList[0].html());
	// 		// console.log(collapseItemList[0].vm.$props);
	// 	// });
	//
	// 	// it("delete", async () => {
	// 	// });
	// });

	it("empty", async () => {
		const wrapper = MountFactory.constructMount(
			componentName,
			false,
			{
				props: {
					collapseItems: COLLAPSE_LIST_MOCK
				}
			}
		);

		const collapseItemList = ElementFinderTrait.findComponentListByName(wrapper, "ElCollapseItem");

		expect(collapseItemList.length).toBe(3);
	});
});

describe(`check ${componentName} slots`, () => {
	it(`title slot`, () => {
		const collapseCustomSecondItemTitleSlot: "My custom second collapse item slot (title)" = "My custom second collapse item slot (title)";

		const wrapper = MountFactory.constructMount(
			componentName,
			false,
			{
				props: {
					collapseItems: COLLAPSE_LIST_MOCK
				},
				slots: {
					title1: collapseCustomSecondItemTitleSlot
				}
			}
		);

		const collapseItemList = ElementFinderTrait.findComponentListByName(wrapper, "ElCollapseItem");

		expect(collapseItemList[1].text()).toContain(collapseCustomSecondItemTitleSlot);
	});

	it(`content slot`, () => {
		const collapseCustomThirdItemContentSlot: "My custom third collapse item slot (content)" = "My custom third collapse item slot (content)";

		const wrapper = MountFactory.constructMount(
			componentName,
			false,
			{
				props: {
					collapseItems: COLLAPSE_LIST_MOCK
				},
				slots: {
					2: collapseCustomThirdItemContentSlot
				}
			}
		);

		const collapseItemList = ElementFinderTrait.findComponentListByName(wrapper, "ElCollapseItem");

		expect(collapseItemList[2].text()).toContain(collapseCustomThirdItemContentSlot);
	});
});
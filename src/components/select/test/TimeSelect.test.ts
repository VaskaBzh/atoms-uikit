import { it, describe } from "vitest";
// import { ElementFinderTrait, MountFactory } from "@/test-utils";
// import { VueWrapper } from "@vue/test-utils";

const componentName = "timeSelect";

describe(`${componentName} tests`, () => {
	// const timeSelectModelValue = "";
	// const timeSelectPlaceholder = "My time select placeholder";
	//
	// const placeholderSelector = "[class*='_placeholder']";
	//
	// let wrapper: VueWrapper;
	//
	// beforeEach(() => {
	// 	wrapper = MountFactory.constructMount(
	// 		componentName,
	// 		false,
	// 		{
	// 			props: {
	// 				modelValue: "",
	// 				placeholder: timeSelectPlaceholder
	// 			},
	// 			global: {
	// 				stubs: {
	// 					// teleport: true,
	// 					// transition: true,
	// 					// "base-transition": true,
	// 					// Teleport: {
	// 					// 	template: "<slot />"
	// 					// },
	// 					// "base-transition": true,
	// 					// "base-transition": true,
	// 					// "base-transition": true,
	// 					// "base-transition": true,
	// 				}
	// 			}
	// 		}
	// 	);
	// });
	//
	// afterEach(() => {
	// 	wrapper.unmount();
	// });
	//
	// it.only(`${componentName} been render with options (content) and placeholder`, async () => {
	// 	await wrapper.vm.$nextTick();
	//
	// 	console.log(wrapper.html());
	// 	// console.log(wrapper.vm.$);
	// 	// expect(ElementFinderTrait.findElement(wrapper, placeholderSelector).text()).toBe(timeSelectPlaceholder);
	// });

	it.todo(`${componentName} value changed after option click`);

	describe.todo(`${componentName} been render with icons (prefix | clear)`);

	it.todo(`${componentName} value changed by format prop`);
});
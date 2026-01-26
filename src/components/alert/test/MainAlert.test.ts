import { expect, it, describe, afterEach, beforeEach } from "vitest";
import { ElementFinderTrait, MountFactory } from "@/test-utils";
import { VueWrapper } from "@vue/test-utils";

const componentName = "alert";

describe(`${componentName} tests`, () => {
	const alertTitle = "My alert title";
	const alertDescription = "My alert description";
	const alertCloseText = "close alert text";
	const closeButtonSelector = "[class*=_close-btn]";
	const alertSelector = ".el-alert";

	let wrapper: VueWrapper;

	beforeEach(() => {
		wrapper = MountFactory.constructMount(
			componentName,
			false,
			{
				props: {
					title: alertTitle,
					description: alertDescription
				}
			}
		);
	});

	afterEach(() => {
		wrapper.unmount();
	});

	it(`${componentName} been render and contain content`, () => {
		expect(wrapper.text()).toContain(alertTitle);
		expect(wrapper.text()).toContain(alertDescription);
	});

	it(`${componentName} been closed`, async () => {
		await wrapper.vm.$nextTick();

		const closeButton = ElementFinderTrait.findElement(wrapper, closeButtonSelector);

		await closeButton.trigger("click");

		await wrapper.vm.$nextTick();

		expect(wrapper.emitted("close")).toBeTruthy();
		expect(ElementFinderTrait.findElement(wrapper, alertSelector).isVisible()).toBeFalsy();
	});

	describe(`${componentName} change color by type-prop`, () => {
		it.each(
			["success", "info", "warning", "error"]
		)(`%s type`, async (alertTypeProp) => {
			await wrapper.setProps({ type: alertTypeProp });

			await wrapper.vm.$nextTick();

			expect(ElementFinderTrait.findElement(wrapper, `${alertSelector}--${alertTypeProp}`).exists()).toBeTruthy();
		});
	});

	it(`${componentName} has own close-text`, async () => {
		await wrapper.setProps({ closeText: alertCloseText });

		await wrapper.vm.$nextTick();

		expect(ElementFinderTrait.findElement(wrapper, closeButtonSelector).text()).toBe(alertCloseText);
	});
});
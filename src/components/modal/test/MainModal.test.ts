import { it, expect } from "vitest";
import { MountFactory } from "@/test-utils";

const componentName = "modal";

it.each([
	["closed", false, false],
	["opened", true, true]
])(`${componentName} been %s`, async (_, modalModelValue, expectSlotContent) => {
	const headerSlotContent = "header content";

	const wrapper = MountFactory.constructMount(
		componentName,
		false,
		{
			props: {
				modelValue: modalModelValue
			},
			slots: {
				header: headerSlotContent
			}
		}
	);

	await wrapper.vm.$nextTick();

	expect(wrapper.text() === headerSlotContent).toBe(expectSlotContent);
});
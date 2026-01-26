import { expect, it } from "vitest";
import { ElementFinderTrait, MountFactory } from "@/test-utils";

const componentName = "inputNumber";

it(`${componentName} component render without error`, () => {
	const wrapper = MountFactory.constructMount(
		componentName,
		false,
	);

	const elInputNumberComponent = ElementFinderTrait.findComponentByName(wrapper, "ElInputNumber");

	expect(wrapper.exists()).toBeTruthy();
	expect(elInputNumberComponent.exists()).toBeTruthy();
});
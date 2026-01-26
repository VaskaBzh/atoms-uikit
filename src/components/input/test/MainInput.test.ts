import { expect, it } from "vitest";
import { MountFactory } from "@/test-utils";

const componentName = "input";

const inputPlaceholder = "My placeholder";

it(`${componentName} component render without error`, () => {
	const wrapper = MountFactory.constructMount(
		componentName,
		false,
		{
			props: {
				placeholder: inputPlaceholder
			}
		}
	);

	expect(wrapper.exists()).toBeTruthy()
});
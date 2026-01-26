import { describe, expect, it } from "vitest";
import { AttributesTrait, ElementFinderTrait, MountFactory } from "@/test-utils";

const componentName = "divider";

describe(`check ${componentName} props`, () => {
	it("provided props", () => {
		const dividerDirection = "vertical";
		const dividerBorderStyle = "solid";
		const dividerContentPosition = "left";

		const wrapper = MountFactory.constructMount(
			componentName,
			true,
			{
				props: {
					direction: dividerDirection,
					borderStyle: dividerBorderStyle,
					contentPosition: dividerContentPosition
				}
			}
		);

		const elDividerComponent = ElementFinderTrait.findComponentByName(wrapper, "ElDivider");

		expect(AttributesTrait.getProp(elDividerComponent, "direction")).toBe(dividerDirection);
		expect(AttributesTrait.getProp(elDividerComponent, "borderStyle")).toBe(dividerBorderStyle);
		expect(AttributesTrait.getProp(elDividerComponent, "contentPosition")).toBe(dividerContentPosition);
	});

	it("default props", () => {
		const defaultDividerDirection = "horizontal";

		const wrapper = MountFactory.constructMount(
			componentName,
			true
		);

		expect(AttributesTrait.getProp(wrapper, "direction")).toBe(defaultDividerDirection);
	});
});

it(`check ${componentName} default slot`, () => {
	const dividerDefaultContent = "My divider '/'";

	const wrapper = MountFactory.constructMount(
		"button",
		false,
		{
			slots: {
				default: dividerDefaultContent
			}
		}
	);

	expect(wrapper.text()).toBe(dividerDefaultContent);
});
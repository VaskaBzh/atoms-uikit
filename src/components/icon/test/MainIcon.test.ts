import { describe, expect, it } from "vitest";
import { AttributesTrait, ElementFinderTrait, MountFactory } from "@/test-utils";

const componentName = "icon";

const icon = "Apple";

describe(`check ${componentName} props`, () => {
	it("provided props", () => {
		const iconSize = 24;
		const iconColor = "red";

		const wrapper = MountFactory.constructMount(
			componentName,
			true,
			{
				props: {
					icon: icon,
					size: iconSize,
					color: iconColor
				}
			}
		);

		const elIconComponent = ElementFinderTrait.findComponentByName(wrapper, "ElIcon");

		expect(AttributesTrait.getProp(elIconComponent, "size")).toBe(iconSize);
		expect(AttributesTrait.getProp(elIconComponent, "color")).toBe(iconColor);
	});

	it("default size prop", () => {
		const iconDefaultSize = 16;

		const wrapper = MountFactory.constructMount(
			componentName,
			true,
			{
				props: {
					icon: icon
				}
			}
		);

		expect(AttributesTrait.getProp(wrapper, "size")).toBe(iconDefaultSize);
	});

	it("custom icon prop", () => {
		const iconHtml = "<apple></apple>"

		const wrapper = MountFactory.constructMount(
			componentName,
			false,
			{
				props: {
					icon: icon
				}
			}
		);

		expect(wrapper.html()).toContain(iconHtml);
	});
});
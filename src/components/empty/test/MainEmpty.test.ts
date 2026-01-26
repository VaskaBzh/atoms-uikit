import { describe, expect, it } from "vitest";
import { AttributesTrait, ElementFinderTrait, MountFactory } from "@/test-utils";

const componentName = "empty";

describe(`check ${componentName} props`, () => {
	it("provided props", () => {
		const emptyImage = "my-custom-image-link.png";
		const emptyDescription = "My custom description";
		const emptyImageSize = 300;

		const wrapper = MountFactory.constructMount(
			componentName,
			true,
			{
				props: {
					image: emptyImage,
					description: emptyDescription,
					imageSize: emptyImageSize
				}
			}
		);

		const elEmptyComponent = ElementFinderTrait.findComponentByName(wrapper, "ElEmpty");

		expect(AttributesTrait.getProp(elEmptyComponent, "image")).toBe(emptyImage);
		expect(AttributesTrait.getProp(elEmptyComponent, "description")).toBe(emptyDescription);
		expect(AttributesTrait.getProp(elEmptyComponent, "imageSize")).toBe(emptyImageSize);
	});

	it("default props", () => {
		const defaultEmptyDescription = "No data";

		const wrapper = MountFactory.constructMount(
			componentName,
			true
		);

		expect(AttributesTrait.getProp(wrapper, "description")).toBe(defaultEmptyDescription);
	});
});

it(`check ${componentName} default slot`, () => {
	const emptyDefaultContent = "My empty default content";

	const wrapper = MountFactory.constructMount(
		"button",
		false,
		{
			slots: {
				default: emptyDefaultContent
			}
		}
	);

	expect(wrapper.text()).toBe(emptyDefaultContent);
});
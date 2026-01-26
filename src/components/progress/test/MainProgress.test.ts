import { expect, it, describe } from "vitest";
import { AttributesTrait, ElementFinderTrait, MountFactory } from "@/test-utils";

const componentName = "progress";

const progressPercentage = 8;

describe(`${componentName} component custom strokeWidth`, () => {
	it.each([
		[`with undefined strokeWidth, default isTextInside and type props`, [undefined, undefined, undefined], 6],
		[`with undefined strokeWidth, default type and truthy isTextInside props`, [undefined, true, undefined], 26],
		[`with custom strokeWidth, default type and truthy isTextInside props`, [40, true, undefined], 40],
		[`with custom strokeWidth, efault isTextInside and type props`, [40, undefined, undefined], 40],
	])(`${componentName} %s`, (_, [strokeWidth, isTextInside, type], expectProgressStrokeWidth) => {
		const wrapper = MountFactory.constructMount(
			componentName,
			true,
			{
				props: {
					percentage: progressPercentage,
					strokeWidth: strokeWidth,
					isTextInside: isTextInside,
					type: type
				}
			}
		);

		const elProgressComponent = ElementFinderTrait.findComponentByName(wrapper, "ElProgress");

		expect(wrapper.exists()).toBeTruthy();
		expect(AttributesTrait.getProp(elProgressComponent, "strokeWidth")).toBe(expectProgressStrokeWidth);
	});
});
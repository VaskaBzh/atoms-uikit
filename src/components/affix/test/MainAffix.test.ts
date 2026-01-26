import { expect, it, describe } from "vitest";
import { AttributesTrait, ElementFinderTrait, MountFactory } from "@/test-utils";

const componentName = "affix";

describe(`check ${componentName} props`, () => {
	it("provided props", () => {
		const affixPosition = "bottom";
		const affixOffset = 100;
		const affixZIndex = 100;
		const affixTarget = "body";

		const wrapper = MountFactory.constructMount(
			componentName,
			true,
			{
				props: {
					position: affixPosition,
					offset: affixOffset,
					zIndex: affixZIndex,
					target: affixTarget
				}
			}
		);

		const elAffixComponent = ElementFinderTrait.findComponentByName(wrapper, "ElAffix");

		expect(AttributesTrait.getProp(elAffixComponent, "position")).toBe(affixPosition);
		expect(AttributesTrait.getProp(elAffixComponent, "offset")).toBe(affixOffset);
		expect(AttributesTrait.getProp(elAffixComponent, "zIndex")).toBe(affixZIndex);
		expect(AttributesTrait.getProp(elAffixComponent, "target")).toBe(affixTarget);
	});

	it("default props", () => {
		const defaultAffixPosition = "top";
		const defaultAffixOffset = 0;

		const wrapper = MountFactory.constructMount(componentName, true);

		expect(AttributesTrait.getProp(wrapper, "position")).toBe(defaultAffixPosition);
		expect(AttributesTrait.getProp(wrapper, "offset")).toBe(defaultAffixOffset);
	});
});

describe(`check ${componentName} emits`, () => {
	it("scroll", async () => {
		const scrollEventPayload = { scrollTop: 100, fixed: true };

		const wrapper = MountFactory.constructMount(componentName, true);

		const elAffixComponent = wrapper.findComponent({ name: "ElAffix" });

		elAffixComponent.vm.$emit("scroll", scrollEventPayload);

		expect(wrapper.emitted("scroll")).toBeTruthy();
	});

	it("change", async () => {
		const changeEventIsFixed = true;

		const wrapper = MountFactory.constructMount(componentName, true);

		const elAffixComponent = wrapper.findComponent({ name: "ElAffix" });

		elAffixComponent.vm.$emit("change", changeEventIsFixed);

		expect(wrapper.emitted("change")).toBeTruthy();
	});
});

describe(`check ${componentName} slots`, () => {
	it("default", async () => {
		const affixDefaultSlot = "Its my affix";

		const wrapper = MountFactory.constructMount(componentName, false, {
			slots: {
				default: affixDefaultSlot
			}
		});

		expect(wrapper.text()).toContain(affixDefaultSlot);
	});
});
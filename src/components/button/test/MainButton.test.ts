import { describe, expect, it } from "vitest";
import { AttributesTrait, ElementFinderTrait, MountFactory } from "@/test-utils";
import { VueWrapper } from "@vue/test-utils";

const componentName = "button";

const buttonIconRightClass = "button_icon-right";

describe(`check ${componentName} props`, () => {

	it("provided props", () => {
		const buttonType = "danger";
		const buttonSize = "small";
		const buttonIsDisable = true;
		const buttonIsLink = true;
		const buttonIsText = true;
		const buttonIsRound = true;
		const buttonIsCircle = true;
		const buttonIsPlain = true;
		const buttonIsBg = true;
		const buttonIsIconRight = true;
		const buttonIcon = "Apple";
		const buttonIsLoading = true;
		const buttonLoadingIcon = "Apple";

		const wrapper = MountFactory.constructMount(
			componentName,
			true,
			{
				props: {
					type: buttonType,
					size: buttonSize,
					isDisable: buttonIsDisable,
					isLink: buttonIsLink,
					isText: buttonIsText,
					isRound: buttonIsRound,
					isCircle: buttonIsCircle,
					isPlain: buttonIsPlain,
					isBg: buttonIsBg,
					isIconRight: buttonIsIconRight,
					icon: buttonIcon,
					isLoading: buttonIsLoading,
					loadingIcon: buttonLoadingIcon
				}
			}
		);

		const elButtonComponent = ElementFinderTrait.findComponentByName(wrapper, "ElButton");

		expect(AttributesTrait.getProp(elButtonComponent, "type")).toBe(buttonType);
		expect(AttributesTrait.getProp(elButtonComponent, "size")).toBe(buttonSize);
		expect(AttributesTrait.getProp(elButtonComponent, "disabled")).toBe(buttonIsDisable);
		expect(AttributesTrait.getProp(elButtonComponent, "link")).toBe(buttonIsLink);
		expect(AttributesTrait.getProp(elButtonComponent, "text")).toBe(buttonIsText);
		expect(AttributesTrait.getProp(elButtonComponent, "round")).toBe(buttonIsRound);
		expect(AttributesTrait.getProp(elButtonComponent, "circle")).toBe(buttonIsCircle);
		expect(AttributesTrait.getProp(elButtonComponent, "plain")).toBe(buttonIsPlain);
		expect(AttributesTrait.getProp(elButtonComponent, "bg")).toBe(buttonIsBg);
		expect(AttributesTrait.getProp(elButtonComponent, "loading")).toBe(buttonIsLoading);
		expect(AttributesTrait.getProp(elButtonComponent, "loadingIcon")).toBe(buttonLoadingIcon);
	});

	it("own props", () => {
		const buttonIsIconRight = true;
		const buttonIcon = "Apple";

		const wrapper = MountFactory.constructMount(
			componentName,
			false,
			{
				props: {
					isIconRight: buttonIsIconRight,
					icon: buttonIcon
				}
			}
		);

		const buttonIconComponent: VueWrapper = ElementFinderTrait.findComponentByName(wrapper, "ElIcon");

		expect(wrapper.html()).toContain("<apple></apple>");
		expect(AttributesTrait.getAttribute(buttonIconComponent, "class")).toContain(buttonIconRightClass);
	});

	it("default props", () => {
		const buttonDefaultType = "primary";
		const buttonDefaultSize = "default";
		const buttonDefaultIsDisable = false;
		const buttonDefaultIsLink = false;
		const buttonDefaultIsText = false;
		const buttonDefaultIsRound = false;
		const buttonDefaultIsCircle = false;
		const buttonDefaultIsPlain = false;
		const buttonDefaultIsBg = false;
		const buttonDefaultIsLoading = false;

		const wrapper = MountFactory.constructMount(
			componentName,
			true
		);

		expect(AttributesTrait.getProp(wrapper, "type")).toBe(buttonDefaultType);
		expect(AttributesTrait.getProp(wrapper, "size")).toBe(buttonDefaultSize);
		expect(AttributesTrait.getProp(wrapper, "isDisable")).toBe(buttonDefaultIsDisable);
		expect(AttributesTrait.getProp(wrapper, "isLink")).toBe(buttonDefaultIsLink);
		expect(AttributesTrait.getProp(wrapper, "isText")).toBe(buttonDefaultIsText);
		expect(AttributesTrait.getProp(wrapper, "isRound")).toBe(buttonDefaultIsRound);
		expect(AttributesTrait.getProp(wrapper, "isCircle")).toBe(buttonDefaultIsCircle);
		expect(AttributesTrait.getProp(wrapper, "isPlain")).toBe(buttonDefaultIsPlain);
		expect(AttributesTrait.getProp(wrapper, "isBg")).toBe(buttonDefaultIsBg);
		expect(AttributesTrait.getProp(wrapper, "isLoading")).toBe(buttonDefaultIsLoading);
	});

	it("own default props", () => {
		const buttonIcon = "Apple";

		const wrapper = MountFactory.constructMount(
			componentName,
			false,
			{
				props: {
					icon: buttonIcon
				}
			}
		);

		const buttonIconComponent: VueWrapper = ElementFinderTrait.findComponentByName(wrapper, "ElIcon");

		expect(buttonIconComponent.html()).not.toContain(buttonIconRightClass);
	});
});

describe(`check ${componentName} slots`, () => {

	it("default slots", () => {
		const buttonDefaultContent = "My button";

		const wrapper = MountFactory.constructMount(
			componentName,
			false,
			{
				slots: {
					default: buttonDefaultContent
				}
			}
		);

		expect(wrapper.text()).toBe(buttonDefaultContent);
	});
});
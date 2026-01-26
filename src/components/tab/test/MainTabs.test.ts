import { expect, it } from "vitest";
import { ElementFinderTrait, MountFactory } from "@/test-utils";
import { TAB_LIST_MOCK } from "./mocks";

const componentName = "tabs";

const tabModelValue = "0";

it(`check ${componentName} panels`, () => {
	const wrapper = MountFactory.constructMount(
		componentName,
		false,
		{
			props: {
				modelValue: tabModelValue,
				tabs: TAB_LIST_MOCK
			}
		}
	);

	const tabPanelComponentList = ElementFinderTrait.findComponentListByName(wrapper, "MainTabPanel");

	expect(tabPanelComponentList.length).toBe(TAB_LIST_MOCK.length);
});
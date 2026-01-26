import { expect, it } from "vitest";
import { AttributesTrait, ElementFinderTrait, MountFactory } from "@/test-utils";
import { VueWrapper } from "@vue/test-utils";
import { BREADCRUMB_HISTORY_LIST_MOCK } from "./mocks";

const componentName = "breadcrumbs";

it(`check ${componentName} all props`, () => {
	const breadcrumbsSeparator = "/";
	const breadcrumbsSeparatorIcon = "Apple";

	const wrapper = MountFactory.constructMount(
		componentName,
		true,
		{
			props: {
				routeHistory: BREADCRUMB_HISTORY_LIST_MOCK,
				separator: breadcrumbsSeparator,
				separatorIcon: breadcrumbsSeparatorIcon
			}
		}
	);

	const breadcrumbItemList: VueWrapper[] = ElementFinderTrait.findComponentListByName(wrapper, "ElBreadcrumbItem");
	const elBreadcrumbComponent: VueWrapper = ElementFinderTrait.findComponentByName(wrapper, "ElBreadcrumb");

	expect(AttributesTrait.getProp(elBreadcrumbComponent, "separator")).toBe(breadcrumbsSeparator);
	expect(AttributesTrait.getProp(elBreadcrumbComponent, "separatorIcon")).toBe(breadcrumbsSeparatorIcon);

	breadcrumbItemList.forEach((
		breadcrumbItem: VueWrapper,
		breadcrumbItemIndex: number
	): void => {
		expect(AttributesTrait.getAttribute(breadcrumbItem, "title")).toBe(
			BREADCRUMB_HISTORY_LIST_MOCK[breadcrumbItemIndex].title
		);
	});
});
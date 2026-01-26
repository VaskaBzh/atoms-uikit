import { VueWrapper } from "@vue/test-utils";
// @ts-ignore
import type { DOMWrapper } from "@vue/test-utils/dist/domWrapper";

export class ElementFinderTrait {
	public static findComponentByName(wrapper: VueWrapper, componentName: string): VueWrapper {
		return wrapper.findComponent({ name: componentName });
	}

	public static findComponentListByName(wrapper: VueWrapper, componentName: string): VueWrapper[] {
		return wrapper.findAllComponents({ name: componentName });
	}

	public static findElement(wrapper: VueWrapper, componentSelector: string): DOMWrapper {
		return wrapper.find(componentSelector);
	}

	public static findElementList(wrapper: VueWrapper, componentSelector: string): DOMWrapper[] {
		return wrapper.findAll(componentSelector);
	}
}
import { VueWrapper } from "@vue/test-utils";
// @ts-ignore
import { DOMWrapper } from "@vue/test-utils/dist/domWrapper";
import { UniversalObjectType } from "@/types";

export class AttributesTrait {
	public static getAttribute(wrapper: VueWrapper | DOMWrapper, attributeName: string): string {
		return wrapper.attributes(attributeName);
	}

	public static getClass(wrapper: VueWrapper | DOMWrapper, className: string): string {
		return wrapper.classes(className);
	}

	public static getProp
	<PropType extends (UniversalObjectType[] | UniversalObjectType | string | boolean | number | never | unknown)>
	(wrapper: VueWrapper | DOMWrapper, propName: string): PropType
	{
		return wrapper.props(propName);
	}
}
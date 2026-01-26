import { TestComponentsEnum } from "../../components";
import { mount, VueWrapper } from "@vue/test-utils";
// @ts-ignore
import { ComponentMountingOptions } from "@vue/test-utils/dist/mount";

export class MountFactory {
	private readonly wrapper: VueWrapper;

	private constructor(
		componentName: keyof typeof TestComponentsEnum,
		isShallow: boolean = false,
		componentOptions?: ComponentMountingOptions
	) {
		this.wrapper = mount(
			TestComponentsEnum[componentName],
			{
				...componentOptions,
				shallow: isShallow
			}
		);
	}

	private getWrapper(): VueWrapper {
		return this.wrapper;
	}

	public static constructMount(
		componentName: keyof typeof TestComponentsEnum,
		isShallow: boolean = false,
		componentOptions?: ComponentMountingOptions
	) {
		const factory = new MountFactory(
			componentName,
			isShallow,
			componentOptions
		);

		return factory.getWrapper();
	}
}
import { expect, it, describe } from "vitest";
import { AttributesTrait, ElementFinderTrait, MountFactory } from "@/test-utils";
import { SELECT_OPTION_LIST_MOCK } from "./mocks";
import { Component } from "vue";

const componentName = "select";

const selectModelValue = "0";
const selectPlaceholder = "My select label";

// isOnlyImage
// :class="{
// 'select__option-with-image': Boolean(selectOption.img)
// }"
// >
// <template #default v-if="selectOption.img">
// <span class="select__option_label" v-if="!isOnlyImage">
// 	{{ selectOption.label }}
// </span>
// <img
// v-if="typeof selectOption.img === 'string'"
// 	class="select__option_image"
// :src="selectOption.img"
// alt=""
// 	>
// 	<main-icon
// v-else
// :size="21"
// :icon="selectOption.img"
// 	/>
// 	</template>

describe(`check ${componentName}s option with image`, () => {
	const expectSelectOptionWithImgClass = "select__option-with-image";

	const wrapper = MountFactory.constructMount(
		componentName,
		false,
		{
			props: {
				modelValue: selectModelValue,
				selectOptions: SELECT_OPTION_LIST_MOCK,
				placeholder: selectPlaceholder
			}
		}
	);

	const selectOptionComponentList = ElementFinderTrait.findComponentListByName(wrapper, "MainSelectOption");

	it("own class", () => {
		selectOptionComponentList.forEach((selectOptionComponent, selectOptionComponentIndex) => {
			if (SELECT_OPTION_LIST_MOCK[selectOptionComponentIndex].img) {
				expect(AttributesTrait.getClass(selectOptionComponent, expectSelectOptionWithImgClass)).toBeTruthy();
			}
		});
	});

	it("image component visualized (img | main-icon)", () => {
		selectOptionComponentList.forEach((selectOptionComponent, selectOptionComponentIndex) => {
			const imageOrUndefined: string | Component | undefined = SELECT_OPTION_LIST_MOCK[selectOptionComponentIndex].img;

			if (imageOrUndefined) {
				const image: string | Component = imageOrUndefined;

				// expect(
				// 	ElementFinderTrait.findElement(selectOptionComponent, "img").exists()
				// 	|| ElementFinderTrait.findComponentByName(selectOptionComponent, "MainIcon").exists()
				// ).toBeTruthy();
				if (typeof image === "string" && image.split("/").length > 1) {
					expect(ElementFinderTrait.findElement(selectOptionComponent, "img").exists()).toBeTruthy();
				} else {
					expect(ElementFinderTrait.findComponentByName(selectOptionComponent, "MainIcon").exists()).toBeTruthy();
				}
			}
		});
	});
});
describe(`${componentName} component custom prop (isOnlyImage)`, () => {
	it.each([
		[`with default state prop`, undefined, true],
		[`with false state prop`, false, true],
		[`with true state prop`, true, false],
	])(`${componentName} %s`, (
		_,
		isOnlyImageProp,
		expectExistSelectOptionLabel
	) => {
		const wrapper = MountFactory.constructMount(
			componentName,
			false,
			{
				props: {
					modelValue: selectModelValue,
					selectOptions: SELECT_OPTION_LIST_MOCK,
					placeholder: selectPlaceholder,
					isOnlyImage: isOnlyImageProp
				}
			}
		);

		const selectOptionComponentList = ElementFinderTrait.findComponentListByName(wrapper, "MainSelectOption");

		selectOptionComponentList.forEach((selectOption, selectOptionIndex) => {
			if (SELECT_OPTION_LIST_MOCK[selectOptionIndex].img) {
				expect(Boolean(selectOption.text())).toBe(expectExistSelectOptionLabel);
			}
		});
	});
});
import { VueWrapper } from "@vue/test-utils";
import { VNode } from "@vue/runtime-core";

export class SlotTrait {
	public static findSlotContent(wrapper: VueWrapper, slotName: string): string | null {
		const wrapperSlot = wrapper.vm.$slots[slotName];

		if (wrapperSlot) {
			return String(wrapperSlot()[0].children);
		}

		return null;
	}

	public static findSlot(wrapper: VueWrapper, slotName: string): VNode | null {
		const wrapperSlot = wrapper.vm.$slots[slotName];

		if (wrapperSlot) {
			return wrapperSlot()[0];
		}

		return null;
	}
}
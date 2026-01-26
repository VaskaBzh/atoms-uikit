import { Ref, ref } from "vue";

export const isDark: Ref<boolean> = ref(false);

export function changeTheme(): void {
    isDark.value = !isDark.value;
}
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import type { App } from "vue";

export function InitUiIcons(app: App): void {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component);
    }
}
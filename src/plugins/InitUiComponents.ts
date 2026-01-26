import { App } from "vue";
import { uiComponents } from "@/components";

export function InitUiComponents(app: App): void {
    Object.entries(uiComponents).forEach(([componentName, componentData]): void => {
        app.component(componentName, componentData);
    })
}
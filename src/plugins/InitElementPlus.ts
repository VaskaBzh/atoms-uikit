import ElementPlus from 'element-plus';
import type { App } from 'vue';

export function InitElementPlus(app: App): void {
    app.use(ElementPlus);
}

import { ElLoading } from "element-plus";
import { App } from "vue";

export function LoadingDirectivePlugin(): (app: App) => void {
    return ElLoading.install
}
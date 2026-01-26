import { LoadingParentElement } from "element-plus";
import { ComponentPublicInstance, ComponentOptionsBase, Ref } from "vue";

export interface LoadingParamsContract {
    text: string,
    lock?: boolean,
    background?: string,
}

export interface LoadingContract {
    setText: (text: string) => void,
    removeElLoadingChild: () => void,
    close: () => void,
    handleAfterLeave: () => void,
    vm: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>,
    $el: HTMLElement,
    originalPosition: Ref<string>,
    originalOverflow: Ref<string>,
    visible: Ref<boolean>,
    parent: Ref<LoadingParentElement>,
    background: Ref<string>,
    svg: Ref<string>,
    svgViewBox: Ref<string>,
    spinner: Ref<string | boolean>,
    text: Ref<string>,
    fullscreen: Ref<boolean>,
    lock: Ref<boolean>,
    customClass: Ref<string>,
    target: Ref<HTMLElement>,
    beforeClose?: () => boolean,
    closed?: () => void,
}
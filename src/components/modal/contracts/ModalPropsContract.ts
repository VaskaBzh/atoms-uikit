export interface ModalPropsContract {
    title?: string,
    width?: string,
    isShowClose?: boolean,
    // center horizontal
    isCenter?: boolean,
    // full center
    isAlignCenter?: boolean,
    // callback after close
    beforeClose?: (done: () => void) => void,
    // required to nested dialogs
    isAppendToBody?: boolean,
    // makes v-if directive to modal
    isDestroyOnClose?: boolean,
    isOverflow?: boolean,
    isDraggable?: boolean,
    // locking scroll in modal
    isLockScroll?: boolean,
}
<template>
  <el-dialog
    class="modal"
    v-model="modelValue"
    :title="title"
    :width="width"
    :before-close="beforeClose"
    :show-close="isShowClose"
    :append-to-body="isAppendToBody"
    :center="isCenter"
    :align-center="isAlignCenter"
    :destroy-on-close="isDestroyOnClose"
    :lock-scroll="isLockScroll"
    @open="$emit('open')"
    @close="$emit('close')"
  >
    <!-- scoped slot #header="{ close, titleId, titleClass }", simple slot #footer -->
    <!-- to see dialog slots, look https://element-plus.org/en-US/component/dialog.html -->
    <template #header="{ close, titleId, titleClass }">
      <slot name="header" :close="close" :titleId="titleId" :titleClass="titleClass" />
    </template>
    <slot />
    <template #footer>
      <slot name="footer" />
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ModalPropsContract } from "./contracts";
import { ModelRef } from "vue";

withDefaults(
  defineProps<ModalPropsContract>(),
  {
    width: "50%",
    isShowClose: true,
    isAppendToBody: false,
    isCenter: false,
    isAlignCenter: true,
    isDestroyOnClose: false,
    isOverflow: false,
    isDraggable: false,
    isLockScroll: false,
  }
)

defineEmits<{
  (event: "close"): void
  (event: "open"): void
}>()

const modelValue: ModelRef<boolean | undefined> = defineModel()
</script>

<style scoped lang="scss">
.modal {
}
</style>
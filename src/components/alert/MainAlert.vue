<template>
  <el-alert
      class="alert"
      :title="title"
      :type="type"
      :description="description"
      :show-icon="isShowIcon"
      :center="isCenter"
      :closable="isClosable"
      :effect="effect"
      :close-text="closeText"
      @close="$emit('close')"
  />
</template>

<script
    setup
    lang="ts"
>
import { AlertPropsContract } from "./contracts";

withDefaults(
    defineProps<AlertPropsContract>(),
    {
        isShowIcon: true,
        isCenter: false,
        isClosable: true,
        effect: "light",
        type: "info",
    }
)

defineEmits<{
    (event: "close"): void
}>()
</script>

<style
    scoped
    lang="scss"
>
.alert {
    --el-alert-padding: 8px 24px 8px 16px;
}
:global(.el-alert.is-light) {
    border: 1px solid var(--el-alert-border);
}

:global(.el-alert.el-alert--success) {
    --el-alert-border: #60b515;
    --el-color-success: #318700;
}

:global(.el-alert.el-alert--warning) {
    --el-alert-border: #d28f00;
    --el-color-warning: #d28f00;
}

:global(.el-alert.el-alert--info) {
    --el-alert-border: #49afd9;
    --el-color-info: #007cbb;
}

:global(.el-alert.el-alert--error) {
    --el-alert-border: #ebafa6;
    --el-color-error: #c92100;
}

//:global(:root) {
//  --el-color-success: #565656;
//  --el-color-success-light-9: #dff0d0;
//}
</style>
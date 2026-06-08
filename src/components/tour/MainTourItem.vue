<template>
  <el-tour-step
    :target="target"
    :title="title"
    :description="description"
    :mask="isMask"
    :placement="placement"
    :prev-button-props="mappedPrevProps"
    :next-button-props="mappedNextProps"
  >
    <template v-if="$slots.default">
      <slot />
    </template>
  </el-tour-step>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { TourItemPropsContract } from "./contracts";
import { mapToElButton } from "@/components/button";

const props = withDefaults(
  defineProps<TourItemPropsContract>(),
  {
    isMask: true,
    isLast: false,
  }
);

const mappedPrevProps = computed(() =>
  mapToElButton(props.prevButtonProps, props.prevButtonText)
);

const mappedNextProps = computed(() =>
  mapToElButton(
    props.isLast ? (props.finishButtonProps ?? props.nextButtonProps) : props.nextButtonProps,
    props.isLast ? (props.finishButtonText ?? props.nextButtonText) : props.nextButtonText,
  )
);
</script>

<style scoped lang="scss">
</style>

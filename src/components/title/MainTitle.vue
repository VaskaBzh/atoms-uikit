<template>
  <component
    :is="tag"
    class="title"
    :class="`title-${tag}`"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { TitlePropsContract } from "./contracts";

withDefaults(
  defineProps<TitlePropsContract>(),
  {
    tag: "h1",
  }
)
</script>

<style scoped lang="scss">
.title {
  color: var(--el-text-color-primary);
  font-size: 1.166667rem;
  letter-spacing: normal;
  line-height: 1rem;
  font-weight: 200;
  &-h1 {
    color: #000;
    line-height: 2rem;
  }
  &-h2 {
    line-height: 2rem;
  }
  &-h3 {
    font-size: 0.916667rem;
  }
  &-h4 {
    font-size: 0.75rem;
  }
  &-h5 {
    font-weight: 400;
    font-size: 0.666667rem;
    letter-spacing: 0.01em;
  }
  &-h6 {
    font-weight: 400;
    font-size: 0.583333rem;
  }
}
</style>
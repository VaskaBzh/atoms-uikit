<template>
  <el-radio-group
    v-model="modelValue"
    :text-color="textColor"
    :fill="fill"
    @change="$emit('change', $event)"
  >
    <el-radio
      class="radio_item"
      v-for="(radioData, radioIndex) in radiosData"
      :key="radioData.value + radioIndex"
      :value="radioData.value"
      :label="radioData.label"
      :border="isBorder ? isBorder : radioData.isBorder"
      :disabled="isDisable ? isDisable : radioData.isDisabled"
      :size="size"
    />
  </el-radio-group>
</template>

<script setup lang="ts">
import { RadioPropsContract } from "./contracts";
import { ModelRef } from "vue";

withDefaults(
  defineProps<RadioPropsContract>(),
  {
    isDisable: false,
    isBorder: false,
    size: "default"
  }
)

const modelValue: ModelRef<string | number | boolean | undefined> = defineModel();

defineEmits<{
    (event: "change", value: string | number | boolean | undefined): void
}>();
</script>

<style scoped lang="scss">
.radio {
  &_item {
    --el-color-primary: #0094d2;
  }
}
</style>
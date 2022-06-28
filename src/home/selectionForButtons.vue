<template lang="pug">
nav.wrap
  label.radio(v-for="color in colors")
    input(type="radio", :id="color + '-' + context", :name="'color-' + context", :checked="color == selectedColor", @click="domain.updateElementColor(context, color)")
    span {{ color || "default" }}
  label.radio(v-for="size in sizes")
    input(type="radio", :id="size + '-' + context", :name="'size-' + context", :checked="size == selectedSize", @click="domain.updateSize(context, size)")
    span {{ size || "medium" }}
</template>

<script setup lang="ts">
import domain from './domain';
import { onMounted } from 'vue';

export interface IProps {
  context?: string,
  colors?: Array<string>,
  sizes?: Array<string>,
  defaultColor?: string,
  defaultSize?: string,
  selectedColor?: string,
  selectedSize?: string,
}

const {
  context = "buttons",
  colors = ["", "green", "orange", "pink"],
  sizes = ["small", "", "large", "extra"],
  defaultColor = "",
  defaultSize = "",
  selectedColor = "",
  selectedSize = ""
} = defineProps<IProps>();

onMounted(() => {
  domain.updateElementColor(context, selectedColor);
  domain.updateSize(context, selectedSize);
});
</script>
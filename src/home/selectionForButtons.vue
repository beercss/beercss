<template lang="pug">
nav.wrap
  label.radio(v-for="color in colors")
    input(type="radio", :id="color + '-' + context", :name="'color-' + context", :checked="color == selectedColor", @click="domain.updateElementColor(context, color)")
    span {{ color || "default" }}
  label.radio(v-for="size in sizes")
    input(type="radio", :id="size + '-' + context", :name="'size-' + context", :checked="size == selectedSize", @click="domain.updateSize(context, size)")
    span {{ size || "medium" }}
  label.radio(v-for="elevate in elevates")
    input(type="radio", :id="elevate + '-' + context", :name="'elevate-' + context", :checked="elevate == selectedShadow", @click="domain.updateShadow(context, elevate)")
    span {{ elevate || "no-elevate" }}
  
</template>

<script setup lang="ts">
import domain from './domain';
import { onMounted } from 'vue';

export interface IProps {
  context?: string,
  colors?: Array<string>,
  sizes?: Array<string>,
  elevates?: Array<string>,
  defaultColor?: string,
  defaultSize?: string,
  defaultShadow?: string,
  selectedColor?: string,
  selectedSize?: string,
  selectedShadow?: string
}

const {
  context = "buttons",
  colors = ["", "fill", "primary", "secondary", "tertiary"],
  sizes = ["small", "", "large", "extra"],
  elevates = ["", "small-elevate", "medium-elevate", "large-elevate"],
  defaultColor = "",
  defaultSize = "",
  defaultShadow = "",
  selectedColor = "",
  selectedSize = "",
  selectedShadow = ""
} = defineProps<IProps>();

onMounted(() => {
  if (colors.length) domain.updateElementColor(context, selectedColor);
  if (sizes.length) domain.updateSize(context, selectedSize);
  if (elevates.length) domain.updateShadow(context, selectedShadow);
});
</script>
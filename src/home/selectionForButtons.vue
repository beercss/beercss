<template lang="pug">
nav.wrap
  label.radio(v-for="color in colors")
    input(type="radio", :id="color + '-' + context", :name="'color-' + context", :checked="color === selectedColor", @click="domain.updateElementColor(context, color)")
    span {{ color || "default" }}
  label.radio(v-for="size in sizes")
    input(type="radio", :id="size + '-' + context", :name="'size-' + context", :checked="size === selectedSize", @click="domain.updateSize(context, size)")
    span {{ size || emptySize || "medium" }}
  label.radio(v-for="elevate in elevates")
    input(type="radio", :id="elevate + '-' + context", :name="'elevate-' + context", :checked="elevate === selectedShadow", @click="domain.updateElevate(context, elevate)")
    span {{ elevate || "no-elevate" }}
  label.radio(v-for="direction in directions")
    input(type="radio", :id="direction + '-' + context", :name="'direction-' + context", :checked="direction === selectedDirection", @click="domain.updateDirection(context, direction)")
    span {{ direction || "" }}

</template>

<script setup lang="ts">
import domain from "./domain";
import { onMounted } from "vue";

export interface IProps {
  context?: string,
  colors?: Array<string>,
  sizes?: Array<string>,
  elevates?: Array<string>,
  directions?: Array<string>,
  defaultColor?: string,
  defaultSize?: string,
  defaultShadow?: string,
  defaultDirection?: string,
  selectedColor?: string,
  selectedSize?: string,
  selectedShadow?: string,
  selectedDirection?: string,
  emptySize?: string,
}

const data = withDefaults(defineProps<IProps>(), {
  context: "buttons",
  colors: () => ["", "fill", "primary", "secondary", "tertiary"],
  sizes: () => ["small", "", "large", "extra"],
  elevates: () => ["", "small-elevate", "medium-elevate", "large-elevate"],
  directions: () => [],
  defaultColor: "",
  defaultSize: "",
  defaultShadow: "",
  defaultDirection: "",
  selectedColor: "",
  selectedSize: "",
  selectedShadow: "",
  selectedDirection: "",
});

onMounted(() => {
  if (data.colors.length) domain.updateElementColor(data.context, data.selectedColor);
  if (data.sizes.length) domain.updateSize(data.context, data.selectedSize);
  if (data.elevates.length) domain.updateElevate(data.context, data.selectedShadow);
  if (data.directions.length) domain.updateDirection(data.context, data.selectedDirection);
});
</script>

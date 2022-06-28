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

const props = defineProps({
  context: {
    type: String,
    default: "buttons"
  },
  colors: {
    type: Array as () => Array<string>,
    default() {
      return ["", "green", "orange", "pink"];
    }
  },
  sizes: {
    type: Array as () => Array<string>,
    default() {
      return ["small", "", "large", "extra"]
    }
  },
  defaultColor: {
    type: String,
    default: ""
  },
  defaultSize: {
    type: String,
    default: ""
  },
  selectedColor: {
    type: String,
    default: ""
  },
  selectedSize: {
    type: String,
    default: ""
  }
});

onMounted(() => {
  domain.updateElementColor(props.context, props.selectedColor);
  domain.updateSize(props.context, props.selectedSize);
});
</script>
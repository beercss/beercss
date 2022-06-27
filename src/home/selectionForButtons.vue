<template lang="pug">
nav.wrap
  label.radio(v-for="color in colors")
    input(type="radio", :id="color + '-' + context", :name="'color-' + context", :checked="color == selectedColor", @click="domain.updateElementColor(context, color)")
    span {{ color }}
  label.radio(v-for="size in sizes")
    input(type="radio", :id="size + '-' + context", :name="'size-' + context", :checked="size == selectedSize", @click="domain.updateSize(context, size)")
    span {{ size }}
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
      return ["default", "green", "orange", "pink"];
    }
  },
  sizes: {
    type: Array as () => Array<string>,
    default() {
      return ["small", "medium", "large", "extra"]
    }
  },
  defaultColor: {
    type: String,
    default: "default"
  },
  defaultSize: {
    type: String,
    default: "medium"
  },
  selectedColor: {
    type: String,
    default: "default"
  },
  selectedSize: {
    type: String,
    default: "medium"
  }
});

onMounted(() => {
  domain.updateElementColor(props.context, props.selectedColor);
  domain.updateSize(props.context, props.selectedSize);
});
</script>
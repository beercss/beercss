<template lang="pug">
nav.wrap
  label.radio(v-for="color in colors")
    input(@click="customize()", type="radio", :id="color + '-' + context", :name="'color-' + context", :checked="color == selectedColor")
    span {{ color }}
  label.radio(v-for="size in sizes")
    input(@click="customize()", type="radio", :id="size + '-' + context", :name="'size-' + context", :checked="size == selectedSize")
    span {{ size }}
</template>

<script setup lang="ts">
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

const customize = () => {
  let context = props.context || "buttons";
  var ids = [...props.colors, ...props.sizes];
  var buttons = $("#" + context).find("button:not(.border)");
  var buttonsBorder = $("#" + context).find("button.border");
  for (var i = 0; i < ids.length; i++) {
    buttons.removeClass(props.defaultColor);
    buttons.removeClass(props.defaultSize);
    buttons.removeClass(props.defaultColor + "-border");
    buttons.removeClass(props.defaultColor + "-text");
    buttons.removeClass(ids[i]);
    buttons.removeClass(ids[i] + "-border");
    buttons.removeClass(ids[i] + "-text");

    buttonsBorder.removeClass(props.defaultColor);
    buttonsBorder.removeClass(props.defaultSize);
    buttonsBorder.removeClass(props.defaultColor + "-border");
    buttonsBorder.removeClass(props.defaultColor + "-text");
    buttonsBorder.removeClass(ids[i]);
    buttonsBorder.removeClass(ids[i] + "-border");
    buttonsBorder.removeClass(ids[i] + "-text");
    
    var selector = "#" + ids[i] + "-" + context;
    if ($(selector).is(":checked")) {
      buttons.addClass(ids[i]);
      if (["small", "medium", "large", "extra"].indexOf(ids[i]) == -1) {
        buttonsBorder.addClass(ids[i] + "-border");
        buttonsBorder.addClass(ids[i] + "-text");
      } else {
        buttonsBorder.addClass(ids[i]);
      }
    }
  }
}

onMounted(customize);
</script>
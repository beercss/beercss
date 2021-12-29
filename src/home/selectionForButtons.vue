<template lang="pug">
nav.wrap
  label.radio(v-for="color in colors")
    input(@click="customize()", type="radio", :id="color + '-' + context", :name="'color-' + context", :checked="color == selectedColor")
    span {{ color }}
  label.radio(v-for="size in sizes")
    input(@click="customize()", type="radio", :id="size + '-' + context", :name="'size-' + context", :checked="size == selectedSize")
    span {{ size }}
</template>

<script>
export default {
  props: {
    context: {
      type: String,
      default: "buttons"
    },
    colors: {
      type: Array,
      default() {
        return ["default", "green", "orange", "pink"];
      }
    },
    sizes: {
      type: Array,
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
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.customize();
  },
  methods: {
    customize() {
      let context = this.context || "buttons";
      var ids = [].concat(this.colors, this.sizes);
      var buttons = $("#" + context).find("button:not(.border)");
      var buttonsBorder = $("#" + context).find("button.border");
      for (var i = 0; i < ids.length; i++) {
        buttons.removeClass(this.defaultColor);
        buttons.removeClass(this.defaultSize);
        buttons.removeClass(this.defaultColor + "-border");
        buttons.removeClass(this.defaultColor + "-text");
        buttons.removeClass(ids[i]);
        buttons.removeClass(ids[i] + "-border");
        buttons.removeClass(ids[i] + "-text");

        buttonsBorder.removeClass(this.defaultColor);
        buttonsBorder.removeClass(this.defaultSize);
        buttonsBorder.removeClass(this.defaultColor + "-border");
        buttonsBorder.removeClass(this.defaultColor + "-text");
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
  }
}
</script>
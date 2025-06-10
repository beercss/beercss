<template lang="pug">
div
  .overlay
  dialog.large-width(:id="id")
    slot
    header.fixed
      nav
        .max
          h5
            span Colors
            button.chip.circle(@click="showCode(true)")
              i code
        button.circle.transparent(:data-ui="'#' + id")
          i close
      nav.wrap
        button.chip.circle.small(@click="sharedDomain.updateMode(data.modelValue)")
          i {{ data.modelValue.isDark ? "light_mode" : "dark_mode" }}
        button.chip.circle
          i palette
          input(type="color", @input="sharedDomain.updateTheme(data.modelValue, $event)")
        button.chip.circle
          i upload
          input(type="file", @change="sharedDomain.updateTheme(data.modelValue, $event)")
        button.circle.small.red(@click="sharedDomain.updateTheme(data.modelValue, '#f44336')")
        button.circle.small.pink(@click="sharedDomain.updateTheme(data.modelValue, '#e91e63')")
        button.circle.small.purple(@click="sharedDomain.updateTheme(data.modelValue, '#9c27b0')")
        button.circle.small.deep-purple(@click="sharedDomain.updateTheme(data.modelValue, '#673ab7')")
        button.circle.small.indigo(@click="sharedDomain.updateTheme(data.modelValue, '#3f51b5')")
        button.circle.small.blue(@click="sharedDomain.updateTheme(data.modelValue, '#2196f3')")
        button.circle.small.light-blue(@click="sharedDomain.updateTheme(data.modelValue, '#03a9f4')")
        button.circle.small.cyan(@click="sharedDomain.updateTheme(data.modelValue, '#00bcd4')")
        button.circle.small.teal(@click="sharedDomain.updateTheme(data.modelValue, '#009688')")
        button.circle.small.green(@click="sharedDomain.updateTheme(data.modelValue, '#4caf50')")
        button.circle.small.light-green(@click="sharedDomain.updateTheme(data.modelValue, '#8bc34a')")
        button.circle.small.lime(@click="sharedDomain.updateTheme(data.modelValue, '#cddc39')")
        button.circle.small.yellow(@click="sharedDomain.updateTheme(data.modelValue, '#ffeb3b')")
        button.circle.small.amber(@click="sharedDomain.updateTheme(data.modelValue, '#ffc107')")
        button.circle.small.orange(@click="sharedDomain.updateTheme(data.modelValue, '#ff9800')")
        button.circle.small.deep-orange(@click="sharedDomain.updateTheme(data.modelValue, '#ff5722')")
        button.circle.small.brown(@click="sharedDomain.updateTheme(data.modelValue, '#795548')")
        button.circle.small.grey(@click="sharedDomain.updateTheme(data.modelValue, '#9e9e9e')")
        button.circle.small.blue-grey(@click="sharedDomain.updateTheme(data.modelValue, '#607d8b')")
        button.circle.small.black(@click="sharedDomain.updateTheme(data.modelValue, '#000000')")
        button.circle.small.white(@click="sharedDomain.updateTheme(data.modelValue, '#ffffff')")
  .overlay
  dialog.right(:id="dialogCodeId()")
    nav
      h5 Themes
      a.button.border.m.l(href="https://github.com/beercss/beercss/blob/main/docs/SETTINGS.md", target="_blank") Documentation
      .max
      button.transparent.circle(@click="showCode(false)")
        i close
    nav
      label.radio
        input(v-model="data.modelValue.theme.selected", type="radio", value="light")
        span Light
      label.radio
        input(v-model="data.modelValue.theme.selected", type="radio", value="dark")
        span Dark
    .space
    article.border
      pre.scroll
        code(v-html="sourceCode()")
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import sharedDomain from "./domain";
import { type ILayout } from "./interfaces";

export interface IProps {
  id?: string,
  modelValue?: ILayout,
  position?: string,
}

const data = withDefaults(defineProps<IProps>(), {
  id: "themes",
  position: "left",
});

onMounted(() => {
  sharedDomain.applyTheme(data.modelValue);
});

const showCode = (show: boolean) => {
  if (!data.modelValue) return;
  if (!data.modelValue.theme.light || !data.modelValue.theme.dark || !data.modelValue.theme.selected) sharedDomain.updateTheme(data.modelValue, null);
  data.modelValue.showCssVariables = show;
  openCode();
};

const sourceCode = () => {
  if (!data.modelValue) return;
  return ((data.modelValue.theme as any)[data.modelValue.theme.selected] || "").replace(/;/g, ";<br/>");
};

const openCode = () => {
  ui(`#${dialogCodeId()}`);
}

const dialogCodeId = () => {
  return `${data.id}-code`;
}
</script>

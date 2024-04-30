<template lang="pug">
.overlay
dialog.medium(:id="id", :class="{ left: position === 'left', right: position === 'right' }")
  slot
  header.fixed
    nav(v-if="!data.modelValue.showCssVariables")
      .max
        h5
          span Themes
          a.chip.circle(@click="data.modelValue.showCssVariables=true")
            i code
      button.circle.transparent(:data-ui="'#' + id")
        i close
    nav(v-if="data.modelValue.showCssVariables")
      h5 Themes
      a.button.border.m.l(href="https://github.com/beercss/beercss/blob/main/docs/SETTINGS.md", target="_blank") Documentation
      .max
      button.transparent.circle(@click="data.modelValue.showCssVariables=false")
        i close
  div(v-if="!data.modelValue.showCssVariables")
    nav.wrap
      a.chip.circle.small(@click="sharedDomain.updateMode(data.modelValue)")
        i {{ data.modelValue.isDark ? "light_mode" : "dark_mode" }}
      a.chip.circle
        i palette
        input(type="color", @input="sharedDomain.updateTheme(data.modelValue, $event)")
      a.chip.circle
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
  div(v-if="data.modelValue.showCssVariables")
    nav
      label.radio
        input(type="radio", value="light", v-model="data.modelValue.theme.selected")
        span Light
      label.radio
        input(type="radio", value="dark", v-model="data.modelValue.theme.selected")
        span Dark
    .space
    article.border
      pre.scroll.large-padding.fill(v-html="sourceCode()")
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import sharedDomain from "./domain";

export interface IProps {
  id?: string,
  modelValue?: any,
  position?: string,
}

const data = withDefaults(defineProps<IProps>(), {
  id: "themes",
  modelValue: null,
  position: "left",
});

onMounted(() => {
  if (!data.modelValue.theme || !data.modelValue.theme.light || !data.modelValue.theme.dark || !data.modelValue.theme.selected) { sharedDomain.updateTheme(data.modelValue, null); }
});

const sourceCode = () => {
  return ((data.modelValue.theme as any)[data.modelValue.theme.selected] || "").replace(/;/g, ";<br/>");
};
</script>

<style scoped>
pre {
  white-space: normal;
}
</style>

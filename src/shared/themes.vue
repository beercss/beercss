<template lang="pug">
.modal.large.left.no-scroll(:id="id")
  slot
  div(v-show="!data.showCssVariables")
    nav
      .max
        h5
          span Themes
          a.chip.circle(@click="data.showCssVariables=true")
            i code
      button.circle.transparent(@click="sharedDomain.updateMode(data)")
        i light_mode
      button.circle.transparent(:data-ui="'#' + id")
        i close
    .tabs.left-align
      a.active(:data-ui="`#${id}-tab-image`") From image
      a(:data-ui="`#${id}-tab-color`") From color
    .page.right.active(:id="`${id}-tab-image`")
      .space
      nav.wrap
        button.round.square.transparent.extra(@click="sharedDomain.updateTheme(data, '/wallpaper-1.jpg')")
          img.responsive(:src="'/wallpaper-1.jpg'")
        button.round.square.transparent.extra(@click="sharedDomain.updateTheme(data, '/wallpaper-2.jpg')")
          img.responsive(:src="'/wallpaper-2.jpg'")
        button.round.square.transparent.extra(@click="sharedDomain.updateTheme(data, '/wallpaper-3.jpg')")
          img.responsive(:src="'/wallpaper-3.jpg'")
        button.round.square.transparent.extra(@click="sharedDomain.updateTheme(data, '/wallpaper-4.jpg')")
          img.responsive(:src="'/wallpaper-4.jpg'")
        button.round.square.transparent.extra(@click="sharedDomain.updateTheme(data, '/wallpaper-5.jpg')")
          img.responsive(:src="'/wallpaper-5.jpg'")
        button.round.square.extra
          i upload
          input.absolute.top.left.right.bottom.no-opacity(type="file", @change="sharedDomain.updateTheme(data, $event)")
    .page.right(:id="`${id}-tab-color`")
      .space
      nav.wrap
        button.round.square.extra.red(@click="sharedDomain.updateTheme(data, '#f44336')")
        button.round.square.extra.pink(@click="sharedDomain.updateTheme(data, '#e91e63')")
        button.round.square.extra.purple(@click="sharedDomain.updateTheme(data, '#9c27b0')")
        button.round.square.extra.deep-purple(@click="sharedDomain.updateTheme(data, '#673ab7')")
        button.round.square.extra.indigo(@click="sharedDomain.updateTheme(data, '#3f51b5')")
        button.round.square.extra.blue(@click="sharedDomain.updateTheme(data, '#2196f3')")
        button.round.square.extra.light-blue(@click="sharedDomain.updateTheme(data, '#03a9f4')")
        button.round.square.extra.cyan(@click="sharedDomain.updateTheme(data, '#00bcd4')")
        button.round.square.extra.teal(@click="sharedDomain.updateTheme(data, '#009688')")
        button.round.square.extra.green(@click="sharedDomain.updateTheme(data, '#4caf50')")
        button.round.square.extra.light-green(@click="sharedDomain.updateTheme(data, '#8bc34a')")
        button.round.square.extra.lime(@click="sharedDomain.updateTheme(data, '#cddc39')")
        button.round.square.extra.yellow(@click="sharedDomain.updateTheme(data, '#ffeb3b')")
        button.round.square.extra.amber(@click="sharedDomain.updateTheme(data, '#ffc107')")
        button.round.square.extra.orange(@click="sharedDomain.updateTheme(data, '#ff9800')")
        button.round.square.extra.depp-orange(@click="sharedDomain.updateTheme(data, '#ff5722')")
        button.round.square.extra.brown(@click="sharedDomain.updateTheme(data, '#795548')")
        button.round.square.extra.grey(@click="sharedDomain.updateTheme(data, '#9e9e9e')")
        button.round.square.extra.blue-grey(@click="sharedDomain.updateTheme(data, '#607d8b')")
        button.round.square.extra.black(@click="sharedDomain.updateTheme(data, '#000000')")
        button.round.square.extra.white(@click="sharedDomain.updateTheme(data, '#ffffff')")
  div(v-if="data.showCssVariables && data.theme")
    header.fixed(@click="data.showCssVariables=false")
      nav
        button.transparent.circle(data-ui="")
          i arrow_backward
        h5 Back
        a.button.border(href="https://github.com/beercss/beercss/blob/main/docs/SETTINGS.md", target="_blank") Documentation
    nav
      label.radio
        input(type="radio", value="light", v-model="data.theme.selected")
        span Light
      label.radio
        input(type="radio", value="dark", v-model="data.theme.selected")
        span Dark
    .space
    article.border
      pre(v-html="data.theme[data.theme.selected]")
  nav.wrap
    
</template>

<script setup lang="ts">
import sharedDomain from "./domain";

export interface IProps {
  id?: string,
  modelValue?: any
}

const {
  id = "themes",
  modelValue = null
} = defineProps<IProps>();

const data = modelValue;
</script>

<style scoped>
pre {
  white-space: normal;
}
</style>
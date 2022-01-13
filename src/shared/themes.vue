<template lang="pug">
.modal.medium.left.no-scroll(:id="id")
  slot
  div(v-show="!showCssVariables")
    .row.no-wrap.middle-align.no-space
      .col
        h5.no-margin 
          span Themes
          a.chip.circle(@click="showCssVariables=true")
            i code
      .col.min
        nav.right-align
          a(@click="updateMode()")
            i light_mode
          a(:data-ui="'#' + id")
            i close
    .tabs.left-align
      a.active(:data-ui="`#${id}-tab-image`") From image
      a(:data-ui="`#${id}-tab-color`") From color
    .page.right.active(:id="`${id}-tab-image`")
      .space
      nav.wrap
        a.wave(@click="updateTheme('/wallpaper-1.jpg')")
          img.round.large(:src="'/wallpaper-1.jpg'")
        a.wave(@click="updateTheme('/wallpaper-2.jpg')")
          img.round.large(:src="'/wallpaper-2.jpg'")
        a.wave(@click="updateTheme('/wallpaper-3.jpg')")
          img.round.large(:src="'/wallpaper-3.jpg'")
        a.wave(@click="updateTheme('/wallpaper-4.jpg')")
          img.round.large(:src="'/wallpaper-4.jpg'")
        a.wave(@click="updateTheme('/wallpaper-5.jpg')")
          img.round.large(:src="'/wallpaper-5.jpg'")
        a.button.square.extra.flat
          i upload
          input.absolute.top.left.right.bottom(:id="`${id}-image`", type="file", @change="updateTheme(`#${id}-image`)", style="opacity: 0")
    .page.right(:id="`${id}-tab-color`")
      .space
      nav.wrap
        a.button.square.extra.flat.red.m.l(@click="updateTheme('#f44336')")
        a.button.square.extra.flat.pink.m.l(@click="updateTheme('#e91e63')")
        a.button.square.extra.flat.purple.m.l(@click="updateTheme('#9c27b0')")
        a.button.square.extra.flat.deep-purple.m.l(@click="updateTheme('#673ab7')")
        a.button.square.extra.flat.indigo.m.l(@click="updateTheme('#3f51b5')")
        a.button.square.extra.flat.blue.m.l(@click="updateTheme('#2196f3')")
        a.button.square.extra.flat.light-blue.m.l(@click="updateTheme('#03a9f4')")
        a.button.square.extra.flat.cyan.m.l(@click="updateTheme('#00bcd4')")
        a.button.square.extra.flat.teal.m.l(@click="updateTheme('#009688')")
        a.button.square.extra.flat.green.m.l(@click="updateTheme('#4caf50')")
        a.button.square.extra.flat.light-green.m.l(@click="updateTheme('#8bc34a')")
        a.button.square.extra.flat.lime.m.l(@click="updateTheme('#cddc39')")
        a.button.square.extra.flat.yellow.m.l(@click="updateTheme('#ffeb3b')")
        a.button.square.extra.flat.amber.m.l(@click="updateTheme('#ffc107')")
        a.button.square.extra.flat.orange.m.l(@click="updateTheme('#ff9800')")
        a.button.square.extra.flat.depp-orange.m.l(@click="updateTheme('#ff5722')")
        a.button.square.extra.flat.brown.m.l(@click="updateTheme('#795548')")
        a.button.square.extra.flat.grey.m.l(@click="updateTheme('#9e9e9e')")
        a.button.square.extra.flat.blue-grey.m.l(@click="updateTheme('#607d8b')")
        a.button.square.extra.flat.black.m.l(@click="updateTheme('#000000')")
        a.button.square.extra.flat.white.m.l(@click="updateTheme('#ffffff')")
  div(v-show="showCssVariables")
    header.fixed(@click="showCssVariables=false")
      a(data-ui="")
        i arrow_backward
        h5.small-margin Back
        a.button.border.link(href="https://m3.material.io/styles/color/overview", target="_blank") More about
    nav
      label.radio
        input(type="radio", value="light", v-model="selectedMode")
        span Light
      label.radio
        input(type="radio", value="dark", v-model="selectedMode")
        span Dark
    .space
    article.border
      pre(v-html="selectedTheme[selectedMode]")
  nav.wrap
    
</template>

<script>
import domain from "./domain";

export default {
  props: {
    id: {
      default: "themes",
      type: String
    },
    value: Object
  },
  data() {
    return this.value;
  },
  mouted() {
    ui();
  },
  methods: {
    toCssVariables(theme) {
      domain.toCssVariables(this.$data, theme);
    },
    updateTheme(url) {
      domain.updateTheme(this.$data, url, this.isDark ? "dark" : "light");
    },
    updateMode(mode) {
      domain.updateMode(this.$data, mode);
    }
  }
}
</script>

<style scoped>
pre {
  white-space: normal;
}
</style>
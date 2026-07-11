<template lang="pug">
#containers
  .large-space
  h4 Containers
  .medium-space
  h5.h6
    span Main content
    button.chip.circle(@click="domain.showSamples(data, '#main-content main', 'Main content', null, 'https://github.com/beercss/beercss/blob/main/docs/CONTAINER.md')")
      i code
  nav
    button.chip(@click="domain.updateResponsive('main', '')") Default
    button.chip(@click="domain.updateResponsive('main', 'responsive')") Responsive
  #main-content(v-show="false", v-if="data.isShowingSample")
      main
      main.responsive
  .medium-space
  h5.h6
    span Side content
    button.chip.circle(@click="domain.showSamples(data, '#containers .grid > div > div', 'Side content', null, 'https://github.com/beercss/beercss/blob/main/docs/CONTAINER.md')")
      i code
  .grid
    .s12.m6.l6
      div
        aside.right.small-width.small-height.padding
          img.responsive(alt="", :src="'/beer-and-woman.webp'")
        h5(aria-hidden="true") Title
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    .s12.m6.l6
      div
        aside.left.small-width.small-height.padding
          img.responsive(alt="", :src="'/beer-and-woman.webp'")
        h5(aria-hidden="true") Title
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

   
</template>
<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>

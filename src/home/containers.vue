<template lang="pug">
#containers
  .large-space
  h4
    span Containers
    button.chip.circle(@click="domain.showSamples(data, '#containers main.responsive', 'Containers', null, 'https://github.com/beercss/beercss/blob/main/docs/CONTAINER.md')")
      i code
  nav
    button(@click="domain.updateMinMax('main.responsive')") Min
    button(@click="domain.updateMinMax('main.responsive', 'max')") Max
  div(v-show="false")
    main.responsive
  .medium-space
  h6
    span Side content
    button.chip.circle(@click="domain.showSamples(data, '#containers .grid > div > div', 'Side content', null, 'https://github.com/beercss/beercss/blob/main/docs/CONTAINER.md')")
      i code
  .grid 
    .s12.m6.l6
      div
        aside.right.small-width.small-height.padding
          img.responsive(:src="'/beer-and-woman.jpg'")
        h5 Title
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    .s12.m6.l6
      div
        aside.left.small-width.small-height.padding
          img.responsive(:src="'/beer-and-woman.jpg'")
        h5 Title
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.


    
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>

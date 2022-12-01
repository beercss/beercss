<template lang="pug">
#expansions
  .large-space
  h4
    span Expansions
    a.chip.circle(@click="domain.showSamples(data, '#expansions > details, #expansions > article', 'Expansions', null, 'https://github.com/beercss/beercss/blob/main/docs/EXPANSION.md')")
      i code
  .medium-space
  details
    summary With icon
    p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  .medium-space
  details
    summary.none Without icon
    p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  .medium-space
  article
    details
      summary.none
        .row
          img.circle(:src="'/favicon.png'")
          .max
            h5 Custom
          i arrow_drop_down
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>

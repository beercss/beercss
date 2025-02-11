<template lang="pug">
#expansions
  .large-space
  h4
    span Expansions
    button.chip.circle(@click="domain.showSamples(data, '#expansions > details, #expansions > article', 'Expansions', null, 'https://github.com/beercss/beercss/blob/main/docs/EXPANSION.md')")
      i code
  .medium-space
  details
    summary Default
    p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

  hr.large
  details
    summary Multiple levels
    details
      summary First
      details
        summary Second
        details
          summary Third
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  hr.large
  details
    summary
      article.round.primary.no-elevate
        nav
          .max Custom summary
          i expand_more
    article.round.border First
    article.round.border Second
    article.round.border Third
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>

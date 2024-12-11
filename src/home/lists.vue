<template lang="pug">
div
  #lists
    .large-space
    h4
      span Lists
      button.chip.circle(@click="domain.showSamples(data, '#list .row', 'Lists')")
        i code
    .medium-space
    #list
      h6 Headline and supporting text
      .space
      a.row.padding.surface-container
        button.circle A
        .max
          h6.small Headline
        label +15 min
      .space
      a.row.padding.surface-container
        button.circle A
        .max
          h6.small Headline
          div Supporting text
        label +15 min
      .medium-space
      h6 Icons
      .space
      a.row.padding.surface-container
        i home
        .max
          h6.small Headline
        label +15 min
      .space
      a.row.padding.surface-container
        i home
        .max
          h6.small Headline
          div Supporting text
        label +15 min
      .medium-space
      h6 Leading media or avatar
      .space
      a.row.padding.surface-container
        img.round(:src="'/beer-and-woman.svg'")
        .max
          h6.small Headline
        label +15 min
      .space
      a.row.padding.surface-container
        img.round(:src="'/beer-and-woman.svg'")
        .max
          h6.small Headline
          div Supporting text
        label +15 min
      .medium-space
      h6 Buttons and links
      .space
      nav.row.padding.surface-container
        .max
          h6.small Headline
        a Link
        button Button
      .space
      nav.row.padding.surface-container
        .max
          h6.small Headline
          div Supporting text
        a Link
        button Button
    .medium-space
    .grid
      #list-dividers.s12.m6.l6
        h6
          span List dividers
          button.chip.circle(@click="domain.showSamples(data, '#list-dividers article', 'List containers')")
            i code
        article
          a.row.wave Item 1
          hr
          a.row.wave Item 2
          hr
          a.row.wave Item 3
          hr
          a.row.wave Item 4
          hr
          a.row.wave Item 5
      #list-expansions.s12.m6.l6
        h6
          span List expansions
          button.chip.circle(@click="domain.showSamples(data, '#list-expansions article', 'List containers')")
            i code
        article
          details
            summary.none 
              a.row.wave Header Item
            a.row.wave Item
            a.row.wave Item
            details
              summary.none 
                a.row.wave Header Item
              a.row.wave Item
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>

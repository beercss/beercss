<template lang="pug">
div
  #lists
    .large-space
    h4
      span Lists
      a.chip.circle(@click="domain.showSamples(data, '#list .row', 'Lists')")
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
      h6 Wave effect
      .space
      a.row.padding.surface-container.wave
        button.circle A
        .max
          h6.small Headline
        label +15 min
      .space
      a.row.padding.surface-container.wave
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
      h6
        span List containers
        a.chip.circle(@click="domain.showSamples(data, '#list-container article', 'List containers')")
          i code
    #list-container.grid
      .s12.m6.l6
        article
          a.row.padding
            .max
              h6.small Headline
              div Supporting text
            label +15 min
          a.row.padding
            .max
              h6.small Headline 2
              div Supporting text
            label +15 min
          a.row.padding
            .max
              h6.small Headline 3
              div Supporting text
            label +15 min
      .s12.m6.l6
        article
          a.row.padding
            .max
              h6.small Headline
              div Supporting text
            label +15 min
          .divider
          a.row.padding
            .max
              h6.small Headline 2
              div Supporting text
            label +15 min
          .divider
          a.row.padding
            .max
              h6.small Headline 3
              div Supporting text
            label +15 min
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>

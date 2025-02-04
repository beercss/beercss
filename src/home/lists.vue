<template lang="pug">
div
  #lists
    .large-space
    h4
      span Lists
    .medium-space
    .grid
      #list-default.s12.m6.l6
        h6
          span Default
          button.chip.circle(@click="domain.showSamples(data, '#list-default > article > .list', 'List border')")
            i code
        article
          ul.list.border
            li Item
            li Item
            li Item
            li Item
      #list-nested.s12.m6.l6
        h6
          span Nested
          button.chip.circle(@click="domain.showSamples(data, '#list-nested > article > .list', 'List nested')")
            i code
        article
          ul.list.border
            li Item
            li Item
            li
              ul.list.border
                li Item
                li Item
      #list-expansion.s12.m6.l6
        h6
          span Expansion
          button.chip.circle(@click="domain.showSamples(data, '#list-expansion > article > .list', 'List expansion')")
            i code
        article
          ul.list.border
            li Item
            li Item
            li
              details
                summary Header Item
                ul.list.border
                  li Item
                  li Item
    .medium-space
    #list1
      h6 
        span Headline and supporting text
        button.chip.circle(@click="domain.showSamples(data, '#list1 .list', 'Lists')")
          i code
      .space
      ul.list.border
        li
          button.circle A
          .max
            h6.small Headline
          label +15 min
        li
          button.circle A
          .max
            h6.small Headline
            div Supporting text
          label +15 min
    .medium-space
    #list2
      h6 
        span Icons
        button.chip.circle(@click="domain.showSamples(data, '#list2 .list', 'Lists')")
          i code
      .space
      ul.list.border
        li
          i home
          .max
            h6.small Headline
          label +15 min
        li
          i home
          .max
            h6.small Headline
            div Supporting text
          label +15 min
    .medium-space
    #list3
      h6 
        span Leading media or avatar
        button.chip.circle(@click="domain.showSamples(data, '#list3 .list', 'Lists')")
          i code
      .space
      ul.list.border
        li
          img.round(:src="'/beer-and-woman.svg'")
          .max
            h6.small Headline
          label +15 min
        li
          img.round(:src="'/beer-and-woman.svg'")
          .max
            h6.small Headline
            div Supporting text
          label +15 min
    .medium-space
    #list4
      h6 
        span Links and buttons
        button.chip.circle(@click="domain.showSamples(data, '#list4 .list', 'Lists')")
          i code
      .space
      ul.list.border
        li
          .max
            h6.small Headline
          a Link
          button Button
        li
          .max
            h6.small Headline
            div Supporting text
          a Link
          button Button
    
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>

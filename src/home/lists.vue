<template lang="pug">
div
  #lists
    .large-space
    h4
      span Lists
    nav.wrap
      label.checkbox
        input(type="checkbox", checked, @click="domain.updateBorder('#lists .list', $event)")
        span border
      label.radio
        input(type="radio", name="space-lists", @click="domain.updateSpace('#lists .list', 'no-space')")
        span no-space
      label.radio
        input(type="radio", name="space-lists", checked, @click="domain.updateSpace('#lists .list')")
        span small-space
      label.radio
        input(type="radio", name="space-lists", @click="domain.updateSpace('#lists .list', 'medium-space')")
        span medium-space
      label.radio
        input(type="radio", name="space-lists", @click="domain.updateSpace('#lists .list', 'large-space')")
        span large-space
    .medium-space
    .grid
      #list-default.s12.m6.l6
        h5.h6
          span Default
          button.chip.circle(@click="domain.showSamples(data, '#list-default > div > .list', 'List border')")
            i code
        .padding
          ul.list.border
            li Item
            li Item
            li Item
            li Item
      #list-links.s12.m6.l6
        h5.h6
          span Links
          button.chip.circle(@click="domain.showSamples(data, '#list-links > div > .list', 'List border')")
            i code
        .padding
          ul.list.border
            li
              a Item
            li
              a Item
            li
              a Item
            li
              a Item
      #list-nested.s12.m6.l6
        h5.h6
          span Nested
          button.chip.circle(@click="domain.showSamples(data, '#list-nested > div > .list', 'List nested')")
            i code
        .padding
          ul.list.border
            li Item
            li Item
            li
              ul.list.border
                li Item
                li Item
      #list-expansion.s12.m6.l6
        h5.h6
          span Expansion
          button.chip.circle(@click="domain.showSamples(data, '#list-expansion > div > .list', 'List expansion')")
            i code
        .padding
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
      h5.h6
        span Headline and supporting text
        button.chip.circle(@click="domain.showSamples(data, '#list1 .list', 'Lists')")
          i code
      .padding
        ul.list.border
          li
            button.circle A
            .max
              h6.small(aria-hidden="true") Headline
              div Supporting text
            label +15 min
          li
            button.circle A
            .max
              h6.small(aria-hidden="true") Headline
              div Supporting text
            label +15 min
    .medium-space
    #list2
      h5.h6
        span Icons
        button.chip.circle(@click="domain.showSamples(data, '#list2 .list', 'Lists')")
          i code
      .padding
        ul.list.border
          li
            i home
            .max
              h6.small(aria-hidden="true") Headline
              div Supporting text
            label +15 min
          li
            i home
            .max
              h6.small(aria-hidden="true") Headline
              div Supporting text
            label +15 min
    .medium-space
    #list3
      h5.h6
        span Leading media or avatar
        button.chip.circle(@click="domain.showSamples(data, '#list3 .list', 'Lists')")
          i code
      .padding
        ul.list.border
          li
            img.round(alt="", :src="'/beer-and-woman.svg'")
            .max
              h6.small(aria-hidden="true") Headline
              div Supporting text
            label +15 min
          li
            img.round(alt="", :src="'/beer-and-woman.svg'")
            .max
              h6.small(aria-hidden="true") Headline
              div Supporting text
            label +15 min
    .medium-space
    #list4
      h5.h6
        span Links and buttons
        button.chip.circle(@click="domain.showSamples(data, '#list4 .list', 'Lists')")
          i code
      .padding
        ul.list.border
          li
            .max
              h6.small(aria-hidden="true") Headline
              div Supporting text
            a Link
            button Button
          li
            .max
              h6.small(aria-hidden="true") Headline
              div Supporting text
            a Link
            button Button
   
</template>
<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>

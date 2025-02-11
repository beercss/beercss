<template lang="pug">
#search
  .large-space
  h4 Search

  .space
  h6
    span Docked
    button.chip.circle(
      @click="domain.showSamples(data, '#search-compact > *', 'Search', null, null)"
    )
      i code

  nav#search-compact
    .field.large.prefix.round.fill(data-ui="#search1")
      i.front search
      input(placeholder="Search text")

      menu#search1.min
        li
          .field.large.prefix
            i.front(data-ui="#search1") arrow_back
            input(placeholder="Search text")
        li(data-ui="#search1")
          i history
          div Item 1
        li(data-ui="#search1")
          i history
          div Item 2
        li(data-ui="#search1")
          i history
          div Item 3
    button.extra.circle.fill(data-ui="#search2")
      i search
      menu#search2.no-wrap.left.min
        li
          .field.large.prefix
            i.front(data-ui="#search2") arrow_back
            input(placeholder="Search text")
        li(data-ui="#search2")
          i history
          div Item 1
        li(data-ui="#search2")
          i history
          div Item 2
        li(data-ui="#search2")
          i history
          div Item 3

  .space
  h6
    span Fullscreen
    button.chip.circle(
      @click="domain.showSamples(data, '#search-fullscreen > *', 'Search', null, null)"
    )
      i code

  nav#search-fullscreen
    .field.large.prefix.round.fill(data-ui="#search3")
      i.front search
      input(placeholder="Search text")

      menu#search3.max
        li
          .field.large.prefix
            i.front(data-ui="#search3") arrow_back
            input(placeholder="Search text")
        li(data-ui="#search3")
          i history
          div Item 1
        li(data-ui="#search3")
          i history
          div Item 2
        li(data-ui="#search3")
          i history
          div Item 3
    button.extra.circle.fill(data-ui="#search4")
      i search
      menu#search4.max
        li
          .field.large.prefix
            i.front(data-ui="#search4") arrow_back
            input(placeholder="Search text")
        li(data-ui="#search4")
          i history
          div Item 1
        li(data-ui="#search4")
          i history
          div Item 2
        li(data-ui="#search4")
          i history
          div Item 3
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>

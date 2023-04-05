<template lang="pug">
#search
  .large-space
  h4 Search

  .space
  h6
    span Docked
    a.chip.circle(
      @click="domain.showSamples(data, '#search-compact > *', 'Search', null, null)"
    )
      i code

  nav#search-compact
    .field.large.prefix.suffix.round.fill(data-ui="#search1")
      i.front search
      input(placeholder="Search text")

      #search1.dropdown.min
        header.fixed
          .field.large.prefix.suffix.no-margin
            i.front(data-ui="#search1") arrow_backward
            input(placeholder="Search text")
            i.front(data-ui="#search1") close
        a.row(data-ui="#search1")
          i history
          div Item 1
        a.row(data-ui="#search1")
          i history
          div Item 2
        a.row(data-ui="#search1")
          i history
          div Item 3
    button.extra.circle.fill(data-ui="#search2")
      i search
      #search2.dropdown.no-wrap.left.min
        header.fixed
          .field.large.prefix.suffix.no-margin
            i.front(data-ui="#search2") arrow_backward
            input(placeholder="Search text")
            i.front(data-ui="#search2") close
        a.row(data-ui="#search2")
          i history
          div Item 1
        a.row(data-ui="#search2")
          i history
          div Item 2
        a.row(data-ui="#search2")
          i history
          div Item 3

  .space
  h6
    span Fullscreen
    a.chip.circle(
      @click="domain.showSamples(data, '#search-fullscreen > *', 'Search', null, null)"
    )
      i code

  nav#search-fullscreen
    .field.large.prefix.suffix.round.fill(data-ui="#search3")
      i.front search
      input(placeholder="Search text")

      #search3.dropdown.max
        header.fixed
          .field.large.prefix.suffix.no-margin
            i.front(data-ui="#search3") arrow_backward
            input(placeholder="Search text")
            i.front(data-ui="#search3") close
        a.row(data-ui="#search3")
          i history
          div Item 1
        a.row(data-ui="#search3")
          i history
          div Item 2
        a.row(data-ui="#search3")
          i history
          div Item 3
    button.extra.circle.fill(data-ui="#search4")
      i search
      #search4.dropdown.max
        header.fixed
          .field.large.prefix.suffix.no-margin
            i.front(data-ui="#search4") arrow_backward
            input(placeholder="Search text")
            i.front(data-ui="#search4") close
        a.row(data-ui="#search4")
          i history
          div Item 1
        a.row(data-ui="#search4")
          i history
          div Item 2
        a.row(data-ui="#search4")
          i history
          div Item 3
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";

const log = console.log;
</script>

<template lang="pug">
div
  #layouts
    .large-space
    h4 Layouts
    .medium-space
    h6 Positions
      a.chip.circle(
        @click="data.layout = 0; domain.showSamples(data, '#positions article', null, 'https://github.com/beercss/beercss/blob/main/docs/LAYOUT.md')"
      )
        i code
    nav.wrap
      label.checkbox
        input#center-layouts(type="checkbox", checked)
        span center
      label.checkbox
        input#left-layouts(type="checkbox")
        span left
      label.checkbox
        input#right-layouts(type="checkbox")
        span right
      label.checkbox
        input#middle-layouts(type="checkbox", checked)
        span middle
      label.checkbox
        input#top-layouts(type="checkbox")
        span top
      label.checkbox
        input#bottom-layouts(type="checkbox")
        span bottom
    #positions
      article.border.medium.no-padding
        .padding.absolute.blue.white-text.center.middle.primary
          h5 Position
          div Lorem ipsum dolor...
    .medium-space
    h6 Alignments
      a.chip.circle(
        @click="data.layout = 0; domain.showSamples(data, '#alignments article', null, 'https://github.com/beercss/beercss/blob/main/docs/LAYOUT.md')"
      )
        i code
    nav.wrap
      label.radio
        input#center-align-layouts(
          type="radio",
          name="horizontal-layouts",
          checked
        )
        span center-align
      label.radio
        input#left-align-layouts(type="radio", name="horizontal-layouts")
        span left-align
      label.radio
        input#right-align-layouts(
          type="radio",
          name="horizontal-layouts"
        )
        span right-align
      label.radio
        input#middle-align-layouts(
          type="radio",
          name="vertical-layouts",
          checked
        )
        span middle-align
      label.radio
        input#top-align-layouts(type="radio", name="vertical-layouts")
        span top-align
      label.radio
        input#bottom-align-layouts(type="radio", name="vertical-layouts")
        span bottom-align
    #alignments
      article.border.medium.no-padding.center-align.middle-align
        .padding
          h5 Alignment
          div Lorem ipsum dolor...
  .medium-space
  #headers-footers
    h6 Headers and footers
      a.chip.circle(
        @click="data.layout = 0; domain.showSamples(data, '#headers-footers article', null, 'https://github.com/beercss/beercss/blob/main/docs/LAYOUT.md')"
      )
        i code
    .space
    .row
      .col.s12.m6
        article.flat.small.scroll
          header.fixed
            h5.no-margin Fixed header
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupILayoutt non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupILayoutt non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      .col.s12.m6
        article.flat.small.scroll
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupILayoutt non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupILayoutt non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          footer.fixed
            h5.no-margin Fixed footer
  .medium-space
  #app-bars
    h6 App bars
      a.chip.circle(
        @click="data.layout = 0; domain.showSamples(data, '#app-bars header', null, 'https://github.com/beercss/beercss/blob/main/docs/LAYOUT.md')"
      )
        i code
    nav.wrap
      label.radio
        input#blue-app-bars(type="radio", name="radio-app-bars")
        span blue
      label.radio
        input#purple-app-bars(type="radio", name="radio-app-bars")
        span purple
      label.radio
        input#teal-app-bars(type="radio", name="radio-app-bars", checked)
        span teal
      label.radio
        input#primary-app-bars(type="radio", name="radio-app-bars")
        span primary
      label.radio
        input#secondary-app-bars(type="radio", name="radio-app-bars")
        span secondary
      label.radio
        input#tertiary-app-bars(type="radio", name="radio-app-bars")
        span tertiary
    header.padding.primary
      .row.no-wrap.middle-align
        .col.min
          a
            i menu
        .col
          h5.no-margin.center-align Title large
        .col.min
          a
            img.circle.small(:src="'/favicon.png'")
    .space
    header.padding.primary
      .row.no-wrap.middle-align
        .col.min
          a
            i arrow_backward
        .col
          h5.no-margin Title large
        .col.min
          a
            i attach_file
        .col.min
          a
            i today
        .col.min
          a
            i more_vert
    .space
    header.padding.primary
      .row.no-wrap.middle-align
        .col
          a
            i arrow_backward
        .col.min
          a
            i attach_file
        .col.min
          a
            i today
        .col.min
          a
            i more_vert
      .small-space
      h5 Headline small
    .space
    header.padding.primary
      .row.no-wrap.middle-align
        .col
          a
            i arrow_backward
        .col.min
          a
            i attach_file
        .col.min
          a
            i today
        .col.min
          a
            i more_vert
      .medium-space
      h5 Headline medium
  .medium-space
  #list
    h6
      span Lists
      a.chip.circle(@click="domain.showSamples(data, '#list .row')")
        i code
    nav.wrap
      label.radio
        input#top-align-lists(type="radio", name="align-lists")
        span top-align
      label.radio
        input#middle-align-lists(
          type="radio",
          name="align-lists",
          checked
        )
        span middle-align
      label.radio
        input#bottom-align-lists(type="radio", name="align-lists")
        span bottom-align
      label.checkbox
        input#divider-lists(type="checkbox", name="divider-lists")
        span divider
    label.large-space.middle-align Today
    .row.no-wrap.middle-align
      .col.min
        i.light-green-text check_circle
      .col
        div Title
        label Complementary text
      .col.min
        nav
          button.none Button
          button.none
            i more_vert

    .row.no-wrap.middle-align
      .col.min
        i.orange-text warning
      .col
        div Title
        label Complementary text
      .col.min
        nav
          button.none Button
          button.none
            i more_vert
    .row.no-wrap.middle-align
      .col.min
        i.grey-text schedule
      .col
        div Title
        label Complementary text
      .col.min
        nav
          button.none Button
          button.none
            i more_vert
    label.large-space.middle-align Yesterday
    .row.no-wrap.middle-align
      .col.min
        label.checkbox
          input(type="checkbox")
          span
      .col
        div Title
        label Complementary text
      .col.min
        nav
          button.none Button
          button.none
            i more_vert
    .row.no-wrap.middle-align
      .col.min
        label.checkbox
          input(type="checkbox")
          span
      .col
        div Title
        label Complementary text
      .col.min
        nav
          button.none Button
          button.none
            i more_vert
    .row.no-wrap.middle-align
      .col.min
        label.checkbox
          input(type="checkbox")
          span
      .col
        div Title
        label Complementary text
      .col.min
        nav
          button.none Button
          button.none
            i more_vert
    label.large-space.middle-align Older
    .row.no-wrap.middle-align
      .col.min
        img.circle.tiny(:src="'/beer-and-woman.jpg'")
      .col
        div Title
        label Complementary text
      .col.min
        nav
          button.none Button
          button.none
            i more_vert
    .row.no-wrap.middle-align
      .col.min
        img.circle.tiny(:src="'/beer-and-woman.jpg'")
      .col
        div Title
        label Complementary text
      .col.min
        nav
          button.none Button
          button.none
            i more_vert
    .row.no-wrap.middle-align
      .col.min
        img.circle.tiny(:src="'/beer-and-woman.jpg'")
      .col
        div Title
        label Complementary text
      .col.min
        nav
          button.none Button
          button.none
            i more_vert
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
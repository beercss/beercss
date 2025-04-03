<template lang="pug">
div
  #layouts
    .large-space
    h4 Layouts
    .medium-space
    h6 Positions
      button.chip.circle(
        @click="data.layout = 0; domain.showSamples(data, '#positions article', 'Positions', null, 'https://github.com/beercss/beercss/blob/main/docs/LAYOUT.md')"
      )
        i code
    nav.wrap
      label.radio
        input(type="radio", name="horizontal-position", @click="domain.updateHorizontalPosition('#positions .absolute', 'left')")
        span left
      label.radio
        input(type="radio", name="horizontal-position", checked, @click="domain.updateHorizontalPosition('#positions .absolute', 'center')")
        span center
      label.radio
        input(type="radio", name="horizontal-position", @click="domain.updateHorizontalPosition('#positions .absolute', 'right')")
        span right
      label.radio
        input(type="radio", name="vertical-position", @click="domain.updateVerticalPosition('#positions .absolute', 'top')")
        span top
      label.radio
        input(type="radio", name="vertical-position", checked, @click="domain.updateVerticalPosition('#positions .absolute', 'middle')")
        span middle
      label.radio
        input(type="radio", name="vertical-position", @click="domain.updateVerticalPosition('#positions .absolute', 'bottom')")
        span bottom
    .space
    #positions
      article.border.medium.no-padding
        .padding.primary.absolute.center.middle
          h5 Position
          div Lorem ipsum dolor...
    .medium-space
    h6 Alignments
      button.chip.circle(
        @click="data.layout = 0; domain.showSamples(data, '#alignments article', 'Alignments', null, 'https://github.com/beercss/beercss/blob/main/docs/LAYOUT.md')"
      )
        i code
    nav.wrap
      label.radio
        input(type="radio", name="horizontal-layouts", @click="domain.updateHorizontalAlign('#alignments article', 'left-align')")
        span left-align
      label.radio
        input(
          type="radio",
          name="horizontal-layouts",
          checked,
          @click="domain.updateHorizontalAlign('#alignments article', 'center-align')"
        )
        span center-align
      label.radio
        input(type="radio", name="horizontal-layouts", @click="domain.updateHorizontalAlign('#alignments article', 'right-align')")
        span right-align
      label.radio
        input(type="radio", name="vertical-layouts", @click="domain.updateVerticalAlign('#alignments article', 'top-align')")
        span top-align
      label.radio
        input(
          type="radio",
          name="vertical-layouts",
          checked,
          @click="domain.updateVerticalAlign('#alignments article', 'middle-align')"
        )
        span middle-align
      label.radio
        input(type="radio", name="vertical-layouts", @click="domain.updateVerticalAlign('#alignments article', 'bottom-align')")
        span bottom-align
    .space
    #alignments
      article.border.medium.no-padding.center-align.middle-align
        .padding
          h5 Alignment
          div Lorem ipsum dolor...
  .medium-space
  #headers-footers
    h6 Headers and footers
      button.chip.circle(
        @click="data.layout = 0; domain.showSamples(data, '#headers-footers article', 'Headers and footers', null, 'https://github.com/beercss/beercss/blob/main/docs/LAYOUT.md')"
      )
        i code
    .space
    .grid
      .s12.m6
        article.small.scroll
          header.fixed
            h5.no-margin Fixed header
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupILayoutt non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupILayoutt non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      .s12.m6
        article.small.scroll
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupILayoutt non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupILayoutt non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          footer.fixed
            h5.no-margin Fixed footer
  .medium-space
  #empty-state
    h6
      span Empty states
      button.chip.circle(@click="domain.showSamples(data, '#empty-state article', 'Empty states')")
        i code
    .grid
      .s12.m12.l6
        article.medium.middle-align.center-align
          div
            i.extra mail
            h5 You have no new messages
            p Click the button to start a conversation
            .space
            nav.center-align
              button Send a message
      .s12.m12.l6
        article.medium.middle-align.center-align
          div
            i.extra mail
            h5 You've successfully signed up
            p Click the button to invite your friends
            .space
            nav.center-align
              button.border.round Skip
              button Invite your friends
      .s12.m12.l6
        article.medium.middle-align.center-align
          div
            i.extra person
            h5 You are not following anyone
            p Start to meet new friends
            .space
            nav.no-space
              .max.field.border.left-round
                input
              button.large.right-round Search
  .medium-space
  h6
    span Blurred elements
    button.chip.circle(@click="domain.showSamples(data, '#blurs > header, #blurs > article, #blurs > nav > *', 'Blurred elements')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="blur-elements", @click="domain.updateBlur('#blurs > header, #blurs > article, #blurs > nav > *', 'small-blur')")
      span small-blur
    label.radio
      input(
        type="radio",
        name="blur-elements",
        checked,
        @click="domain.updateBlur('#blurs > header, #blurs > article, #blurs > nav > *', 'blur')"
      )
      span medium-blur
    label.radio
      input(type="radio", name="blur-elements", @click="domain.updateBlur('#blurs > header, #blurs > article, #blurs > nav > *', 'large-blur')")
      span large-blur
  .medium-space
  #blurs.large-padding(style="background-image: url(beer-and-woman.svg); background-position: center; background-size: cover;")
    header.blur
      nav
        button.circle.transparent
          i arrow_back
        h5.max App bar
        button.circle.transparent
          i more_vert
    article.blur
      h5 Card
      p Some text here
      nav.right-align
        button Button
    nav
      button.blur Button
      button.chip.blur Chip
  .medium-space
  h6
    span Shadowed elements
    button.chip.circle(@click="domain.showSamples(data, '#shadows > header, #shadows > article, #shadows > nav > *', 'Shadowed elements')")
      i code
  nav.wrap
    label.radio
      input(
        type="radio",
        name="shadow-elements",
        checked,
        @click="domain.updateShadow('#shadows > header, #shadows > article, #shadows > nav > *', 'left-shadow')"
      )
      span left-shadow
    label.radio
      input(type="radio", name="shadow-elements", @click="domain.updateShadow('#shadows > header, #shadows > article, #shadows > nav > *', 'right-shadow')")
      span right-shadow
    label.radio
      input(type="radio", name="shadow-elements", @click="domain.updateBlur('#shadows > header, #shadows > article, #shadows > nav > *', 'top-shadow')")
      span top-shadow
    label.radio
      input(type="radio", name="shadow-elements", @click="domain.updateShadow('#shadows > header, #shadows > article, #shadows > nav > *', 'bottom-shadow')")
      span bottom-shadow
  .medium-space
  #shadows.large-padding(style="background-image: url(beer-and-woman.svg); background-position: center; background-size: cover;")
    header.white-text.left-shadow
      nav
        button.circle.transparent
          i arrow_back
        h5.max App bar
        button.circle.transparent
          i more_vert
    article.white-text.left-shadow
      h5 Card
      p Some text here
      nav.right-align
        button Button
    nav
      button.white-text.left-shadow Button
      button.chip.white-text.left-shadow Chip
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>

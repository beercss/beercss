<template lang="pug">
div
  #layouts
    .large-space
    h4 Layouts
    .medium-space
    h6 Positions
      a.chip.circle(
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
      a.chip.circle(
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
      a.chip.circle(
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
  #list
    h6
      span Lists
      a.chip.circle(@click="domain.showSamples(data, '#list .row', 'Lists')")
        i code
    nav.wrap
      label.radio
        input(type="radio", name="align-lists", @click="domain.updateVerticalAlign('#list .row', 'top-align')")
        span top-align
      label.radio
        input(
          type="radio",
          name="align-lists",
          checked,
          @click="domain.updateVerticalAlign('#list .row')"
        )
        span middle-align
      label.radio
        input(type="radio", name="align-lists", @click="domain.updateVerticalAlign('#list .row', 'bottom-align')")
        span bottom-align
    .row
      span Today
    .row
      i.light-green-text check_circle
      .max Some text here
      a
        i edit
      a
        i delete
    .small-divider
    .row
      i.orange-text warning
      .max Some text here
      a
        i edit
      a
        i delete
    .small-divider
    .row
      i.grey-text schedule
      .max Some text here
      a
        i edit
      a
        i delete
    .row
      span Yesterday
    .row
      label.checkbox
        input(type="checkbox")
        span
      .max Some text here
      a
        i edit
      a
        i delete
    .small-divider
    .row
      label.checkbox
        input(type="checkbox")
        span
      .max Some text here
      a
        i edit
      a
        i delete
    .small-divider
    .row
      label.checkbox
        input(type="checkbox")
        span
      .max Some text here
      a
        i edit
      a
        i delete
    .row
      span Older
    .row
      img.circle.tiny(:src="'/beer-and-woman.jpg'")
      .max Some text here
      a
        i edit
      a
        i delete
    .small-divider
    .row
      img.circle.tiny(:src="'/beer-and-woman.jpg'")
      .max Some text here
      a
        i edit
      a
        i delete
    .small-divider
    .row
      img.circle.tiny(:src="'/beer-and-woman.jpg'")
      .max Some text here
      a
        i edit
      a
        i delete
  .medium-space
  #clickable-list
    h6
      span Clickable lists
      a.chip.circle(@click="domain.showSamples(data, '#clickable-list .row', 'Clickable lists')")
        i code
    .grid
      .s12.m6.l4
        a.row.wave
          i home
          div Default 1
        a.row.wave
          i search
          div Default 2
        a.row.wave
          i star
          div Default 3
        a.row.wave
          i mail
          .max Default 4
          span.badge.circle.none 3
      .s12.m6.l4
        a.row.wave.round
          i home
          div Rounded 1
        a.row.wave.round
          i search
          div Rounded 2
        a.row.wave.round
          i star
          div Rounded 3
        a.row.wave.round
          i mail
          .max Rounded 4
          span.badge.circle.none 3

  .medium-space
  #empty-state
    h6
      span Empty states
      a.chip.circle(@click="domain.showSamples(data, '#empty-state .fill', 'Empty states')")
        i code
    .grid
      .s12.m12.l6
        .fill.medium-height.middle-align.center-align
          .center-align
            i.extra mail
            h5 You have no new messages
            p Click the button to start a conversation
            .space
            nav.center-align
              button Send a message
      .s12.m12.l6
        .fill.medium-height.middle-align.center-align
          .center-align
            i.extra mail
            h5 You've successfully signed up
            p Click the button to invite your friends
            .space
            nav.center-align
              button.border.round Skip
              button Invite your friends
      .s12.m12.l6
        .fill.medium-height.middle-align.center-align
          .center-align
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
    a.chip.circle(@click="domain.showSamples(data, '#blurs > header, #blurs > article, #blurs > nav > *', 'Blurred elements')")
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
  #blurs.large-padding(style="background-image: url(beer-and-woman.jpg)")
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
      a.chip.blur Chip
  .medium-space
  h6
    span Shadowed elements
    a.chip.circle(@click="domain.showSamples(data, '#shadows > header, #shadows > article, #shadows > nav > *', 'Shadowed elements')")
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
  #shadows.large-padding(style="background-image: url(beer-and-woman.jpg)")
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
      a.chip.white-text.left-shadow Chip
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>

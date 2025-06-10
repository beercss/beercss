<template lang="pug">
#buttons
  .large-space
  h4 Buttons
  .medium-space
  h6.middle-align
    span Common buttons
    button.chip.circle(@click="domain.showSamples(data, '#default-buttons button', 'Buttons', null, 'https://github.com/beercss/beercss/blob/main/docs/BUTTON.md')")
      i code
  selectionForButtons(context="#default-buttons button", :directions="['horizontal', 'vertical']", selected-direction="horizontal")
  .space
  #default-buttons
    nav.wrap
      button Button
      button
        i home
        span Button
      button
        img(:src="'/favicon.png'")
        span Button
      button
        img.responsive(:src="'/favicon.png'")
        span Button
    nav.wrap
      button.small-round Button
      button.small-round
        i home
        span Button
      button.small-round
        img(:src="'/favicon.png'")
        span Button
      button.small-round
        img.responsive(:src="'/favicon.png'")
        span Button
    nav.wrap
      button.border Button
      button.border
        i home
        span Button
      button.border
        img(:src="'/favicon.png'")
        span Button
      button.border
        img.responsive(:src="'/favicon.png'")
        span Button
    nav.wrap
      button.border.small-round Button
      button.border.small-round
        i home
        span Button
      button.border.small-round
        img(:src="'/favicon.png'")
        span Button
      button.border.small-round
        img.responsive(:src="'/favicon.png'")
        span Button
  .medium-space
  h6.middle-align
    span Responsive buttons
    button.chip.circle(@click="domain.showSamples(data, '#responsive-buttons button', 'Reponsive buttons', null, 'https://github.com/beercss/beercss/blob/main/docs/BUTTON.md')")
      i code
  selectionForButtons(context="#responsive-buttons button", :directions="['horizontal', 'vertical']", selected-direction="horizontal")
  #responsive-buttons.grid
    .s12.m6
      nav
        button.responsive Button
      nav
        button.responsive
          i home
          span Button
      nav
        button.responsive
          img(:src="'/favicon.png'")
          span Button
    .s12.m6
      nav
        button.responsive.round Button
      nav
        button.responsive.round
          i home
          span Button
      nav
        button.responsive.round
          img(:src="'/favicon.png'")
          span Button
    .s12.m6
      nav
        button.responsive.border Button
      nav
        button.responsive.border
          i home
          span Button
      nav
        button.responsive.border
          img(:src="'/favicon.png'")
          span Button
    .s12.m6
      nav
        button.responsive.border.round Button
      nav
        button.responsive.border.round
          i home
          span Button
      nav
        button.responsive.border.round
          img(:src="'/favicon.png'")
          span Button
  .medium-space
  h6.middle-align
    span FABs
    button.chip.circle(@click="domain.showSamples(data, '#fabs button', 'FABs', null, 'https://github.com/beercss/beercss/blob/main/docs/BUTTON.md')")
      i code
  selectionForButtons(context="#fabs button", selected-size="extra")
  .space
  #fabs
    nav.wrap
      button.square
        i add
      button.square.round
        i add
      button.circle
        i add
      button.circle.left-round.top-round
        i add
      button.circle.left-round.bottom-round
        i add
      button.circle.right-round.top-round
        i add
      button.circle.right-round.bottom-round
        i add
      button.circle.left-round
        i add
      button.circle.right-round
        i add
    nav.wrap
      button.border.square
        i add
      button.border.square.round
        i add
      button.border.circle
        i add
      button.border.circle.left-round.top-round
        i add
      button.border.circle.left-round.bottom-round
        i add
      button.border.circle.right-round.top-round
        i add
      button.border.circle.right-round.bottom-round
        i add
      button.border.circle.left-round
        i add
      button.border.circle.right-round
        i add
    nav.wrap
      button.border.square
        img.responsive(:src="'/favicon.png'")
      button.border.square.round
        img.responsive(:src="'/favicon.png'")
      button.border.circle
        img.responsive(:src="'/favicon.png'")
      button.border.circle.left-round.top-round
        img.responsive(:src="'/favicon.png'")
      button.border.circle.left-round.bottom-round
        img.responsive(:src="'/favicon.png'")
      button.border.circle.right-round.top-round
        img.responsive(:src="'/favicon.png'")
      button.border.circle.right-round.bottom-round
        img.responsive(:src="'/favicon.png'")
      button.border.circle.left-round
        img.responsive(:src="'/favicon.png'")
      button.border.circle.right-round
        img.responsive(:src="'/favicon.png'")
  .medium-space
  h6.middle-align
    span Extended FABs
    button.chip.circle(@click="domain.showSamples(data, '#extended-fabs button', 'Extended FABs', null, 'https://github.com/beercss/beercss/blob/main/docs/BUTTON.md')")
      i code
  selectionForButtons(context="#extended-fabs button", :sizes="[]")
  #extended-fabs.grid
    .s6.m6.l4
      nav
        button.extend.square
          i add
          span Button
      nav
        button.extend.square.round
          i add
          span Button
      nav
        button.extend.circle
          i add
          span Button
      nav
        button.extend.circle.left-round.top-round
          i add
          span Button
      nav
        button.extend.circle.left-round.bottom-round
          i add
          span Button
      nav
        button.extend.circle.right-round.top-round
          i add
          span Button
      nav
        button.extend.circle.right-round.bottom-round
          i add
          span Button
      nav
        button.extend.circle.left-round
          i add
          span Button
      nav
        button.extend.circle.right-round
          i add
          span Button
    .s6.m6.l4
      nav
        button.extend.border.square
          i add
          span Button
      nav
        button.extend.border.square.round
          i add
          span Button
      nav
        button.extend.border.circle
          i add
          span Button
      nav
        button.extend.border.circle.left-round.top-round
          i add
          span Button
      nav
        button.extend.border.circle.left-round.bottom-round
          i add
          span Button
      nav
        button.extend.border.circle.right-round.top-round
          i add
          span Button
      nav
        button.extend.border.circle.right-round.bottom-round
          i add
          span Button
      nav
        button.extend.border.circle.left-round
          i add
          span Button
      nav
        button.extend.border.circle.right-round
          i add
          span Button
    .s6.m6.l4
      nav
        button.extend.border.square
          img.responsive(:src="'/favicon.png'")
          span Button
      nav
        button.extend.border.square.round
          img.responsive(:src="'/favicon.png'")
          span Button
      nav
        button.extend.border.circle
          img.responsive(:src="'/favicon.png'")
          span Button
      nav
        button.extend.border.circle.left-round.top-round
          img.responsive(:src="'/favicon.png'")
          span Button
      nav
        button.extend.border.circle.left-round.bottom-round
          img.responsive(:src="'/favicon.png'")
          span Button
      nav
        button.extend.border.circle.right-round.top-round
          img.responsive(:src="'/favicon.png'")
          span Button
      nav
        button.extend.border.circle.right-round.bottom-round
          img.responsive(:src="'/favicon.png'")
          span Button
      nav
        button.extend.border.circle.left-round
          img.responsive(:src="'/favicon.png'")
          span Button
      nav
        button.extend.border.circle.right-round
          img.responsive(:src="'/favicon.png'")
          span Button
  .medium-space
  h6.middle-align
    span FABs menu
    button.chip.circle(@click="domain.showSamples(data, '#fabs-menu nav.min', 'FABs menu', null, 'https://github.com/beercss/beercss/blob/main/docs/BUTTON.md')")
      i code
  #fabs-menu
    .space
    nav
      nav.min(data-ui="#fab-menu1")
        button.extra.circle
          i north_east
        menu#fab-menu1.top.transparent.no-wrap
          li
            button.fill
              i search
              span Search
          li
            button.fill
              i home
              span Home
          li
            button.fill
              i more_vert
              span About us
      nav.min(data-ui="#fab-menu2")
        button.extra.circle
          i north_west
        menu#fab-menu2.top.transparent.no-wrap.left.right-align
          li
            button.fill
              i search
              span Search
          li
            button.fill
              i home
              span Home
          li
            button.fill
              i more_vert
              span About us
      nav.min(data-ui="#fab-menu3")
        button.extra.circle
          i south_east
        menu#fab-menu3.bottom.transparent.no-wrap
          li
            button.fill
              i search
              span Search
          li
            button.fill
              i home
              span Home
          li
            button.fill
              i more_vert
              span About us
      nav.min(data-ui="#fab-menu4")
        button.extra.circle
          i south_west
        menu#fab-menu4.bottom.transparent.no-wrap.left.right-align
          li
            button.fill
              i search
              span Search
          li
            button.fill
              i home
              span Home
          li
            button.fill
              i more_vert
              span About us
  .medium-space
  h6.middle-align
    span Icon buttons
    button.chip.circle(@click="domain.showSamples(data, '#transparent-buttons button', 'Transparent buttons', null, 'https://github.com/beercss/beercss/blob/main/docs/BUTTON.md')")
      i code
  selectionForButtons(context="#transparent-buttons button", :colors="[]", :elevates="[]")
  .space
  #transparent-buttons
    nav.wrap
      button.transparent.square
        i search
      button.transparent.circle
        i search
      button.transparent.circle.left-round.top-round
        i search
      button.transparent.circle.left-round.bottom-round
        i search
      button.transparent.circle.right-round.top-round
        i search
      button.transparent.circle.right-round.bottom-round
        i search
      button.transparent.circle.left-round
        i search
      button.transparent.circle.right-round
        i search
    nav.wrap
      button.transparent.square
        img.responsive(:src="'/favicon.png'")
      button.transparent.circle
        img.responsive(:src="'/favicon.png'")
      button.transparent.circle.left-round.top-round
        img.responsive(:src="'/favicon.png'")
      button.transparent.circle.left-round.bottom-round
        img.responsive(:src="'/favicon.png'")
      button.transparent.circle.right-round.top-round
        img.responsive(:src="'/favicon.png'")
      button.transparent.circle.right-round.bottom-round
        img.responsive(:src="'/favicon.png'")
      button.transparent.circle.left-round
        img.responsive(:src="'/favicon.png'")
      button.transparent.circle.right-round
        img.responsive(:src="'/favicon.png'")
  .medium-space
  h6.middle-align
    span Button groups
    button.chip.circle(@click="domain.showSamples(data, '#group-buttons nav.group', 'Button groups', null, 'https://github.com/beercss/beercss/blob/main/docs/BUTTON.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="color-group-button", checked, @click="domain.updateColor('#group-buttons .group')")
      span default
    label.radio
      input(type="radio", name="color-group-button", @click="domain.updateColor('#group-buttons .group', 'primary-container')")
      span primary
    label.radio
      input(type="radio", name="color-group-button", @click="domain.updateColor('#group-buttons .group', 'secondary-container')")
      span secondary
    label.radio
      input(type="radio", name="color-group-button", @click="domain.updateColor('#group-buttons .group', 'tertiary-container')")
      span tertiary
    label.radio
      input(type="radio", name="size-group-button", @click="domain.updateSize('#group-buttons .group > button', 'small')")
      span small
    label.radio
      input(type="radio", name="size-group-button", checked, @click="domain.updateSize('#group-buttons .group > button', 'medium')")
      span medium
    label.radio
      input(type="radio", name="size-group-button", @click="domain.updateSize('#group-buttons .group > button', 'large')")
      span large
    label.radio
      input(type="radio", name="size-group-button", @click="domain.updateSize('#group-buttons .group > button', 'extra')")
      span extra
  #group-buttons
    .medium-space
    h6 Standard
    nav.group
      button.left-round(data-ui="") Button
      button.no-round(data-ui="") Button
      button.no-round.active(data-ui="") Button
      button.right-round(data-ui="") Button
    nav.group
      button.left-round(data-ui="")
        i mic
      button.no-round(data-ui="")
        i videocam
      button.no-round.active(data-ui="")
        i mood
      button.right-round(data-ui="")
        i front_hand
    nav.group
      button.left-round(data-ui="")
        i mic
        span Button
      button.no-round(data-ui="")
        i videocam
        span Button
      button.no-round.active(data-ui="")
        i mood
        span Button
      button.right-round(data-ui="")
        i front_hand
        span Button
    .medium-space
    h6 Connected
    nav.group.connected
      button.left-round(data-ui="") Button
      button.no-round(data-ui="") Button
      button.no-round.active(data-ui="") Button
      button.right-round(data-ui="") Button
    nav.group.connected
      button.left-round(data-ui="")
        i mic
      button.no-round(data-ui="")
        i videocam
      button.no-round.active(data-ui="")
        i mood
      button.right-round(data-ui="")
        i front_hand
    nav.group.connected
      button.left-round(data-ui="")
        i mic
        span Button
      button.no-round(data-ui="")
        i videocam
        span Button
      button.no-round.active(data-ui="")
        i mood
        span Button
      button.right-round(data-ui="")
        i front_hand
        span Button
  .medium-space
  h6.middle-align
    span Split buttons
    button.chip.circle(@click="domain.showSamples(data, '#split-buttons .group', 'Split button', null, 'https://github.com/beercss/beercss/blob/main/docs/BUTTON.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="size-split-button", @click="domain.updateSize('#split-buttons .group > button', 'small')")
      span small
    label.radio
      input(type="radio", name="size-split-button", checked, @click="domain.updateSize('#split-buttons .group > button', '')")
      span medium
    label.radio
      input(type="radio", name="size-split-button", @click="domain.updateSize('#split-buttons .group > button', 'large')")
      span large
    label.radio
      input(type="radio", name="size-split-button", @click="domain.updateSize('#split-buttons .group > button', 'extra')")
      span extra
  .space
  #split-buttons
    nav.wrap
      nav.group.split
        button.left-round
          i add_circle
          span Button
        button.right-round.square
          i keyboard_arrow_down
      nav.group.split.secondary
        button.left-round
          i add_circle
          span Button
        button.right-round.square
          i keyboard_arrow_down
      nav.group.split.tertiary
        button.left-round
          i add_circle
          span Button
        button.right-round.square
          i keyboard_arrow_down
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
import selectionForButtons from "./selectionForButtons.vue";
</script>

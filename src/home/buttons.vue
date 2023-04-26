<template lang="pug">
#buttons
  .large-space
  h4 Buttons
  .medium-space
  h6.middle-align
    span Common buttons
    a.chip.circle(@click="domain.showSamples(data, '#default-buttons button', 'Buttons', null, 'https://github.com/beercss/beercss/blob/main/docs/BUTTON.md')")
      i code
  selectionForButtons(context="#default-buttons button", :directions="['horizontal', 'vertical']", selectedDirection="horizontal")
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
    a.chip.circle(@click="domain.showSamples(data, '#responsive-buttons button', 'Reponsive buttons', null, 'https://github.com/beercss/beercss/blob/main/docs/BUTTON.md')")
      i code
  selectionForButtons(context="#responsive-buttons button", :directions="['horizontal', 'vertical']", selectedDirection="horizontal")
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
    a.chip.circle(@click="domain.showSamples(data, '#fabs button', 'FABs', null, 'https://github.com/beercss/beercss/blob/main/docs/BUTTON.md')")
      i code
  selectionForButtons(context="#fabs button", selectedSize="extra")
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
    a.chip.circle(@click="domain.showSamples(data, '#extended-fabs button', 'Extended FABs', null, 'https://github.com/beercss/beercss/blob/main/docs/BUTTON.md')")
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
    span Icon buttons
    a.chip.circle(@click="domain.showSamples(data, '#transparent-buttons button', 'Transparent buttons', null, 'https://github.com/beercss/beercss/blob/main/docs/BUTTON.md')")
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
    span Segmented buttons
    a.chip.circle(@click="domain.showSamples(data, '#segmented-buttons nav', 'Segmented buttons', null, 'https://github.com/beercss/beercss/blob/main/docs/BUTTON.md')")
      i code
  selectionForButtons(context="#segmented-buttons button", :colors="[]", :elevates="[]", :directions="['horizontal', 'vertical']", selectedDirection="horizontal")
  #segmented-buttons.grid
    .s12.m12.l6
      nav.no-space
        button.border.left-round
          span Button
        button.border.no-round
          span Button
        button.border.right-round.fill
          span Button
      nav.no-space
        button.border.left-round
          i search
        button.border.no-round
          i edit
        button.border.right-round.fill
          i home
      nav.no-space
        button.border.left-round
          i.small check
          span Button
        button.border.no-round
          i.small check
          span Button
        button.border.right-round.fill
          i.small check
          span Button
    .s12.m12.l6
      nav.no-space
        button.border.left-round.max
          span Button
        button.border.no-round.max
          span Button
        button.border.right-round.max.fill
          span Button
      nav.no-space
        button.border.left-round.max
          i search
        button.border.no-round.max
          i edit
        button.border.right-round.max.fill
          i home
      nav.no-space
        button.border.left-round.max
          i.small check
          span Button
        button.border.no-round.max
          i.small check
          span Button
        button.border.right-round.max.fill
          i.small check
          span Button
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
import selectionForButtons from "./selectionForButtons.vue";
</script>

<template lang="pug">
#buttons
  .large-space
  h4 Buttons
  .medium-space
  h6.middle-align
    span FABs
    a.chip.circle(@click="domain.showSamples(data, '#fabs button', 'FABs', null, 'https://github.com/beercss/beercss/blob/main/docs/BUTTON.md')")
      i code
  selectionForButtons(context="#fabs button", selectedSize="extra")
  #fabs
    nav.wrap
      button.square
        i add
      button.diamond
        i add
      button.square.round
        i add
      button.diamond.round
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
      button.border.diamond
        i add
      button.border.square.round
        i add
      button.border.diamond.round
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
  selectionForButtons(context="#extended-fabs button", :sizes="['extra']", selectedSize="extra")
  #extended-fabs.row
    .col.s6.m6.l4
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
    .col.s6.m6.l4
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
    .col.s6.m6.l4
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
    span Buttons
    a.chip.circle(@click="domain.showSamples(data, '#default-buttons button', 'Buttons', null, 'https://github.com/beercss/beercss/blob/main/docs/BUTTON.md')")
      i code
  selectionForButtons(context="#default-buttons button")
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
      button.round Button
      button.round
        i home
        span Button
      button.round
        img(:src="'/favicon.png'")
        span Button
      button.round
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
      button.border.round Button
      button.border.round
        i home
        span Button
      button.border.round
        img(:src="'/favicon.png'")
        span Button
      button.border.round
        img.responsive(:src="'/favicon.png'")
        span Button
    nav.wrap
      button.border.left-round.top-round Button
      button.border.left-round.bottom-round
        i home
        span Button
      button.border.right-round.top-round
        img(:src="'/favicon.png'")
        span Button
      button.border.right-round.bottom-round
        img.responsive(:src="'/favicon.png'")
        span Button
    nav.wrap
      button.border.left-round Button
      button.border.left-round
        i home
        span Button
      button.border.left-round
        img(:src="'/favicon.png'")
        span Button
      button.border.left-round
        img.responsive(:src="'/favicon.png'")
        span Button
    nav.wrap
      button.border.right-round Button
      button.border.right-round
        i home
        span Button
      button.border.right-round
        img(:src="'/favicon.png'")
        span Button
      button.border.right-round
        img.responsive(:src="'/favicon.png'")
        span Button
  .medium-space
  h6.middle-align
    span Responsive buttons
    a.chip.circle(@click="domain.showSamples(data, '#responsive-buttons button', 'Reponsive buttons', null, 'https://github.com/beercss/beercss/blob/main/docs/BUTTON.md')")
      i code
  selectionForButtons(context="#responsive-buttons button")
  #responsive-buttons.row
    .col.s12.m6
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
    .col.s12.m6
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
    .col.s12.m6
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
    .col.s12.m6
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
    .col.s12.m6
      nav 
        button.responsive.border.left-round Button
      nav
        button.responsive.border.left-round
          i home
          span Button
      nav
        button.responsive.border.left-round
          img(:src="'/favicon.png'")
          span Button
    .col.s12.m6
      nav 
        button.responsive.border.right-round Button
      nav
        button.responsive.border.right-round
          i home
          span Button
      nav
        button.responsive.border.right-round
          img(:src="'/favicon.png'")
          span Button
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
import selectionForButtons from "./selectionForButtons.vue";
</script>
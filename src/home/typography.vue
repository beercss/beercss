<template lang="pug">
#typography
  .large-space
  h4 Typography
  .medium-space
  h6.middle-align
    span Display and headline
    a.chip.circle(@click="domain.showSamples(data, '#display-headline h1, #display-headline h2, #display-headline h3, #display-headline h4, #display-headline h5, #display-headline h6', 'Display and headline', null, 'https://github.com/beercss/beercss/blob/main/docs/TYPOGRAPHY.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="size-typography", @click="domain.updateSize('#display-headline *', 'small')")
      span small
    label.radio
      input(
        type="radio",
        name="size-typography",
        checked,
        @click="domain.updateSize('#display-headline *')"
      )
      span medium
    label.radio
      input(type="radio", name="size-typography", @click="domain.updateSize('#display-headline *', 'large')")
      span large
  .space
  #display-headline.wrap
    h1 Display
    h2 Display
    h3 Display
    h4 Headline
    h5 Headline
    h6 Headline
  .medium-space
  h6.middle-align
    span Formatting
    a.chip.circle(@click="domain.showSamples(data, '#formatting nav *', 'Formatting', null, 'https://github.com/beercss/beercss/blob/main/docs/TYPOGRAPHY.md#formatting-example')")
      i code
  .space
  #formatting
    nav.wrap
      a.link link
      a.inverse-link inverse-link
      p.italic italic
      p.bold bold
      p.underline underline
      p.overline overline
      p.upper upper
      p.lower lower
      p.capitalize capitalize
      p.small-text small-text
      p.medium-text medium-text
      p.large-text large-text
  .medium-space
  h6.middle-align
    span Line spacing
    a.chip.circle(@click="domain.showSamples(data, '#spacing > :not(.bold, .small-divider, .space)', 'Line spacing', null, 'https://github.com/beercss/beercss/blob/main/docs/TYPOGRAPHY.md#line-spacing-example')")
      i code
  nav.wrap
    label.radio
      input( type="radio", name="line-typography", @click="domain.updateLine('#spacing > *', 'no-line')")
      span no-line
    label.radio
      input(type="radio", name="line-typography", @click="domain.updateLine('#spacing > *', 'tiny-line')")
      span tiny-line
    label.radio
      input(type="radio", name="line-typography", @click="domain.updateLine('#spacing > *')", checked)
      span small-line
    label.radio
      input(type="radio", name="line-typography", @click="domain.updateLine('#spacing > *', 'medium-line')")
      span medium-line
    label.radio
      input(type="radio", name="line-typography", @click="domain.updateLine('#spacing > *', 'large-line')")
      span large-line
    label.radio
      input(type="radio", name="line-typography", @click="domain.updateLine('#spacing > *', 'extra-line')")
      span extra-line
  .medium-space
  #spacing
    div
      h5 Title
      p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>

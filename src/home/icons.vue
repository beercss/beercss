<template lang="pug">
#icons
  #svg-sample
    svg(viewBox="0 0 24 24", style="display: none")
      g#home
        path(d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z")
      g#star
        path(d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z")
      g#account_circle
        path(d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z")
  .large-space
  h4
    span Icons
  .medium-space
  h6 Default icons
    a.chip.circle(@click="domain.showSamples(data, '#icons-default i', 'Icons', '#modal-icons', 'https://github.com/beercss/beercss/blob/main/docs/ICON.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="form-icons", checked, @click="domain.updateIcon()")
      span default
    label.radio
      input(type="radio", name="form-icons", @click="domain.updateIcon('fill')")
      span fill
    label.radio
      input(type="radio", name="color-icons", checked, @click="domain.updateTextColor('#icons-default i')")
      span default
    label.radio
      input(type="radio", name="color-icons", @click="domain.updateTextColor('#icons-default i', 'primary-text')")
      span primary
    label.radio
      input(type="radio", name="color-icons", @click="domain.updateTextColor('#icons-default i', 'secondary-text')")
      span secondary
    label.radio
      input(type="radio", name="color-icons", @click="domain.updateTextColor('#icons-default i', 'tertiary-text')")
      span tertiary
  .medium-space
  #icons-default
    nav.wrap
      i.tiny account_circle
      i.small account_circle
      i account_circle
      i.large account_circle
      i.extra account_circle
  .medium-space
  h6
    span SVG icons
    a.chip.circle(@click="domain.showSamples(data, '#icons-svg i, #icons-svg > svg', 'SVG icons', '#modal-icons-svg', 'https://github.com/beercss/beercss/blob/main/docs/ICON.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="color-icons-svg", checked, @click="domain.updateTextColor('#icons-svg i')")
      span default
    label.radio
      input(type="radio", name="color-icons-svg", @click="domain.updateTextColor('#icons-svg i', 'primary-text')")
      span primary
    label.radio
      input(type="radio", name="color-icons-svg", @click="domain.updateTextColor('#icons-svg i', 'secondary-text')")
      span secondary
    label.radio
      input(type="radio", name="color-icons-svg", @click="domain.updateTextColor('#icons-svg i', 'tertiary-text')")
      span tertiary
  .medium-space
  #icons-svg
    nav.wrap
      i.tiny
        svg(viewBox="0 0 24 24")
          path(d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z")
      i.small
        svg(viewBox="0 0 24 24")
          path(d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z")
      i
        svg(viewBox="0 0 24 24")
          path(d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z")
      i.large
        svg(viewBox="0 0 24 24")
          path(d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z")
      i.extra
        svg(viewBox="0 0 24 24")
          path(d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z")
    nav.wrap
      i.tiny
        svg(viewBox="0 0 24 24")
          use(href="#account_circle")
      i.small
        svg(viewBox="0 0 24 24")
          use(href="#account_circle")
      i
        svg(viewBox="0 0 24 24")
          use(href="#account_circle")
      i.large
        svg(viewBox="0 0 24 24")
          use(href="#account_circle")
      i.extra
        svg(viewBox="0 0 24 24")
          use(href="#account_circle")
  .medium-space
  h6
    span Image icons
    a.chip.circle(@click="domain.showSamples(data, '#icons-image i', 'Image icons', null, 'https://github.com/beercss/beercss/blob/main/docs/ICON.md')")
      i code
  .medium-space
  #icons-image
    nav.wrap
      i.tiny
        img(:src="'/favicon.png'")
      i.small
        img(:src="'/favicon.png'")
      i
        img(:src="'/favicon.png'")
      i.large
        img(:src="'/favicon.png'")
      i.extra
        img(:src="'/favicon.png'")

  #modal-icons.modal.right.large
    header.fixed
      nav
        h5 Icons
        a.button.border(
          href="https://fonts.google.com/icons",
          target="_blank"
        ) Get font icons
        .max
        button.circle.transparent(data-ui="#modal-icons")
          i close
    .space
    article.border(v-for="exemplo in data.samples")
      div(v-html="exemplo.html")
      .space(v-show="exemplo.html")
      pre(v-html="exemplo.sourceCode")
    .space

  #modal-icons-svg.modal.right.large
    header.fixed
      nav
        h5 SVG icons
        a.button.border(
          href="https://pictogrammers.com/library/mdi/",
          target="_blank"
        ) Get svg icons
        .max
        button.circle.transparent(data-ui="#modal-icons-svg")
          i close
    .space
    article.border(v-for="(exemplo, i) in data.samples", v-show="i < 5")
      div(v-html="exemplo.html")
      .space(v-show="exemplo.html")
      pre(v-html="exemplo.sourceCode")
    .medium-space
    h5 Multiple icons in a single svg
    .medium-space
    article.border
      pre(v-html="data.svgSample")
    .space
    article.border(v-for="(exemplo, i) in data.samples", v-show="i > 4")
      div(v-html="exemplo.html")
      .space(v-show="exemplo.html")
      pre(v-html="exemplo.sourceCode")
    .space
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>

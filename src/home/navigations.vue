<template lang="pug">
#navigations
  .large-space
  h4
    span Navigations
  .medium-space
  h6.middle-align
    span Rows
    button.chip.circle(@click="domain.showSamples(data, '#row-default > .row', 'Rows', null, 'https://github.com/beercss/beercss/blob/main/docs/NAVIGATION.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="horizontal-rows", checked, @click="domain.updateHorizontalAlign('#row-default > .row')")
      span left-align
    label.radio
      input(type="radio", name="horizontal-rows", @click="domain.updateHorizontalAlign('#row-default > .row', 'center-align')")
      span center-align
    label.radio
      input(type="radio", name="horizontal-rows", @click="domain.updateHorizontalAlign('#row-default > .row', 'right-align')")
      span right-align
  .medium-space
  #row-default
    .row
      div min
      div min
      div min
    hr.small
    .row
      div min
      div min
      .max max
    hr.small
    .row
      div min
      .max max
      div min
    hr.small
    .row
      .max max
      div min
      div min
  .medium-space
  h6.middle-align
    span Navigations
    button.chip.circle(@click="domain.showSamples(data, '#navigation-default > nav', 'Navigations', null, 'https://github.com/beercss/beercss/blob/main/docs/NAVIGATION.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="horizontal-navigations", checked, @click="domain.updateHorizontalAlign('#navigation-default > nav')")
      span left-align
    label.radio
      input(type="radio", name="horizontal-navigations", @click="domain.updateHorizontalAlign('#navigation-default > nav', 'center-align')")
      span center-align
    label.radio
      input(type="radio", name="horizontal-navigations", @click="domain.updateHorizontalAlign('#navigation-default > nav', 'right-align')")
      span right-align
  .medium-space
  #navigation-default
    nav
      button Button
      button.chip Chip
      i home
      img.circle(:src="'/beer-and-woman.svg'")
    hr.small
    nav
      button Button
      button.chip Chip
      i home
      .max max
      img.circle(:src="'/beer-and-woman.svg'")
    hr.small
    nav
      button Button
      button.chip Chip
      .max max
      i home
      img.circle(:src="'/beer-and-woman.svg'")
    hr.small
    nav
      button Button
      .max max
      button.chip Chip
      i home
      img.circle(:src="'/beer-and-woman.svg'")
    hr.small
    nav
      .max max
      button Button
      button.chip Chip
      i home
      img.circle(:src="'/beer-and-woman.svg'")
  .medium-space
  #navigation-rail
    .medium-space
    h6.middle-align
      span Navigation rail/bar
      button.chip.circle(@click="domain.showSamples(data, '#app > div > nav.m.l', 'Navigation rail/bar', null, 'https://github.com/beercss/beercss/blob/main/docs/NAVIGATION.md')")
        i code
    nav.wrap
      label.radio(v-show="!data.isHorizontal")
        input#left-navigations(type="radio", name="position-navigations", checked, @click="domain.updateMenu(data, 'left')")
        span left
      label.radio(v-show="!data.isHorizontal")
        input#right-navigations(type="radio", name="position-navigations", @click="domain.updateMenu(data, 'right')")
        span right
      label.radio(v-show="data.isHorizontal")
        input#top-navigations(type="radio", name="position-navigations", @click="domain.updateMenu(data, 'top')")
        span top
      label.radio(v-show="data.isHorizontal")
        input#bottom-navigations(type="radio", name="position-navigations", @click="domain.updateMenu(data, 'bottom')")
        span bottom
  .medium-space
  #navigation-tabbed
    .medium-space
    h6.middle-align
      span Navigation tabbed
      button.chip.circle(@click="domain.showSamples(data, '#navigation-tabbed-example', 'Navigation tabbed', null, 'https://github.com/beercss/beercss/blob/main/docs/NAVIGATION.md')")
        i code
    nav.wrap
      label.radio
        input#small-navigations-tabbed(type="radio", name="size-navigations-tabbed", @click="domain.updateSize('#navigation-tabbed-example > .tabbed', 'small')")
        span small
      label.radio
        input#default-navigations-tabbed(type="radio", name="size-navigations-tabbed", checked, @click="domain.updateSize('#navigation-tabbed-example > .tabbed', '')")
        span medium
      label.radio
        input#large-navigations-tabbed(type="radio", name="size-navigations-tabbed", @click="domain.updateSize('#navigation-tabbed-example > .tabbed', 'large')")
        span large
      label.radio
        input(
          type="radio",
          name="page-tabbed",
          checked,
          @click="domain.updatePosition('#navigation-tabbed-example .page')"
        )
        span page default
      label.radio
        input(type="radio", name="page-tabbed", @click="domain.updatePosition('#navigation-tabbed-example .page', 'left')")
        span page left
      label.radio
        input(type="radio", name="page-tabbed", @click="domain.updatePosition('#navigation-tabbed-example .page', 'right')")
        span page right
    .medium-space
    #navigation-tabbed-example
      nav.tabbed
        a.active(data-ui="#page-overview", tabindex="0")
          i info
          span Overview
        a(data-ui="#page-specs", tabindex="0")
          i style
          span Specs
        a(data-ui="#page-guidelines", tabindex="0")
          i design_services
          span Guidelines
        a(data-ui="#page-acessibility", tabindex="0")
          i accessibility_new
          span Acessibility
      #page-overview.page.padding.active
        h5 Overview
      #page-specs.page.padding
        h5 Specs
      #page-guidelines.page.padding
        h5 Guidelines
      #page-acessibility.page.padding
        h5 Acessibility
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>

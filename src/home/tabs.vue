<template lang="pug">
#tabs
  .large-space
  h4
    span Tabs
    a.chip.circle(
      @click="domain.showSamples(data, '#tabs > div:not(.large-space)', null, 'https://github.com/beercss/beercss/blob/main/docs/TABS.md')"
    )
      i code
  nav.wrap
    label.radio
      input(
        type="radio",
        name="align-tabs",
        checked,
        @click="domain.updateAlign('#tabs .tabs')"
      )
      span default
    label.radio
      input(type="radio", name="align-tabs", @click="domain.updateAlign('#tabs .tabs', 'left-align')")
      span left-align
    label.radio
      input(type="radio", name="align-tabs", @click="domain.updateAlign('#tabs .tabs', 'center-align')")
      span center-align
    label.radio
      input(type="radio", name="align-tabs", @click="domain.updateAlign('#tabs .tabs', 'right-align')")
      span right-align
    label.radio
      input(
        type="radio",
        name="page-tabs",
        checked,
        @click="domain.updatePosition('#tabs .page')"
      )
      span page default
    label.radio
      input(type="radio", name="page-tabs", @click="domain.updatePosition('#tabs .page', 'left')")
      span page left
    label.radio
      input(type="radio", name="page-tabs", @click="domain.updatePosition('#tabs .page', 'right')")
      span page right
  p.space
  div
    .tabs
      a.active(data-ui="#tab1") Tab 1
      a(data-ui="#tab2") Tab 2
      a(data-ui="#tab3") Tab 3
    #tab1.page.padding.active
      h5 Tab 1
    #tab2.page.padding
      h5 Tab 2
    #tab3.page.padding
      h5 Tab 3
  div
    .tabs
      a.active(data-ui="#tab4")
        i home
        span Tab 1
      a(data-ui="#tab5")
        i home
        span Tab 2
      a(data-ui="#tab6")
        i home
        span Tab 3
    #tab4.page.padding.active
      h5 Tab 1
    #tab5.page.padding
      h5 Tab 2
    #tab6.page.padding
      h5 Tab 3
  div
    .tabs
      a.wrap.active(data-ui="#tab10") 
        i home
        span Tab 1
      a.wrap(data-ui="#tab11")
        i home
        span Tab 2
      a.wrap(data-ui="#tab12")
        i home
        span Tab 3
    #tab10.page.padding.active
      h5 Tab 1
    #tab11.page.padding
      h5 Tab 2
    #tab12.page.padding
      h5 Tab 3
  div
    .tabs
      a.active(data-ui="#tab7") 
        img.circle(:src="'/favicon.png'")
        span Tab 1
      a(data-ui="#tab8")
        img.circle(:src="'/favicon.png'")
        span Tab 2
      a(data-ui="#tab9")
        img.circle(:src="'/favicon.png'")
        span Tab 3
    #tab7.page.padding.active
      h5 Tab 1
    #tab8.page.padding
      h5 Tab 2
    #tab9.page.padding
      h5 Tab 3
  div
    .tabs
      a.wrap.active(data-ui="#tab13") 
        img.circle(:src="'/favicon.png'")
        span Tab 1
      a.wrap(data-ui="#tab14")
        img.circle(:src="'/favicon.png'")
        span Tab 2
      a.wrap(data-ui="#tab15")
        img.circle(:src="'/favicon.png'")
        span Tab 3
    #tab13.page.padding.active
      h5 Tab 1
    #tab14.page.padding
      h5 Tab 2
    #tab15.page.padding
      h5 Tab 3
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
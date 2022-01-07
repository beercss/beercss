<template lang="pug">
div
  #layout

  .menu.top.black
    .row.no-wrap.middle-align
      .col
        nav.padding
          a
            img(height="21", :src="'/uber-dark.png'")
          button.margin.wave.light.none.white-text.capitalize.m.l.large-text(
            data-ui="#dropdown-ride"
          ) 
            span Ride
            #dropdown-ride.dropdown.no-wrap(data-ui="#dropdown-ride")
              a Overview
              a Price calculator
              a Cities
              a Companies
              .divider
              a How it works
              a Safety
              a Airports
          button.margin.wave.light.none.white-text.capitalize.m.l.large-text(
            data-ui="#dropdown-drive"
          ) 
            span Drive
            #dropdown-drive.dropdown.no-wrap(data-ui="#dropdown-drive")
              a Overview
              a Partner app
              a Safe
              a How to drive in your city
              a Make deliveries
              .divider
              a Requirements
              a Vehicle solutions
              a Safety
          button.margin.wave.light.none.white-text.capitalize.m.l.large-text(
            data-ui="#dropdown-more"
          ) 
            span More
            #dropdown-more.dropdown.no-wrap(data-ui="#dropdown-more")
              a Uber Eats
              a Make deliveries
              a Uber Health
              .divider
              a Uber for companies
              a Uber Freight
      .col
        nav.right-align
          button.wave.light.none.white-text(data-ui="#themes")
            i.white-text brightness_medium
          a(href="/")
            img.circle(:src="'/favicon.png'")
    themes(v-model="$data")
</template>

<script>
import themes from "../shared/themes.vue";

export default {
  components: {
    themes
  },
  data() {
    return {
      isDarkTheme: false,
    };
  },
  mounted() {
    this.isDarkTheme = /dark/.test(document.body.getAttribute("style"));
    ui();
  }
};
</script>

<style>
</style>
<template lang="pug">
div
  .menu.top.black
    .row.no-wrap.middle-align
      .col
        nav.padding
          a
            img(height="21", :src="'/uber-dark.png'")
          button.margin.wave.light.none.white-text.capitalize.medium-device.large-device.large-text(
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
          button.margin.wave.light.none.white-text.capitalize.medium-device.large-device.large-text(
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
          button.margin.wave.light.none.white-text.capitalize.medium-device.large-device.large-text(
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
          button.wave.light.none.white-text(@click="updateTheme()")
            i.white-text brightness_medium
          a(href="/")
            img.small.circle(:src="'/favicon.png'")

  #layout
</template>

<script>
export default {
  data() {
    return {
      theme: "is-dark",
    };
  },
  created() {
    window.$layout = this;
  },
  mounted() {
    this.updateTheme();
    ui();
  },
  methods: {
    updateTheme() {
      this.theme = this.theme != "is-dark" ? "is-dark" : "";
      document.body.className = this.theme;
    },
    redirect(component) {
      this.url = page.current;

      document.getElementById("layout").innerHTML = '<div id="app"></div>';
      document.body.scrollTop = 0;
      return new Vue({
        el: "#app",
        render: (h) => h(component),
      });
    },
  },
};
</script>

<style>
</style>
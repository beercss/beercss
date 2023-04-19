<template lang="pug">
div
  nav.top.black.white-text
    .space
    img(height="24", :src="'/uber-dark.png'")
    button.large.transparent.m.l(
      data-ui="#dropdown-ride"
    )
      span Ride
      #dropdown-ride.dropdown.no-wrap(data-ui="#dropdown-ride")
        a Overview
        a Price calculator
        a Cities
        a Companies
        .small-divider
        a How it works
        a Safety
        a Airports
    button.large.transparent.m.l(
      data-ui="#dropdown-drive"
    )
      span Drive
      #dropdown-drive.dropdown.no-wrap(data-ui="#dropdown-drive")
        a Overview
        a Partner app
        a Safe
        a How to drive in your city
        a Make deliveries
        .small-divider
        a Requirements
        a Vehicle solutions
        a Safety
    button.large.transparent.m.l(
      data-ui="#dropdown-more"
    )
      span More
      #dropdown-more.dropdown.no-wrap(data-ui="#dropdown-more")
        a Uber Eats
        a Make deliveries
        a Uber Health
        .small-divider
        a Uber for companies
        a Uber Freight
    .max
    button.circle.large.transparent.m.l(data-ui="#themes1")
      i palette
    button.circle.large.transparent(@click="redirect('/')")
      img.responsive(:src="'/favicon.png'")
    .space

  main.responsive.max
    home
    themes(id="themes1", v-model="data")

</template>

<script setup lang="ts">
import { onMounted } from "vue";
import themes from "../shared/themes.vue";
import home from "./home.vue";
import data from "./data";
import sharedDomain from "../shared/domain";
import { redirect } from "../shared/router";

onMounted(() => {
  document.title = "Uber - Beer CSS";
  sharedDomain.initTheme(data.value);
});
</script>

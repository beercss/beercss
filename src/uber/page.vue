<template lang="pug">
div
  nav.top.black.white-text
    .space
    img(height="24", :src="'/uber-dark.png'")
    button.large.transparent.m.l(
      data-ui="#menu-ride"
    )
      span Ride
      menu#menu-ride.no-wrap(data-ui="#menu-ride")
        a Overview
        a Price calculator
        a Cities
        a Companies
        .small-divider
        a How it works
        a Safety
        a Airports
    button.large.transparent.m.l(
      data-ui="#menu-drive"
    )
      span Drive
      menu#menu-drive.no-wrap(data-ui="#menu-drive")
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
      data-ui="#menu-more"
    )
      span More
      menu#menu-more.no-wrap(data-ui="#menu-more")
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
});
</script>

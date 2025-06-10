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
        li Overview
        li Price calculator
        li Cities
        li Companies
        li
          hr
        li How it works
        li Safety
        li Airports
    button.large.transparent.m.l(
      data-ui="#menu-drive"
    )
      span Drive
      menu#menu-drive.no-wrap(data-ui="#menu-drive")
        li Overview
        li Partner app
        li Safe
        li How to drive in your city
        li Make deliveries
        li
          hr
        li Requirements
        li Vehicle solutions
        li Safety
    button.large.transparent.m.l(
      data-ui="#menu-more"
    )
      span More
      menu#menu-more.no-wrap(data-ui="#menu-more")
        li Uber Eats
        li Make deliveries
        li Uber Health
        li
          hr
        li Uber for companies
        li Uber Freight
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
import { redirect } from "../shared/router";
import sharedDomain from "../shared/domain";

onMounted(() => {
  document.title = "Uber - Beer CSS";
  sharedDomain.applyTheme(data.value);
});
</script>

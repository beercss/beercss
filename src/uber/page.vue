<template lang="pug">
div
  nav.top.black.white-text
    .space
    img(height="24", alt="", :src="'/uber-dark.png'")
    div
      button.large.transparent.m.l
        span Ride
      menu.no-wrap
        li Overview
        li Price calculator
        li Cities
        li Companies
        li
          hr
        li How it works
        li Safety
        li Airports
    div
      button.large.transparent.m.l
        span Drive
      menu.no-wrap
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
    div
      button.large.transparent.m.l
        span More
      menu.no-wrap
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
    button.circle.large.transparent(@click="redirect('/')", aria-hidden="true")
      img.responsive(alt="", :src="'/favicon.png'")
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

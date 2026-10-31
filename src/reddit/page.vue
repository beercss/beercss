<template lang="pug">
div(v-show="data.showPage")
  header.fixed.surface
    nav
      img(alt="", :src="'/reddit.svg'", style="width: 100px")
      .max.l
        .field.fill.round.prefix.suffix
          i home
          input(value="Home", readonly, aria-label="home")
          i arrow_drop_down
          menu
            li.transparent
              label Moderating
            li Mod Queue
            li Modmail
            li r/Mod
            li
              hr
            li.transparent
              label Your communities
            li
              i.tiny people
              .max r/sveltejs
            li
              i.tiny people
              .max r/sveltejs
            li
              i.tiny people
              .max r/sveltejs

      .max
        .field.fill.round.prefix
          i search
          input(placeholder="Search" aria-label="search")
      button.transparent.circle.l
        i trending_up
        span.tooltip.bottom Popular
      button.transparent.circle.l
        i shield
        span.tooltip.bottom Moderation
      button.transparent.circle.l.m
        i chat
        span.tooltip.bottom Chat
      button.transparent.circle.l.m
        i notifications
        span.tooltip.bottom Notifications
      button.transparent.circle.l.m
        i add
        span.tooltip.bottom Create Post
      div
        button.transparent.circle.s.m
          i more_vert
        menu.no-wrap.left
          li Popular
          li Moderation
          li Chat
          li Notifications
          li Create Post
      button.chip.l
        i campaign
        span Advertise
      div(data-ui="#menu-settings")
        button.transparent.small-round.small-padding
          img.responsive(alt="", :src="'/reddit-profile.png'")
          span.vertical.small-text.left-align
            span leonardorafaelw
            span.small-margin.top-margin
              i.tiny.link settings
              span 999 karma
          i arrow_drop_down
        menu#menu-settings.no-wrap.left
          li.transparent
            label My stuff
          li
            .max Online Status
            label.switch
              input(type="checkbox")
              span
          li Profile
          li Style Avatar
          li User Settings
          li
            hr
          li.transparent
            label View Options
          li
            .max Mod mode
            label.switch
              input(type="checkbox")
              span
          li
            .max Dark Mode
            label.switch
              input(type="checkbox", onclick="updateTheme()", checked, @click="updateTheme()")
              span
  home
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import home from "./home.vue";
import data from "./data";
import sharedDomain from "../shared/domain";

onMounted(async () => {
  document.title = "Reddit - Beer CSS";
  await sharedDomain.updateTheme(data.value, "#FF5722", "dark");
  data.value.showPage = true;
});

function updateTheme () {
  const newMode = ui("mode") === "dark" ? "light" : "dark";
  ui("mode", newMode);
}
</script>

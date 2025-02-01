<template lang="pug">
div(v-show="data.showPage")
  header.fixed.surface
    nav
      img(:src="'/reddit.svg'", style="width: 100px")
      .max.l
        .field.fill.round.prefix.suffix
          i home
          input(value="Home", readonly)
          i arrow_drop_down
          menu
            li.transparent
              label Moderating
            li Mod Queue
            li Modmail
            li r/Mod
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
          input
      button.transparent.circle.l
        i trending_up
        .tooltip.bottom Popular
      button.transparent.circle.l
        i shield
        .tooltip.bottom Moderation
      button.transparent.circle.l.m
        i chat
        .tooltip.bottom Chat
      button.transparent.circle.l.m
        i notifications
        .tooltip.bottom Notifications
      button.transparent.circle.l.m
        i add
        .tooltip.bottom Create Post
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
      .row.wave.no-space.small-padding.l.small-round(data-ui="#menu-profile")
        img.tiny(:src="'/reddit-profile.png'")
        .row.no-space
          .small-text
            b leonardorafaelw
            div
              i.tiny.link settings
              span 999 karma
          i arrow_drop_down
        menu.no-wrap.left#menu-profile
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

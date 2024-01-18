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
            a.transparent
              label Moderating
            a Mod Queue
            a Modmail
            a r/Mod
            .divider
            a.transparent
              label Your communities
            a.row
              i.tiny people
              .max r/sveltejs
            a.row
              i.tiny people
              .max r/sveltejs
            a.row
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
          a Popular
          a Moderation
          a Chat
          a Notifications
          a Create Post
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
          a.transparent
            label My stuff
          a.row
            .max Online Status
            label.switch
              input(type="checkbox")
              span
          a Profile
          a Style Avatar
          a User Settings
          .divider
          a.transparent
            label View Options
          a.row
            .max Mod mode
            label.switch
              input(type="checkbox")
              span
          a.row
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

<template lang="pug">
#layout
  nav.left.m.l.scroll(:class="{ max: data.isMax }")
    header
      button.circle.extra.transparent(@click="data.isMax = !data.isMax;")
        i {{ data.isMax ? 'menu_open' : 'menu' }}
    a(href="/youtube", :class="{ active: data.url === '/youtube' }")
      i home
      div Home
    a(href="/youtube/whats-hot", :class="{ active: data.url === '/youtube/whats-hot' }")
      i whatshot
      div What's hot
    a(href="/youtube/subscriptions", :class="{ active: data.url === '/youtube/subscriptions' }")
      i subscriptions
      div Subscript
    a(href="/youtube/library", :class="{ active: data.url === '/youtube/library' }")
      i video_library
      div Library
    a(data-ui="#themes1")
      i palette
      div Themes
    hr
    a
      i history
      div History
    a
      i slideshow
      div Your videos
    a
      i playlist_play
      div Your albuns
    a
      i watch_later
      div Watch later

  nav.bottom.s
    a(href="/youtube", :class="{ active: data.url === '/youtube' }")
      i home
      div Home
    a(href="/youtube/explore", :class="{ active: data.url === '/youtube/explore' }")
      i explore
      div Explore
    a.button.square.round.extra.fill(data-ui="#dialog-add")
      i add
    a(href="/youtube/library", :class="{ active: data.url === '/youtube/library' }")
      i video_library
      div Library
    a(data-ui="#themes1")
      i palette
      div Themes

  nav.top.surface
    img(
      v-show="!data.isDark",
      :src="'/youtube-light.png'"
    )
    img(
      v-show="data.isDark",
      :src="'/youtube-dark.png'"
    )
    .max
    .max.field.round.suffix.prefix.small.no-margin.m.l.white.black-text
      i.front search
      input(type="text")
      i.front mic
    .max
    button.circle.large.transparent.s(data-ui="#dialog-search")
      i search
    button.circle.large.transparent.m.l(data-ui="#menu-add")
      i video_call
      menu#menu-add.left.no-wrap(data-ui="#menu-add")
        li
          .min
            i upload
          .min Send a video
        li
          .min
            i sensors
          .min Broadcast live
    button.circle.large.transparent.m.l(data-ui="#menu-apps")
      i apps
      menu#menu-apps.left.no-wrap(data-ui="#menu-apps")
        li
          .min
            img(:src="'/youtube.png'")
          .min Youtube TV
        hr.small
        li
          .min
            img(:src="'/youtube.png'")
          .min Youtube Music
        li
          .min
            img(:src="'/youtube.png'")
          .min Youtube Kids
    button.circle.large.transparent(data-ui="#dialog-notifications")
      i notifications
    button.circle.large.transparent(@click="redirect('/')")
      img.responsive(:src="'/favicon.png'")

  .overlay
  dialog#dialog-notifications.right
    nav
      h5.max Notifications
      button.circle.transparent(data-ui="#dialog-notifications")
        i close
    p No new notifications here

  .overlay
  dialog#dialog-add.bottom.top-round
    nav
      h5.max New
      button.circle.transparent(data-ui="#dialog-add")
        i close
    a.row
      .min
        i upload
      .min
        span Send a video
    a.row
      .min
        i sensors
      .min
        span Broadcast live

  .overlay
  dialog#dialog-search.top.transparent
    .field.round.suffix.prefix.small.no-margin.white.black-text
      i.front search
      input(type="text")
      i.front mic

  themes(id="themes1", v-model="data")

  .medium-space
  explore(v-if="data.url === '/youtube/explore'")
  home(v-if="data.url === '/youtube'")
  library(v-if="data.url === '/youtube/library'")
  subscriptions(v-if="data.url === '/youtube/subscriptions'")
  whatsHot(v-if="data.url === '/youtube/whats-hot'")
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import themes from "../shared/themes.vue";
import domain from "./domain";
import data from "./data";
import explore from "./explore.vue";
import home from "./home.vue";
import library from "./library.vue";
import subscriptions from "./subscriptions.vue";
import whatsHot from "./whatsHot.vue";
import { onRoute, redirect } from "../shared/router";
import sharedDomain from "../shared/domain";

onMounted(async () => {
  document.title = "Youtube - Beer CSS";
  sharedDomain.applyTheme(data.value);

  data.value.isLoaded = false;
  await domain.waitForImages();
  data.value.isLoaded = true;
});

onRoute((url:string) => {
  data.value.check = false;
  data.value.url = url;
});
</script>

<template lang="pug">
#layout
  nav.left.m.l.scroll(:class="{ max: data.isMax }")
    header
      button.circle.extra.transparent(@click="data.isMax = !data.isMax;")
        i {{ data.isMax ? 'menu_open' : 'menu' }}
    a(href="/youtube", :class="{ active: data.url === '/youtube' }")
      i home
      span Home
    a(href="/youtube/whats-hot", :class="{ active: data.url === '/youtube/whats-hot' }")
      i whatshot
      div What's hot
    a(href="/youtube/subscriptions", :class="{ active: data.url === '/youtube/subscriptions' }")
      i subscriptions
      span Subscript
    a(href="/youtube/library", :class="{ active: data.url === '/youtube/library' }")
      i video_library
      span Library
    a(data-ui="#themes1", href="javascript:;")
      i palette
      span Themes
    hr
    a(href="javascript:;")
      i history
      span History
    a(href="javascript:;")
      i slideshow
      span Your videos
    a(href="javascript:;")
      i playlist_play
      span Your albuns
    a(href="javascript:;")
      i watch_later
      span Watch later

  nav.bottom.s
    a(href="/youtube", :class="{ active: data.url === '/youtube' }")
      i home
      span Home
    a(href="/youtube/explore", :class="{ active: data.url === '/youtube/explore' }")
      i explore
      span Explore
    a.button.square.round.extra.fill(data-ui="#dialog-add", href="javascript:;")
      i add
    a(href="/youtube/library", :class="{ active: data.url === '/youtube/library' }")
      i video_library
      span Library
    a(data-ui="#themes1", href="javascript:;")
      i palette
      span Themes

  nav.top.surface
    img(
      v-show="!data.isDark",
      alt="", :src="'/youtube-light.png'"
    )
    img(
      v-show="data.isDark",
      alt="", :src="'/youtube-dark.png'"
    )
    .max
    .max.field.round.suffix.prefix.small.no-margin.m.l.white.black-text
      i.front search
      input(type="text", placeholder="Search", aria-label="search")
      i.front mic
    .max
    button.circle.large.transparent.s(data-ui="#dialog-search")
      i search
    div
      button.circle.large.transparent.m.l
        i video_call
      menu.left.no-wrap
        li
          i upload
          div Send a video
        li
          i sensors
          div Broadcast live
    div
      button.circle.large.transparent.m.l
        i apps
      menu.left.no-wrap
        li
          img(alt="", :src="'/youtube.png'")
          div Youtube TV
        li 
          hr
        li
          img(alt="", :src="'/youtube.png'")
          div Youtube Music
        li
          img(alt="", :src="'/youtube.png'")
          div Youtube Kids
    button.circle.large.transparent(data-ui="#dialog-notifications")
      i notifications
    button.circle.large.transparent(@click="redirect('/')", aria-label="beer css")
      img.responsive(alt="", :src="'/favicon.png'")

  .overlay
  dialog#dialog-notifications.right
    nav
      h2.h5.max Notifications
      button.circle.transparent(data-ui="#dialog-notifications")
        i close
    p No new notifications here

  .overlay
  dialog#dialog-add.bottom.top-round
    nav
      h2.h5.max New
      button.circle.transparent(data-ui="#dialog-add")
        i close
    ul.list
      li
        i upload
        div Send a video
      li
        i sensors
        div Broadcast live

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

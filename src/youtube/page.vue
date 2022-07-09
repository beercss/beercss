<template lang="pug">
#layout
  nav.left.m.l
    .large-space
    .large-space
    a(href="/youtube", :class="{ active: data.url == '/youtube' }")
      i home
      div Home
    a(href="/youtube/whats-hot", :class="{ active: data.url == '/youtube/whats-hot' }")
      i whatshot
      div What's hot
    a(href="/youtube/subscriptions", :class="{ active: data.url == '/youtube/subscriptions' }")
      i subscriptions
      div Subscript
    a(href="/youtube/library", :class="{ active: data.url == '/youtube/library' }")
      i video_library
      div Library
    a(data-ui="#themes1")
      i brightness_medium
      div Themes
    themes(id="themes1", v-model="data")
      .large-space
      .medium-space

  nav.bottom.s
    a(href="/youtube", :class="{ active: data.url == '/youtube' }")
      i home
      div Home
    a(href="/youtube/explore", :class="{ active: data.url == '/youtube/explore' }")
      i explore
      div Explore
    a.button.circle.small.border(data-ui="#modal-add")
      i add
    a(href="/youtube/library", :class="{ active: data.url == '/youtube/library' }")
      i video_library
      div Library
    a(data-ui="#themes2")
      i brightness_medium
      div Themes
    themes(id="themes2", v-model="data")
      .large-space
      .medium-space

  nav.top
    .space
    button.circle.large.transparent.m.l(data-ui="#modal-expanded")
      i menu
    .space
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
    button.circle.large.transparent.s(data-ui="#modal-search")
      i search
    button.circle.large.transparent.m.l(data-ui="#dropdown-add")
      i video_call
      #dropdown-add.dropdown.left.no-wrap(data-ui="#dropdown-add")
        a.row.no-wrap
          .col.min
            i upload
          .col Send a video
        a.row.no-wrap
          .col.min
            i sensors
          .col Broadcast live
    button.circle.large.transparent.m.l(data-ui="#dropdown-apps")
      i apps
      #dropdown-apps.dropdown.left.no-wrap(data-ui="#dropdown-apps")
        a.row.no-wrap
          .col.min
            img(:src="'/youtube.png'")
          .col Youtube TV
        .divider
        a.row.no-wrap
          .col.min
            img(:src="'/youtube.png'")
          .col Youtube Music
        a.row.no-wrap
          .col.min
            img(:src="'/youtube.png'")
          .col Youtube Kids
    button.circle.large.transparent(data-ui="#modal-notifications")
      i notifications
    button.circle.large.transparent(@click="redirect('/')")
      img.responsive(:src="'/favicon.png'")
    .space

  #modal-notifications.modal.right
    nav
      h5.max Notifications
      button.circle.transparent(data-ui="#modal-notifications")
        i close
    p No new notifications here

  #modal-expanded.modal.left.small
    nav
      a(data-ui="#modal-expanded")
        i menu
      a
        img(v-show="!data.isDark", :src="'/youtube-light.png'")
        img(v-show="data.isDark", :src="'/youtube-dark.png'")
    .medium-space
    a.row.no-wrap(data-ui="#modal-expanded", href="/youtube")
      .col.min
        i home
      .col Home
    a.row.no-wrap(data-ui="#modal-expanded", href="/youtube/whats-hot")
      .col.min
        i whatshot
      .col What's hot
    a.row.no-wrap(data-ui="#modal-expanded", href="/youtube/subscriptions")
      .col.min
        i subscriptions
      .col Subscript
    a.row.no-wrap(data-ui="#modal-expanded", href="/youtube/library")
      .col.min
        i video_library
      .col Library
    .divider
    a.row.no-wrap(data-ui="#modal-expanded")
      .col.min
        i history
      .col History
    a.row.no-wrap(data-ui="#modal-expanded")
      .col.min
        i slideshow
      .col Your videos
    a.row.no-wrap(data-ui="#modal-expanded")
      .col.min
        i playlist_play
      .col Your albuns
    a.row.no-wrap(data-ui="#modal-expanded")
      .col.min
        i watch_later
      .col Watch later

  #modal-add.modal.bottom.top-round
    nav
      h5.max New
      button.circle.transparent(data-ui="#modal-add")
        i close
    a.row.no-wrap
      .col.min
        i upload
      .col
        span Send a video
    a.row.no-wrap
      .col.min
        i sensors
      .col
        span Broadcast live

  #modal-search.modal.top.transparent
    .field.round.suffix.prefix.small.no-margin.white.black-text
      i.front search
      input(type="text")
      i.front mic
  
  explore(v-if="data.url == '/youtube/explore'")
  home(v-if="data.url == '/youtube'")
  library(v-if="data.url == '/youtube/library'")
  subscriptions(v-if="data.url == '/youtube/subscriptions'")
  whatsHot(v-if="data.url == '/youtube/whats-hot'")
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import themes from "../shared/themes.vue";
import domain from "./domain";
import sharedDomain from "../shared/domain";
import data from "./data";
import explore from "./explore.vue";
import home from "./home.vue";
import library from "./library.vue";
import subscriptions from "./subscriptions.vue";
import whatsHot from "./whatsHot.vue";
import { onRoute, redirect } from "../shared/router";

onMounted(async() => {
  sharedDomain.initTheme(data.value);
  
  data.value.isLoaded = false;
  await domain.waitForImages();
  data.value.isLoaded = true;
});

onRoute((url:string) => {
  data.value.check = false;
  data.value.url = url;
});
</script>
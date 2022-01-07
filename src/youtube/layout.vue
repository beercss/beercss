<template lang="pug">
div
  .menu.left.flat.m.l
    .large-space
    .large-space
    a(href="/youtube", :class="{ active: url == '/youtube' }")
      i home
      div Home
    a(
      href="/youtube/whats-hot",
      :class="{ active: url == '/youtube/whats-hot' }"
    )
      i whatshot
      div What's hot
    a(
      href="/youtube/subscriptions",
      :class="{ active: url == '/youtube/subscriptions' }"
    )
      i subscriptions
      div Subscript
    a(href="/youtube/library", :class="{ active: url == '/youtube/library' }")
      i video_library
      div Library
    a(data-ui="#themes1")
      i brightness_medium
      div Themes
    themes(id="themes1", v-model="$data")
      .large-space
      .medium-space

  .menu.bottom.s
    a(href="/youtube", :class="{ active: url == '/youtube' }")
      i home
      div Home
    a(href="/youtube/explore", :class="{ active: url == '/youtube/explore' }")
      i explore
      div Explore
    a.button.circle.small.border(data-ui="#modal-add")
      i add
    a(href="/youtube/library", :class="{ active: url == '/youtube/library' }")
      i video_library
      div Library
    a(data-ui="#themes2")
      i brightness_medium
      div Themes
    themes(id="themes2", v-model="$data")
      .large-space
      .medium-space

  .menu.top
    .row.no-wrap.middle-align
      .col
        nav.padding
          button.none.m.l(data-ui="#modal-expanded")
            i menu
          a
            img(
              v-show="!isDarkTheme",
              :src="'/youtube-light.png'"
            )
            img(
              v-show="isDarkTheme",
              :src="'/youtube-dark.png'"
            )
      .col
        .field.round.suffix.prefix.small.no-margin.m.l
          i.front.black-text search
          input.white.black-text(type="text")
          i.front.black-text mic
      .col
        nav.right-align
          button.none.s(data-ui="#modal-search")
            i search
          button.none.m.l(data-ui="#dropdown-add")
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
          button.none.m.l(data-ui="#dropdown-apps")
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
          button.none(data-ui="#modal-notifications")
            i notifications
          a(href="/")
            img.circle(:src="'/favicon.png'")

  #modal-notifications.modal.right
    .row.no-wrap.middle-align
      .col
        h5.no-margin Notifications
      .col.min
        a(data-ui="#modal-notifications")
          i close
    p No new notifications here

  #modal-expanded.modal.left.small
    nav
      a(data-ui="#modal-expanded")
        i menu
      a
        img(v-show="!isDarkTheme", :src="'/youtube-light.png'")
        img(v-show="isDarkTheme", :src="'/youtube-dark.png'")
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
    a.row.no-wrap(data-ui="#themes")
      .col.min
        i brightness_medium
      .col Themes
    .large-divider
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

  #modal-add.modal.bottom.round
    .row.no-wrap.middle-align
      .col
        h5.no-margin New
      .col.right-align
        a(data-ui="#modal-add")
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

  #modal-search.modal.top.transparent.flat
    .field.round.suffix.prefix.small.no-margin
      i.front.black-text search
      input.white.black-text(type="text")
      i.front.black-text mic

  #layout
</template>

<script>
import themes from "/shared/themes.vue";

export default {
  components: {
    themes
  },
  data() {
    return {
      url: "/youtube",
      isDarkTheme: false
    };
  },
  mounted() {
    this.isDarkTheme = /dark/.test(document.body.getAttribute("style"));
    ui();

    window.addEventListener("redirected", (event) => {
      this.url = event.detail.url;
    });
  },
  methods: {
    updateTheme() {
      let theme = document.querySelector("html").className;
      this.isDarkTheme = /dark/i.test(theme);

      theme = this.isDarkTheme
        ? theme.replace("dark", "light")
        : theme.replace("light", "dark");

      document.querySelector("html").className = theme;
    },
  },
};
</script>

<style>
</style>
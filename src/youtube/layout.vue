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
    a(@click="updateTheme()")
      i brightness_medium
      div Theme

  .menu.bottom.border.s
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
    a(@click="updateTheme()")
      i brightness_medium
      div Theme

  .menu.top.border
    .row.no-wrap.middle-align
      .col
        nav.padding
          button.none.color-2-text.m.l(data-ui="#modal-expanded")
            i menu
          a
            img(
              v-show="theme == 'is-youtube-light'",
              :src="'/youtube-light.png'"
            )
            img(
              v-show="theme == 'is-youtube-dark'",
              :src="'/youtube-dark.png'"
            )
      .col
        .field.round.sufix.prefix.small.no-margin.m.l
          i.front search
          input.white.black-text(type="text")
          i.front mic
      .col
        nav.right-align
          button.none.color-2-text.s(data-ui="#modal-search")
            i search
          button.none.color-2-text.m.l(data-ui="#dropdown-add")
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
          button.none.color-2-text.m.l(data-ui="#dropdown-apps")
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
          button.none.color-2-text(data-ui="#modal-notifications")
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
        img(v-show="theme == 'is-youtube-light'", :src="'/youtube-light.png'")
        img(v-show="theme == 'is-youtube-dark'", :src="'/youtube-dark.png'")
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
    a.row.no-wrap(@click="updateTheme()")
      .col.min
        i brightness_medium
      .col Theme
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
    .field.round.sufix.prefix.small.no-margin
      i.front search
      input.white.black-text(type="text")
      i.front mic

  #layout
</template>

<script>
export default {
  data() {
    return {
      url: "/youtube",
      theme: null,
      logo: null,
    };
  },
  created() {
    window.$layout = this;
  },
  mounted() {
    this.updateTheme();
    ui();
  },
  methods: {
    updateTheme() {
      if (this.theme == "is-youtube-light") {
        this.theme = "is-youtube-dark";
        this.logo = "/youtube-dark.png";
      } else {
        this.theme = "is-youtube-light";
        this.logo = "/youtube-light.png";
      }

      document.querySelector("html").className = this.theme;
    },
    redirect(component) {
      this.url = page.current;

      document.getElementById("layout").innerHTML = '<div id="app"></div>';
      document.body.scrollTop = 0;
      return new Vue({
        el: "#app",
        render: (h) => h(component),
      });
    },
  },
};
</script>

<style>
.is-youtube-light {
  --color-1: #f44336;
  --color-1a: #f4433680;
  --color-1b: #f4433600;
  --color-2: #000000;
  --color-2a: #00000010;
  --color-2b: #00000020;
  --color-3: #e91e63;
  --color-4: #ffffff;
  --color-4a: rgba(255, 255, 255, 0.9);
  --color-5: #f5f5f5;
}
.is-youtube-dark {
  --color-1: #ef5350;
  --color-1a: #ef535080;
  --color-1b: #ef535000;
  --color-2: #ffffff;
  --color-2a: #ffffff10;
  --color-2b: #ffffff20;
  --color-3: #ff9800;
  --color-4: #263238;
  --color-4a: rgba(55, 71, 79, 0.9);
  --color-5: #212121;
}
</style>
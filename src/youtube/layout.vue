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
          button.none.m.l(data-ui="#modal-expanded")
            i.grey-text menu
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
        .field.round.suffix.prefix.small.no-margin.m.l
          i.front search
          input.white.black-text(type="text")
          i.front mic
      .col
        nav.right-align
          button.none.s(data-ui="#modal-search")
            i.grey-text search
          button.none.m.l(data-ui="#dropdown-add")
            i.grey-text video_call
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
            i.grey-text apps
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
            i.grey-text notifications
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
    .field.round.suffix.prefix.small.no-margin
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
  mounted() {
    this.updateTheme();
    ui();

    window.addEventListener("redirected", (event) => {
      this.url = event.detail.url;
    });
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
  },
};
</script>

<style>
.is-youtube-light {
  --background: #f5f5f5;
  --foreground: #ffffff;
  --text-1: #000000;
  --text-2: #9e9e9e;
  --border: rgba(0,0,0,.2);
  --active: rgba(0,0,0,.1);
  --fill: rgba(0,0,0,.05);
  --success: #f44336;
  --success-text: #ffffff;
  --warning: #e91e63;
  --warning-text: #ffffff;
  --chip: rgba(0,0,0,.07);
  --chip-text: #000000;
  --overlay: rgba(0,0,0,.5);
  --overlay-text: #ffffff;
  --tooltip: rgba(0,0,0,.9);
  --tooltip-text: #ffffff;
  --shadow-1: 0 2rem 2rem 0 rgba(0, 0, 0, .14), 0 1rem 5rem 0 rgba(0, 0, 0, .12), 0 3rem 1rem -2rem rgba(0, 0, 0, .2);
  --shadow-2: 0 6rem 10rem 0 rgba(0, 0, 0, .14), 0 1rem 18rem 0 rgba(0, 0, 0, .12), 0 3rem 5rem -1rem rgba(0, 0, 0, .3);
  --shadow-3: 0 10rem 16rem 0 rgba(0, 0, 0, .14), 0 1rem 31rem 0 rgba(0, 0, 0, .12), 0 3rem 9rem 0rem rgba(0, 0, 0, .4);
  --size: 1px;
  --font: "Roboto", BlinkMacSystemFont, -apple-system, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  --speed-1: .1s;
  --speed-2: .2s;
  --speed-3: .3s;
  --speed-4: .4s;
}

.is-youtube-dark {
  --background: #212121;
  --foreground: #263238;
  --text-1: #ffffff;
  --text-2: #9e9e9e;
  --border: rgba(255,255,255,.2);
  --active: rgba(255,255,255,.1);
  --fill: rgba(0,0,0,.1);
  --success: #ef5350;
  --success-text: #ffffff;
  --warning: #ff9800;
  --warning-text: #ffffff;
  --chip: rgba(255,255,255,.07);
  --chip-text: #ffffff;
  --overlay: rgba(0,0,0,.5);
  --overlay-text: #000000;
  --tooltip: rgba(0,0,0,.9);
  --tooltip-text: #ffffff;
  --shadow-1: 0 2rem 2rem 0 rgba(0, 0, 0, .14), 0 1rem 5rem 0 rgba(0, 0, 0, .12), 0 3rem 1rem -2rem rgba(0, 0, 0, .2);
  --shadow-2: 0 6rem 10rem 0 rgba(0, 0, 0, .14), 0 1rem 18rem 0 rgba(0, 0, 0, .12), 0 3rem 5rem -1rem rgba(0, 0, 0, .3);
  --shadow-3: 0 10rem 16rem 0 rgba(0, 0, 0, .14), 0 1rem 31rem 0 rgba(0, 0, 0, .12), 0 3rem 9rem 0rem rgba(0, 0, 0, .4);
  --size: 1px;
  --font: "Roboto", BlinkMacSystemFont, -apple-system, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  --speed-1: .1s;
  --speed-2: .2s;
  --speed-3: .3s;
  --speed-4: .4s;
}
</style>
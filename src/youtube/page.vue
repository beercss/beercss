<template lang="pug">
div
  .menu.left.large.flat.medium-device.large-device
    .large-space
    .large-space
    a
      i home
      div Home
    a
      i whatshot
      div What's hot
    a
      i subscriptions
      div Subscript
    a
      i video_library
      div Library
    a(@click="updateTheme()")
      i brightness_medium
      div Theme

  .menu.bottom.border.small-device
    a
      i home
      div Home
    a
      i explore
      div Explore
    a
      button.circle.small.border(data-ui="#modal-add")
        i add
    a
      i video_library
      div Library
    a(@click="updateTheme()")
      i brightness_medium
      div Theme

  .menu.top.border.large
    .row.no-wrap.middle-align
      .col.min
        nav.padding
          a.medium-device.large-device(data-ui="#modal-expanded")
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
        .field.round.sufix.prefix.small.no-margin.medium-device.large-device
          i.front search
          input.white.black-text(type="text")
          i.front mic
      .col.min
        nav
          a.small-device(data-ui="#modal-search")
            i search
          a.medium-device.large-device(data-ui="#dropdown-add")
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
          a.medium-device.large-device(data-ui="#dropdown-apps")
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
          a(data-ui="#modal-notifications")
            i notifications
          a(data-ui="#modal-profile")
            img.small.circle(:src="'/favicon.png'")

  .container.page.right.active
    nav.scroll
      a.chip.active.wave The best of 2020
      a.chip.wave Documentaries
      a.chip.wave Rock and roll
      a.chip.wave Others
    .space
    .row
      .col.s12.m6.l3
        .card.no-padding.flat.transparent
          a.wave
            img.responsive(:src="'/beer-and-woman.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .space
          .row.no-wrap.middle-align
            .col.min
              img.small.circle(:src="'/beer-and-woman.jpg'")
            .col
              h6.no-margin Title
              .grey-text More text
            .col.min
              button.none.grey-text(data-ui="#dropdown-1")
                i more_vert
                #dropdown-1.dropdown.left.no-wrap(data-ui="#dropdown-1")
                  a Item 1
                  a Item 2
                  a Item 3
      .col.s12.m6.l3
        .card.no-padding.flat.transparent
          a.wave
            img.responsive(:src="'/beer-and-woman.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .space
          .row.no-wrap.middle-align
            .col.min
              img.small.circle(:src="'/beer-and-woman.jpg'")
            .col
              h6.no-margin Title
              .grey-text More text
            .col.min
              button.none.grey-text(data-ui="#dropdown-2")
                i more_vert
                #dropdown-2.dropdown.left.no-wrap(data-ui="#dropdown-2")
                  a Item 1
                  a Item 2
                  a Item 3
      .col.s12.m6.l3
        .card.no-padding.flat.transparent
          a.wave
            img.responsive(:src="'/beer-and-woman.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .space
          .row.no-wrap.middle-align
            .col.min
              img.small.circle(:src="'/beer-and-woman.jpg'")
            .col
              h6.no-margin Title
              .grey-text More text
            .col.min
              button.none.grey-text(data-ui="#dropdown-3")
                i more_vert
                #dropdown-3.dropdown.left.no-wrap(data-ui="#dropdown-3")
                  a Item 1
                  a Item 2
                  a Item 3
      .col.s12.m6.l3
        .card.no-padding.flat.transparent
          a.wave
            img.responsive(:src="'/beer-and-woman.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .space
          .row.no-wrap.middle-align
            .col.min
              img.small.circle(:src="'/beer-and-woman.jpg'")
            .col
              h6.no-margin Title
              .grey-text More text
            .col.min
              button.none.grey-text(data-ui="#dropdown-4")
                i more_vert
                #dropdown-4.dropdown.left.no-wrap(data-ui="#dropdown-4")
                  a Item 1
                  a Item 2
                  a Item 3
      .col.s12.m6.l3
        .card.no-padding.flat.transparent
          a.wave
            img.responsive(:src="'/beer-and-woman.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .space
          .row.no-wrap.middle-align
            .col.min
              img.small.circle(:src="'/beer-and-woman.jpg'")
            .col
              h6.no-margin Title
              .grey-text More text
            .col.min
              button.none.grey-text(data-ui="#dropdown-5")
                i more_vert
                #dropdown-5.dropdown.left.no-wrap(data-ui="#dropdown-5")
                  a Item 1
                  a Item 2
                  a Item 3
      .col.s12.m6.l3
        .card.no-padding.flat.transparent
          a.wave
            img.responsive(:src="'/beer-and-woman.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .space
          .row.no-wrap.middle-align
            .col.min
              img.small.circle(:src="'/beer-and-woman.jpg'")
            .col
              h6.no-margin Title
              .grey-text More text
            .col.min
              button.none.grey-text(data-ui="#dropdown-6")
                i more_vert
                #dropdown-6.dropdown.left.no-wrap(data-ui="#dropdown-6")
                  a Item 1
                  a Item 2
                  a Item 3
      .col.s12.m6.l3
        .card.no-padding.flat.transparent
          a.wave
            img.responsive(:src="'/beer-and-woman.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .space
          .row.no-wrap.middle-align
            .col.min
              img.small.circle(:src="'/beer-and-woman.jpg'")
            .col
              h6.no-margin Title
              .grey-text More text
            .col.min
              button.none.grey-text(data-ui="#dropdown-7")
                i more_vert
                #dropdown-7.dropdown.left.no-wrap(data-ui="#dropdown-7")
                  a Item 1
                  a Item 2
                  a Item 3
      .col.s12.m6.l3
        .card.no-padding.flat.transparent
          a.wave
            img.responsive(:src="'/beer-and-woman.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .space
          .row.no-wrap.middle-align
            .col.min
              img.small.circle(:src="'/beer-and-woman.jpg'")
            .col
              h6.no-margin Title
              .grey-text More text
            .col.min
              button.none.grey-text(data-ui="#dropdown-8")
                i more_vert
                #dropdown-8.dropdown.left.no-wrap(data-ui="#dropdown-8")
                  a Item 1
                  a Item 2
                  a Item 3

    .large-divider
    h5 What's hot
    .row.no-wrap.scroll
      .col
        .card.no-padding.border.transparent.min
          a.wave
            img.responsive(:src="'/beer-and-woman.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .padding
            .row.no-wrap.middle-align
              .col
                h6.no-margin Title
                .grey-text More text
              .col.min
                a.grey-text
                  i thumb_up
      .col
        .card.no-padding.border.transparent.min
          a.wave
            img.responsive(:src="'/beer-and-woman.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .padding
            .row.no-wrap.middle-align
              .col
                h6.no-margin Title
                .grey-text More text
              .col.min
                a.grey-text
                  i thumb_up
      .col
        .card.no-padding.border.transparent.min
          a.wave
            img.responsive(:src="'/beer-and-woman.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .padding
            .row.no-wrap.middle-align
              .col
                h6.no-margin Title
                .grey-text More text
              .col.min
                a.grey-text
                  i thumb_up
      .col
        .card.no-padding.border.transparent.min
          a.wave
            img.responsive(:src="'/beer-and-woman.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .padding
            .row.no-wrap.middle-align
              .col
                h6.no-margin Title
                .grey-text More text
              .col.min
                a.grey-text
                  i thumb_up
    .large-divider
    h5 Your videos
    .row.no-wrap.scroll
      .col
        .card.no-padding.border.transparent.min
          a.wave
            img.responsive(:src="'/beer-and-woman.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .padding
            .row.no-wrap.middle-align
              .col
                h6.no-margin Title
                .grey-text More text
              .col.min
                a.grey-text
                  i thumb_up
      .col
        .card.no-padding.border.transparent.min
          a.wave
            img.responsive(:src="'/beer-and-woman.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .padding
            .row.no-wrap.middle-align
              .col
                h6.no-margin Title
                .grey-text More text
              .col.min
                a.grey-text
                  i thumb_up
      .col
        .card.no-padding.border.transparent.min
          a.wave
            img.responsive(:src="'/beer-and-woman.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .padding
            .row.no-wrap.middle-align
              .col
                h6.no-margin Title
                .grey-text More text
              .col.min
                a.grey-text
                  i thumb_up
      .col
        .card.no-padding.border.transparent.min
          a.wave
            img.responsive(:src="'/beer-and-woman.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .padding
            .row.no-wrap.middle-align
              .col
                h6.no-margin Title
                .grey-text More text
              .col.min
                a.grey-text
                  i thumb_up

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
    a.row.no-wrap
      .col.min
        i home
      .col Home
    a.row.no-wrap
      .col.min
        i whatshot
      .col What's hot
    a.row.no-wrap
      .col.min
        i subscriptions
      .col Subscript
    a.row.no-wrap
      .col.min
        i video_library
      .col Library
    a.row.no-wrap(@click="updateTheme()")
      .col.min
        i brightness_medium
      .col Theme
    .large-divider
    a.row.no-wrap
      .col.min
        i history
      .col History
    a.row.no-wrap
      .col.min
        i slideshow
      .col Your videos
    a.row.no-wrap
      .col.min
        i playlist_play
      .col Your albuns
    a.row.no-wrap
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

  #modal-profile.modal.right.small
    .row.no-wrap.top-align
      .col.min
        img.circle.large(:src="'/favicon.png'")
      .col
        h6.no-margin Beercss
        div beercss2021@gmail.com
        a.link(href="/", target="_self") https://www.beercss.com
      .col.min
        a(data-ui="#modal-profile")
          i close
    .large-divider
    a.row.no-wrap.middle-align
      .col.min
        i account_box
      .col Your channels
    a.row.no-wrap.middle-align
      .col.min
        i settings
      .col Configuration
    a.row.no-wrap.middle-align
      .col.min
        i switch_account
      .col Switch account
    a.row.no-wrap.middle-align
      .col.min
        i logout
      .col Logout
</template>

<script>
export default {
  data() {
    return {
      theme: null,
      logo: null,
    };
  },
  mounted() {
    this.updateTheme();
    window.ui();
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

      document.body.className = this.theme;
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
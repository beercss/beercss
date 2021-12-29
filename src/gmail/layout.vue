<template lang="pug">
.container.max
  .menu.left.border.no-space.grey-text.m.l
    .large-space
    .medium-space
    a.button.white.circle.large(data-ui="#modal-add")
      img(:src="'/add.png'")
    .space
    a(href="/gmail", :class="{ active: this.url == '/gmail' }")
      i.outlined inbox
      .tooltip.right Inbox
    a(href="/gmail/snoozed", :class="{ active: this.url == '/gmail/snoozed' }")
      i.outlined watch_later
      .tooltip.right Snoozed
    a(
      href="/gmail/important",
      :class="{ active: this.url == '/gmail/important' }"
    )
      i.outlined label_important
      .tooltip.right Important
    a(href="/gmail/sent", :class="{ active: this.url == '/gmail/sent' }")
      i.outlined send
      .tooltip.right Sent
    a(href="/gmail/drafts", :class="{ active: this.url == '/gmail/drafts' }")
      i.outlined insert_drive_file
      .tooltip.right Drafts
    a(href="/gmail/spam", :class="{ active: this.url == '/gmail/spam' }")
      i.outlined error_outline
      .tooltip.right Spam
    a(@click="updateTheme()")
      i.outlined brightness_medium
      .tooltip.right Theme

  .menu.right.border.m.l
    .large-space
    .medium-space
    a.wave.dark
      img.tiny(:src="'/calendar.png'")
      span.tooltip.left Calendar
    a.wave.dark
      img.tiny(:src="'/keep.png'")
      span.tooltip.left Keep
    a.wave.dark
      img.tiny(:src="'/tasks.png'")
      span.tooltip.left Tasks
    a.wave.dark
      img.tiny(:src="'/contacts.png'")
      span.tooltip.left Contacts

  .menu.top.border.grey-text
    .row.no-wrap.middle-align
      .col
        nav.padding
          button.none.grey-text(data-ui="#dropdown-menu")
            i.outlined menu
            #dropdown-menu.dropdown.no-wrap(data-ui="#dropdown-menu")
              a.row.no-wrap(href="/gmail")
                .col.min
                  i.outlined inbox
                .col Inbox
              a.row.no-wrap(href="/gmail/snoozed")
                .col.min
                  i.outlined watch_later
                .col Snoozed
              a.row.no-wrap(href="/gmail/important")
                .col.min
                  i.outlined label_important
                .col Important
              a.row.no-wrap(href="/gmail/sent")
                .col.min
                  i.outlined send
                .col Sent
              a.row.no-wrap(href="/gmail/drafts")
                .col.min
                  i.outlined insert_drive_file
                .col Drafts
              a.row.no-wrap(href="/gmail/spam")
                .col.min
                  i.outlined error_outline
                .col Spam
              a.row.no-wrap(@click="updateTheme()")
                .col.min
                  i.outlined brightness_medium
                .col Theme

          a
            img(v-show="theme == 'is-gmail-light'", :src="'/gmail-light.png'")
            img(v-show="theme == 'is-gmail-dark'", :src="'/gmail-dark.png'")
      .col
        .field.round.fill.flat.suffix.prefix.small.no-margin.m.l
          i.front search
          input(type="text", data-ui="#dropdown-search")
          i.front mic
      .col
        nav.right-align
          button.none.grey-text.s(data-ui="#modal-search")
            i.outlined search
          button.none.grey-text.m.l(data-ui="#dropdown-settings")
            i.outlined settings
            #dropdown-settings.dropdown.left.no-wrap(
              data-ui="#dropdown-settings"
            )
              a
                div Account
                label Change account
              a
                div Appearance
                label Change display settings
          button.none.grey-text.m.l(data-ui="#dropdown-apps")
            i.outlined apps
            #dropdown-apps.dropdown.left.small-width(data-ui="#dropdown-apps")
              .large-padding
                .row
                  a.wave.col.s6.middle-align
                    .center-align
                      img(:src="'/calendar.png'")
                      p Calendar
                  a.wave.col.s6.middle-align
                    .center-align
                      img(:src="'/keep.png'")
                      p Keep
                  a.wave.col.s6.middle-align
                    .center-align
                      img(:src="'/tasks.png'")
                      p Tasks
                  a.wave.col.s6.middle-align
                    .center-align
                      img(:src="'/contacts.png'")
                      p Contacts
          a(href="/")
            img.circle(:src="'/favicon.png'")

  .menu.bottom.border.s.grey-text
    a(href="/gmail", :class="{ active: this.url == '/gmail' }")
      i.outlined inbox
      div Inbox
    a(href="/gmail/sent", :class="{ active: this.url == '/gmail/sent' }")
      i.outlined send
      div Sent
    a.button.white.circle.large(data-ui="#modal-add-small")
      img(:src="'/add.png'")
    a(href="/gmail/drafts", :class="{ active: this.url == '/gmail/drafts' }")
      i.outlined insert_drive_file
      div Drafts
    a(@click="updateTheme()")
      i.outlined brightness_medium
      div Theme

  #modal-add.modal.round
    .row.no-wrap
      .col
        nav
          a(data-ui="#modal-add")
            i.outlined arrow_back
          a
            h5.no-margin New message
      .col
        nav.right-align
          a(data-ui="#modal-add")
            i.outlined attach_file
          a(data-ui="#modal-add")
            i.outlined send
    .row
      .col.s12
        .field.label.border
          input(type="text")
          label From
      .col.s12
        .field.label.border
          input(type="text")
          label To
      .col.s12
        .field.label.border
          input(type="text")
          label Subject
      .col.s12
        .field.label.border.textarea
          textarea
          label Message

  #modal-add-small.modal.round.bottom
    .row.no-wrap
      .col
        nav
          a(data-ui="#modal-add-small")
            i.outlined arrow_back
          a
            h5.no-margin New message
      .col
        nav.right-align
          a(data-ui="#modal-add-small")
            i.outlined attach_file
          a(data-ui="#modal-add-small")
            i.outlined send
    .row
      .col.s12
        .field.label.border
          input(type="text")
          label From
      .col.s12
        .field.label.border
          input(type="text")
          label To
      .col.s12
        .field.label.border
          input(type="text")
          label Subject
      .col.s12
        .field.label.border.textarea
          textarea
          label Message

  #modal-search.modal.top.transparent.flat
    .row.no-wrap
      .col.m.l
      .col
        .field.round.flat.suffix.prefix.small.no-margin
          i.front search
          input.white.black-text(type="text")
          i.front mic
      .col.m.l

  #layout
</template>

<script>
export default {
  data() {
    return {
      url: "/gmail",
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
      if (this.theme != "is-gmail-light") {
        this.theme = "is-gmail-light";
        this.logo = "/gmail-light.png";
      } else {
        this.theme = "is-gmail-dark";
        this.logo = "/gmail-dark.png";
      }
      document.querySelector("html").className = this.theme;
    },
  },
};
</script>

<style>
.is-gmail-light {
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

.is-gmail-dark {
  --background: #263238;
  --foreground: #37474f;
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
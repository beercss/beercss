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
.is-gmail-dark {
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
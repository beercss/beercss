<template lang="pug">
div
  nav.left.flat.no-space.m.l
    .large-space
    .medium-space
    a.button.white.circle.large(data-ui="#modal-add")
      img(:src="'/add.png'")
    .space
    a(href="/gmail", :class="{ active: data.url == '/gmail' }")
      i.outlined inbox
      .tooltip.right Inbox
    a(href="/gmail/snoozed", :class="{ active: data.url == '/gmail/snoozed' }")
      i.outlined watch_later
      .tooltip.right Snoozed
    a(
      href="/gmail/important",
      :class="{ active: data.url == '/gmail/important' }"
    )
      i.outlined label_important
      .tooltip.right Important
    a(href="/gmail/sent", :class="{ active: data.url == '/gmail/sent' }")
      i.outlined send
      .tooltip.right Sent
    a(href="/gmail/drafts", :class="{ active: data.url == '/gmail/drafts' }")
      i.outlined insert_drive_file
      .tooltip.right Drafts
    a(href="/gmail/spam", :class="{ active: data.url == '/gmail/spam' }")
      i.outlined error_outline
      .tooltip.right Spam
    a(data-ui="#themes1")
      i.outlined brightness_medium
      .tooltip.right Themes
    themes(id="themes1", v-model="data")
      .large-space
      .medium-space

  nav.right.flat.m.l
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

  nav.bottom.flat.s
    a(href="/gmail", :class="{ active: data.url == '/gmail' }")
      i.outlined inbox
      div Inbox
    a(href="/gmail/sent", :class="{ active: data.url == '/gmail/sent' }")
      i.outlined send
      div Sent
    a.button.white.circle.large(data-ui="#modal-add-small")
      img(:src="'/add.png'")
    a(href="/gmail/drafts", :class="{ active: data.url == '/gmail/drafts' }")
      i.outlined insert_drive_file
      div Drafts
    a(data-ui="#themes2")
      i.outlined brightness_medium
      div Theme
    themes(id="themes2", v-model="data")
      .large-space
      .medium-space

  nav.top.flat
    .row.no-wrap.middle-align
      .col
        nav.padding
          button.none(data-ui="#dropdown-menu")
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
              a.row.no-wrap(data-ui="#themes1")
                .col.min
                  i.outlined brightness_medium
                .col Themes

          a
            img(v-show="!data.isDark", :src="'/gmail-light.png'")
            img(v-show="data.isDark", :src="'/gmail-dark.png'")
      .col
        .field.round.flat.suffix.prefix.small.no-margin.m.l.white.black-text
          i.front search
          input(type="text", data-ui="#dropdown-search")
          i.front mic
      .col
        nav.right-align
          button.none.s(data-ui="#modal-search")
            i.outlined search
          button.none.m.l(data-ui="#dropdown-settings")
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
          button.none.m.l(data-ui="#dropdown-apps")
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
  
  main.responsive.max
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
          .field.round.flat.suffix.prefix.small.no-margin.white.black-text
            i.front search
            input(type="text")
            i.front mic
        .col.m.l

    home(v-if="data.url == '/gmail'")
    drafts(v-if="data.url == '/gmail/drafts'")
    important(v-if="data.url == '/gmail/important'")
    sent(v-if="data.url == '/gmail/sent'")
    snoozed(v-if="data.url == '/gmail/snoozed'")
    spam(v-if="data.url == '/gmail/spam'")
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import themes from "../shared/themes.vue";
import data from "./data";
import sharedDomain from "../shared/domain";
import home from "./home.vue";
import drafts from "./drafts.vue";
import important from "./important.vue";
import sent from "./sent.vue";
import snoozed from "./snoozed.vue";
import spam from "./spam.vue";
import { onRoute } from "../shared/router";

onMounted(() => {
  sharedDomain.initTheme(data.value);
  ui();
});

onRoute((url:string) => {
  data.value.check = false;
  data.value.url = url;
});
</script>
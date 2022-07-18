<template lang="pug">
div
  nav.left.no-space.no-shadow.m.l
    .large-space
    .large-space
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

  nav.right.no-shadow.m.l
    .large-space
    .large-space
    button.circle.large.transparent
      img(:src="'/calendar.png'")
      span.tooltip.left Calendar
    .space
    button.circle.large.transparent
      img(:src="'/keep.png'")
      span.tooltip.left Keep
    .space
    button.circle.large.transparent
      img(:src="'/tasks.png'")
      span.tooltip.left Tasks
    .space
    button.circle.large.transparent
      img(:src="'/contacts.png'")
      span.tooltip.left Contacts

  nav.bottom.s
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

  nav.top.no-shadow
    .space
    button.circle.large.transparent(data-ui="#dropdown-menu")
      i.outlined menu
      #dropdown-menu.dropdown.no-wrap(data-ui="#dropdown-menu")
        a.row(href="/gmail")
          i.outlined inbox
          .max Inbox
        a.row(href="/gmail/snoozed")
          i.outlined watch_later
          .max Snoozed
        a.row(href="/gmail/important")
          i.outlined label_important
          .max Important
        a.row(href="/gmail/sent")
          i.outlined send
          .max Sent
        a.row(href="/gmail/drafts")
          i.outlined insert_drive_file
          .max Drafts
        a.row(href="/gmail/spam")
          i.outlined error_outline
          .max Spam
        a.row(data-ui="#themes1")
          i.outlined brightness_medium
          .max Themes
    .space
    img(v-show="!data.isDark", :src="'/gmail-light.png'")
    img(v-show="data.isDark", :src="'/gmail-dark.png'")
    .max
    .max.field.round.suffix.prefix.small.no-margin.m.l.white.black-text
      i.front search
      input(type="text", data-ui="#dropdown-search")
      i.front mic
    .max
    button.circle.large.transparent.s(data-ui="#modal-search")
      i.outlined search
    button.circle.large.transparent.m.l(data-ui="#dropdown-settings")
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
    button.circle.large.transparent.m.l(data-ui="#dropdown-apps")
      i.outlined apps
      #dropdown-apps.dropdown.left.small-width(data-ui="#dropdown-apps")
        .large-padding
          .grid
            a.wave.s6.middle-align
              .center-align
                img(:src="'/calendar.png'")
                p Calendar
            a.wave.s6.middle-align
              .center-align
                img(:src="'/keep.png'")
                p Keep
            a.wave.s6.middle-align
              .center-align
                img(:src="'/tasks.png'")
                p Tasks
            a.wave.s6.middle-align
              .center-align
                img(:src="'/contacts.png'")
                p Contacts
    button.circle.large.transparent(@click="redirect('/')")
      img.responsive(:src="'/favicon.png'")
    .space
  
  main.responsive.max
    #modal-add.modal.round
      nav
        a(data-ui="#modal-add")
          i.outlined arrow_back
        a
          h5.no-margin New message
        .max
        a(data-ui="#modal-add")
          i.outlined attach_file
        a(data-ui="#modal-add")
          i.outlined send
      .grid
        .s12
          .field.label.border
            input(type="text")
            label From
        .s12
          .field.label.border
            input(type="text")
            label To
        .s12
          .field.label.border
            input(type="text")
            label Subject
        .s12
          .field.label.border.textarea
            textarea
            label Message

    #modal-add-small.modal.top-round.bottom
      nav
        a(data-ui="#modal-add-small")
          i.outlined arrow_back
        a
          h5.no-margin New message
        .max
        a(data-ui="#modal-add-small")
          i.outlined attach_file
        a(data-ui="#modal-add-small")
          i.outlined send
      .grid
        .s12
          .field.label.border
            input(type="text")
            label From
        .s12
          .field.label.border
            input(type="text")
            label To
        .s12
          .field.label.border
            input(type="text")
            label Subject
        .s12
          .field.label.border.textarea
            textarea
            label Message

    #modal-search.modal.top.transparent
      nav
        .max.m.l
        .max.field.round.suffix.prefix.small.no-margin.white.black-text
          i.front search
          input(type="text")
          i.front mic
        .max.m.l

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
import { onRoute, redirect } from "../shared/router";

onMounted(() => {
  sharedDomain.initTheme(data.value);
});

onRoute((url:string) => {
  data.value.check = false;
  data.value.url = url;
});
</script>
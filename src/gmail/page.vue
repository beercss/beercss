<template lang="pug">
div
  nav.bottom.s
    a(href="/gmail", :class="{ active: data.url === '/gmail' }")
      i inbox
      span Inbox
    a(href="/gmail/sent", :class="{ active: data.url === '/gmail/sent' }")
      i send
      span Sent
    a.button.fill.square.round.extra(data-ui="#dialog-add-small", href="javascript:;")
      i edit
    a(href="/gmail/drafts", :class="{ active: data.url === '/gmail/drafts' }")
      i insert_drive_file
      span Drafts
    a(data-ui="#themes1", href="javascript:;")
      i palette
      span Theme

  nav.top.surface
    img(v-show="!data.isDark", alt="", :src="'/gmail-light.png'")
    img(v-show="data.isDark", alt="", :src="'/gmail-dark.png'")
    .max
    .max
      .field.round.suffix.prefix.small.no-margin.m.l.white.black-text
        i.front search
        input(type="text", data-ui="#menu-search", aria-label="search mail")
        i.front mic
    .max
    button.circle.large.transparent.s(data-ui="#dialog-search")
      i search
    div
      button.circle.large.transparent.m.l
        i settings
      menu.left.no-wrap
        li
          .max
            div Account
            label Change account
        li
          .max
            div Appearance
            label Change display settings
    div
      button.circle.large.transparent.m.l
        i apps
      menu.left.padding.no-wrap
        li.no-margin.no-padding.transparent
          .grid.no-space
            .s4.center-align
              button.transparent.circle.large(aria-label="calendar")
                img.no-round(alt="", :src="'/calendar.png'")
            .s4.center-align
              button.transparent.circle.large(aria-label="keep")
                img.no-round(alt="", :src="'/keep.png'")
            .s4.center-align
              button.transparent.circle.large(aria-label="tasks")
                img.no-round(alt="", :src="'/tasks.png'")
            .s4.center-align
              button.transparent.circle.large(aria-label="contacts")
                img.no-round(alt="", :src="'/contacts.png'")
            .s4.center-align
              button.transparent.circle.large(aria-label="beer css")
                img.no-round(alt="", :src="'/favicon.png'")
    button.circle.large.transparent(@click="redirect('/')", aria-label="beer css")
      img.responsive(alt="", :src="'/favicon.png'")

  nav.left.m.l(:class="{ max: data.isMax }")
    header
      button.circle.extra.transparent(@click="data.isMax = !data.isMax")
        i {{ data.isMax ? "menu_open" : "menu" }}
      button.primary-container.square.round.extend(data-ui="#dialog-add")
        i edit
        span Compose
    a(href="/gmail", :class="{ active: data.url === '/gmail' }")
      i inbox
      span Inbox
    a(href="/gmail/snoozed", :class="{ active: data.url === '/gmail/snoozed' }")
      i watch_later
      span Snoozed
    a(
      href="/gmail/important",
      :class="{ active: data.url === '/gmail/important' }"
    )
      i label_important
      span Important
    a(href="/gmail/sent", :class="{ active: data.url === '/gmail/sent' }")
      i send
      span Sent
    a(href="/gmail/drafts", :class="{ active: data.url === '/gmail/drafts' }")
      i insert_drive_file
      span Drafts
    a(href="/gmail/spam", :class="{ active: data.url === '/gmail/spam' }")
      i error_outline
      span Spam
    a(data-ui="#themes1", href="javascript:;")
      i palette
      span Themes

  nav.right.m.l.center-align
    button.circle.transparent.large(aria-label="calendar")
      img.no-round(alt="", :src="'/calendar.png'")
      span.tooltip.left Calendar
    button.circle.transparent.large(aria-label="keep")
      img.no-round(alt="", :src="'/keep.png'")
      span.tooltip.left Keep
    button.circle.transparent.large(aria-label="tasks")
      img.no-round(alt="", :src="'/tasks.png'")
      span.tooltip.left Tasks
    button.circle.transparent.large(aria-label="contacts")
      img.no-round(alt="", :src="'/contacts.png'")
      span.tooltip.left Contacts

  main.surface-container.round.padding.bottom-margin
    .overlay
    dialog#dialog-add.round.large-width
      nav
        button.circle.transparent(data-ui="#dialog-add")
          i arrow_back
        h5 New message
        .max
        button.circle.transparent(data-ui="#dialog-add")
          i attach_file
        button.circle.transparent(data-ui="#dialog-add")
          i send
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
          .field.label.border
            textarea
            label Message

    .overlay
    dialog#dialog-add-small.top-round.bottom
      nav
        button.circle.transparent(data-ui="#dialog-add-small")
          i arrow_back
        h5 Compose
        .max
        button.circle.transparent(data-ui="#dialog-add-small")
          i attach_file
        button.circle.transparent(data-ui="#dialog-add-small")
          i send
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
          .field.label.border
            textarea
            label Message

    .overlay
    dialog#dialog-search.top.transparent
      nav
        .max.m.l
        .max.field.round.suffix.prefix.small.no-margin.white.black-text
          i.front search
          input(type="text")
          i.front mic
        .max.m.l

    themes(id="themes1", v-model="data")

    home(v-if="data.url === '/gmail'")
    drafts(v-if="data.url === '/gmail/drafts'")
    important(v-if="data.url === '/gmail/important'")
    sent(v-if="data.url === '/gmail/sent'")
    snoozed(v-if="data.url === '/gmail/snoozed'")
    spam(v-if="data.url === '/gmail/spam'")

</template>

<script setup lang="ts">
import { onMounted } from "vue";
import themes from "../shared/themes.vue";
import data from "./data";
import home from "./home.vue";
import drafts from "./drafts.vue";
import important from "./important.vue";
import sent from "./sent.vue";
import snoozed from "./snoozed.vue";
import spam from "./spam.vue";
import { onRoute, redirect } from "../shared/router";
import sharedDomain from "../shared/domain";

onMounted(() => {
  document.title = "Gmail - Beer CSS";
  sharedDomain.applyTheme(data.value);
});

onRoute((url:string) => {
  data.value.check = false;
  data.value.url = url;
});
</script>

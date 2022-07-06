<template lang="pug">
.page.right.active
  .row.no-wrap.m.l
    .col
      nav
        label.checkbox
          input(type="checkbox", v-model="data.check", @change="domain.checkAll(data.sent, data.check)")
          span
        a
          i refresh
        a
          i more_vert
    .col
      nav.right-align
        label from 1 to {{ data.sent.length }}
        a
          i arrow_back
        a
          i arrow_forward
  .space.m.l
  a.row.no-wrap.middle-align.divider(v-for="email in data.sent")
    .col.min
      nav
        label.checkbox.m.l
          input(type="checkbox", v-model="email.check")
          span
        a.m.l(@click="domain.star(email)")
          i(v-show="!email.star") star_outline
          i.yellow-text(v-show="email.star") star
        button.small.circle.s A
    .col.truncate
      b From -&nbsp;
      b Subject -&nbsp;
      span Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    .col.min 
      label 12:03
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
<template lang="pug">
.page.right.active
  .row.m.l
    label.checkbox
      input(v-model="data.check", type="checkbox", @change="domain.checkAll(data.inbox, data.check)")
      span
    button.circle.transparent
      i refresh
    button.circle.transparent
      i more_vert
    .max
    label from 1 to {{ data.inbox.length }}
    button.circle.transparent
      i arrow_back
    button.circle.transparent
      i arrow_forward
  .space.m.l
  template(v-for="email in data.inbox")
    a.row
      label.checkbox.m.l
        input(v-model="email.check", type="checkbox")
        span
      button.circle.transparent.m.l(@click="domain.star(email)")
        i(v-show="!email.star") star_outline
        i.yellow-text(v-show="email.star") star
      button.small.circle.s A
      .max.truncate
        b From -&nbsp;
        b Subject -&nbsp;
        span Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      label 12:03
    hr.m.l
    hr.small.s
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>

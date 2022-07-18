<template lang="pug">
.page.right.active
  .row.m.l
    label.checkbox
      input(type="checkbox", v-model="data.check", @change="domain.checkAll(data.drafts, data.check)")
      span
    a
      i refresh
    a
      i more_vert
    .max
    label from 1 to {{ data.drafts.length }}
    a
      i arrow_back
    a
      i arrow_forward
  .space.m.l
  a.row(v-for="email in data.drafts")
    label.checkbox.m.l
      input(type="checkbox", v-model="email.check")
      span
    a.m.l(@click="domain.star(email)")
      i(v-show="!email.star") star_outline
      i.yellow-text(v-show="email.star") star
    button.small.circle.s A
    .max.truncate
      b From -&nbsp;
      b Subject -&nbsp;
      span Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    label 12:03
  .divider
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
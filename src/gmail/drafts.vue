<template lang="pug">
.page.right.active
  .row.m.l
    label.checkbox
      input(v-model="data.check", type="checkbox", @change="domain.checkAll(data.drafts, data.check)")
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
  template(v-for="email in data.drafts")
    .row
      label.checkbox.m.l
        input(v-model="email.check", type="checkbox")
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
    hr.m.l
    hr.small.s
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>

<template lang="pug">
.page.right.active
  .row.no-wrap.m.l
    .col
      nav.grey-text
        label.checkbox
          input(type="checkbox", v-model="check")
          span
        a
          i refresh
        a
          i more_vert
    .col
      nav.grey-text.right-align
        label from 1 to {{ emails.length }}
        a
          i arrow_back
        a
          i arrow_forward
  .space.m.l
  a.row.no-wrap.middle-align.divider(v-for="email in emails")
    .col.min
      nav.grey-text
        label.checkbox.m.l
          input(type="checkbox", v-model="email.check")
          span
        a.m.l(@click="star(email)")
          i(v-show="!email.star") star_outline
          i.yellow-text(v-show="email.star") star
        button.small.flat.circle.s A
    .col.truncate
      b From -&nbsp;
      b Subject -&nbsp;
      span Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    .col.min 
      label 12:03
</template>

<script>
import domain from "./domain";

export default {
  mixins: [domain],
  created() {
    this.emails = this.drafts;
  },
};
</script>
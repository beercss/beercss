<template lang="pug">
div
  .fixed.top.left.right.bottom
    img.responsive(:src="'/map.jpg'")
  .fixed.bottom.right.margin.m.l
    button.circle.white.black-text.wave.dark
      i add
    .space
    button.circle.white.black-text.wave.dark
      i remove
  .large-space
  .card.no-padding.large-margin.medium-width.m.l.page.left.active.medium-shadow
    .large-padding.black.white-text
      p.bold From {{ data.from }}
      p.bold To {{ data.to }}
      h5.page.left.active(v-show="!data.from && !data.to") Where are you?
      h5.page.left.active(v-show="data.from && !data.to") Where are you going?
      h5.page.left.active(v-show="data.from && data.to") Confirm that ride?
      nav.right-align
        button.none.white-text.large.wave.light(@click="clean()")
          span Cancel
        button.border.white-border.white-text.large.wave.light(
          v-show="data.to",
          @click="clean()"
        )
          i time_to_leave
          span Confirm
    .large-padding
      .field.prefix.round.flat.white.black-text
        i search
        input(:placeholder="data.from ? 'Destination' : 'Departure'", @click="go()")
      a.row.no-wrap(@click="go()")
        .col.min
          button.circle.small.flat.no-wave
            i gps_fixed
        .col
          h6.no-margin {{ data.street }}
          .link Your current location
      .divider
      a.row.no-wrap(@click="go()")
        .col.min
          button.circle.small.flat.no-wave
            i home
        .col
          h6.no-margin Home
          div {{ data.street }}
  .modal.bottom.active.s.no-padding
    .padding.black.white-text
      p.bold(v-show="data.from") From {{ data.from }}
      p.bold(v-show="data.to") To {{ data.to }}
      h5.page.left.active(v-show="!data.from && !data.to") Where are you?
      h5.page.left.active(v-show="data.from && !data.to") Where are you going?
      h5.page.left.active(v-show="data.from && data.to") Confirm that ride?
      nav.right-align(v-show="data.from || data.to")
        button.none.white-text.large(@click="clean()")
          span Cancel
        button.border.large.white-text.white-border(v-show="data.to", @click="clean()")
          i time_to_leave
          span Confirm
    .large-padding
      .field.prefix.round.flat.white.black-text
        i search
        input(:placeholder="data.from ? 'Destination' : 'Departure'", @click="go()")
      a.row.no-wrap(@click="go()")
        .col.min
          button.circle.small.flat.no-wave
            i gps_fixed
        .col
          h6.no-margin {{ data.street }}
          .link Your current location
</template>

<script setup lang="ts">
import data from "./data";

const go = () => {
  if (!data.value.from) {
    data.value.from = data.value.street;
    data.value.to = "";
    return;
  }

  data.value.from = data.value.street;
  data.value.to = data.value.street;
}

const clean = () => {
  data.value.to = "";
  data.value.from = "";
}
</script>
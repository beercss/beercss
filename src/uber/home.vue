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
  .card.no-padding.large-margin.medium-width.m.l.page.left.active
    .large-padding.blue.white-text
      p.bold From {{ from }}
      p.bold To {{ to }}
      h5.page.left.active(v-show="!from && !to") Where are you?
      h5.page.left.active(v-show="from && !to") Where are you going?
      h5.page.left.active(v-show="from && to") Confirm that ride?
      nav.right-align
        button.none.white-text.large.wave.light(@click="clean()")
          span Cancel
        button.border.white-border.white-text.large.wave.light(
          v-show="to",
          @click="clean()"
        )
          i time_to_leave
          span Confirm
    .large-padding
      .field.prefix.fill.flat.border
        i search
        input(:placeholder="from ? 'Destination' : 'Departure'")
      nav
        a.chip.wave
          i watch_later
          span.large-text.small-padding Agora
          i arrow_drop_down
      .medium-space
      a.row.no-wrap(@click="go()")
        .col.min
          button.circle.small.flat.no-wave
            i gps_fixed
        .col
          h6.no-margin {{ street }}
          .link Your current location
      .divider
      a.row.no-wrap(@click="go()")
        .col.min
          button.circle.small.flat.no-wave
            i home
        .col
          h6.no-margin Home
          div {{ street }}
  .modal.round.bottom.active.s
    p.bold(v-show="from") From {{ from }}
    p.bold(v-show="to") To {{ to }}
    nav.right-align(v-show="from || to")
      button.none.large.wave.dark(@click="clean()")
        span Cancel
      button.border.large(v-show="to", @click="clean()")
        i time_to_leave
        span Confirm
    .space
    .field.prefix.fill.flat.border
      i search
      input(:placeholder="from ? 'Destination' : 'Departure'")
    .space
    a.row.no-wrap(@click="go()")
      .col.min
        button.circle.small.flat.no-wave
          i gps_fixed
      .col
        h6.no-margin {{ street }}
        .link Your current location
    .divider
    a.row.no-wrap(@click="go()")
      .col.min
        button.circle.small.flat.no-wave
          i home
      .col
        h6.no-margin Home
        div {{ street }}
</template>

<script>
export default {
  mounted() {},
  data() {
    return {
      from: null,
      to: null,
      street: "Street address, 111",
    };
  },
  methods: {
    go() {
      if (!this.from) {
        this.from = this.street;
        this.to = null;
        return;
      }

      this.from = this.street;
      this.to = this.street;
    },
    clean() {
      this.to = null;
      this.from = null;
    },
  },
};
</script>
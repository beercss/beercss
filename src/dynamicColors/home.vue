<template lang="pug">
main.responsive
  h2.bold.page.top.active Material Dynamic colors

  .large-space
  h3.bold.page.right.active Build whatever you want, seriously.
  hr.large

  article.no-padding.round
    .grid.no-space
      .s12.m4.s
        img.responsive.extra.top-round(:src="'/classic-utility-jacket.jpg'", @click="sharedDomain.updateTheme(data, '#f9bd49')")
      .s12.m4.m.l
        img.responsive.extra.left-round(:src="'/classic-utility-jacket.jpg'", @click="sharedDomain.updateTheme(data, '#f9bd49')")
      .s12.m8.padding
        .row
          .max
            h5.no-margin Classic Utility Jacket
            span In stock
          h6 $110,00
        nav.group.connected
          button.left-round.active(data-ui="") XS
          button.no-round(data-ui="") S
          button.no-round(data-ui="") M
          button.no-round(data-ui="") L
          button.right-round(data-ui="") XL
          .space
          label.l Size guide
        hr.large
        nav
          button.no-round Buy now
          button.border.no-round Add to bag
          button.border.square.no-round
            i favorite
        p Free shipping on all continental US orders.

  article.round.border
    .grid.no-space
      .s12.m4
        img.responsive.extra.round(:src="'/kids-jumpsuit.jpg'", @click="sharedDomain.updateTheme(data, '/kids-jumpsuit.jpg')")
      .s12.m8.padding
        h6.no-margin.bold Kids Jumpsuit
        h5.bold.middle-align
          span $39,00
          label &nbsp;In stock
        nav.group.connected
          button.left-round.active(data-ui="") XS
          button.no-round(data-ui="") S
          button.no-round(data-ui="") M
          button.no-round(data-ui="") L
          button.right-round(data-ui="") XL
          .space
          label.l Size guide
        hr.large
        nav
          button Buy now
          button Add to bag
          button.circle
            i favorite
        p Free shipping on all continental US orders.

  article.small-padding
    .grid.no-space
      .s12.m4
        img.responsive.extra(:src="'/dogtooth-style-jacket.jpg'", @click="sharedDomain.updateTheme(data, '/dogtooth-style-jacket.jpg')")
      .s12.m8.large-padding
        h5.no-margin Dogtooth Style Jacket
        h6.middle-align
          span $39,00
          label &nbsp;In stock
        nav.group.connected
          button.border.left-round.active(data-ui="") XS
          button.border.no-round(data-ui="") S
          button.border.no-round(data-ui="") M
          button.border.no-round(data-ui="") L
          button.border.right-round(data-ui="") XL
          .space
          label.l Size guide
        hr.large
        nav
          button.large Buy now
          button.large.border Add to bag
          button.large.transparent.circle
            i.primary-text favorite
        p Free shipping on all continental US orders.

  article.no-elevate.top-shadow.white-text
    .grid.no-space
      .s12.m4.padding
        img.responsive.large(:src="'/retro-shoe.jpg'", @click="sharedDomain.updateTheme(data, '/retro-shoe.jpg')")
      .s12.m8.padding
        h5.no-margin Retro Shoe
        h6.middle-align $39,00
          label.bold &nbsp;In stock
        nav.group.connected
          button.border.left-round.active(data-ui="") XS
          button.border.no-round(data-ui="") S
          button.border.no-round(data-ui="") M
          button.border.no-round(data-ui="") L
          button.border.right-round(data-ui="") XL
          .space
          label.l Size guide
        hr.large
        nav
          button.large.bottom-round.right-round Buy now
          button.large.bottom-round.right-round.border Add to bag
          button.large.transparent.circle.bottom-round.right-round
            i.primary-text favorite
        p Free shipping on all continental US orders.

  .large-space
  h3.bold Responsive everything.
  hr.large

  article.no-padding.fill.no-elevate.round
    .grid
      .s12.s
        img.responsive.large(:src="'/beach-house-in-collingwood-001.jpg'", @click="sharedDomain.updateTheme(data, '/beach-house-in-collingwood-001.jpg')")
        .absolute.left.bottom.right.bottom-shadow.s.padding.white-text
          div Entire house
          h5 Beach House in Collingwood
      .s12.s
        .large-padding
          nav
            i star
            a 4.94
            a (128)
            a Collingwood, Ontario
          nav
            button.large Check availability
      .s6.m.l.large-padding.middle-align
        div
          div Entire house
          h5 Beach House in Collingwood
          div
            nav
              i star
              a 4.94
              a (128)
              a Collingwood, Ontario
            hr.large
            nav
              button.large Check availability
      .s6.m.l.large-padding
        img.responsive.large.round(:src="'/beach-house-in-collingwood-001.jpg'", @click="sharedDomain.updateTheme(data, '/beach-house-in-collingwood-001.jpg')")
        .space.l
        .row.l
          img.round.extra(:src="'/beach-house-in-collingwood-002.jpg'")
          img.round.extra(:src="'/beach-house-in-collingwood-003.jpg'")
          .max
</template>

<script setup lang="ts">
import data from "./data";
import sharedDomain from "../shared/domain";
</script>

<template lang="pug">
main.middle-align.center-align
  .large-padding.small-blur.round
    .grid.middle-align.large-space
      .s12.m6.l6.l
        article.round.no-padding.no-elevate.page.active.top.transparent
          img.responsive.large-height(:src="data.wallpaper")
          .absolute.bottom.left.right.large-padding.bottom-shadow.bottom-round.left-align
            p.white-text
              h6 {{ data.title }}
              div The name of artist
            nav
              label.slider
                input(v-model="data.time" type="range")
                span
                .tooltip
            nav.center-align
              button.extra.circle.large-padding
                i play_arrow
              button.fill.large.vertical-padding
                i skip_previous
              button.fill.large.vertical-padding
                i skip_next
      .s12.m6.l6.l
        article.round.no-padding.no-elevate.page.active.right.transparent
          .grid.large-space
            .s12.m6
              a.row.round.medium-height
                img.responsive(:src="'/classic-utility-jacket.jpg'", @click="updateTheme('', '')")
              .space
              a.row.round.small-height
                img.responsive(:src="'/kids-jumpsuit.jpg'", @click="updateTheme('/kids-jumpsuit.jpg', 'Kids Jumpsuit')")
            .s12.m6
              a.row.round.small-height
                img.responsive(:src="'/dogtooth-style-jacket.jpg'", @click="updateTheme('/dogtooth-style-jacket.jpg', 'Dogtooth Style Jacket')")
              .space
              a.row.round.medium-height
                img.responsive(:src="'/retro-shoe.jpg'", @click="updateTheme('/retro-shoe.jpg', 'Retro Shoe')")
      .s12.s.m
        article.round.no-elevate.page.active.left.transparent.no-padding
          p.left-align.left-padding
            h6 {{ data.title }}
            div The name of artist
          label.slider
            input(v-model="data.time", type="range")
            span
            .tooltip
          nav
            .max
              nav.center-align
                button.extra.circle.large-padding
                  i play_arrow
                button.fill.large.vertical-padding
                  i skip_previous
                button.fill.large.vertical-padding
                  i skip_next
      .s12.s.m
        article.round.no-elevate.page.active.bottom.transparent.no-padding
          .space
          nav.scroll
            .small-height.small-width.round
              img.responsive(:src="'/classic-utility-jacket.jpg'", @click="updateTheme('', '')")
            .small-height.small-width.round
              img.responsive(:src="'/kids-jumpsuit.jpg'", @click="updateTheme('/kids-jumpsuit.jpg', 'Kids Jumpsuit')")
            .small-height.small-width.round
              img.responsive(:src="'/dogtooth-style-jacket.jpg'", @click="updateTheme('/dogtooth-style-jacket.jpg', 'Dogtooth Style Jacket')")
            .small-height.small-width.round
              img.responsive(:src="'/retro-shoe.jpg'", @click="updateTheme('/retro-shoe.jpg', 'Retro Shoe')")
</template>

<script setup lang="ts">
import data from "./data";
import sharedDomain from "../shared/domain";
import utils from "../shared/utils";

async function updateTheme(source: string, title: string) {
  await sharedDomain.updateTheme(data.value, source || "#f9bd49");
  data.value.wallpaper = source || "/classic-utility-jacket.jpg";
  data.value.title = title || "Classic utility jacket";
  await reloadWallpaper();
}

async function reloadWallpaper() {
  data.value.showWallpaper = false;
  await utils.wait(100);
  data.value.showWallpaper = true;
}
</script>

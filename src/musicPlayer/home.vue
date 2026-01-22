<template lang="pug">
main.middle-align.center-align
  .large-padding.small-blur.round
    .grid.middle-align.large-space
      .s12.m6.l6.l
        .round.no-padding.page.active.top
          .shape.sided-cookie6.medium-width.medium-height.space.rotate.auto-margin
            img.responsive(alt="", :src="data.wallpaper")
          div
            h6 {{ data.title }}
            div The name of artist
          .large-padding
            nav
              .slider
                input(v-model="data.time", type="range", aria-label="music progress")
                span
                span.tooltip
            nav.center-align
              button.extra.circle.large-padding
                i play_arrow
              button.fill.large.vertical-padding
                i skip_previous
              button.fill.large.vertical-padding
                i skip_next
      .s12.m6.l6.l
        .round.no-padding.page.active.right
          .grid.large-space
            .s12.m6
              a.row.round.medium-height
                img.responsive(alt="", :src="'/classic-utility-jacket.jpg'", @click="updateTheme('', '')")
              .space
              a.row.round.small-height
                img.responsive(alt="", :src="'/kids-jumpsuit.jpg'", @click="updateTheme('/kids-jumpsuit.jpg', 'Kids Jumpsuit')")
            .s12.m6
              a.row.round.small-height
                img.responsive(alt="", :src="'/dogtooth-style-jacket.jpg'", @click="updateTheme('/dogtooth-style-jacket.jpg', 'Dogtooth Style Jacket')")
              .space
              a.row.round.medium-height
                img.responsive(alt="", :src="'/retro-shoe.jpg'", @click="updateTheme('/retro-shoe.jpg', 'Retro Shoe')")
      .s12.s.m
        .round.page.active.bottom.no-padding
          .space
          nav.scroll
            .small-height.small-width.round
              img.responsive(alt="", :src="'/classic-utility-jacket.jpg'", @click="updateTheme('', '')")
            .small-height.small-width.round
              img.responsive(alt="", :src="'/kids-jumpsuit.jpg'", @click="updateTheme('/kids-jumpsuit.jpg', 'Kids Jumpsuit')")
            .small-height.small-width.round
              img.responsive(alt="", :src="'/dogtooth-style-jacket.jpg'", @click="updateTheme('/dogtooth-style-jacket.jpg', 'Dogtooth Style Jacket')")
            .small-height.small-width.round
              img.responsive(alt="", :src="'/retro-shoe.jpg'", @click="updateTheme('/retro-shoe.jpg', 'Retro Shoe')")
      .s12.s.m
        .round.page.active.left.no-padding
          div
            h6 {{ data.title }}
            div The name of artist
          .space
          .slider
            input(v-model="data.time", type="range", aria-label="music progress")
            span
            span.tooltip
          nav
            .max
              nav.center-align
                button.extra.circle.large-padding
                  i play_arrow
                button.fill.large.vertical-padding
                  i skip_previous
                button.fill.large.vertical-padding
                  i skip_next
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

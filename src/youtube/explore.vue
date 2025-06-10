<template lang="pug">
main.responsive(v-show="data.isLoaded")
  .page.right.active
    div
      h5 Library
      .row.top-align(v-for="item in data.itens")
        a.wave.round.m.l
          img.empty-state(:src="item.image")
          .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
        .max.padding
          a.wave.round.s
            img.empty-state(:src="item.image")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          h5.no-margin {{ item.title }}
          div 10k views
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          nav.group.connected
            button.left-round(data-ui="")
              i thumb_up
            button.no-round(data-ui="")
              i bookmark
            button.no-round(data-ui="")
              i share
            button.right-round(data-ui="")
              i more_vert
</template>

<script setup lang="ts">
import data from "./data";
</script>

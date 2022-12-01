<template lang="pug">
main.responsive(v-show="data.isLoaded")
  .page.right.active
    h5 Explore
    .grid
      .s12(v-for="item in data.itens")
        article.no-padding.transparent
          .grid
            .s12.m4
              a.wave
                img.empty-state(:src="item.image")
                .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
            .s12.m8
              h5.no-margin {{ item.title }}
              div 10k views
              .space
              div Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
</template>

<script setup lang="ts">
import data from "./data";
</script>

<template lang="pug">
.container
  .page.right.active
    h5 Explore
    .row
      .col.s12(v-for="item in itens")
        .card.no-padding.flat.transparent
          .row
            .col.s6.m4.l3
              a.wave
                img.empty-state(:src="item.image")
                .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
            .col.s6.m8.l9
              h5.no-margin {{ item.title }}
              .grey-text 10k views
              .space
              .grey-text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
</template>

<script>
import domain from "./domain";
export default {
  mixins: [domain],
};
</script>
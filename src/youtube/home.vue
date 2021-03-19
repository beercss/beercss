<template lang="pug">
.container
  .page.right.active
    nav.scroll
      a.chip.active.wave The best of 2020
      a.chip.wave Documentaries
      a.chip.wave Rock and roll
      a.chip.wave Others
    .space
    .row
      .col.s12.m6.l3
        .card.no-padding.flat.transparent
          a.wave
            img.responsive(:src="'/alok-001.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .space
          .row.no-wrap.middle-align
            .col.min
              img.small.circle(:src="'/alok-001.jpg'")
            .col.truncate
              .bold Alok 01/2021
              .grey-text 10k views
            .col.min
              button.none.grey-text(data-ui="#dropdown-1")
                i more_vert
                #dropdown-1.dropdown.left.no-wrap(data-ui="#dropdown-1")
                  a Save to library
                  a Watch later
                  a Like it
      .col.s12.m6.l3
        .card.no-padding.flat.transparent
          a.wave
            img.responsive(:src="'/alok-002.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .space
          .row.no-wrap.middle-align
            .col.min
              img.small.circle(:src="'/alok-002.jpg'")
            .col.truncate
              .bold Alok 12/2020
              .grey-text 10k views
            .col.min
              button.none.grey-text(data-ui="#dropdown-2")
                i more_vert
                #dropdown-2.dropdown.left.no-wrap(data-ui="#dropdown-2")
                  a Save to library
                  a Watch later
                  a Like it
      .col.s12.m6.l3
        .card.no-padding.flat.transparent
          a.wave
            img.responsive(:src="'/vintage-001.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .space
          .row.no-wrap.middle-align
            .col.min
              img.small.circle(:src="'/vintage-001.jpg'")
            .col.truncate
              .bold Best of 2021
              .grey-text 10k views
            .col.min
              button.none.grey-text(data-ui="#dropdown-3")
                i more_vert
                #dropdown-3.dropdown.left.no-wrap(data-ui="#dropdown-3")
                  a Save to library
                  a Watch later
                  a Like it
      .col.s12.m6.l3
        .card.no-padding.flat.transparent
          a.wave
            img.responsive(:src="'/vintage-002.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .space
          .row.no-wrap.middle-align
            .col.min
              img.small.circle(:src="'/vintage-002.jpg'")
            .col.truncate
              .bold Best of 2020
              .grey-text 10k views
            .col.min
              button.none.grey-text(data-ui="#dropdown-4")
                i more_vert
                #dropdown-4.dropdown.left.no-wrap(data-ui="#dropdown-4")
                  a Save to library
                  a Watch later
                  a Like it
      .col.s12.m6.l3
        .card.no-padding.flat.transparent
          a.wave
            img.responsive(:src="'/radio-001.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .space
          .row.no-wrap.middle-align
            .col.min
              img.small.circle(:src="'/radio-001.jpg'")
            .col.truncate
              .bold Radio online
              .grey-text 10k views
            .col.min
              button.none.grey-text(data-ui="#dropdown-5")
                i more_vert
                #dropdown-5.dropdown.left.no-wrap(data-ui="#dropdown-5")
                  a Save to library
                  a Watch later
                  a Like it
      .col.s12.m6.l3
        .card.no-padding.flat.transparent
          a.wave
            img.responsive(:src="'/ocean-001.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .space
          .row.no-wrap.middle-align
            .col.min
              img.small.circle(:src="'/ocean-001.jpg'")
            .col.truncate
              .bold Alok, Zebra, Iro - Ocean
              .grey-text 10k views
            .col.min
              button.none.grey-text(data-ui="#dropdown-6")
                i more_vert
                #dropdown-6.dropdown.left.no-wrap(data-ui="#dropdown-6")
                  a Save to library
                  a Watch later
                  a Like it
      .col.s12.m6.l3
        .card.no-padding.flat.transparent
          a.wave
            img.responsive(:src="'/alok-001.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .space
          .row.no-wrap.middle-align
            .col.min
              img.small.circle(:src="'/alok-001.jpg'")
            .col.truncate
              .bold Alok 01/2021
              .grey-text 10k views
            .col.min
              button.none.grey-text(data-ui="#dropdown-7")
                i more_vert
                #dropdown-7.dropdown.left.no-wrap(data-ui="#dropdown-7")
                  a Save to library
                  a Watch later
                  a Like it
      .col.s12.m6.l3
        .card.no-padding.flat.transparent
          a.wave
            img.responsive(:src="'/alok-002.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .space
          .row.no-wrap.middle-align
            .col.min
              img.small.circle(:src="'/alok-002.jpg'")
            .col.truncate
              .bold Alok 12/2020
              .grey-text 10k views
            .col.min
              button.none.grey-text(data-ui="#dropdown-8")
                i more_vert
                #dropdown-8.dropdown.left.no-wrap(data-ui="#dropdown-8")
                  a Save to library
                  a Watch later
                  a Like it

    .large-divider
    h5 What's hot
    .row.no-wrap.scroll
      .col
        .card.no-padding.border.transparent.min
          a.wave
            img.responsive(:src="'/vintage-001.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .padding
            .row.no-wrap.middle-align
              .col.truncate
                .bold Best of 2021
                .grey-text 10k views
              .col.min
                a.grey-text
                  i thumb_up
      .col
        .card.no-padding.border.transparent.min
          a.wave
            img.responsive(:src="'/vintage-002.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .padding
            .row.no-wrap.middle-align
              .col.truncate
                .bold Best of 2020
                .grey-text 10k views
              .col.min
                a.grey-text
                  i thumb_up
      .col
        .card.no-padding.border.transparent.min
          a.wave
            img.responsive(:src="'/radio-001.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .padding
            .row.no-wrap.middle-align
              .col.truncate
                .bold Radio online
                .grey-text 10k views
              .col.min
                a.grey-text
                  i thumb_up
      .col
        .card.no-padding.border.transparent.min
          a.wave
            img.responsive(:src="'/ocean-001.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .padding
            .row.no-wrap.middle-align
              .col.truncate
                .bold Alok, Zebra, Iro - Ocean
                .grey-text 10k views
              .col.min
                a.grey-text
                  i thumb_up
    .large-divider
    h5 Your videos
    .row.no-wrap.scroll
      .col
        .card.no-padding.border.transparent.min
          a.wave
            img.responsive(:src="'/alok-001.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .padding
            .row.no-wrap.middle-align
              .col.truncate
                .bold Alok 01/2021
                .grey-text 10k views
              .col.min
                a.grey-text
                  i thumb_up
      .col
        .card.no-padding.border.transparent.min
          a.wave
            img.responsive(:src="'/alok-002.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .padding
            .row.no-wrap.middle-align
              .col.truncate
                .bold Alok 12/2020
                .grey-text 10k views
              .col.min
                a.grey-text
                  i thumb_up
      .col
        .card.no-padding.border.transparent.min
          a.wave
            img.responsive(:src="'/vintage-001.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .padding
            .row.no-wrap.middle-align
              .col.truncate
                .bold Best of 2021
                .grey-text 10k views
              .col.min
                a.grey-text
                  i thumb_up
      .col
        .card.no-padding.border.transparent.min
          a.wave
            img.responsive(:src="'/vintage-002.jpg'")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .padding
            .row.no-wrap.middle-align
              .col.truncate
                .bold Best of 2020
                .grey-text 10k views
              .col.min
                a.grey-text
                  i thumb_up
</template>

<script>
export default {
  data() {
    return;
  },
};
</script>
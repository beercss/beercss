<template lang="pug">
div
  .menu.top.top-shadow
    .row.no-wrap.middle-align
      .col
        nav.padding
          a
            img(:src="'/netflix.png'")
          button.none.white-text.s(data-ui="#dropdown-menu")
            i menu
            #dropdown-menu.dropdown.no-wrap(data-ui="#dropdown-menu")
              a.row.no-wrap(@click="scroll('#home')")
                .col.min
                  i home
                .col Home
              a.row.no-wrap(@click="scroll('#series')")
                .col.min
                  i subscriptions
                .col Series
              a.row.no-wrap(@click="scroll('#movies')")
                .col.min
                  i subscriptions
                .col Movies
              a.row.no-wrap(@click="scroll('#hot')")
                .col.min
                  i whatshot
                .col Hot
              a.row.no-wrap(@click="scroll('#my-list')")
                .col.min
                  i video_library
                .col My list
          button.none.white-text.capitalize.m.l(@click="scroll('#home')") Home
          button.none.white-text.capitalize.m.l(@click="scroll('#series')") Series
          button.none.white-text.capitalize.m.l(@click="scroll('#movies')") Movies
          button.none.white-text.capitalize.m.l(@click="scroll('#hot')") Hot
          button.none.white-text.capitalize.m.l(@click="scroll('#my-list')") My list
      .col
        nav.right-align
          button.none.white-text(data-ui="#modal-search")
            i search
          button.none.white-text(data-ui="#dropdown-notifications")
            i notifications
            #dropdown-notifications.dropdown.left.no-wrap(
              data-ui="#dropdown-notifications"
            )
              a.row.no-wrap
                .col.min
                  img.round(:src="'alok-001.jpg'")
                .col 
                  div Alok 01/2021
                  label 10k views
              a.row.no-wrap
                .col.min
                  img.round(:src="'vintage-001.jpg'")
                .col 
                  div The best of 2021
                  label 10k views
              a.row.no-wrap
                .col.min
                  img.round(:src="'ocean-001.jpg'")
                .col 
                  div Alok, Zebra, Iro - Ocean
                  label 10k views
          a(href="/")
            img.circle(:src="'/favicon.png'")

  #modal-search.modal.top.transparent.flat
    .row.no-wrap
      .col.m.l
      .col
        .field.round.suffix.prefix.small.no-margin
          i.front search
          input.white.black-text(type="text")
          i.front mic
      .col.m.l

  #layout
</template>

<script>
export default {
  mounted() {
    this.updateTheme();
    ui();
  },
  methods: {
    updateTheme() {
      document.querySelector("html").className = "is-netflix";
    },
    scroll(selector) {
      let element = document.querySelector(selector);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    },
  },
};
</script>

<style>
.is-netflix {
  --background: #212121;
  --foreground: #37474f;
  --text-1: #ffffff;
  --text-2: #9e9e9e;
  --border: rgba(255,255,255,.2);
  --active: rgba(255,255,255,.1);
  --fill: rgba(0,0,0,.1);
  --success: #ef5350;
  --success-text: #ffffff;
  --warning: #ff9800;
  --warning-text: #ffffff;
  --chip: rgba(255,255,255,.07);
  --chip-text: #ffffff;
  --overlay: rgba(0,0,0,.5);
  --overlay-text: #000000;
  --tooltip: rgba(0,0,0,.9);
  --tooltip-text: #ffffff;
  --shadow-1: 0 2rem 2rem 0 rgba(0, 0, 0, .14), 0 1rem 5rem 0 rgba(0, 0, 0, .12), 0 3rem 1rem -2rem rgba(0, 0, 0, .2);
  --shadow-2: 0 6rem 10rem 0 rgba(0, 0, 0, .14), 0 1rem 18rem 0 rgba(0, 0, 0, .12), 0 3rem 5rem -1rem rgba(0, 0, 0, .3);
  --shadow-3: 0 10rem 16rem 0 rgba(0, 0, 0, .14), 0 1rem 31rem 0 rgba(0, 0, 0, .12), 0 3rem 9rem 0rem rgba(0, 0, 0, .4);
  --size: 1px;
  --font: "Roboto", BlinkMacSystemFont, -apple-system, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  --speed-1: .1s;
  --speed-2: .2s;
  --speed-3: .3s;
  --speed-4: .4s;
}
</style>
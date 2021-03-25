<template lang="pug">
div
  .menu.top.top-shadow.large
    .row.no-wrap.middle-align
      .col
        nav.padding
          a
            img(:src="'/netflix.png'")
          a.small-device(data-ui="#dropdown-menu")
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
          a.medium-device.large-device(@click="scroll('#home')") Home
          a.medium-device.large-device(@click="scroll('#series')") Series
          a.medium-device.large-device(@click="scroll('#movies')") Movies
          a.medium-device.large-device(@click="scroll('#hot')") Hot
          a.medium-device.large-device(@click="scroll('#my-list')") My list
      .col
        nav.right-align
          a(data-ui="#modal-search")
            i search
          a(data-ui="#dropdown-notifications")
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
            img.small.circle(:src="'/favicon.png'")

  #modal-search.modal.top.transparent.flat
    .row.no-wrap
      .col.medium-device.large-device
      .col
        .field.round.sufix.prefix.small.no-margin
          i.front search
          input.white.black-text(type="text")
          i.front mic
      .col.medium-device.large-device

  #layout
</template>

<script>
export default {
  data() {
    return {
      url: "/netflix",
      theme: null,
      logo: null,
    };
  },
  created() {
    window.$layout = this;
  },
  mounted() {
    this.updateTheme();
    window.ui();
  },
  methods: {
    updateTheme() {
      document.body.className = "is-netflix";
    },
    scroll(selector) {
      let element = document.querySelector(selector);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    redirect(component) {
      this.url = page.current;

      document.getElementById("layout").innerHTML = '<div id="app"></div>';
      document.body.scrollTop = 0;
      return new Vue({
        el: "#app",
        render: (h) => h(component),
      });
    },
  },
};
</script>

<style>
.is-netflix {
  --color-1: #ef5350;
  --color-1a: #ef535080;
  --color-1b: #ef535000;
  --color-2: #ffffff;
  --color-2a: #ffffff10;
  --color-2b: #ffffff20;
  --color-3: #ff9800;
  --color-4: #263238;
  --color-4a: rgba(55, 71, 79, 0.9);
  --color-5: #212121;
}
</style>
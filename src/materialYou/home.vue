<template lang="pug">
.container
  nav.absolute.top.left.right.padding.right-align
    a(@click="reload()")
      i refresh
    a(@click="updateTheme()")
      i brightness_medium
  #card.card.large-padding
    .row
      .col.s12.m6.l3
        a.page.left.active
          img.responsive.medium(:src="'/favicon.png'")
        .space
        .card.border.page.bottom.active.m.l
          h5 Card
      .col.s12.m6.l3.m.l
        .card.border.page.top.active
          h5 Card
        .space
        a.page.right.active
          img.responsive.medium(:src="'/beer-and-woman.jpg'")
      .col.s12.m12.l6.center-align
        .page.right.active.center-align
          h3.no-margin.center-align Ready
          h6.no-margin.center-align for material you and beer?
        .space
        nav.center-align.no-margin.wrap
          button.circle.extra.margin
            i refresh
            span Button
          button.border.circle.extra.margin
            i home
            span Button
        nav.center-align.no-margin.wrap
          button.border.circle.extra.margin
            img.responsive(:src="'/favicon.png'")
            span Button
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      css: [
        "diamond",
        "square",
        "circle",
        "round",
        "left-round",
        "top-round",
        "right-round",
        "bottom-round",
        "bottom-round right-round",
        "bottom-round left-round",
        "top-round left-round",
        "top-round right-round",
      ],
    };
  },
  mounted() {
    this.start();
  },
  methods: {
    updateTheme() {
      document.body.className =
        document.body.className == "is-dark" ? "" : "is-dark";
    },
    start() {
      ui();

      let timeout = () => {
        if (!this.css[this.index]) this.index = 0;
        this.to(this.css[this.index]);
        this.index++;

        setTimeout(timeout, 1500);
      };

      setTimeout(timeout, 1500);
    },
    to(css) {
      let e = document.querySelectorAll("button, img, .card, .chip");
      e.forEach((x) => {
        if (x.classList.contains("ignore")) return;
        x.classList.remove(
          "diamond",
          "square",
          "circle",
          "round",
          "left-round",
          "top-round",
          "right-round",
          "bottom-round"
        );

        let list = css.split(" ");
        list.forEach((y) => {
          x.classList.add(y);
        });
      });
    },
    reload() {
      let e = document.getElementById("card");
      e.style.display = "none";

      setTimeout(() => {
        e.style.display = "";
      }, 500);
    },
  },
};
</script>
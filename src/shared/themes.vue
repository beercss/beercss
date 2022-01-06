<template lang="pug">
.modal.left.surface-variant(:id="id")
  slot
  h5 Light
  nav.wrap
    a.wave(@click="updateTheme('is-light-1')")
      img.round.large(:src="'/wallpaper-1.webp'")
    a.wave(@click="updateTheme('is-light-2')")
      img.round.large(:src="'/wallpaper-2.webp'")
    a.wave(@click="updateTheme('is-light-3')")
      img.round.large(:src="'/wallpaper-3.webp'")
    a.wave(@click="updateTheme('is-light-4')")
      img.round.large(:src="'/wallpaper-4.webp'")
    a.wave(@click="updateTheme('is-light-5')")
      img.round.large(:src="'/wallpaper-5.webp'")
  h5 Dark
  nav.wrap
    a.wave(@click="updateTheme('is-dark-1')")
      img.round.large(:src="'/wallpaper-1.webp'")
    a.wave(@click="updateTheme('is-dark-2')")
      img.round.large(:src="'/wallpaper-2.webp'")
    a.wave(@click="updateTheme('is-dark-3')")
      img.round.large(:src="'/wallpaper-3.webp'")
    a.wave(@click="updateTheme('is-dark-4')")
      img.round.large(:src="'/wallpaper-4.webp'")
    a.wave(@click="updateTheme('is-dark-5')")
      img.round.large(:src="'/wallpaper-5.webp'")
  nav
    a.button.border(:data-ui="'#' + id") Close
    a.button.flat(href="https://material-foundation.github.io/material-theme-builder/", target="_blank", :data-ui="'#' + id") More themes
</template>

<script>
export default {
  props: {
    id: {
      default: "themes",
      type: String
    },
    value: Object
  },
  data() {
    return this.value;
  },
  methods: {
    updateTheme(theme) {
      let element = document.querySelector("html");
      element.className = theme;

      this.isDarkTheme = theme.indexOf("dark") != -1;
    }
  }
}
</script>
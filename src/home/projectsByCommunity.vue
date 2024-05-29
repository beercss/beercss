<template lang="pug">
section
  h1 Projects by the community
  .large-space
  .grid
    .s12.m4.l3
      a.wrap(href="https://github.com/Materialious/Materialious")
        article.no-padding.round.wave.no-elevate
          .center-align
            img.small-height.small-width(src="https://github.com/Materialious/Materialious/blob/main/materialious/resources/icon.png?raw=true", loading="lazy")
          nav.large-padding
            h6 Materialious
    .s12.m4.l3
      a.wrap(href="https://github.com/m4heshd/ufc-ripper")
        article.no-padding.round.wave.no-elevate.black
          .center-align.middle-align.small-height
            img.small-width(src="https://github.com/m4heshd/ufc-ripper/raw/master/project-res/images/ufcr-banner.svg", loading="lazy")
          nav.large-padding.white-text
            h6 UFC Ripper
    .s12.m4.l3
      a.wrap(href="https://github.com/bethropolis/haze-editor")
        article.no-padding.round.wave.no-elevate
          .center-align
            img.small-height.small-width(src="https://github.com/bethropolis/haze-editor/blob/main/public/img.png?raw=true", loading="lazy")
          nav.large-padding
            h6 Haze editor
    .s12.m4.l3
      a.wrap(href="https://github.com/WardPearce/Purplix.io")
        article.no-padding.round.wave.no-elevate
          .center-align
            img.small-height(src="https://raw.githubusercontent.com/WardPearce/Purplix.io/24682be424e95e61f7355d17d5a9e501a2e6a73d/frontend/public/logo.png", loading="lazy")
          nav.large-padding
            h6 Purplix.io
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
  
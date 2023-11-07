<template lang="pug">
div(v-show="show")
  nav.left.drawer.l.scroll
    header
      nav
        img.circle(:src="'/bigLinux/biglinux.webp'")
        h5 BigLinux
    a
      i home
      span Início
    a
      i download
      span Atualizações
    a
      i widgets
      span Instalados
    a
      i  history
      span Histórico
    a
      i settings
      span Ajustes
    .divider
    label Categorias
    a
      i globe
      span Internet
    a
      i work
      span Escritório
    a
      i palette
      span Grafico
    a
      i music_note
      span Multimídia 
    a
      i sports_esports
      span Jogos
    a
      i computer
      span Sistema
    a
      i code
      span Dev
  nav.left.m.scroll
    header
      nav
        img.circle(:src="'/bigLinux/biglinux.webp'")
    a
      i home
      label Início
    a
      i download
      label Atualizações
    a
      i widgets
      label Instalados
    a
      i history
      label Histórico
    a
      i settings
      label Ajustes
    .divider
    a
      i globe
      label Internet
    a
      i work
      label Escritório
    a
      i palette
      label Grafico
    a
      i music_note
      label Multimídia 
    a
      i sports_esports
      label Jogos
    a
      i computer
      label Sistema
    a
      i code
      label Dev
  nav.bottom.s
    a
      i home
      label Início
    a
      i download
      label Atualizações
    a
      i widgets
      label Instalados
    a
      i history
      label Histórico
    a
      i settings
      label Ajustes
  header.fixed.responsive.surface
    nav
      .field.prefix.fill.round.max
        i search
        input(type="search")
      button.transparent.circle(@click="updateTheme()")
        i(v-show="mode === 'dark'") light_mode
        i(v-show="mode === 'light'") dark_mode
      button.transparent.circle.m.l(@click="refresh()")
        i refresh
    nav.no-margin.scroll
      button.chip.fill Web
      button.chip.fill Nativo
      button.chip.fill Aur
      button.chip.fill Flatpak
      button.chip.fill Snap
  main.responsive.max
    .page.right.active
      .grid.large-space
        .s12.l6
          article.no-padding.round.wave.no-elevate(@click="updateColors('/bigLinux/destaque-1.jpg')")
            img.responsive.medium-height(:src="'/bigLinux/destaque-1.jpg'")
            .absolute.left.right.top.top-shadow.padding.white-text
              .row
                i globe
                .max.truncate
                  h6 Primeiro destaque
                  .row.no-margin
                    label Web
                    label 1.0.1
                    label 10.1 MB
                    label 31/10/2023
        .s12.l6
          article.no-padding.round.wave.no-elevate(@click="updateColors('/bigLinux/destaque-2.jpg')")
            img.responsive.medium-height(:src="'/bigLinux/destaque-2.jpg'")
            .absolute.left.right.top.top-shadow.padding.white-text
              .row
                i globe
                .max.truncate
                  h6 Segundo destaque
                  .row.no-margin
                    label Web
                    label 1.0.1
                    label 10.1 MB
                    label 31/10/2023
    .space
    .grid.large-space
      .s12.m6.l4
        article.no-padding.round.wave.no-elevate(@click="updateColors('/bigLinux/apps.jpg')")
          img.responsive.small-height(:src="'/bigLinux/apps.jpg'")
          .absolute.left.right.bottom.bottom-shadow.padding.white-text
            .row
              i globe
              .max.truncate
                h6 Primeiro
                .row.no-margin
                  label Web
                  label 1.0.1
                  label 10.1 MB
                  label 31/10/2023
      .s12.m6.l4
        article.no-padding.round.wave.no-elevate(@click="updateColors('/bigLinux/destaque-1.jpg')")
          img.responsive.small-height(:src="'/bigLinux/destaque-1.jpg'")
          .absolute.left.right.bottom.bottom-shadow.padding.white-text
            .row
              i work
              .max.truncate
                h6 Segundo
                .row.no-margin
                  label Nativo
                  label 1.0.1
                  label 10.1 MB
                  label 31/10/2023
      .s12.m6.l4
        article.no-padding.round.wave.no-elevate(@click="updateColors('/bigLinux/apps.jpg')")
          img.responsive.small-height(:src="'/bigLinux/apps.jpg'")
          .absolute.left.right.bottom.bottom-shadow.padding.white-text
            .row
              i palette
              .max.truncate
                h6 Terceiro
                .row.no-margin
                  label Aur
                  label 1.0.1
                  label 10.1 MB
                  label 31/10/2023
      .s12.m6.l4
        article.no-padding.round.wave.no-elevate(@click="updateColors('/bigLinux/destaque-2.jpg')")
          img.responsive.small-height(:src="'/bigLinux/destaque-2.jpg'")
          .absolute.left.right.bottom.bottom-shadow.padding.white-text
            .row
              i music_note
              .max.truncate
                h6 Quarto
                .row.no-margin
                  label Flatpak
                  label 1.0.1
                  label 10.1 MB
                  label 31/10/2023
      .s12.m6.l4
        article.no-padding.round.wave.no-elevate(@click="updateColors('/bigLinux/apps.jpg')")
          img.responsive.small-height(:src="'/bigLinux/apps.jpg'")
          .absolute.left.right.bottom.bottom-shadow.padding.white-text
            .row
              i sports_esports
              .max.truncate
                h6 Quinto
                .row.no-margin
                  label Snap
                  label 1.0.1
                  label 10.1 MB
                  label 31/10/2023
      .s12.m6.l4
        article.no-padding.round.wave.no-elevate(@click="updateColors('/bigLinux/destaque-1.jpg')")
          img.responsive.small-height(:src="'/bigLinux/destaque-1.jpg'")
          .absolute.left.right.bottom.bottom-shadow.padding.white-text
            .row
              i computer
              .max.truncate
                h6 Sexto
                .row.no-margin
                  label Web
                  label 1.0.1
                  label 10.1 MB
                  label 31/10/2023
      .s12.m6.l4
        article.no-padding.round.wave.no-elevate(@click="updateColors('/bigLinux/apps.jpg')")
          img.responsive.small-height(:src="'/bigLinux/apps.jpg'")
          .absolute.left.right.bottom.bottom-shadow.padding.white-text
            .row
              i code
              .max.truncate
                h6 Sétimo
                .row.no-margin
                  label Nativo
                  label 1.0.1
                  label 10.1 MB
                  label 31/10/2023
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const mode = ref("dark");
const show = ref(false);

onMounted(() => {
  show.value = true;
});

const updateTheme = () => {
  let darkOrLight = document.body.className.indexOf("dark") !== -1 ? "light" : "dark";
  mode.value = darkOrLight;
  ui("mode", mode.value);
}

const updateColors = (url: string) => {
  setTimeout(() => {
    console.log("updateColors");
    ui("theme", url);
  }, 360);
}

const refresh = () => {
  show.value = false;
  setTimeout(() => {
    show.value = true
  }, 180);
}
</script>

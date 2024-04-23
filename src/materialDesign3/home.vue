<template lang="pug">
main.responsive.max.medium-line(v-show="data.showPage")
  article.no-elevate.round.no-padding.large.page.bottom.active
    img.responsive(src="https://lh3.googleusercontent.com/7GLFdt-EPWPY2k7WvjHd-LDFITELyr8fAe3vEh80sG26wjcDLt7bnzg70U7Tq2O7j0MOjD1g8sj4J8mFEcEPJv2ml3wwJ9wAEucr-kgPCWVCCGwGADw=w2400-rj")
    .absolute.middle.center.center-align.black-text
      h1.center-align Material Design
      h6 Material 3 is the latest version of Google’s open-source design system. Design and build beautiful, usable products with Material 3.
      nav.center-align
        button.extra(@click="reloadAnimation()") Get started
  .large-space
  .large-space
  section.responsive.page.left.active
    h2 News & launches
    .space
    .grid
      .s12.m6.l4
        a.wave.round.wrap
          article.round.no-elevate.no-padding
            img.responsive.medium(src="https://lh3.googleusercontent.com/fhyw5DMHcxoROzow8owQApE7MxUGVdH1lIXisNu9PZqkXYJD19fxLeauvE5OWp_jL-TG0En553TqcNUvPheP9CnsvA-yA0Q8fK7VUlXHfob2jfOLdQyn=w960")
            .large-padding
              h6 Android Developer Summit
              p Catch Material updates and tutorials at ADS 2022, beginning October 24
      .s12.m6.l4
        a.wave.round.wrap
          article.round.no-elevate.no-padding
            img.responsive.medium(src="https://lh3.googleusercontent.com/V7AytLCAx5XG_KFvucW0jWaPvShdentmubcY5DVJOMC2_z4USSm1H25s2sm1KmFyoQfOt1OOCAzjsB7Tdl0IwS4fzHzRdPEMXmaj6Uz7GQl8B48zhCzv=w960")
            .large-padding
              h6 Announcing Relay Alpha
              p Relay streamlines design and development of custom components through Figma and Android Studio
      .s12.m6.l4
        a.wave.round.wrap
          article.round.no-elevate.no-padding
            img.responsive.medium(src="https://lh3.googleusercontent.com/mLGakWFjdX3zGBIhCUWqzjlj3gUXOY8hOed_ISzomlpNmjKWUiqCFyNGGAZFneVaK30v4GUpjn7lyIsI2Z7KPvMKrYkumzBr2nwbVe3BQKRkpam3sA=w960")
            .large-padding
              h6 New: Figma design kit for M3
              p Jumpstart your designs with customizable, ready-made M3 components available in Figma
    .large-space
    .large-space
    h2 Design system updates
    .space
    .grid
      .s12.m6.l4
        a.wave.round.wrap
          article.round.no-elevate.no-padding
            img.responsive.medium(src="https://lh3.googleusercontent.com/gK__LLaM4jqISqweP0_fxKpBhJuJgSJPqb7wuwRyqMwSBRnj1RJtgXrw69gdLsy2lyH33idBUO5whDJl1TYaHT50hMZc-tj1L49Iq0ctbynuU-0FbFk=w960")
            .large-padding
              h6 Motion system updates
              p Get started applying motion, from ready-to-use transition patterns to updated guidance
      .s12.m6.l4
        a.wave.round.wrap
          article.round.no-elevate.no-padding
            img.responsive.medium(src="https://lh3.googleusercontent.com/N68TlDku5dBAiqGX3B2_mI6F7o6Ki_SnhWvEmFjWmjwtnF4EKEaZfnQo5DxcPERsZiw_PPL2MVjMeEfudXnXTBL2Gg4ZenvGt2jBdOfza9aXYQrU-l0=w960")
            .large-padding
              h6 Designing depth & elevation
              p Learn how to design and build more usable interfaces with visual cues for elevation
      .s12.m6.l4
        a.wave.round.wrap
          article.round.no-elevate.no-padding
            img.responsive.medium(src="https://lh3.googleusercontent.com/aLTg-FT4Ocgvjw1B_i3fOVK-rWoV3C7XCHyBkKwSbJFzIZtJjo-5atBHcSs9aZdHxiMw8-nP3lCnULJtFG_KdIVg7Gk-NV8sc1DJkeMRsTtir9pIu6IY=w960")
            .large-padding
              h6 Accessibility specs
              p Understand and apply accessibility standards built into Material
      .s12.m6.l4
        a.wave.round.wrap
          article.round.no-elevate.no-padding
            img.responsive.medium(src="https://lh3.googleusercontent.com/w0mg7Iy0YoeV7ViHTp9XRzZFTbCX-ME87HPfbv_XFFZlQ-D6tjVwxsY1X_HUrFiXf-kNp8LePGcqv2Oh3OiNU6J28BYhiTf8UQKJBRDYPZejkpKE0NQ=w960")
            .large-padding
              h6 Material Theme Builder
              p Easily migrate or get started with the M3 color system and dynamic color
      .s12.m6.l4
        a.wave.round.wrap
          article.round.no-elevate.no-padding
            img.responsive.medium(src="https://lh3.googleusercontent.com/HpSrY3MDHNM26cRveLm19mA9ptY0WimNYUmyGQgCxkdMUmLy2Z2Z0UCGQNjI2DloK5N1CwblbXunfDru2BFEmyWZnKql9leYos9dBOE8LT0cqA_XqwgX=w960")
            .large-padding
              h6 List component update
              p Standardized sizing and new configuration options included in updates
      .s12.m6.l4
        a.wave.round.wrap
          article.round.no-elevate.no-padding
            img.responsive.medium(src="https://lh3.googleusercontent.com/o-3owUf4wD7wrguE3BgQKuiYtfUNGtnZX1M3tMA4iFgiNY5KxSFK2KofDlY_aJxfji7i5Jbp1WOnfrbYyHtjByweMmYn4G5H5uHylIuRl7OGR_TeMBo=w960")
            .large-padding
              h6 Progress indicator update
              p New color mappings and motion examples included in updates
    .large-space
    .large-space
    h2 Resources
    .grid
      .s12.l6
        a.wave.round.wrap
          article.round.no-elevate.large-padding
            h6 Material blog
            p News, tutorials, and inspiration from the Material team
      .s12.l6
        a.wave.round.wrap
          article.round.no-elevate.large-padding
            h6 Figma design kit
            p Customizable styles and components to help you design with Material 3
      .s12.l6
        a.wave.round.wrap
          article.round.no-elevate.large-padding
            h6 Get started
            p Guides, videos, and tools to start building with Material
      .s12.l6
        a.wave.round.wrap
          article.round.no-elevate.large-padding
            h6 Develop
            p Code and developer documentation for Android, Flutter, and the Web
    .large-space
    .large-space
    .divider
    .large-space
    .grid
      .s12.l6
        svg.medium(viewBox="0 0 24 24")
          path(d="M21,12C21,9.97 20.33,8.09 19,6.38V17.63C20.33,15.97 21,14.09 21,12M17.63,19H6.38C7.06,19.55 7.95,20 9.05,20.41C10.14,20.8 11.13,21 12,21C12.88,21 13.86,20.8 14.95,20.41C16.05,20 16.94,19.55 17.63,19M11,17L7,9V17H11M17,9L13,17H17V9M12,14.53L15.75,7H8.25L12,14.53M17.63,5C15.97,3.67 14.09,3 12,3C9.91,3 8.03,3.67 6.38,5H17.63M5,17.63V6.38C3.67,8.09 3,9.97 3,12C3,14.09 3.67,15.97 5,17.63M23,12C23,15.03 21.94,17.63 19.78,19.78C17.63,21.94 15.03,23 12,23C8.97,23 6.38,21.94 4.22,19.78C2.06,17.63 1,15.03 1,12C1,8.97 2.06,6.38 4.22,4.22C6.38,2.06 8.97,1 12,1C15.03,1 17.63,2.06 19.78,4.22C21.94,6.38 23,8.97 23,12Z")
        p Material Design is an adaptable system of guidelines, components, and tools that support the best practices of user interface design. Backed by open-source code, Material Design streamlines collaboration between designers and developers, and helps teams quickly build beautiful products.
      .s12.l6
        .grid.large-line
          .s4
            p.bold Social
            p
              a.link GitHub
            p
              a.link Twitter
            p
              a.link Youtube
            p
              a.link Blog RSS
          .s4
            p.bold Libraries
            p
              a.link Android
            p
              a.link Compose
            p
              a.link Flutter
            p
              a.link Web
          .s4
            p.bold Archived versions
            p
              a.link Material Design 1
            p
              a.link Material Design 2
    .large-space
    .row.large-space.wrap
      svg(width="71", height="23")
        path(d="M0 8.773C0 3.937 4.083 0 8.938 0c2.684 0 4.595 1.047 6.034 2.415l-1.695 1.693c-1.032-.962-2.429-1.712-4.339-1.712-3.545 0-6.317 2.847-6.317 6.377s2.772 6.381 6.317 6.381c2.297 0 3.607-.921 4.446-1.756.687-.686 1.137-1.67 1.307-3.02H8.938V7.982h8.097c.085.43.129.946.129 1.5 0 1.797-.494 4.025-2.084 5.608-1.547 1.603-3.524 2.462-6.142 2.462C4.083 17.55 0 13.61 0 8.773zm23.693 6.303c-1.719 0-3.198-1.413-3.198-3.425 0-2.032 1.479-3.423 3.198-3.423 1.718 0 3.201 1.391 3.201 3.423 0 2.012-1.483 3.425-3.201 3.425m0-9.076C20.557 6 18 8.375 18 11.65c0 3.257 2.557 5.652 5.693 5.652 3.137 0 5.692-2.395 5.692-5.651C29.385 8.375 26.83 6 23.693 6m13.003 9.076c-1.719 0-3.2-1.413-3.2-3.425 0-2.032 1.481-3.423 3.2-3.423 1.718 0 3.2 1.391 3.2 3.423 0 2.012-1.482 3.425-3.2 3.425m0-9.076C33.559 6 31 8.375 31 11.65c0 3.257 2.559 5.652 5.696 5.652 3.135 0 5.692-2.395 5.692-5.651C42.388 8.375 39.831 6 36.696 6m11.952 9.076c-1.716 0-3.156-1.432-3.156-3.403 0-1.991 1.44-3.445 3.156-3.445 1.697 0 3.031 1.454 3.031 3.445 0 1.971-1.334 3.403-3.031 3.403zm2.858-8.732v.918h-.085C50.861 6.601 49.789 6 48.434 6 45.6 6 43 8.485 43 11.673c0 3.168 2.6 5.63 5.434 5.63 1.355 0 2.427-.6 2.987-1.287h.085v.816c0 2.162-1.161 3.316-3.028 3.316-1.526 0-2.471-1.092-2.857-2.01l-2.171.9c.624 1.498 2.278 3.336 5.028 3.336 2.922 0 5.391-1.713 5.391-5.885V6.344h-2.363zM56 16.608h2.49V0H56zm9.434-8.425c.987 0 1.825.494 2.104 1.199l-5.069 2.096c-.065-2.182 1.697-3.295 2.965-3.295m.192 6.891c-1.267 0-2.169-.578-2.748-1.71l7.582-3.125-.259-.643C69.729 8.333 68.29 6 65.347 6 62.427 6 60 8.292 60 11.65c0 3.167 2.404 5.65 5.626 5.65 2.599 0 4.103-1.583 4.727-2.504l-1.934-1.284c-.643.942-1.525 1.562-2.793 1.562", fill-rule="evenodd")
      a.large-text Privacy Policy
      a.large-text Terms pf Service
      a.large-text Join research studies
      a.large-text Feedback
</template>

<script setup lang="ts">
import utils from "../shared/utils";
import data from "./data";

const reloadAnimation = async () => {
  data.value.showPage = false;
  await utils.wait(100);
  data.value.showPage = true;
};
</script>

<template lang="pug">
main(v-show="data.showPage")
  .grid
    .s12.m6.l6
      .page.bottom.active
        article.no-elevate.round.large-height.large-padding.middle-align
          .large-padding
            h1.large Material Design
            h2.h6 Material Design 3 is Google's open-source design system for building beautiful, usable products.
            nav
              button.extra(@click="reloadAnimation()") Get started
    .s12.m6.l6
      .page.top.active
        .round.large-height.no-padding
          video.responsive(muted autoplay="" loop="" playsinline="")
            source(:src="'/material-design.mp4'")
  .large-space
  .large-space
  section.responsive
    h2 M3 Expressive: Design with emotion
    h3.h6 Build more usable and engaging products with emotion-driven UX. M3 Expressive adds vibrant colors, intuitive motion, adaptive components, flexible typography, and contrasting shapes.
    .large-space
    .grid
      .s12.m6.l6
        article.round.no-elevate.no-padding.wave
          img.responsive.large(alt="", :src="'/figma-m3-design-kit.png'")
          .large-padding
            h3.h6 Updated: Figma M3 Design Kit
            p Quickly create design mockups and prototypes with the latest Material 3 Expressive components and styles
      .s12.m6.l6
        article.round.no-elevate.no-padding.wave
          img.responsive.large(alt="", :src="'/motion-physics.png'")
          .large-padding
            h3.h6 New: Motion physics
            p Easier-to-implement motion system for more customizable transitions—powered by tokens
      .s12.m6.l4
        article.round.no-elevate.no-padding.wave
          img.responsive.medium(alt="", :src="'/shape-library.png'")
          .large-padding
            h3.h6 Expanded: Shape library
            p New set of 35 shapes to add decorative visual elements, with built-in shape morph motion
      .s12.m6.l4
        article.round.no-elevate.no-padding.wave
          img.responsive.medium(alt="", :src="'/guide-to-our-latest-update.png'")
          .large-padding
            h3.h6 Blog: Guide to our latest update
            p Get a full introduction to the latest evolution of Material, including new components and style updates
      .s12.m6.l4
        article.round.no-elevate.no-padding.wave
          img.responsive.medium(alt="", :src="'/research-insights.png'")
          .large-padding
            h3.h6 Blog: Research Insights
            p Dive into the three years of research that influenced the evolution of Material Design's Expressive update
  .large-space
  .large-space
  section.responsive
    h2 Expressive components
    .space
    .grid
      .s12.m6.l6
        article.round.no-elevate.no-padding.wave
          img.responsive.large(alt="", :src="'/toolbars.png'")
          .large-padding
            h3.h6 New: Toolbars
            p Flexible component to display frequently used actions. Toolbars hold a variety of controls like buttons, and can also be paired with a FAB.
      .s12.m6.l6
        article.round.no-elevate.no-padding.wave
          img.responsive.large(alt="", :src="'/split-button.png'")
          .large-padding
            h3.h6 New: Split button
            p Pair a button with related actions in a connected menu. Split buttons leverage expressive shape and motion strategies.
      .s12.m6.l4
        article.round.no-elevate.no-padding.wave
          img.responsive.medium(alt="", :src="'/progress-indicators.png'")
          .large-padding
            h3.h6 Updated: Progress indicators
            p An eye-catching way to show the status of a process in real time. Customize waveform and thickness to show progress with style.
      .s12.m6.l4
        article.round.no-elevate.no-padding.wave
          img.responsive.medium(alt="", :src="'/button-groups.png'")
          .large-padding
            h3.h6 New: Button groups
            p A new way to organize related buttons—with shape-shifting buttons that bump and react to each other
      .s12.m6.l4
        article.round.no-elevate.no-padding.wave
          img.responsive.medium(alt="", :src="'/see-all-expressive-components.png'")
          .large-padding
            h3.h6 See all expressive components
            p Check out all 15 new and updated M3 Expressive components
  .large-space
  .large-space
  section.responsive
    h2 How to apply M3 Expressive
    .space
    .grid
      .s12.m6.l6
        article.round.no-elevate.no-padding.wave
          img.responsive.large(alt="", :src="'/using-motion-physics.png'")
          .large-padding
            h3.h6 Blog: Using motion physics
            p Learn how the motion scheme works, the changes to existing APIs, and what you need to know to leverage it
      .s12.m6.l6
        article.round.no-elevate.no-padding.wave
          img.responsive.large(alt="", :src="'/built-with-m3-expressive.png'")
          .large-padding
            h3.h6 Watch: Build with M3 Expressive
            p Discover how to use Material's emotional design patterns to boost usability and desire for your product
  .large-space
  .large-space
  section.responsive
    h2 Popular resources
    .grid
      .s12.l6
        article.round.no-elevate.large-padding.wave
          h3.h6 Material blog
          p News, tutorials, and inspiration from the Material team
      .s12.l6
        article.round.no-elevate.large-padding.wave
          h3.h6 Figma M3 Design Kit
          p Customizable styles and components to help you design with Material 3
      .s12.l6
        article.round.no-elevate.large-padding.wave
          h3.h6 Get started
          p Guides, videos, and tools to start building with Material
      .s12.l6
        article.round.no-elevate.large-padding.wave
          h3.h6 Develop
          p Code and developer documentation for building with Material
    .large-space
    .large-space
    div
      hr
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
import { onMounted } from "vue";
import utils from "../shared/utils";
import data from "./data";

const reloadAnimation = async () => {
  data.value.showPage = false;
  await utils.wait(100);
  data.value.showPage = true;
}
</script>

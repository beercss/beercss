<template lang="pug">
div
  nav#navigation-rail1.m.l.left.tiny-padding
    a(@click="domain.addHomeScreen()")
      img.circle(:src="'/favicon.png'")
    a(@click="domain.goTo('#intro')")
      i home
      span Install
    a(data-ui="#modal-menu")
      i widgets
      span Explore
    a(@click="domain.updateMenu(data, 'left')")
      i arrow_back
      span Left
    a(@click="domain.updateMenu(data, 'right')")
      i arrow_forward
      span Right
    a(@click="domain.showSamples(data, '#navigation-rail1', 'Navigation rail/bar', null, 'https://github.com/beercss/beercss/blob/main/docs/NAVIGATION.md')")
      i code
      span Code

  nav#navigation-bar1.s.bottom
    a(@click="domain.goTo('#intro')")
      i home
      span Install
    a(data-ui="#modal-menu")
      i widgets
      span Explore
    a(@click="domain.updateMenu(data, 'top')")
      i arrow_upward
      span Top
    a(@click="domain.updateMenu(data, 'bottom')")
      i arrow_downward
      span Bottom
    a(@click="domain.showSamples(data, '#navigation-bar1', 'Navigation rail/bar', null, 'https://github.com/beercss/beercss/blob/main/docs/NAVIGATION.md')")
      i code
      span Code

  header#top-app-bar1.responsive.fixed.yellow4.black-text
    nav
      .max
        a.s(@click="domain.addHomeScreen()")
          img.circle.border.white-border(:src="'/favicon.png'")
      button.transparent.circle(@click="sharedDomain.updateMode(data)")
        i light_mode
      button.transparent.circle(data-ui="#themes3")
        i palette
      button.transparent.circle(data-ui="#more3")
        i collections

  #modal-menu.modal.left
    header.fixed
      nav
        img.circle(:src="'/favicon.png'")
        .max
          h6 Beercss
          div v3.0.7
        button.transparent.circle(data-ui="#modal-menu")
          i close
    a.row.round(@click="sharedDomain.updateMode(data)")
      i light_mode
      span Light / Dark
    a.row.round(data-ui="#themes3")
      i palette
      span Themes
    a.row.round(data-ui="#more3")
      i collections
      span Templates
    .small-divider
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#app-bars')")
      i widgets
      span App bars
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#badges')")
      i widgets
      span Badges
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#buttons')")
      i widgets
      span Buttons
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#cards')")
      i widgets
      span Cards
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#checkboxes')")
      i widgets
      span Checkboxes
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#chips')")
      i widgets
      span Chips
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#colors')")
      i widgets
      span Colors
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#containers')")
      i widgets
      span Containers
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#directions')")
      i widgets
      span Directions
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#dividers')")
      i widgets
      span Dividers
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#dropdowns')")
      i widgets
      span Dropdowns
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#expansions')")
      i widgets
      span Expansions
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#grids')")
      i widgets
      span Grids
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#icons')")
      i widgets
      span Icons
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#inputs')")
      i widgets
      span Inputs
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#layouts')")
      i widgets
      span Layouts
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#loaders')")
      i widgets
      span Loaders
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#media')")
      i widgets
      span Media
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#modals')")
      i widgets
      span Modals
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#navigations')")
      i widgets
      span Navigations
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#pages')")
      i widgets
      span Pages
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#progress')")
      i widgets
      span Progress
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#radios')")
      i widgets
      span Radios
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#responsive')")
      i widgets
      span Responsive
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#scrolls')")
      i widgets
      span Scrolls
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#selects')")
      i widgets
      span Selects
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#spaces')")
      i widgets
      span Spaces
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#switches')")
      i widgets
      span Switches
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#tables')")
      i widgets
      span Tables
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#tabs')")
      i widgets
      span Tabs
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#textareas')")
      i widgets
      span Textareas
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#toasts')")
      i widgets
      span Toasts
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#tooltips')")
      i widgets
      span Tooltips
    a.row.round(data-ui="#modal-menu", @click="domain.goTo('#typography')")
      i widgets
      span Typography

  themes(id="themes3", v-model="data", position="right")

  #more3.modal.right.small(data-ui="#more3")
    header.fixed
      nav
        h5.max Templates
        button.transparent.circle
          i close
    p All templates listed below are only for tests purpose. Feel free to study them.
    .space
    a.row.round(href="/gmail")
      i mail
      span Gmail
    a.row.round(href="/netflix")
      i tv
      span Netflix
    a.row.round(href="/uber")
      i directions_car
      span Uber
    a.row.round(href="/youtube")
      i smart_display
      span Youtube
    a.row.round(href="https://codepen.io/search/pens?q=beercss")
      i code
      span Codepen

  .responsive.center-align.yellow4
    div.black-text
      .large-height.no-scroll.middle-align.center-align
        img#logo(:src="'/logo.png'", @click="domain.addHomeScreen()")
      h5.center-align Build material design
      h3.center-align in record time
      h5.center-align without stress for devs
      .large-space
      .large-space
      nav.center-align
        a.button.black-border.black-text.large.border(
          href="https://www.npmjs.com/package/beercss",
          target="_self"
        ) NPM
        a.button.black-border.black-text.large.border(
          href="https://github.com/beercss/beercss",
          target="_self"
        ) Github
        a.button.black.white-text.large(
          href="https://github.com/beercss/beercss",
          target="_self"
        ) Get started
      .large-space
      .large-space
      .large-space
      .large-space
      .large-space
  main.responsive
    .large-space
    #begin
      .grid
        #intro.s12
          .div
            h3 Get started
            .medium-space
            h5 From CDN
            pre.scroll.fill.no-round(style="font-family: courier new")
              | &lt;link href="https://cdn.jsdelivr.net/npm/beercss@3.0.7/dist/cdn/beer.min.css" rel="stylesheet"&gt;
              |
              | &lt;script type="module" src="https://cdn.jsdelivr.net/npm/beercss@3.0.7/dist/cdn/beer.min.js"&gt;&lt;/script&gt;
              |
              | &lt;script type="module" src="https://cdn.jsdelivr.net/npm/material-dynamic-colors@0.1.5/dist/cdn/material-dynamic-colors.min.js"&gt;&lt;/script&gt;
            .medium-space
            h5 From NPM
            pre.scroll.fill.no-round(style="font-family: courier new")
              | // installing
              | npm i beercss
              | npm i material-dynamic-colors
              |
              | // importing
              | import "beercss";
              | import "material-dynamic-colors";
            .medium-space
            b We recommend use the material-dynamic-colors only when your app needs to change theme at runtime.
            .medium-space
            .l
              h5 Summary
              .grid
                .s12.m12.l6
                  p
                    b absolute
                    span &nbsp;left, right, top, bottom, front, back, small, medium, large
                  p
                    b &lt;article&gt;
                    span &nbsp;small, medium, large, border, round, no-round, left-round, top-round, right-round, bottom-round, padding, no-padding, tiny-padding small-padding, medium-padding, large-padding
                  p
                    b badge
                    span &nbsp;left, right, top, bottom, border, circle, square, round, no-round, left-round, right-round, top-round, bottom-round
                  p
                    b button or &lt;button&gt;
                    span &nbsp;small, medium, large, extra, none, extend, border, circle, square, round, no-round, left-round, right-round, top-round, bottom-round, responsive, horizontal, vertical
                  p
                    b chip
                    span &nbsp;small, medium, large, border, circle, square, round, no-round, left-round, right-round, top-round, bottom-round, horizontal, vertical
                  p
                    b &lt;details&gt;
                  p
                    b dropdown
                    span &nbsp;left, right, wrap, no-wrap, active
                  p
                    b field
                    span &nbsp;small, medium, large, extra, label, border, round, fill, prefix, suffix, textarea
                  p
                    b fixed
                    span &nbsp;left, right, top, bottom, front, back, small, medium, large
                  p
                    b &lt;footer&gt;
                    span &nbsp;fixed, responsive
                  p
                    b &lt;h1&gt;...&lt;h6&gt;
                    span &nbsp;small, medium, large
                  p
                    b &lt;header&gt;
                    span &nbsp;fixed, responsive
                  p
                    b &lt;i&gt;
                    span &nbsp;tiny, small, medium, large, extra, fill
                  p
                    b &lt;img&gt;
                    span &nbsp;tiny, small, medium, large, extra, circle, round, no-round, left-round, right-round, top-round, bottom-round, responsive
                  p
                    b &lt;label&gt;
                    span &nbsp;active, radio, checkbox, switch
                .s12.m12.l6
                  p
                    b loader
                    span &nbsp;small, medium, large
                  p
                    b &lt;main&gt;
                    span &nbsp;responsive, max
                  p
                    b modal
                    span &nbsp;left, right, top, bottom, small, medium, large, border, round, no-round, left-round, right-round, top-round, bottom-round, active
                  p
                    b &lt;nav&gt;
                    span &nbsp;left, right, top, bottom, left-align, right-align, center-align, top-align, bottom-align, middle-align, border, round, no-round, left-round, right-round, top-round, bottom-round, no-space, small-space, medium-space, large-space, wrap, no-wrap, margin, no-margin, tiny-margin, small-margin, medium-margin, large-margin
                  p
                    b overlay
                    span &nbsp;left-align, right-align, center-align, top-align, bottom-align, middle-align, active
                  p
                    b page
                    span &nbsp;left, right, top, bottom, active
                  p
                    b progress
                    span &nbsp;left, right, top, bottom
                  p
                    b row
                    span &nbsp;left-align, right-align, center-align, top-align, bottom-align, middle-align
                  p
                    b &lt;summary&gt;
                  p
                    b &lt;table&gt;
                    span &nbsp;left-align, right-align, center-align, no-space, space, small-space, medium-space, large-space, border
                  p
                    b tabs
                    span &nbsp;left-align, right-align, center-align, horizontal, vertical, min, max
                  p
                    b toast
                    span &nbsp;top, bottom, active
                  p
                    b tooltip
                    span &nbsp;left, right, top, bottom
                  p
                    b &lt;video&gt;
                    span &nbsp;tiny, small, medium, large, extra, circle, round, no-round, left-round, right-round, top-round, bottom-round, responsive
              .medium-space
            nav.wrap
              a.button(href="https://github.com/beercss/beercss/blob/main/docs/INDEX.md") Documentation
              a.button(href="https://codepen.io/collection/XydYMB") Codepen
          .medium-space
          .large-divider
        .s12
          appBars
        .s12
          badges
        .s12
          buttons
        .s12
          cards
        .s12
          checkboxes
        .s12
          chips
        .s12
          colors
        .s12
          containers
        .s12
          directions
        .s12
          dividers
        .s12
          dropdowns
        .s12
          expansions
        .s12
          grids
        .s12
          icons
        .s12
          inputs
        .s12
          layouts
        .s12
          loaders
        .s12
          media
        .s12
          modals
        .s12
          navigations
        .s12
          pages
        .s12
          progress1
        .s12
          radios
        .s12
          responsive
        .s12
          scrolls
        .s12
          selects
        .s12
          spaces
        .s12
          switches
        .s12
          tables
        .s12
          tabs
        .s12
          textareas
        .s12.l6
          toasts
        .s12.l6
          tooltips
        .s12
          typography

      .large-space
      div Made with love and beer, cheers 💛🍻
      .space

      #modal-samples.modal.right.large
        header.fixed.front
          nav
            h5.truncate {{data.name}}
            a.m.l.button.border(v-show="data.urlSample", :href="data.urlSample", target="_blank") Documentation
            .max
            a.button.circle.transparent.s(v-show="data.urlSample", :href="data.urlSample", target="_blank")
              i description
            button.circle.transparent(data-ui="#modal-samples")
              i close
        article.border(v-for="(exemplo in data.samples")
          div(v-html="exemplo.html")
          .space(v-show="exemplo.html")
          pre(v-html="exemplo.sourceCode")
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import themes from "../shared/themes.vue";
import data from "./data";
import domain from "./domain";
import sharedDomain from "../shared/domain";
import appBars from "./appBars.vue";
import badges from "./badges.vue";
import buttons from "./buttons.vue";
import cards from "./cards.vue";
import checkboxes from "./checkboxes.vue";
import chips from "./chips.vue";
import colors from "./colors.vue";
import containers from "./containers.vue";
import directions from "./directions.vue";
import dividers from "./dividers.vue";
import dropdowns from "./dropdowns.vue";
import expansions from "./expansions.vue";
import grids from "./grids.vue";
import icons from "./icons.vue";
import inputs from "./inputs.vue";
import layouts from "./layouts.vue";
import loaders from "./loaders.vue";
import media from "./media.vue";
import modals from "./modals.vue";
import navigations from "./navigations.vue";
import pages from "./pages.vue";
import progress1 from "./progress.vue";
import radios from "./radios.vue";
import responsive from "./responsive.vue";
import scrolls from "./scrolls.vue";
import selects from "./selects.vue";
import spaces from "./spaces.vue";
import switches from "./switches.vue";
import tables from "./tables.vue";
import tabs from "./tabs.vue";
import textareas from "./textareas.vue";
import toasts from "./toasts.vue";
import tooltips from "./tooltips.vue";
import typography from "./typography.vue";

onMounted(() => {
  sharedDomain.initTheme(data.value);

  setTimeout(() => {
    data.value.isHorizontal = window.outerWidth <= 600;
    document.getElementById("logo").classList.add("active");
  }, 1000);
});
</script>

<style>
#logo {
  display: none;
  max-width: 100%;
  width: 32rem;
}

#logo.active {
  display: inline-block;
  animation: 1s logo-intro;
}

#container-logo {
  height: 16rem;
}

#modal-colors .s12 > div {
  padding: 1rem;
}

#modal-colors .s12 > .border {
  border: 0.0625rem solid var(--outline);
}

.hljs-string, .error-text {
  color: var(--error) !important;
}

.logo-template {
  width: auto;
  height: 1.5rem;
}

.logo-codepen {
  width: auto;
  height: 1.25rem;
}

.logo-support {
  width: auto;
  height: 100rem;
}

pre {
  overflow: auto;
  padding: 0.5rem;
  margin: 0;
}

pre * {
  vertical-align: text-bottom;
}

pre.wrap {
  white-space: pre-wrap;
  word-break: break-all;
}

#grids .grid > * {
  border: 0.0625rem solid var(--outline);
}

@keyframes logo-intro {
  0% {
    opacity: 0;
    transform: rotate(-90deg) scale(0.5) translateY(25%);
  }
  75% {
    opacity: 1;
    transform: rotate(0deg) scale(1.1) translateY(0);
  }
  100% {
    opacity: 1;
    transform: rotate(0deg) scale(1) translateY(0);
  }
}
</style>

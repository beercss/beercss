<template lang="pug">
div
  nav#navigation-rail1.m.l.left
    header
      img.circle(:src="'/favicon.png'", @click="domain.addHomeScreen()")
    a(@click="domain.goTo('#intro')")
      i home
      span Install
    a(data-ui="#dialog-menu")
      i widgets
      span Explore
    a(@click="domain.updateMenu(data, 'left')")
      i arrow_back
      span Left
    a(@click="domain.updateMenu(data, 'right')")
      i arrow_forward
      span Right
    a(@click="domain.updateRtlLtr(data)", v-show="!data.isRtl")
      i checklist_rtl
      span RTL
    a(@click="domain.updateRtlLtr(data)", v-show="data.isRtl")
      i checklist
      span LTR
    a(@click="domain.showSamples(data, '#navigation-rail1', 'Navigation rail/bar', null, 'https://github.com/beercss/beercss/blob/main/docs/NAVIGATION.md')")
      i code
      span Code

  nav#navigation-bar1.s.bottom
    a(@click="domain.goTo('#intro')")
      i home
      span Install
    a(data-ui="#dialog-menu")
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

  header#top-app-bar1.fixed.responsive.max.yellow4.black-text
    nav
      .max
        a.s(@click="domain.addHomeScreen()")
          img.circle.border.white-border(:src="'/favicon.png'")
      a.button.transparent.circle(href="https://github.com/beercss/beercss", target="_self")
        i
          svg(viewBox="0 0 24 24")
            path(d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z")
      button.transparent.circle(data-ui="#themes3")
        i palette
      button.transparent.circle(data-ui="#more3")
        i collections
      button.transparent.circle(@click="sharedDomain.updateMode(data)")
        i.page.top.active(v-if="data.isDark") light_mode
        i.page.top.active(v-else) dark_mode

  .overlay
  dialog#dialog-menu.left.scroll
    header.fixed
      nav
        img.circle(:src="'/favicon.png'")
        .max
          h6 Beer CSS
        button.transparent.circle(data-ui="#dialog-menu")
          i close
    nav.drawer.no-padding.no-margin
      a(data-ui="#themes3")
        i palette
        span Themes
      a(data-ui="#more3")
        i collections
        span Templates
      a(@click="sharedDomain.updateMode(data)")
        i {{ data.isDark ? "light_mode" : "dark_mode" }}
        span Light / Dark
      .small-divider
      a(data-ui="#dialog-menu", @click="domain.goTo('#app-bars')")
        i widgets
        span App bars
      a(data-ui="#dialog-menu", @click="domain.goTo('#badges')")
        i widgets
        span Badges
      a(data-ui="#dialog-menu", @click="domain.goTo('#buttons')")
        i widgets
        span Buttons
      a(data-ui="#dialog-menu", @click="domain.goTo('#cards')")
        i widgets
        span Cards
      a(data-ui="#dialog-menu", @click="domain.goTo('#checkboxes')")
        i widgets
        span Checkboxes
      a(data-ui="#dialog-menu", @click="domain.goTo('#chips')")
        i widgets
        span Chips
      a(data-ui="#dialog-menu", @click="domain.goTo('#colors')")
        i widgets
        span Colors
      a(data-ui="#dialog-menu", @click="domain.goTo('#containers')")
        i widgets
        span Containers
      a(data-ui="#dialog-menu", @click="domain.goTo('#dialogs')")
        i widgets
        span Dialogs
      a(data-ui="#dialog-menu", @click="domain.goTo('#directions')")
        i widgets
        span Directions
      a(data-ui="#dialog-menu", @click="domain.goTo('#dividers')")
        i widgets
        span Dividers
      a(data-ui="#dialog-menu", @click="domain.goTo('#expansions')")
        i widgets
        span Expansions
      a(data-ui="#dialog-menu", @click="domain.goTo('#grids')")
        i widgets
        span Grids
      a(data-ui="#dialog-menu", @click="domain.goTo('#icons')")
        i widgets
        span Icons
      a(data-ui="#dialog-menu", @click="domain.goTo('#inputs')")
        i widgets
        span Inputs
      a(data-ui="#dialog-menu", @click="domain.goTo('#layouts')")
        i widgets
        span Layouts
      a(data-ui="#dialog-menu", @click="domain.goTo('#lists')")
        i widgets
        span Lists
      a(data-ui="#dialog-menu", @click="domain.goTo('#media')")
        i widgets
        span Media
      a(data-ui="#dialog-menu", @click="domain.goTo('#menus')")
        i widgets
        span Menus
      a(data-ui="#dialog-menu", @click="domain.goTo('#navigations')")
        i widgets
        span Navigations
      a(data-ui="#dialog-menu", @click="domain.goTo('#pages')")
        i widgets
        span Pages
      a(data-ui="#dialog-menu", @click="domain.goTo('#progress')")
        i widgets
        span Progress
      a(data-ui="#dialog-menu", @click="domain.goTo('#radios')")
        i widgets
        span Radios
      a(data-ui="#dialog-menu", @click="domain.goTo('#responsive')")
        i widgets
        span Responsive
      a(data-ui="#dialog-menu", @click="domain.goTo('#scrolls')")
        i widgets
        span Scrolls
      a(data-ui="#dialog-menu", @click="domain.goTo('#search')")
        i widgets
        span Search
      a(data-ui="#dialog-menu", @click="domain.goTo('#selects')")
        i widgets
        span Selects
      a(data-ui="#dialog-menu", @click="domain.goTo('#sliders')")
        i widgets
        span Sliders
      a(data-ui="#dialog-menu", @click="domain.goTo('#snackbars')")
        i widgets
        span Snackbars
      a(data-ui="#dialog-menu", @click="domain.goTo('#spaces')")
        i widgets
        span Spaces
      a(data-ui="#dialog-menu", @click="domain.goTo('#steppers')")
        i widgets
        span Steppers
      a(data-ui="#dialog-menu", @click="domain.goTo('#switches')")
        i widgets
        span Switches
      a(data-ui="#dialog-menu", @click="domain.goTo('#tables')")
        i widgets
        span Tables
      a(data-ui="#dialog-menu", @click="domain.goTo('#tabs')")
        i widgets
        span Tabs
      a(data-ui="#dialog-menu", @click="domain.goTo('#textareas')")
        i widgets
        span Textareas
      a(data-ui="#dialog-menu", @click="domain.goTo('#tooltips')")
        i widgets
        span Tooltips
      a(data-ui="#dialog-menu", @click="domain.goTo('#typography')")
        i widgets
        span Typography

  themes(id="themes3", v-model="data", position="right")

  .overlay
  dialog#more3.right.small(data-ui="#more3")
    header.fixed
      nav
        h5.max Templates
        button.transparent.circle
          i close
    p All templates listed below are only for tests purpose. Feel free to study them.
    nav.drawer.max.no-padding
      a(href="/gmail")
        i mail
        span Gmail
      a(href="/material-design-3")
        i
          svg(viewBox="0 0 24 24")
            path(d="M21,12C21,9.97 20.33,8.09 19,6.38V17.63C20.33,15.97 21,14.09 21,12M17.63,19H6.38C7.06,19.55 7.95,20 9.05,20.41C10.14,20.8 11.13,21 12,21C12.88,21 13.86,20.8 14.95,20.41C16.05,20 16.94,19.55 17.63,19M11,17L7,9V17H11M17,9L13,17H17V9M12,14.53L15.75,7H8.25L12,14.53M17.63,5C15.97,3.67 14.09,3 12,3C9.91,3 8.03,3.67 6.38,5H17.63M5,17.63V6.38C3.67,8.09 3,9.97 3,12C3,14.09 3.67,15.97 5,17.63M23,12C23,15.03 21.94,17.63 19.78,19.78C17.63,21.94 15.03,23 12,23C8.97,23 6.38,21.94 4.22,19.78C2.06,17.63 1,15.03 1,12C1,8.97 2.06,6.38 4.22,4.22C6.38,2.06 8.97,1 12,1C15.03,1 17.63,2.06 19.78,4.22C21.94,6.38 23,8.97 23,12Z")
        span Material.io
      a(href="/dynamic-colors")
        i format_paint
        span Material Dynamic Colors
      a(href="/netflix")
        i tv
        span Netflix
      a(href="/reddit")
        i open_in_new
        span Reddit
      a(href="/uber")
        i directions_car
        span Uber
      a(href="/youtube")
        i smart_display
        span Youtube
      .small-divider
      a(href="https://codepen.io/search/pens?q=beercss" target="_blank")
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
        a.button.small-round.black-text.border.black-border.large(href="https://github.com/beercss/beercss/blob/main/docs/INDEX.md") Documentation
        a.button.small-round.black.white-text.large(
          href="https://github.com/beercss/beercss",
          target="_self"
        )
          i
            svg(viewBox="0 0 24 24")
              path(d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z")
          span Get started
      .space
      .center-align
        img(src="https://img.shields.io/github/license/beercss/beercss" alt="License")
        span &nbsp;
        img(src="https://img.shields.io/bundlephobia/minzip/beercss", alt="minzipped size")
        span &nbsp;
        img(src="https://img.shields.io/npm/v/beercss" alt="Version")
      .large-space
      .large-space
      .large-space
      .large-space
      .large-space
  main.responsive
    .large-space
    #begin
      .small-height
      .small-height
      h1 We are working to translate a modern UI into HTML semantic standard
      h3 
        a.link(href="https://github.com/beercss/beercss") Don't forget to star us on Github
      .small-height
      .small-height
      projectsByCommunity
      .small-height
      .small-height
      .grid
        #intro.s12
          .div
            h3 Get started
            .medium-space
            h5 From CDN
            .space
            pre.scroll.large-padding.fill
              | &lt;link href="https://cdn.jsdelivr.net/npm/beercss@3.5.8/dist/cdn/beer.min.css" rel="stylesheet"&gt;
              |
              | &lt;script type="module" src="https://cdn.jsdelivr.net/npm/beercss@3.5.8/dist/cdn/beer.min.js"&gt;&lt;/script&gt;
              |
              | &lt;script type="module" src="https://cdn.jsdelivr.net/npm/material-dynamic-colors@1.1.1/dist/cdn/material-dynamic-colors.min.js"&gt;&lt;/script&gt;
            .medium-space
            h5 From NPM
            .space
            pre.scroll.large-padding.fill
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
              .space
              pre.wrap.large-padding.fill
                p
                  b.error-text absolute
                  span &nbsp;left, right, top, bottom, front, back, small, medium, large
                p
                  b.error-text &lt;article&gt;
                  span &nbsp;small, medium, large, border, round, no-round, left-round, top-round, right-round, bottom-round, padding, no-padding, tiny-padding small-padding, medium-padding, large-padding
                p
                  b.error-text badge
                  span &nbsp;min, left, right, top, bottom, none, border, circle, square, round, no-round, left-round, right-round, top-round, bottom-round
                p
                  b.error-text button or &lt;button&gt;
                  span &nbsp;small, medium, large, extra, extend, border, circle, square, round, no-round, left-round, right-round, top-round, bottom-round, responsive, horizontal, vertical
                p
                  b.error-text chip
                  span &nbsp;small, medium, large, border, no-border, circle, square, round, no-round, left-round, right-round, top-round, bottom-round, horizontal, vertical
                p
                  b.error-text &lt;details&gt;
                p
                  b.error-text &lt;dialog&gt;
                  span &nbsp;left, right, top, bottom, small, medium, large, modal, border, round, no-round, left-round, right-round, top-round, bottom-round, active
                p
                  b.error-text field
                  span &nbsp;small, medium, large, extra, label, border, round, fill, prefix, suffix, textarea
                p
                  b.error-text fixed
                  span &nbsp;left, right, top, bottom, front, back, small, medium, large
                p
                  b.error-text &lt;footer&gt;
                  span &nbsp;fixed, responsive
                p
                  b.error-text &lt;h1&gt;...&lt;h6&gt;
                  span &nbsp;small, medium, large
                p
                  b.error-text &lt;header&gt;
                  span &nbsp;fixed, responsive
                p
                  b.error-text &lt;i&gt;
                  span &nbsp;tiny, small, medium, large, extra, fill
                p
                  b.error-text &lt;img&gt;
                  span &nbsp;tiny, small, medium, large, extra, circle, round, no-round, left-round, right-round, top-round, bottom-round, responsive
                p
                  b.error-text &lt;label&gt;
                  span &nbsp;active, radio, checkbox, switch
                p
                  b.error-text &lt;li&gt;
                  span &nbsp;max, divider, small-divider, medium-divider, large-divider
                p
                  b.error-text &lt;main&gt;
                  span &nbsp;responsive, max
                p
                  b.error-text &lt;menu&gt;
                  span &nbsp;left, right, wrap, no-wrap, active, min, max
                p
                  b.error-text &lt;nav&gt;
                  span &nbsp;left, right, top, bottom, drawer, min, max, left-align, right-align, center-align, top-align, bottom-align, middle-align, border, round, no-round, left-round, right-round, top-round, bottom-round, no-space, small-space, medium-space, large-space, wrap, no-wrap, margin, no-margin, tiny-margin, small-margin, medium-margin, large-margin
                p
                  b.error-text overlay
                  span &nbsp;left-align, right-align, center-align, top-align, bottom-align, middle-align, active, blur, small-blur, medium-blur, large-blur
                p
                  b.error-text page
                  span &nbsp;left, right, top, bottom, active
                p
                  b.error-text &lt;progress&gt;
                  span &nbsp;small, medium, large, circle, max, vertical
                p
                  b.error-text row, &lt;ul&gt; or &lt;ol&gt;
                  span &nbsp;left-align, right-align, center-align, top-align, bottom-align, middle-align, no-space, small-space, medium-space, large-space, horizontal, vertical
                p
                  b.error-text snackbar
                  span &nbsp;top, bottom, active
                p
                  b.error-text &lt;summary&gt;
                p
                  b.error-text &lt;table&gt;
                  span &nbsp;left-align, right-align, center-align, no-space, space, small-space, medium-space, large-space, border, stripes, min, fixed
                p
                  b.error-text tabs
                  span &nbsp;left-align, right-align, center-align, horizontal, vertical, min, max
                p
                  b.error-text tooltip
                  span &nbsp;left, right, top, bottom, max
                p
                  b.error-text &lt;video&gt;
                  span &nbsp;tiny, small, medium, large, extra, circle, round, no-round, left-round, right-round, top-round, bottom-round, responsive
            .large-space
            mainLayouts
            .medium-space
            nav.wrap
              a.button.small-round(href="https://codepen.io/leo-bnu/pen/yLKLPxj" target="_blank") Main layout on Codepen
              a.button.small-round(href="https://codepen.io/collection/XydYMB" target="_blank") All Codepen
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
          dialogs
        .s12
          directions
        .s12
          dividers
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
          lists
        .s12
          media
        .s12
          menus
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
          search
        .s12
          selects
        .s12
          sliders
        .s12
          snackbars
        .s12
          spaces
        .s12
          steppers
        .s12
          switches
        .s12
          tables
        .s12
          tabs
        .s12
          textareas
        .s12
          tooltips
        .s12
          typography

      .large-space
      div Made with love and beer, cheers 💛🍻
      .space

      .overlay
      dialog#dialog-samples.right.large
        header.fixed.front
          nav
            .max.truncate
              h5 {{data.name}}
            a.m.l.button.small-round.border(v-show="data.urlSample", :href="data.urlSample", target="_blank") Documentation
            a.button.circle.transparent.s(v-show="data.urlSample", :href="data.urlSample", target="_blank")
              i description
            button.circle.transparent(data-ui="#dialog-samples")
              i close
        article.large-padding.border(v-for="(exemplo in data.samples")
          div(v-html="exemplo.html")
          .space(v-show="exemplo.html")
          pre.scroll.large-padding.fill(v-html="exemplo.sourceCode")
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import themes from "../shared/themes.vue";
import data from "./data";
import domain from "./domain";
import sharedDomain from "../shared/domain";
import projectsByCommunity from "./projectsByCommunity.vue";
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
import menus from "./menus.vue";
import expansions from "./expansions.vue";
import grids from "./grids.vue";
import icons from "./icons.vue";
import inputs from "./inputs.vue";
import layouts from "./layouts.vue";
import lists from "./lists.vue";
import mainLayouts from "./mainLayouts.vue";
import media from "./media.vue";
import dialogs from "./dialogs.vue";
import navigations from "./navigations.vue";
import pages from "./pages.vue";
import progress1 from "./progress.vue";
import radios from "./radios.vue";
import responsive from "./responsive.vue";
import scrolls from "./scrolls.vue";
import search from "./search.vue";
import selects from "./selects.vue";
import sliders from "./sliders.vue";
import snackbars from "./snackbars.vue";
import spaces from "./spaces.vue";
import steppers from "./steppers.vue";
import switches from "./switches.vue";
import tables from "./tables.vue";
import tabs from "./tabs.vue";
import textareas from "./textareas.vue";
import tooltips from "./tooltips.vue";
import typography from "./typography.vue";

onMounted(() => {
  document.title = "Beer CSS - Build material design in record time, without stress for devs";

  setTimeout(() => {
    data.value.isHorizontal = window.outerWidth <= 600;
    document.getElementById("logo")?.classList?.add("active");
  }, 1000);
});
</script>

<style>
#logo {
  display: none;
  max-inline-size: 100%;
  inline-size: 32rem;
}

#logo.active {
  display: inline-block;
  animation: 1s logo-intro;
}

#container-logo {
  block-size: 16rem;
}

dialog#dialog-colors .s12 > div {
  padding: 1rem;
}

dialog#dialog-colors .s12 > .border {
  border: 0.0625rem solid var(--outline);
}

.hljs-string, .error-text {
  color: var(--error) !important;
}

.logo-template {
  inline-size: auto;
  block-size: 1.5rem;
}

.logo-codepen {
  inline-size: auto;
  block-size: 1.25rem;
}

.logo-support {
  inline-size: auto;
  block-size: 100rem;
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

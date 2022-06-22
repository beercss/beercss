<template lang="pug">
div
  .menu.left.m.l
    img.circle.small-margin(:src="'/favicon.png'", @click="domain.addHomeScreen()")
    a(@click="domain.updateMenu('.menu.m.l', 'top')")
      i arrow_upward
      div Top
    a(@click="domain.updateMenu('.menu.m.l', 'bottom')")
      i arrow_downward
      div Bottom
    a(@click="domain.updateMenu('.menu.m.l', 'left')")
      i arrow_back
      div Left
    a(@click="domain.updateMenu('.menu.m.l', 'right')")
      i arrow_forward
      div Right
    a(@click="domain.updateIcons()")
      i image
      div Icons
    a(@click="sharedDomain.updateMode(data)")
      i light_mode
      div Light/Dark
    a(data-ui="#themes1")
      i palette
      div Themes
    a(data-ui="#more1")
      i collections
      div Templates
    a(@click="domain.showSamples(data, '.menu.m.l', null, 'https://github.com/beercss/beercss/blob/main/docs/MENU.md')")
      i code
      div Code
    themes(id="themes1", v-model="data")
    #more1.modal.left(data-ui="#more1")
      h5 Templates
      p This templates are only for tests purpose
      .space
      a.wrap.padding(href="/youtube", v-show="data.isDark")
        img.logo-template(:src="'/youtube-dark.png'")
      a.wrap.padding(href="/youtube", v-show="!data.isDark")
        img.logo-template(:src="'/youtube-light.png'")
      a.wrap.padding(href="/netflix")
        img.logo-template(:src="'/netflix.png'")
      a.wrap.padding(href="/gmail", v-show="data.isDark")
        img.logo-template(:src="'/gmail-dark.png'")
      a.wrap.padding(href="/gmail", v-show="!data.isDark")
        img.logo-template(:src="'/gmail-light.png'")
      a.wrap.padding(href="/uber", v-show="data.isDark")
        img.logo-template(:src="'/uber-dark.png'")
      a.wrap.padding(href="/uber", v-show="!data.isDark")
        img.logo-template(:src="'/uber-light.png'")
      a.wrap.padding(href="https://codepen.io/search/pens?q=beercss", target="_self", v-show="data.isDark")
        img.logo-codepen(:src="'/codepen-dark.png'")
      a.wrap.padding(href="https://codepen.io/search/pens?q=beercss", target="_self", v-show="!data.isDark")
        img.logo-codepen(:src="'/codepen-light.png'")

  .menu.bottom.s
    a(@click="domain.updateIcons()")
      i image
      div Icons
    a(data-ui="#themes2")
      i brightness_medium
      div Themes
    a(data-ui="#more2")
      i collections
      div Templates
    a(@click="domain.showSamples(data, '.menu.s', null, 'https://github.com/beercss/beercss/blob/main/docs/MENU.md')")
      i code
      div Code
    themes(id="themes2", v-model="data")
    #more2.modal.bottom.medium(data-ui="#more2")
      h5 Templates
      p This templates are only for tests purpose
      .space
      .row
        .col.s6.middle-align.padding
          a(href="/youtube", v-show="data.isDark")
            img.logo-template(:src="'/youtube-dark.png'")
          a(href="/youtube", v-show="!data.isDark")
            img.logo-template(:src="'/youtube-light.png'")
        .col.s6.middle-align.padding
          a(href="/netflix")
            img.logo-template(:src="'/netflix.png'")
        .col.s6.middle-align.padding
          a(href="/gmail", v-show="data.isDark")
            img.logo-template(:src="'/gmail-dark.png'")
          a(href="/gmail", v-show="!data.isDark")
            img.logo-template(:src="'/gmail-light.png'")
        .col.s6.middle-align.padding
          a(href="/uber", v-show="data.isDark")
            img.logo-template(:src="'/uber-dark.png'")
          a(href="/uber", v-show="!data.isDark")
            img.logo-template(:src="'/uber-light.png'")
        .col.s6.middle-align.padding
          a(href="https://codepen.io/search/pens?q=beercss", target="_self", v-show="data.isDark")
            img.logo-codepen(:src="'/codepen-dark.png'")
          a(href="https://codepen.io/search/pens?q=beercss", target="_self", v-show="!data.isDark")
            img.logo-codepen(:src="'/codepen-light.png'")

  .center-align.padding.yellow4
    div.black-text
      .large-height.no-scroll.middle-align
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
  main.container
    #begin
      .row
        #intro.col.s12
          article.flat.large-padding
            h3 Get started 
            .medium-space
            h5 From CDN
            pre.wrap(style="font-family: courier new")
              | &lt;link href="https://cdn.jsdelivr.net/npm/beercss@2.0.19/dist/cdn/beer.min.css" rel="stylesheet"&gt;
              |
              | &lt;script src="https://cdn.jsdelivr.net/npm/beercss@2.0.19/dist/cdn/beer.min.js" type="text/javascript"&gt;&lt;/script&gt;
              |
              | &lt;script src="https://cdn.jsdelivr.net/npm/material-dynamic-colors@0.0.10/dist/cdn/material-dynamic-colors.min.js" type="text/javascript"&gt;&lt;/script&gt;
            .medium-space
            h5 From NPM
            pre.wrap(style="font-family: courier new")
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
              .row
                .col.s12.m12.l6
                  p
                    b absolute
                    span &nbsp;left, right, top, bottom, front, back, small, medium, large
                  p
                    b badge
                    span &nbsp;left, right, top, bottom, border, circle, square, round, left-round, right-round, top-round, bottom-round
                  p
                    b button or &lt;button&gt;
                    span &nbsp;small, medium, large, extra, none, extend, border, flat, circle, square, round, left-round, right-round, top-round, bottom-round, responsive
                  p
                    b card or &lt;article&gt;
                    span &nbsp;small, medium, large, border, flat, round, left-round, top-round, right-round, bottom-round, no-padding, padding, small-padding, medium-padding, large-padding
                  p
                    b chip
                    span &nbsp;small, medium, large, border, circle, square, round, left-round, right-round, top-round, bottom-round
                  p
                    b col
                    span &nbsp;min, max, s1...s12, m1...m12, l1...l12
                  p
                    b container
                    span &nbsp;min, max
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
                    span &nbsp;fixed
                  p
                    b &lt;h1&gt;...&lt;h6&gt;
                  p
                    b &lt;header&gt;
                    span &nbsp;fixed
                  p
                    b &lt;i&gt;
                    span &nbsp;tiny, small, medium, large, extra
                  p
                    b &lt;img&gt;
                    span &nbsp;tiny, small, medium, large, extra, circle, round, left-round, right-round, top-round, bottom-round, responsive
                .col.s12.m12.l6
                  p
                    b &lt;label&gt;
                    span &nbsp;active, radio, checkbox, switch
                  p
                    b loader
                    span &nbsp;small, medium, large
                  p
                    b menu
                    span &nbsp;left, right, top, bottom, left-align, right-align, center-align, top-align, bottom-align, middle-align, flat, border, round, left-round, right-round, top-round, bottom-round, no-space, small-space, medium-space, large-space, no-margin, small-margin, medium-margin, large-margin
                  p
                    b modal
                    span &nbsp;left, right, top, bottom, small, medium, large, border, round, flat, left-round, right-round, top-round, bottom-round, active
                  p
                    b &lt;nav&gt;
                    span &nbsp;left-align, right-align, center-align, top-align, bottom-align, middle-align, wrap, no-wrap
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
                    span &nbsp;no-wrap, no-space, space, small-space, medium-space, large-space, min, max
                  p
                    b &lt;summary&gt;
                  p
                    b &lt;table&gt;
                    span &nbsp;left-align, right-align, center-align, no-space, space, small-space, medium-space, large-space, min, max, border
                  p
                    b tabs
                    span &nbsp;left-align, right-align, center-align
                  p
                    b toast
                    span &nbsp;top, bottom, active
                  p
                    b tooltip
                    span &nbsp;left, right, top, bottom
                  p
                    b &lt;video&gt;
                    span &nbsp;tiny, small, medium, large, extra, circle, round, left-round, right-round, top-round, bottom-round, responsive
              .medium-space
            nav.wrap
              a.button(href="https://github.com/beercss/beercss/blob/main/docs/INDEX.md") Documentation
              a.button(href="https://codepen.io/collection/XydYMB") Codepen
          .large-space
          .large-space
        .col.s12
          badges
        .col.s12
          buttons
        .col.s12
          cards
        .col.s12
          checkboxes
        .col.s12
          chips
        .col.s12
          colors
        .col.s12
          containers
        .col.s12
          dropdowns
        .col.s12
          expansions
        .col.s12
          icons  
        .col.s12
          inputs
        .col.s12
          layouts
        .col.s12
          loaders
        .col.s12
          media
        .col.s12
          modals
        .col.s12
          navs
        .col.s12
          pages
        .col.s12
          progress1
        .col.s12
          radios
        .col.s12
          responsive
        .col.s12
          rows
        .col.s12
          selects
        .col.s12
          switches
        .col.s12
          tables
        .col.s12
          tabs
        .col.s12
          textareas
        .col.s12.l6
          toasts
        .col.s12.l6
          tooltips
        .col.s12
          typography
        .col.s12
          .large-space
          div
            h4.center-align Cheers 🍻
            .large-space
            .row
              .col.s6.m4.l3.center-align
                a(href="https://www.myrp.com.br", target="_self")
                  img.white.extra.border.circle(:src="'/myrp.png'")
                p Myrp
              .col.s6.m4.l3.center-align
                a(href="https://www.inventti.com.br", target="_self")
                  img.white.extra.border.circle(:src="'/inventti.jpg'")
                p Inventti
              .col.s6.m4.l3.center-align
                a
                  img.white.extra.border.circle(:src="'/beer-and-woman.jpg'")
                p Sponsor 3
              .col.s6.m4.l3.center-align
                a
                  img.white.extra.border.circle(:src="'/beer-and-woman.jpg'")
                p Sponsor 4
              .col.s6.m4.l3.center-align
                a
                  img.white.extra.border.circle(:src="'/beer-and-woman.jpg'")
                p Sponsor 5
              .col.s6.m4.l3.center-align
                a
                  img.white.extra.border.circle(:src="'/beer-and-woman.jpg'")
                p Sponsor 6
              .col.s6.m4.l3.center-align
                a
                  img.white.extra.border.circle(:src="'/beer-and-woman.jpg'")
                p Sponsor 7
              .col.s6.m4.l3.center-align
                a
                  img.white.extra.border.circle(:src="'/beer-and-woman.jpg'")
                p Sponsor 8
            .large-space
            nav.wrap.center-align
              a.chip Leonardo Rafael Wehrmeister
              a.chip Everton Alcides Buzzi
              a.chip Sponsor 11
              a.chip Sponsor 12
              a.chip Sponsor 13
              a.chip Sponsor 14
              a.chip Sponsor 15
              a.chip Sponsor 16
              a.chip Sponsor 17
              a.chip Sponsor 18
              a.chip Sponsor 19
              a.chip Sponsor 20
              a.chip Sponsor 21
              a.chip Sponsor 22
              a.chip Sponsor 23
              a.chip Sponsor 24
          .large-space
          div
            h4.center-align Support us
            nav.center-align.wrap
              a(href="https://www.patreon.com/beercss" target="_self")
                img.logo-support(:src="'/patreon.png'")
              a(href="https://www.opencollective.com/beercss" target="_self")
                img.logo-support(:src="'/open-collective.png'")

      #modal-samples.modal.right.large
        header.fixed.front
          nav
            a(data-ui="#modal-samples")
              i arrow_backward
              h5.small-margin Back
            a.button.border(v-show="data.urlSample", :href="data.urlSample", target="_blank") Documentation
        article.border(v-for="exemplo in data.samples")
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
import badges from "./badges.vue";
import buttons from "./buttons.vue";
import cards from "./cards.vue";
import checkboxes from "./checkboxes.vue";
import chips from "./chips.vue";
import colors from "./colors.vue";
import containers from "./containers.vue";
import dropdowns from "./dropdowns.vue";
import expansions from "./expansions.vue";
import icons from "./icons.vue";
import inputs from "./inputs.vue";
import layouts from "./layouts.vue";
import loaders from "./loaders.vue";
import media from "./media.vue";
import modals from "./modals.vue";
import navs from "./navs.vue";
import pages from "./pages.vue";
import progress1 from "./progress.vue";
import radios from "./radios.vue";
import responsive from "./responsive.vue";
import rows from "./rows.vue";
import selects from "./selects.vue";
import switches from "./switches.vue";
import tables from "./tables.vue";
import tabs from "./tabs.vue";
import textareas from "./textareas.vue";
import toasts from "./toasts.vue";
import tooltips from "./tooltips.vue";
import typography from "./typography.vue";

onMounted(() => {
  sharedDomain.initTheme(data.value);
  domain.resetTheme();
  domain.badgeSamples();
  domain.chipSamples();
  domain.inputSamples();
  domain.listSamples();
  domain.tableSamples();
  domain.tabSamples();
  domain.selectSamples();
  domain.rowSamples();
  domain.textareaSamples();
  domain.layoutSamples();
  domain.toastSamples();
  domain.progressSamples();
  domain.appBarSamples();
  ui();

  setTimeout(() => {
    $("#logo").addClass("active");
  }, 1000);
});
</script>

<style>
#logo {
  display: none;
  max-width: 100%;
  width: 512rem;
}

#logo.active {
  display: inline-block;
  animation: 1s logo-intro;
}

#container-logo {
  height: 256rem;
}

pre {
  overflow: auto;
  padding: 8rem;
  margin: 0;
}

pre * {
  vertical-align: text-bottom;
}

.hljs-string, .error-text {
  color: var(--error) !important;
}

#rows .row {
  border: 1rem solid var(--outline);
}

#rows .col {
  border: 1rem solid var(--outline);
}

#modal-colors .col > div {
  padding: 12rem;
}

#modal-colors .col > .border {
  border: 1px solid var(--outline);
}

.logo-template {
  width: auto;
  height: 24rem;
}

.logo-codepen {
  width: auto;
  height: 20rem;
}

.logo-support {
  width: auto;
  height: 100rem;
}

pre.wrap {
  white-space: pre-wrap;
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

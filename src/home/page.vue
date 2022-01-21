<template lang="pug">
div
  .menu.left.m.l
    img.circle.small-margin(:src="'/favicon.png'", @click="addHomeScreen()")
    a(@click="updateMenu('.menu.m.l', 'top')")
      i arrow_upward
      div Top
    a(@click="updateMenu('.menu.m.l', 'bottom')")
      i arrow_downward
      div Bottom
    a(@click="updateMenu('.menu.m.l', 'left')")
      i arrow_back
      div Left
    a(@click="updateMenu('.menu.m.l', 'right')")
      i arrow_forward
      div Right
    a(@click="updateIcons()")
      i image
      div Icons
    a(@click="updateMode()")
      i light_mode
      div Light/Dark
    a(data-ui="#themes1")
      i palette
      div Themes
    a(data-ui="#more1")
      i collections
      div Templates
    a(@click="showSamples('.menu.m.l')")
      i code
      div Code
    themes(id="themes1", v-model="$data")
    #more1.modal.left(data-ui="#more1")
      h5 Templates
      p This templates are only for tests purpose
      .space
      a.wrap.padding(href="/youtube", v-show="isDark")
        img.logo-template(:src="'/youtube-dark.png'")
      a.wrap.padding(href="/youtube", v-show="!isDark")
        img.logo-template(:src="'/youtube-light.png'")
      a.wrap.padding(href="/netflix")
        img.logo-template(:src="'/netflix.png'")
      a.wrap.padding(href="/gmail", v-show="isDark")
        img.logo-template(:src="'/gmail-dark.png'")
      a.wrap.padding(href="/gmail", v-show="!isDark")
        img.logo-template(:src="'/gmail-light.png'")
      a.wrap.padding(href="/uber", v-show="isDark")
        img.logo-template(:src="'/uber-dark.png'")
      a.wrap.padding(href="/uber", v-show="!isDark")
        img.logo-template(:src="'/uber-light.png'")
      a.wrap.padding(href="https://codepen.io/search/pens?q=beercss", target="_self", v-show="isDark")
        img.logo-codepen(:src="'/codepen-dark.png'")
      a.wrap.padding(href="https://codepen.io/search/pens?q=beercss", target="_self", v-show="!isDark")
        img.logo-codepen(:src="'/codepen-light.png'")

  .menu.bottom.s
    a(@click="updateIcons()")
      i image
      div Icons
    a(data-ui="#themes2")
      i brightness_medium
      div Themes
    a(data-ui="#more2")
      i collections
      div Templates
    a(@click="showSamples('.menu.s')")
      i code
      div Code
    themes(id="themes2", v-model="$data")
    #more2.modal.bottom.medium(data-ui="#more2")
      h5 Templates
      p This templates are only for tests purpose
      .space
      .row
        .col.s6.middle-align.padding
          a(href="/youtube", v-show="isDark")
            img.logo-template(:src="'/youtube-dark.png'")
          a(href="/youtube", v-show="!isDark")
            img.logo-template(:src="'/youtube-light.png'")
        .col.s6.middle-align.padding
          a(href="/netflix")
            img.logo-template(:src="'/netflix.png'")
        .col.s6.middle-align.padding
          a(href="/gmail", v-show="isDark")
            img.logo-template(:src="'/gmail-dark.png'")
          a(href="/gmail", v-show="!isDark")
            img.logo-template(:src="'/gmail-light.png'")
        .col.s6.middle-align.padding
          a(href="/uber", v-show="isDark")
            img.logo-template(:src="'/uber-dark.png'")
          a(href="/uber", v-show="!isDark")
            img.logo-template(:src="'/uber-light.png'")
        .col.s6.middle-align.padding
          a(href="https://codepen.io/search/pens?q=beercss", target="_self", v-show="isDark")
            img.logo-codepen(:src="'/codepen-dark.png'")
          a(href="https://codepen.io/search/pens?q=beercss", target="_self", v-show="!isDark")
            img.logo-codepen(:src="'/codepen-light.png'")

  .center-align.padding.yellow4
    div.black-text
      .large-height.no-scroll.middle-align
        img#logo(:src="'/logo.png'", @click="addHomeScreen()")
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
  .container
    #begin
      .row
        #intro.col.s12
          article.border.round.large-padding
            .medium-space
            .row
              .col.s12.m12.l6.center-align
                h3 Beercss 
                h5 Hope you enjoy it!
                h1 🍻
              .col.s12.m12.l6
                b.large-text A framework out of the box.&nbsp;
                span.large-text This is a tech page and do not need to be a beautiful page. This page needs to be useful. We believe that this framework can be very useful for the community. This framework is calling for people that say things like:
                .space
                .large-text - Yes they have a beer!
                .large-text - Only one page?
                .large-text - There is no documentation?
                .large-text - When I click on "<>" it shows the code for me?
                .large-text - How do they that with only 10kb?
                .large-text - I do not need an ecosystem to run this?
                .large-text - Wow, I did my work in record time!
            .medium-space
          .large-space
          .large-space
        #badges.col.s12
          h4
            span Badges
            a.chip.circle(@click="showSamples('#badges nav > a')")
              i code
          nav.wrap
            label.radio
              input#default-badges(
                type="radio",
                name="color-badges",
                checked="checked"
              )
              span default
            label.radio
              input#blue-badges(type="radio", name="color-badges")
              span blue
            label.radio
              input#purple-badges(type="radio", name="color-badges")
              span purple
            label.radio
              input#teal-badges(type="radio", name="color-badges")
              span teal
          .space
          .row
            .col.s12.m6
              .space
              nav.wrap
                a
                  span.badge New
                  i search
                a
                  span.badge.round New
                  i notifications
                a
                  span.badge.circle 10
                  i apps
                a
                  span.badge.square 10
                  i search
                a
                  span.badge.top New
                  i notifications
                a
                  span.badge.round.top New
                  i apps
                a
                  span.badge.circle.top 10
                  i search
                a
                  span.badge.square.top 10
                  i notifications
                a
                  span.badge.left.top New
                  i apps
                a
                  span.badge.round.left.top New
                  i search
                a
                  span.badge.circle.left.top 10
                  i notifications
                a
                  span.badge.square.left.top 10
                  i apps
                a
                  span.badge.bottom.right New
                  i search
                a
                  span.badge.round.bottom.right New
                  i notifications
                a
                  span.badge.circle.bottom.right 10
                  i apps
                a
                  span.badge.square.bottom.right 10
                  i search
                a
                  span.badge.bottom New
                  i notifications
                a
                  span.badge.round.bottom New
                  i apps
                a
                  span.badge.circle.bottom 10
                  i search
                a
                  span.badge.square.bottom 10
                  i notifications
                a
                  span.badge.left.bottom New
                  i apps
                a
                  span.badge.round.left.bottom New
                  i search
                a
                  span.badge.circle.left.bottom 10
                  i notifications
                a
                  span.badge.square.left.bottom 10
                  i apps
            .col.s12.m6
              .space
              nav.wrap
                a
                  span.badge.border New
                  i help_outline
                a
                  span.badge.border.round New
                  i home
                a
                  span.badge.circle.border 10
                  i account_circle
                a
                  span.badge.square.border 10
                  i help_outline
                a
                  span.badge.border.top New
                  i home
                a
                  span.badge.border.round.top New
                  i account_circle
                a
                  span.badge.circle.border.top 10
                  i help_outline
                a
                  span.badge.square.border.top 10
                  i home
                a
                  span.badge.border.left.top New
                  i account_circle
                a
                  span.badge.border.round.left.top New
                  i help_outline
                a
                  span.badge.circle.border.left.top 10
                  i home
                a
                  span.badge.square.border.left.top 10
                  i account_circle
                a
                  span.badge.border.bottom.right New
                  i help_outline
                a
                  span.badge.border.round.bottom.right New
                  i home
                a
                  span.badge.circle.border.bottom.right 10
                  i account_circle
                a
                  span.badge.square.border.bottom.right 10
                  i help_outline
                a
                  span.badge.border.bottom New
                  i home
                a
                  span.badge.border.round.bottom New
                  i account_circle
                a
                  span.badge.circle.border.bottom 10
                  i help_outline
                a
                  span.badge.square.border.bottom 10
                  i home
                a
                  span.badge.border.left.bottom New
                  i account_circlec
                a
                  span.badge.border.round.left.bottom New
                  i help_outline
                a
                  span.badge.circle.border.left.bottom 10
                  i home
                a
                  span.badge.square.border.left.bottom 10
                  i account_circle
          .small-space
        #buttons.col.s12
          .large-space
          h4
            span Buttons
            a.chip.circle(@click="showSamples('#buttons button')")
              i code
          .medium-space
          h6
            span FABs
            a.chip.circle(@click="showSamples('#fabs button')")
              i code
          selectionForButtons(context="fabs", selectedSize="extra")
          #fabs
            nav.wrap
              button.square
                i add
              button.diamond
                i add
              button.square.round
                i add
              button.diamond.round
                i add
              button.circle
                i add
              button.circle.left-round.top-round
                i add
              button.circle.left-round.bottom-round
                i add
              button.circle.right-round.top-round
                i add
              button.circle.right-round.bottom-round
                i add
              button.circle.left-round
                i add
              button.circle.right-round
                i add
            nav.wrap
              button.flat.square
                i add
              button.flat.diamond
                i add
              button.flat.square.round
                i add
              button.flat.diamond.round
                i add
              button.flat.circle
                i add
              button.flat.circle.left-round.top-round
                i add
              button.flat.circle.left-round.bottom-round
                i add
              button.flat.circle.right-round.top-round
                i add
              button.flat.circle.right-round.bottom-round
                i add
              button.flat.circle.left-round
                i add
              button.flat.circle.right-round
                i add
            nav.wrap
              button.border.square
                i add
              button.border.diamond
                i add
              button.border.square.round
                i add
              button.border.diamond.round
                i add
              button.border.circle
                i add
              button.border.circle.left-round.top-round
                i add
              button.border.circle.left-round.bottom-round
                i add
              button.border.circle.right-round.top-round
                i add
              button.border.circle.right-round.bottom-round
                i add
              button.border.circle.left-round
                i add
              button.border.circle.right-round
                i add
            nav.wrap
              button.border.square
                img.responsive(:src="'/favicon.png'")
              button.border.square.round
                img.responsive(:src="'/favicon.png'")
              button.border.circle
                img.responsive(:src="'/favicon.png'")
              button.border.circle.left-round.top-round
                img.responsive(:src="'/favicon.png'")
              button.border.circle.left-round.bottom-round
                img.responsive(:src="'/favicon.png'")
              button.border.circle.right-round.top-round
                img.responsive(:src="'/favicon.png'")
              button.border.circle.right-round.bottom-round
                img.responsive(:src="'/favicon.png'")
              button.border.circle.left-round
                img.responsive(:src="'/favicon.png'")
              button.border.circle.right-round
                img.responsive(:src="'/favicon.png'")
          .medium-space
          h6
            span Extended FABs
            a.chip.circle(@click="showSamples('#extended-fabs button')")
              i code
          selectionForButtons(context="extended-fabs", :sizes="['extra']", selectedSize="extra")
          #extended-fabs.row
            .col.s6.m6.l3
              nav
                button.extend.square
                  i add
                  span Button
              nav
                button.extend.square.round
                  i add
                  span Button
              nav
                button.extend.circle
                  i add
                  span Button
              nav
                button.extend.circle.left-round.top-round
                  i add
                  span Button
              nav
                button.extend.circle.left-round.bottom-round
                  i add
                  span Button
              nav
                button.extend.circle.right-round.top-round
                  i add
                  span Button
              nav
                button.extend.circle.right-round.bottom-round
                  i add
                  span Button
              nav
                button.extend.circle.left-round
                  i add
                  span Button
              nav
                button.extend.circle.right-round
                  i add
                  span Button
            .col.s6.m6.l3
              nav
                button.extend.flat.square
                  i add
                  span Button
              nav
                button.extend.flat.square.round
                  i add
                  span Button
              nav
                button.extend.flat.circle
                  i add
                  span Button
              nav
                button.extend.flat.circle.left-round.top-round
                  i add
                  span Button
              nav
                button.extend.flat.circle.left-round.bottom-round
                  i add
                  span Button
              nav
                button.extend.flat.circle.right-round.top-round
                  i add
                  span Button
              nav
                button.extend.flat.circle.right-round.bottom-round
                  i add
                  span Button
              nav
                button.extend.flat.circle.left-round
                  i add
                  span Button
              nav
                button.extend.flat.circle.right-round
                  i add
                  span Button
            .col.s6.m6.l3
              nav
                button.extend.border.square
                  i add
                  span Button
              nav
                button.extend.border.square.round
                  i add
                  span Button
              nav
                button.extend.border.circle
                  i add
                  span Button
              nav
                button.extend.border.circle.left-round.top-round
                  i add
                  span Button
              nav
                button.extend.border.circle.left-round.bottom-round
                  i add
                  span Button
              nav
                button.extend.border.circle.right-round.top-round
                  i add
                  span Button
              nav
                button.extend.border.circle.right-round.bottom-round
                  i add
                  span Button
              nav
                button.extend.border.circle.left-round
                  i add
                  span Button
              nav
                button.extend.border.circle.right-round
                  i add
                  span Button
            .col.s6.m6.l3
              nav
                button.extend.border.square
                  img.responsive(:src="'/favicon.png'")
                  span Button
              nav
                button.extend.border.square.round
                  img.responsive(:src="'/favicon.png'")
                  span Button
              nav
                button.extend.border.circle
                  img.responsive(:src="'/favicon.png'")
                  span Button
              nav
                button.extend.border.circle.left-round.top-round
                  img.responsive(:src="'/favicon.png'")
                  span Button
              nav
                button.extend.border.circle.left-round.bottom-round
                  img.responsive(:src="'/favicon.png'")
                  span Button
              nav
                button.extend.border.circle.right-round.top-round
                  img.responsive(:src="'/favicon.png'")
                  span Button
              nav
                button.extend.border.circle.right-round.bottom-round
                  img.responsive(:src="'/favicon.png'")
                  span Button
              nav
                button.extend.border.circle.left-round
                  img.responsive(:src="'/favicon.png'")
                  span Button
              nav
                button.extend.border.circle.right-round
                  img.responsive(:src="'/favicon.png'")
                  span Button
          .medium-space
          h6
            span Buttons
            a.chip.circle(@click="showSamples('#default-buttons button')")
              i code
          selectionForButtons(context="default-buttons")
          #default-buttons
            nav.wrap
              button Button
              button
                i home
                span Button
              button
                img(:src="'/favicon.png'")
                span Button
              button
                img.responsive(:src="'/favicon.png'")
                span Button
            nav.wrap
              button.round Button
              button.round
                i home
                span Button
              button.round
                img(:src="'/favicon.png'")
                span Button
              button.round
                img.responsive(:src="'/favicon.png'")
                span Button
            nav.wrap
              button.flat Button
              button.flat
                i home
                span Button
              button.flat
                img(:src="'/favicon.png'")
                span Button
              button.flat
                img.responsive(:src="'/favicon.png'")
                span Button
            nav.wrap
              button.flat.round Button
              button.flat.round
                i home
                span Button
              button.flat.round
                img(:src="'/favicon.png'")
                span Button
              button.flat.round
                img.responsive(:src="'/favicon.png'")
                span Button
            nav.wrap
              button.border Button
              button.border
                i home
                span Button
              button.border
                img(:src="'/favicon.png'")
                span Button
              button.border
                img.responsive(:src="'/favicon.png'")
                span Button
            nav.wrap
              button.border.round Button
              button.border.round
                i home
                span Button
              button.border.round
                img(:src="'/favicon.png'")
                span Button
              button.border.round
                img.responsive(:src="'/favicon.png'")
                span Button
            nav.wrap
              button.border.left-round.top-round Button
              button.border.left-round.bottom-round
                i home
                span Button
              button.border.right-round.top-round
                img(:src="'/favicon.png'")
                span Button
              button.border.right-round.bottom-round
                img.responsive(:src="'/favicon.png'")
                span Button
            nav.wrap
              button.border.left-round Button
              button.border.left-round
                i home
                span Button
              button.border.left-round
                img(:src="'/favicon.png'")
                span Button
              button.border.left-round
                img.responsive(:src="'/favicon.png'")
                span Button
            nav.wrap
              button.border.right-round Button
              button.border.right-round
                i home
                span Button
              button.border.right-round
                img(:src="'/favicon.png'")
                span Button
              button.border.right-round
                img.responsive(:src="'/favicon.png'")
                span Button
          .medium-space
          h6
            span Responsive buttons
            a.chip.circle(@click="showSamples('#responsive-buttons button')")
              i code
          selectionForButtons(context="responsive-buttons")
          #responsive-buttons.row
            .col.s12.m6
              nav 
                button.responsive Button
              nav
                button.responsive
                  i home
                  span Button
              nav
                button.responsive
                  img(:src="'/favicon.png'")
                  span Button
            .col.s12.m6
              nav 
                button.responsive.round Button
              nav
                button.responsive.round
                  i home
                  span Button
              nav
                button.responsive.round
                  img(:src="'/favicon.png'")
                  span Button
            .col.s12.m6
              nav 
                button.responsive.flat Button
              nav
                button.responsive.flat
                  i home
                  span Button
              nav
                button.responsive.flat
                  img(:src="'/favicon.png'")
                  span Button
            .col.s12.m6
              nav 
                button.responsive.flat.round Button
              nav
                button.responsive.flat.round
                  i home
                  span Button
              nav
                button.responsive.flat.round
                  img(:src="'/favicon.png'")
                  span Button
            .col.s12.m6
              nav 
                button.responsive.border Button
              nav
                button.responsive.border
                  i home
                  span Button
              nav
                button.responsive.border
                  img(:src="'/favicon.png'")
                  span Button
            .col.s12.m6
              nav 
                button.responsive.border.round Button
              nav
                button.responsive.border.round
                  i home
                  span Button
              nav
                button.responsive.border.round
                  img(:src="'/favicon.png'")
                  span Button
            .col.s12.m6
              nav 
                button.responsive.border.left-round Button
              nav
                button.responsive.border.left-round
                  i home
                  span Button
              nav
                button.responsive.border.left-round
                  img(:src="'/favicon.png'")
                  span Button
            .col.s12.m6
              nav 
                button.responsive.border.right-round Button
              nav
                button.responsive.border.right-round
                  i home
                  span Button
              nav
                button.responsive.border.right-round
                  img(:src="'/favicon.png'")
                  span Button
        #cards.col.s12
          .large-space
          h4
            span Cards
            a.chip.circle(@click="showSamples('#cards article:visible')")
              i code
          nav.wrap.m.l
            label.radio
              input(
                v-model="mediaCard",
                value="1",
                type="radio",
                name="media-cards"
              )
              span images
            label.radio
              input(
                v-model="mediaCard",
                value="2",
                type="radio",
                name="media-cards"
              )
              span videos
          .row(v-if="mediaCard == 1")
            .col.s12.m4.l2
              article.left-round
                h5 Title
                div Complementary text
            .col.s12.m4.l2
              article.top-round
                h5 Title
                div Complementary text
            .col.s12.m4.l2
              article.right-round
                h5 Title
                div Complementary text
            .col.s12.m4.l2
              article.bottom-round
                h5 Title
                div Complementary text
            .col.s12.m4.l2
              article.top-round.left-round
                h5 Title
                div Complementary text
            .col.s12.m4.l2
              article.bottom-round.right-round
                h5 Title
                div Complementary text
            .col.s12.m6.l3
              article
                .row.no-wrap
                  .col.min
                    img.circle.large(:src="'/beer-and-woman.jpg'")
                  .col
                    h5.no-margin Title
                    div Complementary text
                nav
                  button.none Button
            .col.s12.m6.l3
              article.round
                .row.no-wrap
                  .col.min
                    img.circle.large(:src="'/beer-and-woman.jpg'")
                  .col
                    h5.no-margin Title
                    div Complementary text
                nav
                  button.none Button
            .col.s12.m6.l3
              article.border
                .row.no-wrap
                  .col.min
                    img.circle.large(:src="'/beer-and-woman.jpg'")
                  .col
                    h5.no-margin Title
                    div Complementary text
                nav
                  button.none Button
            .col.s12.m6.l3
              article.border.round
                .row.no-wrap
                  .col.min
                    img.circle.large(:src="'/beer-and-woman.jpg'")
                  .col
                    h5.no-margin Title
                    div Complementary text
                nav
                  button.none Button
            .col.s12.m6.l3
              article.no-padding
                img.responsive.small(:src="'/beer-and-woman.jpg'")
                .padding
                  h5.no-margin Title
                  div Complementary text
                  nav
                    button.none Button
            .col.s12.m6.l3
              article.no-padding.round
                img.responsive.small.top-round(:src="'/beer-and-woman.jpg'")
                .padding
                  h5.no-margin Title
                  div Complementary text
                  nav
                    button.none Button
            .col.s12.m6.l3
              article.no-padding.border
                img.responsive.small(:src="'/beer-and-woman.jpg'")
                .padding
                  h5.no-margin Title
                  div Complementary text
                  nav
                    button.none Button
            .col.s12.m6.l3
              article.no-padding.border.round
                img.responsive.small.top-round(:src="'/beer-and-woman.jpg'")
                .padding
                  h5.no-margin Title
                  div Complementary text
                  nav
                    button.none Button
            .col.s12.m6.l3
              article.no-padding
                img.responsive.medium(:src="'/beer-and-woman.jpg'")
                .absolute.bottom.left.right.padding.bottom-shadow.white-text
                  h5.no-margin Title
                  div Complementary text
                  nav
                    button.border.small Button
            .col.s12.m6.l3
              article.no-padding.round
                img.responsive.medium(:src="'/beer-and-woman.jpg'")
                .absolute.bottom.left.right.padding.bottom-shadow.white-text
                  h5.no-margin Title
                  div Complementary text
                  nav
                    button.border.small Button
            .col.s12.m6.l3
              article.no-padding.border
                img.responsive.medium(:src="'/beer-and-woman.jpg'")
                .absolute.bottom.left.right.padding.bottom-shadow.white-text
                  h5.no-margin Title
                  div Complementary text
                  nav
                    button.border.small Button
            .col.s12.m6.l3
              article.no-padding.border.round
                img.responsive.medium(:src="'/beer-and-woman.jpg'")
                .absolute.bottom.left.right.padding.bottom-shadow.white-text
                  h5.no-margin Title
                  div Complementary text
                  nav
                    button.border.small Button
            .col.s12.l6
              article.no-padding
                .row.no-wrap.no-space
                  .col
                    img.responsive(:src="'/beer-and-woman.jpg'")
                  .col
                    .padding
                      h5 Title
                      div Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      nav
                        button.border Button
            .col.s12.l6
              article.no-padding
                .row.no-wrap.no-space
                  .col
                    img.responsive(:src="'/beer-and-woman.jpg'")
                    .absolute.top.left.right.padding.top-shadow.white-text
                      h5.no-margin Title
                      div Complementary text
                  .col
                    .padding
                      h5 Title
                      div Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      nav
                        button.border Button
          .row(v-if="mediaCard == 2")
            .col.s12.m4.l2
              article.left-round
                h5 Title
                div Complementary text
            .col.s12.m4.l2
              article.top-round
                h5 Title
                div Complementary text
            .col.s12.m4.l2
              article.right-round
                h5 Title
                div Complementary text
            .col.s12.m4.l2
              article.bottom-round
                h5 Title
                div Complementary text
            .col.s12.m4.l2
              article.top-round.left-round
                h5 Title
                div Complementary text
            .col.s12.m4.l2
              article.bottom-round.right-round
                h5 Title
                div Complementary text
            .col.s12.m6.l3
              article
                .row.no-wrap
                  .col.min
                    video.circle.large(autoplay, loop, muted, playsinline)
                      source(:src="'/dance.mp4'", type="video/mp4")
                  .col
                    h5.no-margin Title
                    div Complementary text
                nav
                  button.none Button
            .col.s12.m6.l3
              article.round
                .row.no-wrap
                  .col.min
                    video.circle.large(autoplay, loop, muted, playsinline)
                      source(:src="'/dance.mp4'", type="video/mp4")
                  .col
                    h5.no-margin Title
                    div Complementary text
                nav
                  button.none Button
            .col.s12.m6.l3
              article.border
                .row.no-wrap
                  .col.min
                    video.circle.large(autoplay, loop, muted, playsinline)
                      source(:src="'/dance.mp4'", type="video/mp4")
                  .col
                    h5.no-margin Title
                    div Complementary text
                nav
                  button.none Button
            .col.s12.m6.l3
              article.border.round
                .row.no-wrap
                  .col.min
                    video.circle.large(autoplay, loop, muted, playsinline)
                      source(:src="'/dance.mp4'", type="video/mp4")
                  .col
                    h5.no-margin Title
                    div Complementary text
                nav
                  button.none Button
            .col.s12.m6.l3
              article.no-padding
                video.responsive.small(autoplay, loop, muted, playsinline)
                  source(:src="'/dance.mp4'", type="video/mp4")
                .padding
                  h5.no-margin Title
                  div Complementary text
                  nav
                    button.none Button
            .col.s12.m6.l3
              article.no-padding.round
                video.responsive.small.top-round(
                  autoplay,
                  loop,
                  muted,
                  playsinline
                )
                  source(:src="'/dance.mp4'", type="video/mp4")
                .padding
                  h5.no-margin Title
                  div Complementary text
                  nav
                    button.none Button
            .col.s12.m6.l3
              article.no-padding.border
                video.responsive.small(autoplay, loop, muted, playsinline)
                  source(:src="'/dance.mp4'", type="video/mp4")
                .padding
                  h5.no-margin Title
                  div Complementary text
                  nav
                    button.none Button
            .col.s12.m6.l3
              article.no-padding.border.round
                video.responsive.small.top-round(
                  autoplay,
                  loop,
                  muted,
                  playsinline
                )
                  source(:src="'/dance.mp4'", type="video/mp4")
                .padding
                  h5.no-margin Title
                  div Complementary text
                  nav
                    button.none Button
            .col.s12.m6.l3
              article.no-padding
                video.responsive.medium(autoplay, loop, muted, playsinline)
                  source(:src="'/dance.mp4'", type="video/mp4")
                .absolute.bottom.left.right.padding.bottom-shadow.white-text
                  h5.no-margin Title
                  div Complementary text
                  nav
                    button.border.small Button
            .col.s12.m6.l3
              article.no-padding.round
                video.responsive.medium(autoplay, loop, muted, playsinline)
                  source(:src="'/dance.mp4'", type="video/mp4")
                .absolute.bottom.left.right.padding.bottom-shadow.white-text
                  h5.no-margin Title
                  div Complementary text
                  nav
                    button.border.small Button
            .col.s12.m6.l3
              article.no-padding.border
                video.responsive.medium(autoplay, loop, muted, playsinline)
                  source(:src="'/dance.mp4'", type="video/mp4")
                .absolute.bottom.left.right.padding.bottom-shadow.white-text
                  h5.no-margin Title
                  div Complementary text
                  nav
                    button.border.small Button
            .col.s12.m6.l3
              article.no-padding.border.round
                video.responsive.medium(autoplay, loop, muted, playsinline)
                  source(:src="'/dance.mp4'", type="video/mp4")
                .absolute.bottom.left.right.padding.bottom-shadow.white-text
                  h5.no-margin Title
                  div Complementary text
                  nav
                    button.border.small Button
            .col.s12.l6
              article.no-padding
                .row.no-wrap.no-space
                  .col
                    video.responsive(autoplay, loop, muted, playsinline)
                      source(:src="'/dance.mp4'", type="video/mp4")
                  .col
                    .padding
                      h5 Title
                      div Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      nav
                        button.border Button
            .col.s12.l6
              article.no-padding
                .row.no-wrap.no-space
                  .col
                    video.responsive(autoplay, loop, muted, playsinline)
                      source(:src="'/dance.mp4'", type="video/mp4")
                    .absolute.top.left.right.padding.top-shadow.white-text
                      h5.no-margin Title
                      div Complementary text
                  .col
                    .padding
                      h5 Title
                      div Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      nav
                        button.border Button
        #checkboxes.col.s12
          .large-space
          h4
            span Checkboxes
            a.chip.circle(@click="showSamples('#checkboxes .field')")
              i code
          .row
            .col.s12
              .field.middle-align
                nav.wrap
                  label.checkbox
                    input(type="checkbox")
                    span Enabled
                  label.checkbox
                    input(type="checkbox", checked)
                    span Enabled
                  label.checkbox
                    input(type="checkbox", disabled)
                    span Disabled
                  label.checkbox
                    input(type="checkbox", checked, disabled)
                    span Disabled
            .col.s12
              .field.label.middle-align
                label.active A question?
                nav
                  label.checkbox
                    input(type="checkbox")
                    span Item 1
                  label.checkbox
                    input(type="checkbox")
                    span Item 2
                  label.checkbox
                    input(type="checkbox")
                    span Item 3
            .col.s12
              .field.label.middle-align
                label.active A question?
                nav
                  label.checkbox
                    input(type="checkbox")
                    span Item 1
                  label.checkbox
                    input(type="checkbox")
                    span Item 2
                  label.checkbox
                    input(type="checkbox")
                    span Item 3
                span.helper Complementary text
            .col.s12.l6
              .field.label.middle-align.invalid
                label.active A question?
                nav
                  label.checkbox
                    input(type="checkbox")
                    span Item 1
                  label.checkbox
                    input(type="checkbox")
                    span Item 2
                  label.checkbox
                    input(type="checkbox")
                    span Item 3
                span.error Error text
        #chips.col.s12
          .large-space
          h4
            span Chips
            a.chip.circle(@click="showSamples('#chips nav .chip')")
              i code
          nav.wrap
            label.radio
              input#default-chips(
                type="radio",
                name="color-chips",
                checked="checked"
              )
              span default
            label.radio
              input#brown-chips(type="radio", name="color-chips")
              span brown
            label.radio
              input#indigo-chips(type="radio", name="color-chips")
              span indigo
            label.radio
              input#red-chips(type="radio", name="color-chips")
              span red
            label.radio
              input#small-chips(type="radio", name="size-chips")
              span small
            label.radio
              input#medium-chips(
                type="radio",
                name="size-chips",
                checked="checked"
              )
              span medium
            label.radio
              input#large-chips(type="radio", name="size-chips")
              span large
            label.checkbox
              input#active-chips(type="checkbox", name="active-chips")
              span active
          .row
            .col.s12.m12.l6
              nav.wrap
                a.chip Chip
                a.chip
                  i.small done
                  span Chip
                a.chip
                  img(:src="'/favicon.png'")
                  span Chip
                a.chip
                  img.responsive(:src="'/favicon.png'")
                  span Chip
              nav.wrap
                a.chip.round Chip
                a.chip.round
                  i.small done
                  span Chip
                a.chip.round
                  img(:src="'/favicon.png'")
                  span Chip
                a.chip.round
                  img.responsive(:src="'/favicon.png'")
                  span Chip
              nav.wrap
                a.chip.left-round.top-round Chip
                a.chip.left-round.bottom-round
                  i.small done
                  span Chip
                a.chip.right-round.top-round
                  img(:src="'/favicon.png'")
                  span Chip
                a.chip.right-round.bottom-round
                  img.responsive(:src="'/favicon.png'")
                  span Chip
              nav.wrap
                a.chip.left-round Chip
                a.chip.left-round
                  i.small done
                  span Chip
                a.chip.left-round
                  img(:src="'/favicon.png'")
                  span Chip
                a.chip.left-round
                  img.responsive(:src="'/favicon.png'")
                  span Chip
              nav.wrap
                a.chip.right-round Chip
                a.chip.right-round
                  i.small done
                  span Chip
                a.chip.right-round
                  img(:src="'/favicon.png'")
                  span Chip
                a.chip.right-round
                  img.responsive(:src="'/favicon.png'")
                  span Chip
              nav.wrap
                a.chip.square
                  i search
                a.chip.diamond
                  i search
                a.chip.square.round
                  i search
                a.chip.diamond.round
                  i search
                a.chip.circle
                  i search
                a.chip.square.left-round.top-round
                  i search
                a.chip.square.left-round.bottom-round
                  i search
                a.chip.square.right-round.top-round
                  i search
                a.chip.square.right-round.bottom-round
                  i search
                a.chip.square.left-round
                  i search
                a.chip.square.right-round
                  i search
                a.chip.square
                  img.responsive(:src="'/favicon.png'")
                a.chip.square.round
                  img.responsive(:src="'/favicon.png'")
                a.chip.circle
                  img.responsive(:src="'/favicon.png'")
                a.chip.square.left-round.top-round
                  img.responsive(:src="'/favicon.png'")
                a.chip.square.left-round.bottom-round
                  img.responsive(:src="'/favicon.png'")
                a.chip.square.right-round.top-round
                  img.responsive(:src="'/favicon.png'")
                a.chip.square.right-round.bottom-round
                  img.responsive(:src="'/favicon.png'")
                a.chip.square.left-round
                  img.responsive(:src="'/favicon.png'")
                a.chip.square.right-round
                  img.responsive(:src="'/favicon.png'")
            .col.s12.m12.l6
              nav.wrap
                a.chip.border Chip
                a.chip.border
                  i.small done
                  span Chip
                a.chip.border
                  img(:src="'/favicon.png'")
                  span Chip
                a.chip.border
                  img.responsive(:src="'/favicon.png'")
                  span Chip
              nav.wrap
                a.chip.border.round Chip
                a.chip.border.round
                  i.small done
                  span Chip
                a.chip.border.round
                  img(:src="'/favicon.png'")
                  span Chip
                a.chip.border.round
                  img.responsive(:src="'/favicon.png'")
                  span Chip
              nav.wrap
                a.chip.border.left-round.top-round Chip
                a.chip.border.left-round.bottom-round
                  i.small done
                  span Chip
                a.chip.border.right-round.top-round
                  img(:src="'/favicon.png'")
                  span Chip
                a.chip.border.right-round.bottom-round
                  img.responsive(:src="'/favicon.png'")
                  span Chip
              nav.wrap
                a.chip.border.left-round Chip
                a.chip.border.left-round
                  i.small done
                  span Chip
                a.chip.border.left-round
                  img(:src="'/favicon.png'")
                  span Chip
                a.chip.border.left-round
                  img.responsive(:src="'/favicon.png'")
                  span Chip
              nav.wrap
                a.chip.border.right-round Chip
                a.chip.border.right-round
                  i.small done
                  span Chip
                a.chip.border.right-round
                  img(:src="'/favicon.png'")
                  span Chip
                a.chip.border.right-round
                  img.responsive(:src="'/favicon.png'")
                  span Chip
              nav.wrap
                a.chip.border.square
                  i search
                a.chip.border.diamond
                  i search
                a.chip.border.square.round
                  i search
                a.chip.border.diamond.round
                  i search
                a.chip.border.circle
                  i search
                a.chip.border.square.left-round.top-round
                  i search
                a.chip.border.square.left-round.bottom-round
                  i search
                a.chip.border.square.right-round.top-round
                  i search
                a.chip.border.square.right-round.bottom-round
                  i search
                a.chip.border.square.left-round
                  i search
                a.chip.border.square.right-round
                  i search
                a.chip.border.square
                  img.responsive(:src="'/favicon.png'")
                a.chip.border.square.round
                  img.responsive(:src="'/favicon.png'")
                a.chip.border.circle
                  img.responsive(:src="'/favicon.png'")
                a.chip.border.square.left-round.top-round
                  img.responsive(:src="'/favicon.png'")
                a.chip.border.square.left-round.bottom-round
                  img.responsive(:src="'/favicon.png'")
                a.chip.border.square.right-round.top-round
                  img.responsive(:src="'/favicon.png'")
                a.chip.border.square.right-round.bottom-round
                  img.responsive(:src="'/favicon.png'")
                a.chip.border.square.left-round
                  img.responsive(:src="'/favicon.png'")
                a.chip.border.square.right-round
                  img.responsive(:src="'/favicon.png'")
        #colors.col.s12
          .large-space
          h4 
            span Colors
            a.chip.circle(data-ui="#modal-colors")
              i code
          nav
            button(data-ui="#modal-colors") Colors
        #containers.col.s12
          .large-space
          h4
            span Containers
            a.chip.circle(@click="showSamples('#containers .container')")
              i code
          nav
            button(@click="updateContainer()") Default
            button(@click="updateContainer('min')") Min
            button(@click="updateContainer('max')") Max
          div(v-show="false")
            .container
        #dropdowns.col.s12
          .large-space
          h4
            span Dropdowns
            a.chip.circle(
              @click="showSamples('#dropdowns button, #dropdowns .field')"
            )
              i code
          nav.wrap
            button(data-ui="#dropdown1")
              span This is a large button
              i arrow_drop_down
              #dropdown1.dropdown(data-ui="#dropdown1")
                a Title
                a
                  div Title
                  label Complementary text
                a.row.no-wrap.middle-align
                  .col.min
                    i home
                  .col Title
                a.row.no-wrap.middle-align
                  .col.min
                    i home
                  .col
                    div Title
                    label Complementary text
                a.row.no-wrap.middle-align
                  .col.min
                    img.circle.tiny(:src="'/beer-and-woman.jpg'")
                  .col Title
                a.row.no-wrap.middle-align
                  .col.min
                    img.circle.tiny(:src="'/beer-and-woman.jpg'")
                  .col
                    div Title
                    label Complementary text
            button(data-ui="#dropdown2")
              span Button
              i arrow_drop_down
              #dropdown2.dropdown.no-wrap(data-ui="#dropdown2")
                a Title
                a
                  div Title
                  label Complementary text
                a.row.no-wrap.middle-align
                  .col.min
                    i home
                  .col Title
                a.row.no-wrap.middle-align
                  .col.min
                    i home
                  .col
                    div Title
                    label Complementary text
                a.row.no-wrap.middle-align
                  .col.min
                    img.circle.tiny(:src="'/beer-and-woman.jpg'")
                  .col Title
                a.row.no-wrap.middle-align
                  .col.min
                    img.circle.tiny(:src="'/beer-and-woman.jpg'")
                  .col
                    div Title
                    label Complementary text
            button.circle(data-ui="#dropdown3")
              i arrow_back
              #dropdown3.dropdown.left.no-wrap(data-ui="#dropdown3")
                a Title
                a
                  div Title
                  label Complementary text
                a.row.no-wrap.middle-align
                  .col.min
                    i home
                  .col Title
                a.row.no-wrap.middle-align
                  .col.min
                    i home
                  .col
                    div Title
                    label Complementary text
                a.row.no-wrap.middle-align
                  .col.min
                    img.circle.tiny(:src="'/beer-and-woman.jpg'")
                  .col Title
                a.row.no-wrap.middle-align
                  .col.min
                    img.circle.tiny(:src="'/beer-and-woman.jpg'")
                  .col
                    div Title
                    label Complementary text
            button.circle(data-ui="#dropdown4")
              i arrow_forward
              #dropdown4.dropdown.right.no-wrap(data-ui="#dropdown4")
                a Title
                a
                  div Title
                  label Complementary text
                a.row.no-wrap.middle-align
                  .col.min
                    i home
                  .col Title
                a.row.no-wrap.middle-align
                  .col.min
                    i home
                  .col
                    div Title
                    label Complementary text
                a.row.no-wrap.middle-align
                  .col.min
                    img.circle.tiny(:src="'/beer-and-woman.jpg'")
                  .col Title
                a.row.no-wrap.middle-align
                  .col.min
                    img.circle.tiny(:src="'/beer-and-woman.jpg'")
                  .col
                    div Title
                    label Complementary text
            button(data-ui="#dropdown5") 
              span Calendar
              #dropdown5.dropdown.small-padding.no-wrap(data-ui="#dropdown5")
                .row.no-wrap
                  .col.min
                    a
                      i arrow_back
                  .col
                    h6.center-align Month / Year
                  .col.min
                    a
                      i arrow_forward
                table.center-align
                  tbody
                    tr
                      td S
                      td M
                      td T
                      td W
                      td T
                      td F
                      td S
                    tr
                      td
                        a.button.none 1
                      td
                        a.button.none 2
                      td
                        a.button.none 3
                      td
                        a.button.none 4
                      td
                        a.button.none 5
                      td
                        a.button.none 6
                      td
                        a.button.none 7
                    tr
                      td
                        a.button.border.circle.medium.no-margin.absolute.middle.center 8
                      td
                        a.button.none 9
                      td
                        a.button.none 10
                      td
                        a.button.none 11
                      td
                        a.button.none 12
                      td
                        a.button.none 13
                      td
                        a.button.none 14
                    tr
                      td
                        a.button.none 15
                      td
                        a.button.none 16
                      td
                        a.button.circle.medium.no-margin.absolute.middle.center.flat 17
                      td
                        a.button.none 18
                      td
                        a.button.none 19
                      td
                        a.button.none 20
                      td
                        a.button.none 21
                    tr
                      td
                        a.button.none 22
                      td
                        a.button.none 23
                      td
                        a.button.none 24
                      td
                        a.button.none 25
                      td
                        a.button.none 26
                      td
                        a.button.none 27
                      td
                        a.button.none 28
                    tr
                      td
                        a.button.none 29
                      td
                        a.button.none 30
                      td
                        a.button.none 31
                      td 1
                      td 2
                      td 3
                      td 4
            button(data-ui="#dropdown6")
              span Video
              #dropdown6.dropdown.no-padding.small-width(data-ui="#dropdown6") 
                video.responsive(autoplay, loop, muted, playsinline)
                  source(:src="'/dance.mp4'", type="video/mp4")
        #expansions.col.s12
          .large-space
          h4
            span Expansions
            a.chip.circle(@click="showSamples('#expansions details')")
              i code
          details
            summary Title
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          .small-space
          details.card
            summary Title
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          .small-space
          details.card
            summary.none
              .row.no-wrap.middle-align
                .col
                  div Title
                  .small-text Complementary text
                .col.min
                  i more_vert
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          .small-space
          details
            summary.card.border.round.transparent
              .row.no-wrap.middle-align
                .col.min
                  img.circle(:src="'/favicon.png'")
                .col
                  div Title
                  .small-text Complementary text
                .col.min
                  i more_vert
            .card.border.round.transparent Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          
        #icons.col.s12
          .large-space
          h4
            span Icons
            a.chip.circle(@click="showSamples('#icons nav', '#modal-icons')")
              i code
          nav.wrap
            i.small home
            i.small account_circle
            i.small search
            i.small build
            i.small done
            i.small cached
            i.small star_rate
            i.small work
            i.small update
            i.small thumb_up
          nav.wrap
            i home
            i account_circle
            i search
            i build
            i done
            i cached
            i star_rate
            i work
            i update
            i thumb_up
          nav.wrap
            i.large home
            i.large account_circle
            i.large search
            i.large build
            i.large done
            i.large cached
            i.large star_rate
            i.large work
            i.large update
            i.large thumb_up
        #inputs.col.s12
          .large-space
          h4
            span Inputs
            a.chip.circle(@click="showSamples('#inputs .field')")
              i code
          nav.wrap
            label.checkbox
              input#border-inputs(type="checkbox")
              span border
            label.checkbox
              input#round-inputs(type="checkbox")
              span round
            label.checkbox
              input#fill-inputs(type="checkbox")
              span fill
            label.radio
              input#small-inputs(type="radio", name="size-inputs")
              span small
            label.radio
              input#medium-inputs(
                type="radio",
                name="size-inputs",
                checked="checked"
              )
              span medium
            label.radio
              input#large-inputs(type="radio", name="size-inputs")
              span large
            label.radio
              input#extra-inputs(type="radio", name="size-inputs")
              span extra
            label.radio
              input#text-inputs(
                type="radio",
                name="type-inputs",
                checked="checked"
              )
              span text
            label.radio
              input#password-inputs(type="radio", name="type-inputs")
              span password
            label.radio
              input#file-inputs(type="radio", name="type-inputs")
              span file
          .space
          .row
            .col.s12.l4
              .field
                input(type="text")
            .col.s12.l4
              .field
                input(type="text")
                span.helper Complementary text
            .col.s12.l4
              .field.invalid
                input(type="text")
                span.error Error text
            .col.s12.l4
              .field.label
                input(type="text")
                label Label
            .col.s12.l4
              .field.label
                input(type="text")
                label Label
                span.helper Complementary text
            .col.s12.l4
              .field.label.invalid
                input(type="text")
                label Label
                span.error Error text
            .col.s12.l4
              .field.label.prefix
                i search
                input(type="text")
                label Label
            .col.s12.l4
              .field.label.suffix
                input(type="text")
                label Label
                i search
            .col.s12.l4
              .field.label.prefix.suffix
                i search
                input(type="text")
                label Label
                i search
            .col.s12.l4
              .field.label.prefix
                img.circle(:src="'/favicon.png'")
                input(type="text")
                label Label
            .col.s12.l4
              .field.label.suffix
                input(type="text")
                label Label
                img.circle(:src="'/favicon.png'")
            .col.s12.l4
              .field.label.prefix.suffix
                img.circle(:src="'/favicon.png'")
                input(type="text")
                label Label
                img.circle(:src="'/favicon.png'")
        #layouts.col.s12
          .large-space
          h4
            span Layouts
            a.chip.circle(
              @click="layout = 0; showSamples('#layouts article')"
            )
              i code
          nav.wrap
            label.checkbox
              input#center-layouts(type="checkbox", checked)
              span center
            label.checkbox
              input#left-layouts(type="checkbox")
              span left
            label.checkbox
              input#right-layouts(type="checkbox")
              span right
            label.checkbox
              input#middle-layouts(type="checkbox", checked)
              span middle
            label.checkbox
              input#top-layouts(type="checkbox")
              span top
            label.checkbox
              input#bottom-layouts(type="checkbox")
              span bottom
          #positions
            article.border.medium.no-padding
              .padding.absolute.blue.white-text.center.middle.primary
                h5 Position
                div Lorem ipsum dolor...
          .space
          nav.wrap
            label.radio
              input#center-align-layouts(
                type="radio",
                name="horizontal-layouts",
                checked
              )
              span center-align
            label.radio
              input#left-align-layouts(type="radio", name="horizontal-layouts")
              span left-align
            label.radio
              input#right-align-layouts(
                type="radio",
                name="horizontal-layouts"
              )
              span right-align
            label.radio
              input#middle-align-layouts(
                type="radio",
                name="vertical-layouts",
                checked
              )
              span middle-align
            label.radio
              input#top-align-layouts(type="radio", name="vertical-layouts")
              span top-align
            label.radio
              input#bottom-align-layouts(type="radio", name="vertical-layouts")
              span bottom-align
          #alignments
            article.border.medium.no-padding.center-align.middle-align
              .padding
                h5 Alignment
                div Lorem ipsum dolor...
          .space
          .row
            .col.s12.m6
              article.flat.small.scroll
                header.fixed
                  h5.no-margin Fixed header
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            .col.s12.m6
              article.flat.small.scroll
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                footer.fixed
                  h5.no-margin Fixed footer
        #list.col.s12
          .large-space
          h4
            span Lists
            a.chip.circle(@click="showSamples('#list .row')")
              i code
          nav.wrap
            label.radio
              input#top-align-lists(type="radio", name="align-lists")
              span top-align
            label.radio
              input#middle-align-lists(
                type="radio",
                name="align-lists",
                checked="checked"
              )
              span middle-align
            label.radio
              input#bottom-align-lists(type="radio", name="align-lists")
              span bottom-align
            label.checkbox
              input#divider-lists(type="checkbox", name="divider-lists")
              span divider
          label.large-space.middle-align Today
          .row.no-wrap.middle-align
            .col.min
              i.light-green-text check_circle
            .col
              div Title
              label Complementary text
            .col.min
              nav
                button.none Button
                button.none
                  i more_vert

          .row.no-wrap.middle-align
            .col.min
              i.orange-text warning
            .col
              div Title
              label Complementary text
            .col.min
              nav
                button.none Button
                button.none
                  i more_vert
          .row.no-wrap.middle-align
            .col.min
              i.grey-text schedule
            .col
              div Title
              label Complementary text
            .col.min
              nav
                button.none Button
                button.none
                  i more_vert
          label.large-space.middle-align Yesterday
          .row.no-wrap.middle-align
            .col.min
              label.checkbox
                input(type="checkbox")
                span
            .col
              div Title
              label Complementary text
            .col.min
              nav
                button.none Button
                button.none
                  i more_vert
          .row.no-wrap.middle-align
            .col.min
              label.checkbox
                input(type="checkbox")
                span
            .col
              div Title
              label Complementary text
            .col.min
              nav
                button.none Button
                button.none
                  i more_vert
          .row.no-wrap.middle-align
            .col.min
              label.checkbox
                input(type="checkbox")
                span
            .col
              div Title
              label Complementary text
            .col.min
              nav
                button.none Button
                button.none
                  i more_vert
          label.large-space.middle-align Older
          .row.no-wrap.middle-align
            .col.min
              img.circle.tiny(:src="'/beer-and-woman.jpg'")
            .col
              div Title
              label Complementary text
            .col.min
              nav
                button.none Button
                button.none
                  i more_vert
          .row.no-wrap.middle-align
            .col.min
              img.circle.tiny(:src="'/beer-and-woman.jpg'")
            .col
              div Title
              label Complementary text
            .col.min
              nav
                button.none Button
                button.none
                  i more_vert
          .row.no-wrap.middle-align
            .col.min
              img.circle.tiny(:src="'/beer-and-woman.jpg'")
            .col
              div Title
              label Complementary text
            .col.min
              nav
                button.none Button
                button.none
                  i more_vert
        #loaders.col.s12
          .large-space
          h4
            span Loaders
            a.chip.circle(@click="showSamples('#loaders .loader')")
              i code
          nav.wrap
            a.loader.small
            a.loader.medium
            a.loader.large
            a.loader.small.pink
            a.loader.medium.orange
            a.loader.large.yellow
        #media.col.s12
          .large-space
          h4
            span Media
            a.chip.circle(
              @click="showSamples('#media img:visible, #media video:visible')"
            )
              i code
          nav.wrap.m.l
            label.radio
              input(
                v-model="mediaImage",
                value="1",
                type="radio",
                name="media-images"
              )
              span images
            label.radio
              input(
                v-model="mediaImage",
                value="2",
                type="radio",
                name="media-images"
              )
              span videos
          nav.wrap(v-if="mediaImage == 1")
            a
              img.circle.tiny(:src="'/beer-and-woman.jpg'")
            a
              img.circle.small(:src="'/beer-and-woman.jpg'")
            a
              img.circle(:src="'/beer-and-woman.jpg'")
            a
              img.circle.large(:src="'/beer-and-woman.jpg'")
            a
              img.circle.extra(:src="'/beer-and-woman.jpg'")
            a
              img.round.tiny(:src="'/beer-and-woman.jpg'")
            a
              img.round.small(:src="'/beer-and-woman.jpg'")
            a
              img.round(:src="'/beer-and-woman.jpg'")
            a
              img.round.large(:src="'/beer-and-woman.jpg'")
            a
              img.round.extra(:src="'/beer-and-woman.jpg'")
            a
              img.left-round.medium(:src="'/beer-and-woman.jpg'")
            a
              img.top-round.medium(:src="'/beer-and-woman.jpg'")
            a
              img.right-round.medium(:src="'/beer-and-woman.jpg'")
            a
              img.bottom-round.medium(:src="'/beer-and-woman.jpg'")
            a
              img.top-round.left-round.medium(:src="'/beer-and-woman.jpg'")
            a
              img.bottom-round.right-round.medium(:src="'/beer-and-woman.jpg'")
          nav.wrap(v-if="mediaImage == 2")
            a
              video.circle.tiny(autoplay, loop, muted, playsinline)
                source(:src="'/dance.mp4'", type="video/mp4")
            a
              video.circle.small(autoplay, loop, muted, playsinline)
                source(:src="'/dance.mp4'", type="video/mp4")
            a
              video.circle.medium(autoplay, loop, muted, playsinline)
                source(:src="'/dance.mp4'", type="video/mp4")
            a
              video.circle.large(autoplay, loop, muted, playsinline)
                source(:src="'/dance.mp4'", type="video/mp4")
            a
              video.circle.extra(autoplay, loop, muted, playsinline)
                source(:src="'/dance.mp4'", type="video/mp4")
            a
              video.round.tiny(autoplay, loop, muted, playsinline)
                source(:src="'/dance.mp4'", type="video/mp4")
            a
              video.round.small(autoplay, loop, muted, playsinline)
                source(:src="'/dance.mp4'", type="video/mp4")
            a
              video.round.medium(autoplay, loop, muted, playsinline)
                source(:src="'/dance.mp4'", type="video/mp4")
            a
              video.round.large(autoplay, loop, muted, playsinline)
                source(:src="'/dance.mp4'", type="video/mp4")
            a
              video.round.extra(autoplay, loop, muted, playsinline)
                source(:src="'/dance.mp4'", type="video/mp4")
            a
              video.left-round.medium(autoplay, loop, muted, playsinline)
                source(:src="'/dance.mp4'", type="video/mp4")
            a
              video.top-round.medium(autoplay, loop, muted, playsinline)
                source(:src="'/dance.mp4'", type="video/mp4")
            a
              video.right-round.medium(autoplay, loop, muted, playsinline)
                source(:src="'/dance.mp4'", type="video/mp4")
            a
              video.bottom-round.medium(autoplay, loop, muted, playsinline)
                source(:src="'/dance.mp4'", type="video/mp4")
            a
              video.top-round.left-round.medium(
                autoplay,
                loop,
                muted,
                playsinline
              )
                source(:src="'/dance.mp4'", type="video/mp4")
            a
              video.bottom-round.right-round.medium(
                autoplay,
                loop,
                muted,
                playsinline
              )
                source(:src="'/dance.mp4'", type="video/mp4")
        #modals.col.s12
          .large-space
          h4
            span Modals
            a.chip.circle(@click="showSamples('#modal, #modal-calendar')")
              i code
          nav
            button(data-ui="#modal") Modal
            button(data-ui="#modal-calendar") Calendar
        #navs.col.s12
          .large-space
          h4
            span Navs
            a.chip.circle(@click="showSamples('#navs nav')")
              i code
          nav
            button Button
            a.chip Chip
            i home
            a
              img.circle(:src="'/beer-and-woman.jpg'")
        #pages.col.s12
          .large-space
          h4
            span Pages
            a.chip.circle(@click="showSamples('#pages .page')")
              i code
          nav.wrap
            button(@click="updatePage('page left active')") From left
            button(@click="updatePage('page top active')") From top
            button(@click="updatePage('page bottom active')") From bottom
            button(@click="updatePage('page right active')") From right
          div(style="display: none")
            .page
        #progress.col.s12
          .large-space
          h4
            span Progress
            a.chip.circle(@click="showSamples('#progress .small-space, #progress article, #progress nav > button, #progress nav > .chip', null, '<span>To change the progress call a js function&nbsp;</span><b>ui(\"#progress\", percentage)</b>')")
              i code
          nav.wrap
            label.radio
              input#0-progress(type="radio", name="percent-progress", checked="checked")
              span 0%
            label.radio
              input#30-progress(type="radio", name="percent-progress")
              span 30%
            label.radio
              input#60-progress(type="radio", name="percent-progress")
              span 60%
            label.radio
              input#100-progress(type="radio", name="percent-progress")
              span 100%
            label.radio
              input#default-progress(type="radio", name="color-progress", checked="checked")
              span default
            label.radio
              input#light-green-progress(type="radio", name="color-progress")
              span light-green
            label.radio
              input#orange-progress(type="radio", name="color-progress")
              span orange
          .space
          .small-space.primary-container.border
            .progress.left
          .space
          .small-space.secondary-container.border
            .progress.left
          .space
          .small-space.tertiary-container
            .progress.right
          .space
          .row
            .col.s12.m3
              article.small
                .progress.left
                h5 Card
            .col.s12.m3
              article.small.round
                .progress.right
                h5 Card
            .col.s12.m3
              article.border.small
                .progress.top
                h5 Card
            .col.s12.m3
              article.small.border.round
                .progress.bottom
                h5 Card
          nav.wrap
            button
              .progress.left
              span Button
            button.round
              .progress.right
              span Button
            button.circle.extra
              .progress.top
              i home
            button.square.extra
              .progress.bottom
              i home
            button.border
              .progress.left
              span Button
            button.border.round
              .progress.right
              span Button
            button.border.circle.extra
              .progress.top
              i home
            button.border.square.extra
              .progress.bottom
              i home
          nav.wrap
            a.chip
              .progress.left
              span Chip
            a.chip.round
              .progress.right
              span Chip
            a.chip.circle
              .progress.top
              i search
            a.chip.square
              .progress.bottom
              i search
            a.chip.border
              .progress.left
              span Chip
            a.chip.border.round
              .progress.right
              span Chip
            a.chip.border.circle
              .progress.top
              i search
            a.chip.border.square
              .progress.bottom
              i search

        #radios.col.s12
          .large-space
          h4
            span Radios
            a.chip.circle(@click="showSamples('#radios .field')")
              i code
          .row
            .col.s12
              .field.middle-align
                nav.wrap
                  label.radio
                    input(type="radio", name="radio")
                    span Enabled
                  label.radio
                    input(type="radio", name="radio", checked)
                    span Enabled
                  label.radio
                    input(type="radio", disabled)
                    span Disabled
                  label.radio
                    input(type="radio", checked, disabled)
                    span Disabled
            .col.s12
              .field.label.middle-align
                label.active A question?
                nav
                  label.radio
                    input(type="radio", name="radio")
                    span Item 1
                  label.radio
                    input(type="radio", name="radio")
                    span Item 2
                  label.radio
                    input(type="radio", name="radio")
                    span Item 3
            .col.s12
              .field.label.middle-align
                label.active A question?
                nav
                  label.radio
                    input(type="radio", name="radio")
                    span Item 1
                  label.radio
                    input(type="radio", name="radio")
                    span Item 2
                  label.radio
                    input(type="radio", name="radio")
                    span Item 3
                span.helper Complementary text
            .col.s12
              .field.label.middle-align.invalid
                label.active A question?
                nav
                  label.radio
                    input(type="radio", name="radio")
                    span Item 1
                  label.radio
                    input(type="radio", name="radio")
                    span Item 2
                  label.radio
                    input(type="radio", name="radio")
                    span Item 3
                span.error Error text
        #responsive.col.s12
          .large-space
          h4 
            span Responsive
            a.chip.circle(@click="showSamples('#responsive nav')")
              i code
          div
            nav
              button.s.circle.extra
                i phone_android
              button.m.l.border.circle.extra
                i phone_android
              button.m.circle.extra
                i tablet_android
              button.s.l.border.circle.extra
                i tablet_android
              button.l.circle.extra
                i laptop_windows
              button.s.m.border.circle.extra
                i laptop_windows
        #rows.col.s12
          .large-space
          h4
            span Rows
            a.chip.circle(@click="showSamples('#rows .row')")
              i code
          nav.wrap
            label.radio
              input#no-space-rows(type="radio", name="space-rows")
              span no-space
            label.radio
              input#small-space-rows(
                type="radio",
                name="space-rows",
                checked="checked"
              )
              span small-space
            label.radio
              input#medium-space-rows(type="radio", name="space-rows")
              span medium-space
            label.radio
              input#large-space-rows(type="radio", name="space-rows")
              span large-space
          .space
          .row
            .col.s1 1
            .col.s1 2
            .col.s1 3
            .col.s1 4
            .col.s1 5
            .col.s1 6
            .col.s1 7
            .col.s1 8
            .col.s1 9
            .col.s1 10
            .col.s1 11
            .col.s1 12
          .row
            .col.s6 1
            .col.s6 2
          .row
            .col.s12 1
          .row
            .col.s12.m6.l3 1
            .col.s12.m6.l3 2
            .col.s12.m6.l3 3
            .col.s12.m6.l3 4
          .row.no-wrap
            .col max
            .col max
            .col max
          .row.no-wrap
            .col.min min
            .col.min min
            .col.min min
            .col max
          .row.no-wrap
            .col.min min
            .col max
            .col.min min
            .col max
          .space
        #selects.col.s12
          .large-space
          h4
            span Selects
            a.chip.circle(@click="showSamples('#selects .field')")
              i code
          nav.wrap
            label.checkbox
              input#border-selects(type="checkbox")
              span border
            label.checkbox
              input#round-selects(type="checkbox")
              span round
            label.checkbox
              input#fill-selects(type="checkbox")
              span fill
            label.radio
              input#small-selects(type="radio", name="size-selects")
              span small
            label.radio
              input#medium-selects(
                type="radio",
                name="size-selects",
                checked="checked"
              )
              span medium
            label.radio
              input#large-selects(type="radio", name="size-selects")
              span large
            label.radio
              input#extra-selects(type="radio", name="size-selects")
              span extra
          .space
          .row
            .col.s12.l4
              .field.suffix
                select
                  option Item 1
                  option Item 2
                  option Item 3
                i arrow_drop_down
            .col.s12.l4
              .field.suffix
                select
                  option Item 1
                  option Item 2
                  option Item 3
                i arrow_drop_down
                span.helper Complementary text
            .col.s12.l4
              .field.suffix.invalid
                select
                  option Item 1
                  option Item 2
                  option Item 3
                i arrow_drop_down
                span.error Error text
            .col.s12.l4
              .field.label.suffix
                select
                  option Item 1
                  option Item 2
                  option Item 3
                label.active Label
                i arrow_drop_down
            .col.s12.l4
              .field.label.suffix
                select
                  option Item 1
                  option Item 2
                  option Item 3
                label.active Label
                i arrow_drop_down
                span.helper Complementary text
            .col.s12.l4
              .field.label.suffix.invalid
                select
                  option Item 1
                  option Item 2
                  option Item 3
                label.active Label
                i arrow_drop_down
                span.error Error text
            .col.s12.l4
              .field.label.suffix
                select
                  option Item 1
                  option Item 2
                  option Item 3
                label.active Label
                img.circle(:src="'/favicon.png'")
            .col.s12.l4
              .field.label.suffix
                select
                  option Item 1
                  option Item 2
                  option Item 3
                label.active Label
                img.circle(:src="'/favicon.png'")
                span.helper Complementary text
            .col.s12.l4
              .field.label.suffix.invalid
                select
                  option Item 1
                  option Item 2
                  option Item 3
                label.active Label
                img.circle(:src="'/favicon.png'")
                span.error Error text
        #switches.col.s12
          .large-space
          h4
            span Switches
            a.chip.circle(@click="showSamples('#switches .field')")
              i code
          .row
            .col.s12
              .field.middle-align
                nav
                  label.switch
                    input(type="checkbox")
                    span Enabled
                  label.switch
                    input(type="checkbox", checked)
                    span Enabled
                  label.switch
                    input(type="checkbox", disabled)
                    span Disabled
                  label.switch
                    input(type="checkbox", checked, disabled)
                    span Disabled
            .col.s12
              .field.label.middle-align
                label.active A question?
                nav
                  label.switch
                    input(type="checkbox")
                    span Item 1
                  label.switch
                    input(type="checkbox")
                    span Item 2
                  label.switch
                    input(type="checkbox")
                    span Item 3
            .col.s12
              .field.label.middle-align
                label.active A question?
                nav
                  label.switch
                    input(type="checkbox")
                    span Item 1
                  label.switch
                    input(type="checkbox")
                    span Item 2
                  label.switch
                    input(type="checkbox")
                    span Item 3
                span.helper Complementary text
            .col.s12.l6
              .field.label.middle-align.invalid
                label.active A question?
                nav
                  label.switch
                    input(type="checkbox")
                    span Item 1
                  label.switch
                    input(type="checkbox")
                    span Item 2
                  label.switch
                    input(type="checkbox")
                    span Item 3
                span.error Error text
        #table.col.s12
          .large-space
          h4
            span Tables
            a.chip.circle(@click="showSamples('#table table')")
              i code
          nav.wrap
            label.radio
              input#small-tables(type="radio", name="size-tables")
              span small
            label.radio
              input#medium-tables(
                type="radio",
                name="size-tables",
                checked="checked"
              )
              span medium
            label.radio
              input#large-tables(type="radio", name="size-tables")
              span large
            label.radio
              input#left-align-tables(
                type="radio",
                name="align-tables",
                checked="checked"
              )
              span left-align
            label.radio
              input#center-align-tables(type="radio", name="align-tables")
              span center-align
            label.radio
              input#right-align-tables(type="radio", name="align-tables")
              span right-align
          .space
          table.border
            thead
              tr
                th
                th Column 1
                th Column 2
                th Column 3
                th
            tbody
              tr
                td
                  label.checkbox
                    input(type="checkbox")
                    span
                td Line 1
                td Line 1
                td Line 1
                td
                  nav.right-align
                    button.none Button
                    button.none
                      i more_vert
              tr
                td
                  label.checkbox
                    input(type="checkbox")
                    span
                td Line 2
                td Line 2
                td Line 2
                td
                  nav.right-align
                    button.none Button
                    button.none
                      i more_vert
              tr
                td
                  label.checkbox
                    input(type="checkbox")
                    span
                td Line 3
                td Line 3
                td Line 3
                td
                  nav.right-align
                    button.none Button
                    button.none
                      i more_vert
        #tabs.col.s12
          .large-space
          h4
            span Tabs
            a.chip.circle(
              @click="showSamples('#tabs > div:not(.large-space)')"
            )
              i code
          nav.wrap
            label.radio
              input#default-align-tabs(
                type="radio",
                name="align-tabs",
                checked="checked"
              )
              span default
            label.radio
              input#left-align-tabs(type="radio", name="align-tabs")
              span left-align
            label.radio
              input#center-align-tabs(type="radio", name="align-tabs")
              span center-align
            label.radio
              input#right-align-tabs(type="radio", name="align-tabs")
              span right-align
            label.radio
              input#defaut-tabs(
                type="radio",
                name="page-tabs",
                checked="checked"
              )
              span default
            label.radio
              input#left-tabs(type="radio", name="page-tabs")
              span from left
            label.radio
              input#right-tabs(type="radio", name="page-tabs")
              span from right
          p.space
          div
            .tabs
              a.active(data-ui="#tab1") Tab 1
              a(data-ui="#tab2") Tab 2
              a(data-ui="#tab3") Tab 3
            #tab1.page.padding.active
              h5 Tab 1
            #tab2.page.padding
              h5 Tab 2
            #tab3.page.padding
              h5 Tab 3
          div
            .tabs
              a.active(data-ui="#tab4")
                i home
                span Tab 1
              a(data-ui="#tab5")
                i home
                span Tab 2
              a(data-ui="#tab6")
                i home
                span Tab 3
            #tab4.page.padding.active
              h5 Tab 1
            #tab5.page.padding
              h5 Tab 2
            #tab6.page.padding
              h5 Tab 3
          div
            .tabs
              a.wrap.active(data-ui="#tab10") 
                i home
                span Tab 1
              a.wrap(data-ui="#tab11")
                i home
                span Tab 2
              a.wrap(data-ui="#tab12")
                i home
                span Tab 3
            #tab10.page.padding.active
              h5 Tab 1
            #tab11.page.padding
              h5 Tab 2
            #tab12.page.padding
              h5 Tab 3
          div
            .tabs
              a.active(data-ui="#tab7") 
                img.circle(:src="'/favicon.png'")
                span Tab 1
              a(data-ui="#tab8")
                img.circle(:src="'/favicon.png'")
                span Tab 2
              a(data-ui="#tab9")
                img.circle(:src="'/favicon.png'")
                span Tab 3
            #tab7.page.padding.active
              h5 Tab 1
            #tab8.page.padding
              h5 Tab 2
            #tab9.page.padding
              h5 Tab 3
          div
            .tabs
              a.wrap.active(data-ui="#tab13") 
                img.circle(:src="'/favicon.png'")
                span Tab 1
              a.wrap(data-ui="#tab14")
                img.circle(:src="'/favicon.png'")
                span Tab 2
              a.wrap(data-ui="#tab15")
                img.circle(:src="'/favicon.png'")
                span Tab 3
            #tab13.page.padding.active
              h5 Tab 1
            #tab14.page.padding
              h5 Tab 2
            #tab15.page.padding
              h5 Tab 3
        #textareas.col.s12
          .large-space
          h4
            span Textareas
            a.chip.circle(@click="showSamples('#textareas .field')")
              i code
          nav.wrap
            label.checkbox
              input#border-textareas(type="checkbox")
              span border
            label.checkbox
              input#round-textareas(type="checkbox")
              span round
            label.checkbox
              input#fill-textareas(type="checkbox")
              span fill
            label.radio
              input#small-textareas(type="radio", name="size-textareas")
              span small
            label.radio
              input#medium-textareas(
                type="radio",
                name="size-textareas",
                checked="checked"
              )
              span medium
            label.radio
              input#large-textareas(type="radio", name="size-textareas")
              span large
            label.radio
              input#extra-textareas(type="radio", name="size-textareas")
              span extra
          .space
          .row
            .col.s12.l4
              .field.textarea
                textarea
            .col.s12.l4
              .field.textarea
                textarea
                span.helper Complementary text
            .col.s12.l4
              .field.textarea.invalid
                textarea
                span.error Error text
            .col.s12.l4
              .field.textarea.label
                textarea
                label Label
            .col.s12.l4
              .field.textarea.label
                textarea
                label Label
                span.helper Complementary text
            .col.s12.l4
              .field.textarea.label.invalid
                textarea
                label Label
                span.error Error text
            .col.s12.l4
              .field.textarea.label.prefix
                i search
                textarea
                label Label
            .col.s12.l4
              .field.textarea.label.suffix
                textarea
                label Label
                i search
            .col.s12.l4
              .field.textarea.label.prefix.suffix
                i search
                textarea
                label Label
                i search
            .col.s12.l4
              .field.textarea.label.prefix
                img.circle(:src="'/favicon.png'")
                textarea
                label Label
            .col.s12.l4
              .field.textarea.label.suffix
                textarea
                label Label
                img.circle(:src="'/favicon.png'")
            .col.s12.l4
              .field.textarea.label.prefix.suffix
                img.circle(:src="'/favicon.png'")
                textarea
                label Label
                img.circle(:src="'/favicon.png'")
        #toasts.col.s12.l6
          .large-space
          h4
            span Toasts
            a.chip.circle(@click="showSamples('#toasts .toast')")
              i code
          nav.wrap
            label.radio
              input#bottom-toasts(
                type="radio",
                name="position-toasts",
                checked="checked"
              )
              span bottom
            label.radio
              input#top-toasts(type="radio", name="position-toasts")
              span top
          nav.wrap
            button.pink.white-text(onclick="ui('.toast.pink')") Toast
            button.orange.white-text(onclick="ui('.toast.orange')") Toast
            button.green.white-text(onclick="ui('.toast.green')") Toast
            button.blue.white-text(onclick="ui('.toast.blue')") Toast
          .toast.pink.white-text
            i error
            span Complementary text
          .toast.orange.white-text
            i warning
            span Complementary text
          .toast.green.white-text
            i done
            span Complementary text
          .toast.blue.white-text
            i info
            span Complementary text
        #tooltips.col.s12.l6
          .large-space
          h4
            span Tooltips
            a.chip.circle(@click="showSamples('#tooltips nav a')")
              i code
          nav.wrap
            a.chip.circle
              i arrow_back
              .tooltip.left Complementary text
            a.chip.circle
              i arrow_upward
              .tooltip Complementary text
            a.chip.circle
              i arrow_downward
              .tooltip.bottom Complementary text
            a.chip.circle
              i arrow_forward
              .tooltip.right Complementary text

        #typography.col.s12
          .large-space
          h4
            span Typography
            a.chip.circle(@click="showSamples('#typography .col.s6 div')")
              i code
          .row
            .col.s6
              div
                p.italic italic
                p.bold bold
                p.underline underline
                p.overline overline
                p.upper upper
                p.lower lower
                p.capitalize capitalize
                p.link link
                p.small-text small-text
                p.medium-text medium-text
                p.large-text large-text
            .col.s6
              div
                h6 Title
                h5 Title
                h4 Title
                h3 Title
                h2 Title
                h1 Title
        .col.s12
          .large-space
          div
            h4.center-align Has about 100 css classes to combine...
            .large-space
            #helpers.m.l
              h5 Helpers
              .row.no-wrap
                .col
                  b Position
                  div left
                  div right
                  div center
                  div top
                  div bottom
                  div middle
                  div front
                  div back
                .col
                  b Alignment
                  div left-align
                  div right-align
                  div center-align
                  div top-align
                  div bottom-align
                  div middle-align
                .col
                  b Size
                  div small
                  div medium
                  div large
                  div small-width
                  div medium-width
                  div large-width
                  div small-height
                  div medium-height
                  div large-height
                .col
                  b Margin
                  div margin
                  div no-margin
                  div small-margin
                  div medium-margin
                  div large-margin
                .col
                  b Padding
                  div padding
                  div no-padding
                  div small-padding
                  div medium-padding
                  div large-padding
              .row.no-wrap
                .col
                  b Spacing
                  div space
                  div small-space
                  div medium-space
                  div large-space
                  div divider
                  div small-divider
                  div medium-divider
                  div large-divider
                .col
                  b Form
                  div border
                  div round
                  div left-round
                  div right-round
                  div top-round
                  div bottom-round
                  div circle
                  div flat
                  div square
                .col
                  b Texts
                  div italic
                  div bold
                  div underline
                  div overline
                  div upper
                  div lower
                  div capitalize
                  div link
                  div small-text
                  div medium-text
                  div large-text
                .col
                  b Shadows
                  div shadow
                  div right-shadow
                  div left-shadow
                  div bottom-shadow
                  div top-shadow
                  div no-shadow
                  div small-shadow
                  div medium-shadow
                  div large-shadow
                .col
                  b Others
                  div active
                  div wrap
                  div no-wrap
                  div scroll
                  div no-scroll
                  div wave
                  div no-wave
                  div s
                  div m
                  div l
              .space
            .row
              .col.s12
                h5 Elements
                div
                  span absolute&nbsp;
                  span.grey-text left, right, top, bottom, center, middle, small, medium, large, round
                div
                  span badge&nbsp;
                  span.grey-text left, right, top, bottom, border, round, circle,&nbsp;
                  span.orange-text none
                div 
                  span button&nbsp;
                  span.grey-text small, medium, large, border, round, circle, flat,&nbsp;
                  span.orange-text none, diamond, extend, extra
                div
                  span chip&nbsp;
                  span.grey-text border, circle, active,&nbsp;
                  span.orange-text diamond
                div
                  span card&nbsp;
                  span.grey-text small, medium, large, border, round, flat
                div 
                  span container&nbsp;
                  span.orange-text min, max
                div 
                  span dropdown&nbsp;
                  span.grey-text left, right, small, medium, large, border, round, flat, active, no-wrap
                div 
                  span field&nbsp;
                  span.grey-text small, medium, large, border, round, flat,&nbsp;
                  span.orange-text fill, prefix, suffix, label, invalid, textarea
                div
                  span fixed&nbsp;
                  span.grey-text left, right, top, bottom, center, middle, small, medium, large, round
                div
                  span loader&nbsp;
                  span.grey-text small, medium, large
                div
                  span menu&nbsp;
                  span.grey-text left, right, top, bottom, border, round, flat, small-space, medium-space, large-space,&nbsp;
                  span.orange-text no-space
                div 
                  span modal&nbsp;
                  span.grey-text left, right, top, bottom, small, medium, large, active, border, round, flat
                div 
                  span page&nbsp;
                  span.grey-text left, right, top, bottom, active
                div 
                  span overlay&nbsp;
                  span.grey-text active,&nbsp;
                  span.orange-text light, dark
                div 
                  span row&nbsp;
                  span.grey-text no-wrap, top-align, bottom-align, middle-align, small-space, medium-space, large-space,&nbsp;
                  span.orange-text no-space
                div 
                  span &nbsp;&nbsp;&nbsp;&nbsp;col&nbsp;
                  span.orange-text min, max, s1..12, m1..12, l1..12
                div 
                  span tabs&nbsp;
                  span.grey-text left-align, center-align, right-align
                div 
                  span toast&nbsp;
                  span.grey-text top, bottom, small, medium, large, border, round, flat, active
                div 
                  span tooltip&nbsp;
                  span.grey-text left, right, top, bottom, small, medium, large, border, round, flat
                div 
                  span wave&nbsp;
                  span.orange-text light, dark
                .space
                div 
                  span &lt;article&gt;&nbsp;
                  span.grey-text small, medium, large, border, round, flat
                div 
                  span &lt;body&gt;&nbsp;
                  span.grey-text is-light, is-dark
                div 
                  span &lt;button&gt;&nbsp;
                  span.grey-text small, medium, large, border, round, circle, flat,&nbsp;
                  span.orange-text none, diamond, extend, extra
                div 
                  span &lt;i&gt;&nbsp;
                  span.grey-text small, medium, large, wrap,&nbsp;
                  span.orange-text tiny, extra, outlined
                div
                  span &lt;img&gt;&nbsp;
                  span.grey-text small, medium, large, border, round, circle,&nbsp;
                  span.orange-text tiny, extra, responsive, empty-state
                div
                  span &lt;label&gt;&nbsp;
                  span.grey-text active,&nbsp;
                  span.orange-text checkbox, radio, switch
                div 
                  span &lt;nav&gt;&nbsp;
                  span.grey-text top-align, bottom-align, middle-align, wrap
                div 
                  span &lt;summary&gt;&nbsp;
                  span.orange-text none
                div 
                  span &lt;table&gt;&nbsp;
                  span.grey-text small, medium, large, border, left-align, center-align, right-align
                div
                  span &lt;video&gt;&nbsp;
                  span.grey-text small, medium, large, border, round, circle,&nbsp;
                  span.orange-text tiny, extra, responsive, empty-state
                .space
                .orange-text * Element unique helpers
            .row
              .col.s12
                h5 Settings
                .row.no-wrap
                  .col
                    b Themes
                    div is-dark
                    div is-light
                  .col
                    b Primary colors
                    div --primary
                    div --on-primary
                    div --primary-container
                    div --on-primary-container
                  .col
                    b Secondary colors
                    div --secondary
                    div --on-secondary
                    div --secondary-container
                    div --on-secondary-container
                  .col
                    b Tertiary colors
                    div --tertiary
                    div --on-tertiary
                    div --tertiary-container
                    div --on-tertiary-container
                .row.no-wrap
                  .col
                    b Error colors
                    div --error
                    div --on-error
                    div --error-container
                    div --on-error-container
                  .col
                    b Background colors
                    div --background
                    div --on-background
                  .col
                    b Surface colors
                    div --surface
                    div --on-surface
                    div --surface-variant
                    div --on-surface-variant
                    div --outline
                  .col
                    b Shadows
                    div --shadow1
                    div --shadow2
                    div --shadow3
                .row.no-wrap
                  .col
                    b Speed
                    div --speed1
                    div --speed2
                    div --speed3
                    div --speed4
                  .col 
                    b Others
                    div --active
                    div --overlay
                    div --font
                    div --size
                  .col
                  .col
            .space
            .row
              .col.s12
                .large-space
                h4.center-align ...and 3 ways to trigger elements
                .large-space
                div Add or remove class "active"
                pre(v-html="htmlSample")
                .space
                div Or call javascript function to activate/deactivate an element
                pre(v-html="jsSample")
                .space
                div Or add attribute "data-ui" and call javascript function, to setup all automatically
                pre(v-html="autoSample")
                .space
                div Some elements accept options
                pre(v-html="extraSample")
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
      #modal-colors.modal.right.large
        nav
          a(data-ui="#modal-colors")
            i arrow_back
          a(data-ui="#modal-colors")
            h5.no-margin Back
        .space
        .row
          .col.s6
            h5 Dynamic colors
            .primary primary
            .primary-container primary-container
            .secondary secondary
            .secondary-container secondary-container
            .tertiary tertiary
            .tertiary-container tertiary-container
            .error error
            .error-container error-container
            .background background
            .surface surface
            .surface-variant surface-variant
            .inverse-surface inverse-surface
          .col.s6
            h5 Red
            .black-text.red1 red1
            .black-text.red2 red2
            .black-text.red3 red3
            .black-text.red4 red4
            .black-text.red5 red5
            .black-text.red red6 / red
            .black-text.red7 red7
            .black-text.red8 red8
            .black-text.red9 red9
            .black-text.red10 red10
            .red-border.border red-border
            .red-text red-text
          .col.s6
            h5 Pink
            .black-text.pink1 pink1
            .black-text.pink2 pink2
            .black-text.pink3 pink3
            .black-text.pink4 pink4
            .black-text.pink5 pink5
            .black-text.pink pink6 / pink
            .black-text.pink7 pink7
            .black-text.pink8 pink8
            .black-text.pink9 pink9
            .black-text.pink10 pink10
            .pink-border.border pink-border
            .pink-text pink-text
          .col.s6
            h5 Purple
            .black-text.purple1 purple1
            .black-text.purple2 purple2
            .black-text.purple3 purple3
            .black-text.purple4 purple4
            .black-text.purple5 purple5
            .black-text.purple purple6 / purple
            .black-text.purple7 purple7
            .black-text.purple8 purple8
            .black-text.purple9 purple9
            .black-text.purple10 purple10
            .purple-border.border purple-border
            .purple-text purple-text
          .col.s6
            h5 Deep-purple
            .black-text.deep-purple1 deep-purple1
            .black-text.deep-purple2 deep-purple2
            .black-text.deep-purple3 deep-purple3
            .black-text.deep-purple4 deep-purple4
            .black-text.deep-purple5 deep-purple5
            .black-text.deep-purple deep-purple6 / deep-purple
            .black-text.deep-purple7 deep-purple7
            .black-text.deep-purple8 deep-purple8
            .black-text.deep-purple9 deep-purple9
            .black-text.deep-purple10 deep-purple10
            .deep-purple-border.border deep-purple-border
            .deep-purple-text deep-purple-text
          .col.s6
            h5 Indigo
            .black-text.indigo1 indigo1
            .black-text.indigo2 indigo2
            .black-text.indigo3 indigo3
            .black-text.indigo4 indigo4
            .black-text.indigo5 indigo5
            .black-text.indigo indigo6 / indigo
            .black-text.indigo7 indigo7
            .black-text.indigo8 indigo8
            .black-text.indigo9 indigo9
            .black-text.indigo10 indigo10
            .indigo-border.border indigo-border
            .indigo-text indigo-text
          .col.s6
            h5 Blue
            .black-text.blue1 blue1
            .black-text.blue2 blue2
            .black-text.blue3 blue3
            .black-text.blue4 blue4
            .black-text.blue5 blue5
            .black-text.blue blue6 / blue
            .black-text.blue7 blue7
            .black-text.blue8 blue8
            .black-text.blue9 blue9
            .black-text.blue10 blue10
            .blue-border.border blue-border
            .blue-text blue-text
          .col.s6
            h5 Light-blue
            .black-text.light-blue1 light-blue1
            .black-text.light-blue2 light-blue2
            .black-text.light-blue3 light-blue3
            .black-text.light-blue4 light-blue4
            .black-text.light-blue5 light-blue5
            .black-text.light-blue light-blue6 / light-blue
            .black-text.light-blue7 light-blue7
            .black-text.light-blue8 light-blue8
            .black-text.light-blue9 light-blue9
            .black-text.light-blue10 light-blue10
            .light-blue-border.border light-blue-border
            .light-blue-text light-blue-text
          .col.s6
            h5 Cyan
            .black-text.cyan1 cyan1
            .black-text.cyan2 cyan2
            .black-text.cyan3 cyan3
            .black-text.cyan4 cyan4
            .black-text.cyan5 cyan5
            .black-text.cyan cyan6 / cyan
            .black-text.cyan7 cyan7
            .black-text.cyan8 cyan8
            .black-text.cyan9 cyan9
            .black-text.cyan10 cyan10
            .cyan-border.border cyan-border
            .cyan-text cyan-text
          .col.s6
            h5 Teal
            .black-text.teal1 teal1
            .black-text.teal2 teal2
            .black-text.teal3 teal3
            .black-text.teal4 teal4
            .black-text.teal5 teal5
            .black-text.teal teal6 / teal
            .black-text.teal7 teal7
            .black-text.teal8 teal8
            .black-text.teal9 teal9
            .black-text.teal10 teal10
            .teal-border.border teal-border
            .teal-text teal-text
          .col.s6
            h5 Green
            .black-text.green1 green1
            .black-text.green2 green2
            .black-text.green3 green3
            .black-text.green4 green4
            .black-text.green5 green5
            .black-text.green green6 / green
            .black-text.green7 green7
            .black-text.green8 green8
            .black-text.green9 green9
            .black-text.green10 green10
            .green-border.border green-border
            .green-text green-text
          .col.s6
            h5 Light-green
            .black-text.light-green1 light-green1
            .black-text.light-green2 light-green2
            .black-text.light-green3 light-green3
            .black-text.light-green4 light-green4
            .black-text.light-green5 light-green5
            .black-text.light-green light-green6 / light-green
            .black-text.light-green7 light-green7
            .black-text.light-green8 light-green8
            .black-text.light-green9 light-green9
            .black-text.light-green10 light-green10
            .light-green-border.border light-green-border
            .light-green-text light-green-text
          .col.s6
            h5 Lime
            .black-text.lime1 lime1
            .black-text.lime2 lime2
            .black-text.lime3 lime3
            .black-text.lime4 lime4
            .black-text.lime5 lime5
            .black-text.lime lime6 / lime
            .black-text.lime7 lime7
            .black-text.lime8 lime8
            .black-text.lime9 lime9
            .black-text.lime10 lime10
            .lime-border.border lime-border
            .lime-text lime-text
          .col.s6
            h5 Yellow
            .black-text.yellow1 yellow1
            .black-text.yellow2 yellow2
            .black-text.yellow3 yellow3
            .black-text.yellow4 yellow4
            .black-text.yellow5 yellow5
            .black-text.yellow yellow6 / yellow
            .black-text.yellow7 yellow7
            .black-text.yellow8 yellow8
            .black-text.yellow9 yellow9
            .black-text.yellow10 yellow10
            .yellow-border.border yellow-border
            .yellow-text yellow-text
          .col.s6
            h5 Amber
            .black-text.amber1 amber1
            .black-text.amber2 amber2
            .black-text.amber3 amber3
            .black-text.amber4 amber4
            .black-text.amber5 amber5
            .black-text.amber amber6 / amber
            .black-text.amber7 amber7
            .black-text.amber8 amber8
            .black-text.amber9 amber9
            .black-text.amber10 amber10
            .amber-border.border amber-border
            .amber-text amber-text
          .col.s6
            h5 Orange
            .black-text.orange1 orange1
            .black-text.orange2 orange2
            .black-text.orange3 orange3
            .black-text.orange4 orange4
            .black-text.orange5 orange5
            .black-text.orange orange6 / orange
            .black-text.orange7 orange7
            .black-text.orange8 orange8
            .black-text.orange9 orange9
            .black-text.orange10 orange10
            .orange-border.border orange-border
            .orange-text orange-text
          .col.s6
            h5 Deep-orange
            .black-text.deep-orange1 deep-orange1
            .black-text.deep-orange2 deep-orange2
            .black-text.deep-orange3 deep-orange3
            .black-text.deep-orange4 deep-orange4
            .black-text.deep-orange5 deep-orange5
            .black-text.deep-orange deep-orange6 / deep-orange
            .black-text.deep-orange7 deep-orange7
            .black-text.deep-orange8 deep-orange8
            .black-text.deep-orange9 deep-orange9
            .black-text.deep-orange10 deep-orange10
            .deep-orange-border.border deep-orange-border
            .deep-orange-text deep-orange-text
          .col.s6
            h5 Brown
            .black-text.brown1 brown1
            .black-text.brown2 brown2
            .black-text.brown3 brown3
            .black-text.brown4 brown4
            .black-text.brown5 brown5
            .black-text.brown brown6 / brown
            .black-text.brown7 brown7
            .black-text.brown8 brown8
            .black-text.brown9 brown9
            .black-text.brown10 brown10
            .brown-border.border brown-border
            .brown-text brown-text
          .col.s6
            h5 Grey
            .black-text.grey1 grey1
            .black-text.grey2 grey2
            .black-text.grey3 grey3
            .black-text.grey4 grey4
            .black-text.grey5 grey5
            .black-text.grey grey6 / grey
            .black-text.grey7 grey7
            .black-text.grey8 grey8
            .black-text.grey9 grey9
            .black-text.grey10 grey10
            .grey-border.border grey-border
            .grey-text grey-text
          .col.s6
            h5 Blue-grey
            .black-text.blue-grey1 blue-grey1
            .black-text.blue-grey2 blue-grey2
            .black-text.blue-grey3 blue-grey3
            .black-text.blue-grey4 blue-grey4
            .black-text.blue-grey5 blue-grey5
            .black-text.blue-grey blue-grey6 / blue-grey
            .black-text.blue-grey7 blue-grey7
            .black-text.blue-grey8 blue-grey8
            .black-text.blue-grey9 blue-grey9
            .black-text.blue-grey10 blue-grey10
            .blue-grey-border.border blue-grey-border
            .blue-grey-text blue-grey-text
          .col.s6
            h5 Black
            .black.grey-text black
            .black-border.border.grey-text black-border
            .black-text.grey-text black-text
          .col.s6
            h5 White
            .white.grey-text white
            .white-border.border.grey-text white-border
            .white-text.grey-text white-text
          .col.s6
            h5 Transparent
            .transparent.grey-text transparent
            .transparent-border.border.grey-text transparent-border
            .transparent-text.grey-text transparent-text

      #modal.modal
        h5 Title
        div Complementary text
        nav
          button.border.square.round(@click="updateModal('modal active')")
            i zoom_in_map
          button.border.square.round(@click="updateModal('modal left active')")
            i arrow_backward
          button.border.square.round(@click="updateModal('modal right active')")
            i arrow_forward
          button.border.square.round(@click="updateModal('modal top active')")
            i arrow_upward
          button.border.square.round(@click="updateModal('modal bottom active')")
            i arrow_downward
          button.square.round.flat(data-ui="#modal")
            i close

      #modal-samples.modal.right.large
        header.fixed
          a(data-ui="#modal-samples")
            i arrow_backward
            h5.small-margin Back
          div(v-show="textSample", v-html="textSample")
        article.border(v-for="exemplo in samples")
          div(v-html="exemplo.html")
          .space(v-show="exemplo.html")
          pre(v-html="exemplo.sourceCode")

      #modal-calendar.modal
        .row
          .col.s12.m12.l4
            div Selected date
            h5 Tue,
            h5 Month, 17
          .col.s12.m12.l8
            .row.no-wrap
              .col.min
                a
                  i arrow_back
              .col
                h6.center-align Month / Year
              .col.min
                a
                  i arrow_forward
            table.center-align
              tbody
                tr
                  td S
                  td M
                  td T
                  td W
                  td T
                  td F
                  td S
                tr
                  td
                    button.none 1
                  td
                    button.none 2
                  td
                    button.none 3
                  td
                    button.none 4
                  td
                    button.none 5
                  td
                    button.none 6
                  td
                    button.none 7
                tr
                  td
                    button.border.circle.medium.no-margin.absolute.middle.center 8
                  td
                    button.none 9
                  td
                    button.none 10
                  td
                    button.none 11
                  td
                    button.none 12
                  td
                    button.none 13
                  td
                    button.none 14
                tr
                  td
                    button.none 15
                  td
                    button.none 16
                  td
                    button.circle.medium.no-margin.absolute.middle.center.flat 17
                  td
                    button.none 18
                  td
                    button.none 19
                  td
                    button.none 20
                  td
                    button.none 21
                tr
                  td
                    button.none 22
                  td
                    button.none 23
                  td
                    button.none 24
                  td
                    button.none 25
                  td
                    button.none 26
                  td
                    button.none 27
                  td
                    button.none 28
                tr
                  td
                    button.none 29
                  td
                    button.none 30
                  td
                    button.none 31
                  td 1
                  td 2
                  td 3
                  td 4
        nav.right-align
          button.border(data-ui="#modal-calendar") Cancel
          button.flat(data-ui="#modal-calendar") Ok

      #modal-icons.modal.right.large
        header.fixed
          nav
            a(data-ui="#modal-icons")
              i arrow_back
            a(data-ui="#modal-icons")
              h5.no-margin Back
            a.button.border(
              v-show="modalSample == '#modal-icons'"
              href="https://material.io/resources/icons/?style=baseline",
              target="_blank"
            ) More icons
        .space
        div(v-if="modalSample == '#modal-icons'")
          article.border(v-for="exemplo in samples")
            div(v-html="exemplo.html")
            .space(v-show="exemplo.html")
            pre(v-html="exemplo.sourceCode")
          .space
</template>

<script>
import selectionForButtons from "./selectionForButtons.vue";
import themes from "/shared/themes.vue";
import data from "/shared/data.js";
import domain from "/shared/domain.js";

export default {
  components: {
    selectionForButtons,
    themes
  },
  data() {
    return {
      ...data(),
      indexOfMenu: 1,
      samples: [],
      htmlSample: null,
      jsSample: null,
      autoSample: null,
      extraSample: null,
      textSample: null,
      modalSample: null,
      mediaCard: 1,
      mediaImage: 1,
      layout: 0
    };
  },
  mounted() {
    this.isDark = /dark/.test(document.body.getAttribute("style"));
    this.htmlSample = hljs.highlight(
      "html",
      '<div class="modal active">...</div>\n<div class="dropdown active">...</div>\n<div class="overlay active">...</div>\n<div class="page active">...</div>\n<div class="toast active">...</div>'
    ).value;

    this.jsSample = hljs.highlight(
      "js",
      'ui("#modal");\nui("#dropdown");\nui("#overlay");\nui("#page");\nui("#toast");'
    ).value;

    this.autoSample = hljs.highlight(
      "html",
      '<a data-ui="#modal">...</a>\n<a data-ui="#dropdown">...</a>\n<a data-ui="#overlay">...</a>\n<a data-ui="#page">...</a>\n<a data-ui="#toast">...</a>\n\nui();'
    ).value;

    this.extraSample = hljs.highlight(
      "js",
      'ui("#progress", percentage);\nui("#toast", millisecondsToHide);'
    ).value;

    ui();

    this.resetTheme();
    this.badgeSamples();
    this.chipSamples();
    this.inputSamples();
    this.listSamples();
    this.tableSamples();
    this.tabSamples();
    this.selectSamples();
    this.rowSamples();
    this.textareaSamples();
    this.layoutSamples();
    this.toastSamples();
    this.progressSamples();

    setTimeout(() => {
      $("#logo").addClass("active");
    }, 1000);
  },
  methods: {
    resetTheme() {
      $("html")[0].className = "";
    },
    goTo(selector) {
      setTimeout(() => {
        let element = document.querySelector(selector);
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 180);
    },
    addHomeScreen() {
      if (window.beercss && window.beercss.installEvent)
        window.beercss.installEvent.prompt();
    },
    updateMenu(menu, css) {
      var selector = menu;
      var menu = $(menu);
      var dataUis = menu.find("a");
      var modals = menu.find(".modal");

      $(modals).removeClass("active");
      $(dataUis).removeClass("active");

      if (!css) {
        return $(selector + " > a > div:visible").length
          ? $(selector + " > a > div").hide()
          : $(selector + " > a > div").show();
      }

      if (/left|right|top|bottom/.test(css)) {
        $(menu).removeClass("left right top bottom");
        $(menu).addClass(css);
        $(menu).find("> .modal").removeClass("left right top bottom");
        $(menu).find("> .modal").addClass(css);
      }

      if (/small|medium|large/.test(css)) {
        for (var i = 0; i < menu.length; i++) {
          $(menu[i]).removeClass("small medium large");
          if (css != "medium") $(menu[i]).addClass(css);
        }
      }

      if (/left-align|right-align|top-align|bottom-align/.test(css)) {
        for (var i = 0; i < menu.length; i++) {
          $(menu[i]).removeClass(
            "left-align right-align top-align bottom-align"
          );
          $(menu[i]).addClass(css);
        }
      }
    },
    layoutSamples() {
      $("#layouts input").on("click", function () {
        var id = $(this).attr("id");
        var checked = $(this).is(":checked");
        var positions = ["left", "right", "center", "top", "bottom", "middle"];
        var alignments = [
          "left-align",
          "right-align",
          "center-align",
          "top-align",
          "bottom-align",
          "middle-align",
        ];
        var position = $("#positions .absolute");
        var alignment = $("#alignments article");

        if (checked && (id == "left-layouts" || id == "right-layouts"))
          $("#center-layouts")[0].checked = false;

        if (checked && (id == "top-layouts" || id == "bottom-layouts"))
          $("#middle-layouts")[0].checked = false;

        if (checked && id == "center-layouts") {
          $("#left-layouts")[0].checked = false;
          $("#right-layouts")[0].checked = false;
        }

        if (checked && id == "middle-layouts") {
          $("#top-layouts")[0].checked = false;
          $("#bottom-layouts")[0].checked = false;
        }

        if (
          checked &&
          (id == "left-align-layouts" || id == "right-align-layouts")
        )
          $("#center-align-layouts")[0].checked = false;

        if (
          checked &&
          (id == "top-align-layouts" || id == "bottom-align-layouts")
        )
          $("#middle-align-layouts")[0].checked = false;

        if (checked && id == "center-align-layouts") {
          $("#left-align-layouts")[0].checked = false;
          $("#right-align-layouts")[0].checked = false;
        }

        if (checked && id == "middle-align-layouts") {
          $("#top-align-layouts")[0].checked = false;
          $("#bottom-align-layouts")[0].checked = false;
        }

        $(position).removeClass("left right center top bottom middle");

        for (var i = 0; i < positions.length; i++) {
          if ($("#" + positions[i] + "-layouts").is(":checked")) {
            $(position).addClass(positions[i]);
          }
        }

        $(alignment).removeClass(
          "left-align right-align center-align top-align bottom-align middle-align"
        );

        for (var i = 0; i < alignments.length; i++) {
          if ($("#" + alignments[i] + "-layouts").is(":checked")) {
            $(alignment).addClass(alignments[i]);
          }
        }
      });
    },
    updateIcons() {
      var i = $("i");
      if (i.is(".outlined")) i.removeClass("outlined");
      else i.addClass("outlined");
    },
    updateContainer(css) {
      $(".container").attr("class", css ? "container " + css : "container");
    },
    updatePage(css) {
      $("#begin").attr("class", css);
    },
    updateModal(css) {
      $("#modal").attr("class", css);
    },
    formatHtml(element) {
      function process(str) {
        var div = document.createElement("div");
        div.innerHTML = str.trim();

        return format(div, 0).innerHTML;
      }

      function format(node, level) {
        var indentBefore = new Array(level++ + 1).join("  "),
          indentAfter = new Array(level - 1).join("  "),
          textNode;

        for (var i = 0; i < node.children.length; i++) {
          textNode = document.createTextNode("\n" + indentBefore);
          node.insertBefore(textNode, node.children[i]);

          format(node.children[i], level);

          if (node.lastElementChild == node.children[i]) {
            textNode = document.createTextNode("\n" + indentAfter);
            node.appendChild(textNode);
          }
        }

        return node;
      }

      var tag = $(element).clone();
      tag.find(".overlay").remove();
      tag.find("[style*='none']").remove();

      return process(
        tag[0].outerHTML
          .replace(/\s+(onclick|style|data-v-\w+)\="[^\"]*"/gi, "")
          .replace(/\s+id\="(\w+)"/gi, ' id="$1_"')
          .replace(/\s+data-ui\="#(\w+)"/gi, ' data-ui="#$1_"')
          .replace(/\s+[a-z-]+\=(""|"#")/gi, "")
          .replace(/\n\<\/(circle|th)\>/gi, "</$1>")
      ).replace(/^\s+/g, "");
    },
    showSamples(selector, modal, text) {
      var elements = $(selector);
      this.samples = [];
      this.textSample = text || null;
      this.modalSample = modal || "#modal-samples";

      for (var i = 0; i < elements.length; i++) {
        var element = $($(elements[i])[0].outerHTML);
        
        if (element.is(".menu")) {
          element.find(".modal").html("");
          var html = this.formatHtml(element, true);
          var htmlFormatted = hljs.highlight("html", html).value;
        } else {
          var html = this.formatHtml(element, true);
          var htmlFormatted = hljs.highlight("html", html).value;
        }

        if (
          element.is(".menu") ||
          element.is(".modal") ||
          element.is(".toast") ||
          element.is(".container") ||
          element.is(".fixed")
        )
          html = "";

        this.samples.push({
          html: html,
          sourceCode: htmlFormatted,
        });
      }

      Vue.nextTick(() => {
        ui();
        ui(this.modalSample);
        $(this.modalSample).scrollTop(0);
      });
    },
    toastSamples() {
      $("#toasts input").on("click", function () {
        var ids = ["top"];
        var toasts = $("#toasts .toast");

        for (var i = 0; i < ids.length; i++) {
          toasts.removeClass(ids[i]);

          var selector = "#" + ids[i] + "-toasts";
          if ($(selector).is(":checked")) {
            if (["top"].indexOf(ids[i]) != -1) toasts.addClass(ids[i]);
          }
        }
      });
    },
    tabSamples() {
      $("#tabs input").on("click", function () {
        var ids = ["left", "right", "left-align", "center-align", "right-align"];
        var pages = $("#tabs .page");
        var tabs = $("#tabs .tabs");

        for (var i = 0; i < ids.length; i++) {
          pages.removeClass(ids[i]);
          tabs.removeClass(ids[i]);

          var selector = "#" + ids[i] + "-tabs";
          if ($(selector).is(":checked")) {
            if (["left", "right"].indexOf(ids[i]) != -1) pages.addClass(ids[i]);
            if (["left-align", "center-align", "right-align"].indexOf(ids[i]) != -1)
              tabs.addClass(ids[i]);
          }
        }
      });
    },
    chipSamples() {
      $("#chips input").on("click", function () {
        var ids = ["brown", "indigo", "red", "small", "large", "active"];
        var chips = $("#chips nav .chip:not(.border)");
        var chipsBorder = $("#chips nav .chip.border");

        for (var i = 0; i < ids.length; i++) {
          chips.removeClass(ids[i] + "2");
          chips.removeClass(ids[i]);
          chips.removeClass(ids[i] + "-border");
          chips.removeClass(ids[i] + "-text");

          chipsBorder.removeClass(ids[i] + "2");
          chipsBorder.removeClass(ids[i]);
          chipsBorder.removeClass(ids[i] + "-border");
          chipsBorder.removeClass(ids[i] + "-text");

          var selector = "#" + ids[i] + "-chips";
          if ($(selector).is(":checked")) {
            if (["small", "medium", "large", "active"].indexOf(ids[i]) == -1) {
              chips.addClass(ids[i] + "2");
              chips.addClass(ids[i] + "-text");
              chipsBorder.addClass(ids[i] + "-border");
              chipsBorder.addClass(ids[i] + "-text");
            } else {
              chips.addClass(ids[i]);
              chipsBorder.addClass(ids[i]);
            }
          }
        }
      });
    },
    badgeSamples() {
      $("#badges input").on("click", function () {
        var ids = ["blue", "purple", "teal"];
        var badges = $("#badges .badge:not(.border)");
        var badgesBorder = $("#badges .badge.border");

        for (var i = 0; i < ids.length; i++) {
          badges.removeClass(ids[i]);
          badges.removeClass(ids[i] + "-border");
          badges.removeClass(ids[i] + "-text");

          badgesBorder.removeClass(ids[i]);
          badgesBorder.removeClass(ids[i] + "-border");
          badgesBorder.removeClass(ids[i] + "-text");

          var selector = "#" + ids[i] + "-badges";
          if ($(selector).is(":checked")) {
            badges.addClass(ids[i]);
            badgesBorder.addClass(ids[i] + "-border");
            badgesBorder.addClass(ids[i] + "-text");
          }
        }
      });
    },
    listSamples() {
      $("#list input").on("click", function () {
        var ids = ["middle-align", "top-align", "bottom-align", "divider"];
        var rows = $("#list .row");

        rows.removeClass("middle-align");
        rows.removeClass("top-align");
        rows.removeClass("bottom-align");
        rows.removeClass("divider");

        for (var i = 0; i < ids.length; i++) {
          var selector = "#" + ids[i] + "-lists";
          if ($(selector).is(":checked")) {
            rows.addClass(ids[i]);
          }
        }
      });
    },
    tableSamples() {
      $("#table input").on("click", function () {
        var ids = ["small", "large", "center-align", "right-align"];
        var table = $("#table table");

        for (var i = 0; i < ids.length; i++) {
          var selector = "#" + ids[i] + "-tables";
          if ($(selector).is(":checked")) table.addClass(ids[i]);
          else table.removeClass(ids[i]);
        }
      });
    },
    inputSamples() {
      $(
        "#border-inputs,#round-inputs,#fill-inputs,#small-inputs,#medium-inputs,#large-inputs,#extra-inputs,#text-inputs,#password-inputs,#file-inputs"
      ).on("click", function () {
        var ids = [
          "border",
          "fill",
          "round",
          "small",
          "large",
          "extra",
          "text",
          "password",
          "file",
        ];
        for (var i = 0; i < ids.length; i++) {
          var selector = "#" + ids[i] + "-inputs";

          if (["text", "password", "file"].indexOf(ids[i]) !== -1) {
            if ($(selector).is(":checked")) {
              var inputs = $(
                "#inputs input[type='text'], #inputs input[type='password']"
              );
              var files = $("#inputs input[type='file']");
              var labels = $("#inputs .field.label > label");
              var icons = $("#inputs .field.label > i");
              files.remove();

              if (ids[i] == "file") {
                inputs.attr("type", "text");
                labels.html("File");
                icons.html("attach_file");

                for (var j = 0; j < inputs.length; j++)
                  $("<input type='file' />").insertAfter(inputs[j]);
              }

              if (ids[i] == "text") {
                labels.html("Label");
                inputs.attr("type", ids[i]);
                icons.html("search");
              }

              if (ids[i] == "password") {
                labels.html("Password");
                inputs.attr("type", ids[i]);
                icons.html("visibility");
              }
            }
          } else {
            if ($(selector).is(":checked"))
              $("#inputs .field").addClass(ids[i]);
            else $("#inputs .field").removeClass(ids[i]);
          }
        }
        ui();
      });
    },
    selectSamples() {
      $(
        "#border-selects,#round-selects,#fill-selects,#small-selects,#medium-selects,#large-selects,#extra-selects"
      ).on("click", function () {
        var ids = ["border", "fill", "round", "small", "large", "extra"];
        for (var i = 0; i < ids.length; i++) {
          var selector = "#" + ids[i] + "-selects";
          if ($(selector).is(":checked")) $("#selects .field").addClass(ids[i]);
          else $("#selects .field").removeClass(ids[i]);
        }
        ui();
      });
    },
    textareaSamples() {
      $(
        "#border-textareas,#round-textareas,#fill-textareas,#small-textareas,#medium-textareas,#large-textareas,#extra-textareas"
      ).on("click", function () {
        var ids = ["border", "fill", "round", "small", "large", "extra"];
        for (var i = 0; i < ids.length; i++) {
          var selector = "#" + ids[i] + "-textareas";

          if ($(selector).is(":checked"))
            $("#textareas .field").addClass(ids[i]);
          else $("#textareas .field").removeClass(ids[i]);
        }
        ui();
      });
    },
    rowSamples() {
      $(
        "#no-space-rows,#small-space-rows,#medium-space-rows,#large-space-rows"
      ).on("click", function () {
        var ids = ["no-space", "medium-space", "large-space"];
        for (var i = 0; i < ids.length; i++) {
          var selector = "#" + ids[i] + "-rows";
          if ($(selector).is(":checked")) $("#rows .row").addClass(ids[i]);
          else $("#rows .row").removeClass(ids[i]);
        }
      });
    },
    progressSamples() {
      $(
        "#0-progress,#30-progress,#60-progress,#100-progress,#default-progress,#light-green-progress,#orange-progress"
      ).on("click", function () {
        var ids = [0, 30, 60, 100, "light-green", "orange"];
        $("#progress .progress").removeClass("light-green");
        $("#progress .progress").removeClass("orange");

        for (var i = 0; i < ids.length; i++) {
          var selector = "#" + ids[i] + "-progress";

          if ($(selector).is(":checked")) {
            if (["light-green", "orange"].indexOf(ids[i]) != -1)
              $("#progress .progress").addClass(ids[i]);
            else
              document.querySelectorAll("#progress .progress").forEach((x) => ui(x, ids[i]));
          }
        }
      });
    },
    updateMode(mode) {
      domain.updateMode(this.$data, mode);
    }
  }
};
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

.hljs-string {
  color: var(--error) !important;
}

.is-dark .hljs-string {
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

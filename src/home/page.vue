<template lang="pug">
.container
  #menu.menu.left.medium-device.large-device
    .small-space
    img.front.small.circle.no-margin.no-padding(
      :src="'/favicon.png'",
      @click="addHomeScreen()"
    )
    a(@click="updateMenu('#menu', 'top')")
      i arrow_upward
      div Top
    a(@click="updateMenu('#menu', 'bottom')")
      i arrow_downward
      div Bottom
    a(@click="updateMenu('#menu', 'left')")
      i arrow_back
      div Left
    a(@click="updateMenu('#menu', 'right')")
      i arrow_forward
      div Right
    a(@click="updateMenu('#menu')")
      i zoom_out_map
      div Size
    a(@click="updateIcons()")
      i image
      div Icons
    a(@click="updateTheme()")
      i brightness_medium
      div Theme
    a(data-ui="#more")
      i collections
      div Templates
    a(@click="showSamples('#menu')")
      i code
      div Code
    #more.modal.small.left(data-ui="#more")
      h5 Templates
      p.grey-text This templates are only for tests purpose
      .large-space
      a(href="/youtube", v-show="theme == 'is-dark'")
        img.logo-template(:src="'/youtube-dark.png'")
      a(href="/youtube", v-show="theme != 'is-dark'")
        img.logo-template(:src="'/youtube-light.png'")
      .large-divider
      a(href="/netflix")
        img.logo-template(:src="'/netflix.png'")
      .large-divider
      a(href="/gmail", v-show="theme == 'is-dark'")
        img.logo-template(:src="'/gmail-dark.png'")
      a(href="/gmail", v-show="theme != 'is-dark'")
        img.logo-template(:src="'/gmail-light.png'")
      .large-divider
      a(href="/uber", v-show="theme == 'is-dark'")
        img.logo-template(:src="'/uber-dark.png'")
      a(href="/uber", v-show="theme != 'is-dark'")
        img.logo-template(:src="'/uber-light.png'")
  #menu-bottom.menu.bottom.small-device
    a(@click="updateMenu('#menu-bottom')")
      i zoom_out_map
      div Size
    a(@click="updateIcons()")
      i image
      div Icons
    a(@click="updateTheme()")
      i brightness_medium
      div Theme
    a(data-ui="#more-bottom")
      i collections
      div Templates
    a(@click="showSamples('#menu-bottom')")
      i code
      div Code
    #more-bottom.modal.bottom.medium(data-ui="#more-bottom")
      h5 Templates
      p.grey-text This templates are only for tests purpose
      .large-divider
      .row
        .col.s6.middle-align.padding
          a(href="/youtube", v-show="theme == 'is-dark'")
            img.logo-template(:src="'/youtube-dark.png'")
          a(href="/youtube", v-show="theme != 'is-dark'")
            img.logo-template(:src="'/youtube-light.png'")
        .col.s6.middle-align.padding
          a(href="/netflix")
            img.logo-template(:src="'/netflix.png'")
        .col.s6.middle-align.padding
          a(href="/gmail", v-show="theme == 'is-dark'")
            img.logo-template(:src="'/gmail-dark.png'")
          a(href="/gmail", v-show="theme != 'is-dark'")
            img.logo-template(:src="'/gmail-light.png'")
        .col.s6.middle-align.padding
          a(href="/uber", v-show="theme == 'is-dark'")
            img.logo-template(:src="'/uber-dark.png'")
          a(href="/uber", v-show="theme != 'is-dark'")
            img.logo-template(:src="'/uber-light.png'")
  #begin
    .row
      .col.s12
        #container-logo.center-align.middle-align.padding
          img#logo(:src="'/favicon.png'", @click="addHomeScreen()")
        .space
        h4.center-align Beer css!
        h6.center-align Build material design interfaces in record time
        .space
        nav.center-align
          a.button.large.border(
            href="https://www.npmjs.com/package/beercss",
            target="_blank"
          ) NPM
          a.button.large.border(
            href="https://github.com/beercss/beercss",
            target="_blank"
          ) Github
          a.button.large(
            href="https://www.patreon.com/beercss",
            target="_blank"
          ) Support us
    .medium-space
    .large-divider
    #toasts
      #toast1.toast.pink.white-text
        i error
        span Complementary text
      #toast2.toast.orange.white-text
        i warning
        span Complementary text
      #toast3.toast.green.white-text
        i done
        span Complementary text
      #toast4.toast.blue.white-text
        i info
        span Complementary text

    .row
      #badges.col.s12
        .medium-space
        h5
          span Badges
          a.chip.circle
            i(@click="showSamples('#badges nav > a')") code
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
            span.badge.border New
            i help_outline
          a
            span.badge.border.round New
            i home
          a
            span.badge.circle.border 10
            i account_circle
          a
            span.badge.top New
            i search
          a
            span.badge.round.top New
            i notifications
          a
            span.badge.circle.top 10
            i apps
          a
            span.badge.border.top New
            i help_outline
          a
            span.badge.border.round.top New
            i home
          a
            span.badge.circle.border.top 10
            i account_circle
          a
            span.badge.left.top New
            i search
          a
            span.badge.round.left.top New
            i notifications
          a
            span.badge.circle.left.top 10
            i apps
          a
            span.badge.border.left.top New
            i help_outline
          a
            span.badge.border.round.left.top New
            i home
          a
            span.badge.circle.border.left.top 10
            i account_circle
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
            span.badge.border.bottom.right New
            i help_outline
          a
            span.badge.border.round.bottom.right New
            i home
          a
            span.badge.circle.border.bottom.right 10
            i account_circle
          a
            span.badge.bottom New
            i search
          a
            span.badge.round.bottom New
            i notifications
          a
            span.badge.circle.bottom 10
            i apps
          a
            span.badge.border.bottom New
            i help_outline
          a
            span.badge.border.round.bottom New
            i home
          a
            span.badge.circle.border.bottom 10
            i account_circle
          a
            span.badge.left.bottom New
            i search
          a
            span.badge.round.left.bottom New
            i notifications
          a
            span.badge.circle.left.bottom 10
            i apps
          a
            span.badge.border.left.bottom New
            i help_outline
          a
            span.badge.border.round.left.bottom New
            i home
          a
            span.badge.circle.border.left.bottom 10
            i account_circle
        .small-space
      #buttons.col.s12
        .medium-space
        h5
          span Buttons
          a.chip.circle
            i(@click="showSamples('#buttons button')") code
        nav.wrap
          label.radio
            input#default-buttons(
              type="radio",
              name="color-buttons",
              checked="checked"
            )
            span default
          label.radio
            input#green-buttons(type="radio", name="color-buttons")
            span green
          label.radio
            input#orange-buttons(type="radio", name="color-buttons")
            span orange
          label.radio
            input#pink-buttons(type="radio", name="color-buttons")
            span pink
          label.radio
            input#small-buttons(type="radio", name="size-buttons")
            span small
          label.radio
            input#medium-buttons(
              type="radio",
              name="size-buttons",
              checked="checked"
            )
            span medium
          label.radio
            input#large-buttons(type="radio", name="size-buttons")
            span large
        nav.wrap
          button Button
          button
            i search
            span Button
          button
            span Button
            i refresh
          button.round Button
          button.round 
            i place
            span Button
          button.round 
            span Button
            i delete
          button.circle
            i home
          button.circle A
          button.border Button
          button.border 
            i search
            span Button
          button.border
            span Button
            i refresh
          button.border.round Button
          button.border.round 
            i place
            span Button
          button.border.round 
            span Button
            i delete
          button.border.circle
            i home
          button.border.circle B
      #cards.col.s12
        .medium-space
        h5
          span Cards
          a.chip.circle
            i(@click="showSamples('#cards .card:visible')") code
        nav.wrap
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
          .col.s12.m6.l3
            .card
              .row.no-wrap
                .col.min
                  img.circle.large(:src="'/beer-and-woman.jpg'")
                .col
                  h5.no-margin Title
                  div Complementary text
              nav
                button.none Button
          .col.s12.m6.l3
            .card.round
              .row.no-wrap
                .col.min
                  img.circle.large(:src="'/beer-and-woman.jpg'")
                .col
                  h5.no-margin Title
                  div Complementary text
              nav
                button.none Button
          .col.s12.m6.l3
            .card.border
              .row.no-wrap
                .col.min
                  img.circle.large(:src="'/beer-and-woman.jpg'")
                .col
                  h5.no-margin Title
                  div Complementary text
              nav
                button.none Button
          .col.s12.m6.l3
            .card.border.round
              .row.no-wrap
                .col.min
                  img.circle.large(:src="'/beer-and-woman.jpg'")
                .col
                  h5.no-margin Title
                  div Complementary text
              nav
                button.none Button
          .col.s12.m6.l3
            .card.no-padding
              img.responsive.small(:src="'/beer-and-woman.jpg'")
              .padding
                h5.no-margin Title
                div Complementary text
                nav
                  button.none Button
          .col.s12.m6.l3
            .card.no-padding.round
              img.responsive.small(:src="'/beer-and-woman.jpg'")
              .padding
                h5.no-margin Title
                div Complementary text
                nav
                  button.none Button
          .col.s12.m6.l3
            .card.no-padding.border
              img.responsive.small(:src="'/beer-and-woman.jpg'")
              .padding
                h5.no-margin Title
                div Complementary text
                nav
                  button.none Button
          .col.s12.m6.l3
            .card.no-padding.border.round
              img.responsive.small(:src="'/beer-and-woman.jpg'")
              .padding
                h5.no-margin Title
                div Complementary text
                nav
                  button.none Button
          .col.s12.m6.l3
            .card.no-padding
              img.responsive.medium(:src="'/beer-and-woman.jpg'")
              .absolute.bottom.left.right.padding.bottom-shadow.white-text
                h5.no-margin Title
                div Complementary text
                nav
                  button.border.small Button
          .col.s12.m6.l3
            .card.no-padding.round
              img.responsive.medium.round(:src="'/beer-and-woman.jpg'")
              .absolute.bottom.left.right.padding.bottom-shadow.white-text
                h5.no-margin Title
                div Complementary text
                nav
                  button.border.small Button
          .col.s12.m6.l3
            .card.no-padding.border
              img.responsive.medium(:src="'/beer-and-woman.jpg'")
              .absolute.bottom.left.right.padding.bottom-shadow.white-text
                h5.no-margin Title
                div Complementary text
                nav
                  button.border.small Button
          .col.s12.m6.l3
            .card.no-padding.border.round
              img.responsive.medium.round(:src="'/beer-and-woman.jpg'")
              .absolute.bottom.left.right.padding.bottom-shadow.white-text
                h5.no-margin Title
                div Complementary text
                nav
                  button.border.small Button
          .col.s12.l6
            .card.no-padding
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
            .card.no-padding
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
          .col.s12.m6.l3
            .card
              .row.no-wrap
                .col.min
                  video.circle.large(autoplay, loop, muted)
                    source(:src="'/dance.mp4'", type="video/mp4")
                .col
                  h5.no-margin Title
                  div Complementary text
              nav
                button.none Button
          .col.s12.m6.l3
            .card.round
              .row.no-wrap
                .col.min
                  video.circle.large(autoplay, loop, muted)
                    source(:src="'/dance.mp4'", type="video/mp4")
                .col
                  h5.no-margin Title
                  div Complementary text
              nav
                button.none Button
          .col.s12.m6.l3
            .card.border
              .row.no-wrap
                .col.min
                  video.circle.large(autoplay, loop, muted)
                    source(:src="'/dance.mp4'", type="video/mp4")
                .col
                  h5.no-margin Title
                  div Complementary text
              nav
                button.none Button
          .col.s12.m6.l3
            .card.border.round
              .row.no-wrap
                .col.min
                  video.circle.large(autoplay, loop, muted)
                    source(:src="'/dance.mp4'", type="video/mp4")
                .col
                  h5.no-margin Title
                  div Complementary text
              nav
                button.none Button
          .col.s12.m6.l3
            .card.no-padding
              video.responsive.small(autoplay, loop, muted)
                source(:src="'/dance.mp4'", type="video/mp4")
              .padding
                h5.no-margin Title
                div Complementary text
                nav
                  button.none Button
          .col.s12.m6.l3
            .card.no-padding.round
              video.responsive.small(autoplay, loop, muted)
                source(:src="'/dance.mp4'", type="video/mp4")
              .padding
                h5.no-margin Title
                div Complementary text
                nav
                  button.none Button
          .col.s12.m6.l3
            .card.no-padding.border
              video.responsive.small(autoplay, loop, muted)
                source(:src="'/dance.mp4'", type="video/mp4")
              .padding
                h5.no-margin Title
                div Complementary text
                nav
                  button.none Button
          .col.s12.m6.l3
            .card.no-padding.border.round
              video.responsive.small(autoplay, loop, muted)
                source(:src="'/dance.mp4'", type="video/mp4")
              .padding
                h5.no-margin Title
                div Complementary text
                nav
                  button.none Button
          .col.s12.m6.l3
            .card.no-padding
              video.responsive.medium(autoplay, loop, muted)
                source(:src="'/dance.mp4'", type="video/mp4")
              .absolute.bottom.left.right.padding.bottom-shadow.white-text
                h5.no-margin Title
                div Complementary text
                nav
                  button.border.small Button
          .col.s12.m6.l3
            .card.no-padding.round
              video.responsive.medium.round(autoplay, loop, muted)
                source(:src="'/dance.mp4'", type="video/mp4")
              .absolute.bottom.left.right.padding.bottom-shadow.white-text
                h5.no-margin Title
                div Complementary text
                nav
                  button.border.small Button
          .col.s12.m6.l3
            .card.no-padding.border
              video.responsive.medium(autoplay, loop, muted)
                source(:src="'/dance.mp4'", type="video/mp4")
              .absolute.bottom.left.right.padding.bottom-shadow.white-text
                h5.no-margin Title
                div Complementary text
                nav
                  button.border.small Button
          .col.s12.m6.l3
            .card.no-padding.border.round
              video.responsive.medium.round(autoplay, loop, muted)
                source(:src="'/dance.mp4'", type="video/mp4")
              .absolute.bottom.left.right.padding.bottom-shadow.white-text
                h5.no-margin Title
                div Complementary text
                nav
                  button.border.small Button
          .col.s12.l6
            .card.no-padding
              .row.no-wrap.no-space
                .col
                  video.responsive(autoplay, loop, muted)
                    source(:src="'/dance.mp4'", type="video/mp4")
                .col
                  .padding
                    h5 Title
                    div Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    nav
                      button.border Button
          .col.s12.l6
            .card.no-padding
              .row.no-wrap.no-space
                .col
                  video.responsive(autoplay, loop, muted)
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
        .medium-space
        h5
          span Checkboxes
          a.chip.circle
            i(@click="showSamples('#checkboxes .field')") code
        .row
          .col.s12
            .field.middle-align
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
        .medium-space
        h5
          span Chips
          a.chip.circle
            i(@click="showSamples('#chips nav .chip')") code
        nav.wrap
          a.chip Filter
          a.chip
            i.small done
            span Filter
          a.chip.circle
            i search
          a.chip.circle A
          a.chip.active Filter
          a.chip.active
            i.small done
            span Filter
          a.chip.circle.active
            i home
          a.chip.circle.active B
          a.chip.border Filter
          a.chip.border
            i.small done
            span Filter
          a.chip.circle.border
            i refresh
          a.chip.circle.border C
      #colors.col.s12
        .medium-space
        h5 
          span Colors
          a.chip.circle(data-ui="#modal-colors")
            i code
        nav
          button(data-ui="#modal-colors") Colors
      #containers.col.s12
        .medium-space
        h5
          span Containers
          a.chip.circle
            i(@click="showSamples('#containers .container')") code
        nav
          button(@click="updateContainer()") Default
          button(@click="updateContainer('min')") Min
          button(@click="updateContainer('max')") Max
        div(v-show="false")
          .container
      #dropdowns.col.s12
        .medium-space
        h5
          span Dropdowns
          a.chip.circle
            i(@click="showSamples('#dropdowns button')") code
        nav.wrap
          button(data-ui="#dropdown1")
            span Drooooopdoooooooooown
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
            span Dropdown
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
          button.circle.small(data-ui="#dropdown3")
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
          button.circle.small(data-ui="#dropdown4")
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
                      .button.small.border.circle.no-margin 8
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
                      a.button.small.circle.no-margin 17
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
              video.responsive(autoplay, loop, muted)
                source(:src="'/dance.mp4'", type="video/mp4")
      #icons.col.s12
        .medium-space
        h5
          span Icons
          a.chip.circle
            i(@click="showSamples('#icons nav', '#modal-icons')") code
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
      #images.col.s12
        .medium-space
        h5
          span Images
          a.chip.circle
            i(
              @click="showSamples('#images img:visible, #images video:visible,')"
            ) code
        nav.wrap
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
        nav.wrap(v-show="mediaImage == 1")
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
        nav.wrap(v-show="mediaImage == 2")
          a
            video.circle.tiny(autoplay, loop, muted)
              source(:src="'/dance.mp4'", type="video/mp4")
          a
            video.circle.small(autoplay, loop, muted)
              source(:src="'/dance.mp4'", type="video/mp4")
          a
            video.circle.medium(autoplay, loop, muted)
              source(:src="'/dance.mp4'", type="video/mp4")
          a
            video.circle.large(autoplay, loop, muted)
              source(:src="'/dance.mp4'", type="video/mp4")
          a
            video.circle.extra(autoplay, loop, muted)
              source(:src="'/dance.mp4'", type="video/mp4")
          a
            video.round.tiny(autoplay, loop, muted)
              source(:src="'/dance.mp4'", type="video/mp4")
          a
            video.round.small(autoplay, loop, muted)
              source(:src="'/dance.mp4'", type="video/mp4")
          a
            video.round.medium(autoplay, loop, muted)
              source(:src="'/dance.mp4'", type="video/mp4")
          a
            video.round.large(autoplay, loop, muted)
              source(:src="'/dance.mp4'", type="video/mp4")
          a
            video.round.extra(autoplay, loop, muted)
              source(:src="'/dance.mp4'", type="video/mp4")
      #inputs.col.s12
        .medium-space
        h5
          span Inputs
          a.chip.circle
            i(@click="showSamples('#inputs .field')") code
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
            .field.label
              input(type="text")
              label Text
          .col.s12.l4
            .field.label.prefix
              i search
              input(type="text")
              label Text
          .col.s12.l4
            .field.label.sufix
              input(type="text")
              label Text
              i search
          .col.s12.l4
            .field.label
              input(type="text")
              label Text
              span.helper Complementary text
          .col.s12.l4
            .field.label.prefix
              i search
              input(type="text")
              label Text
              span.helper Complementary text
          .col.s12.l4
            .field.label.sufix
              input(type="text")
              label Text
              i search
              span.helper Complementary text
          .col.s12.l4
            .field.label.invalid
              input(type="text")
              label Text
              span.error Error text
          .col.s12.l4
            .field.label.prefix.invalid
              i search
              input(type="text")
              label Text
              span.error Error text
          .col.s12.l4
            .field.label.sufix.invalid
              input(type="text")
              label Text
              i search
              span.error Error text
      #list.col.s12
        .medium-space
        h5
          span Lists
          a.chip.circle
            i(@click="showSamples('#list .row')") code
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
        .medium-space
        h5
          span Loaders
          a.chip.circle
            i(@click="showSamples('#loaders svg')") code
        nav.wrap
          a
            svg.loader.small(viewBox="0 0 66 66")
              circle(fill="none", cx="33", cy="33", r="30")
          a
            svg.loader.medium(viewBox="0 0 66 66")
              circle(fill="none", cx="33", cy="33", r="30")
          a
            svg.loader.large(viewBox="0 0 66 66")
              circle(fill="none", cx="33", cy="33", r="30")
          a
            svg.loader.small.pink(viewBox="0 0 66 66")
              circle(fill="none", cx="33", cy="33", r="30")
          a
            svg.loader.medium.orange(viewBox="0 0 66 66")
              circle(fill="none", cx="33", cy="33", r="30")
          a
            svg.loader.large.yellow(viewBox="0 0 66 66")
              circle(fill="none", cx="33", cy="33", r="30")
      #modals.col.s12
        .medium-space
        h5
          span Modals
          a.chip.circle
            i(@click="showSamples('#modal, #modal-calendar')") code
        nav
          button(data-ui="#modal") Modal
          button(data-ui="#modal-calendar") Calendar
      #navs.col.s12
        .medium-space
        h5
          span Navs
          a.chip.circle
            i(@click="showSamples('#navs nav')") code
        nav
          button Button
          a.chip Filter
          i home
          a
            img.circle(:src="'/beer-and-woman.jpg'")
      #pages.col.s12
        .medium-space
        h5
          span Pages
          a.chip.circle
            i(@click="showSamples('#pages .page')") code
        nav.wrap
          button(@click="updatePage('page left active')") From left
          button(@click="updatePage('page top active')") From top
          button(@click="updatePage('page bottom active')") From bottom
          button(@click="updatePage('page right active')") From right
        div(style="display: none")
          .page
      #radios.col.s12
        .medium-space
        h5
          span Radios
          a.chip.circle
            i(@click="showSamples('#radios .field')") code
        .row
          .col.s12
            .field.middle-align
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
        .medium-space
        h5 
          span Responsive
          a.chip.circle(@click="showSamples('#responsive nav')")
            i code
        div
          nav
            button.small-device.circle
              i phone_android
            button.medium-device.large-device.border.circle
              i phone_android
            button.medium-device.circle
              i tablet_android
            button.small-device.large-device.border.circle
              i tablet_android
            button.large-device.circle
              i laptop_windows
            button.small-device.medium-device.border.circle
              i laptop_windows
      #rows.col.s12
        .medium-space
        h5
          span Rows
          a.chip.circle
            i(@click="showSamples('#rows .row')") code
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
        .space
      #selects.col.s12
        .medium-space
        h5
          span Selects
          a.chip.circle
            i(@click="showSamples('#selects .field')") code
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
        .space
        .row
          .col.s12.l6
            .field.label.sufix
              select
                option Item 1
                option Item 2
                option Item 3
              label.active List
              i arrow_drop_down
          .col.s12.l6
            .field.label.prefix
              i arrow_drop_down
              select
                option Item 1
                option Item 2
                option Item 3
              label.active List
          .col.s12.l6
            .field.label.sufix
              select
                option Item 1
                option Item 2
                option Item 3
              label.active List
              i arrow_drop_down
              span.helper Complementary text
          .col.s12.l6
            .field.label.prefix
              i arrow_drop_down
              select
                option Item 1
                option Item 2
                option Item 3
              label.active List
              span.helper Complementary text
          .col.s12.l6
            .field.label.sufix.invalid
              select
                option Item 1
                option Item 2
                option Item 3
              label.active List
              i arrow_drop_down
              span.error Error text
          .col.s12.l6
            .field.label.prefix.invalid
              i arrow_drop_down
              select
                option Item 1
                option Item 2
                option Item 3
              label.active List
              span.error Error text
      #switches.col.s12
        .medium-space
        h5
          span Switches
          a.chip.circle
            i(@click="showSamples('#switches .field')") code
        .row
          .col.s12
            .field.middle-align
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
        .medium-space
        h5
          span Tables
          a.chip.circle
            i(@click="showSamples('#table table')") code
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
        .medium-space
        h5
          span Tabs
          a.chip.circle
            i(@click="showSamples('#tabs > div')") code
        nav.wrap
          label.radio
            input#default-align-tabs(
              type="radio",
              name="align-tabs",
              checked="checked"
            )
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
            a.active(data-ui="#tab7") 
              span Tab 1
              i home
            a(data-ui="#tab8")
              span Tab 2
              i home
            a(data-ui="#tab9")
              span Tab 3
              i home
          #tab7.page.padding.active
            h5 Tab 1
          #tab8.page.padding
            h5 Tab 2
          #tab9.page.padding
            h5 Tab 3
        div
          .tabs
            a.active(data-ui="#tab10") 
              i.wrap home
              span Tab 1
            a(data-ui="#tab11")
              i.wrap home
              span Tab 2
            a(data-ui="#tab12")
              i.wrap home
              span Tab 3
          #tab10.page.padding.active
            h5 Tab 1
          #tab11.page.padding
            h5 Tab 2
          #tab12.page.padding
            h5 Tab 3
        div
          .tabs
            a.active(data-ui="#tab13") 
              span Tab 1
              i.wrap home
            a(data-ui="#tab14")
              span Tab 2
              i.wrap home
            a(data-ui="#tab15")
              span Tab 3
              i.wrap home
          #tab13.page.padding.active
            h5 Tab 1
          #tab14.page.padding
            h5 Tab 2
          #tab15.page.padding
            h5 Tab 3
      #textareas.col.s12
        .medium-space
        h5
          span Textareas
          a.chip.circle
            i(@click="showSamples('#textareas .field')") code
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
        .space
        .row
          .col.s12.l4
            .field.label.textarea
              textarea
              label Text
          .col.s12.l4
            .field.label.prefix.textarea
              i search
              textarea
              label Text
          .col.s12.l4
            .field.label.sufix.textarea
              textarea
              label Text
              i search
          .col.s12.l4
            .field.label.textarea
              textarea
              label Text
              span.helper Complementary text
          .col.s12.l4
            .field.label.prefix.textarea
              i search
              textarea
              label Text
              span.helper Complementary text
          .col.s12.l4
            .field.label.sufix.textarea
              textarea
              label Text
              i search
              span.helper Complementary text
          .col.s12.l4
            .field.label.invalid.textarea
              textarea
              label Text
              span.error Error text
          .col.s12.l4
            .field.label.prefix.invalid.textarea
              i search
              textarea
              label Text
              span.error Error text
          .col.s12.l4
            .field.label.sufix.invalid.textarea
              textarea
              label Text
              i search
              span.error Error text
      #toasts.col.s12.l6
        .medium-space
        h5
          span Toasts
          a.chip.circle
            i(@click="showSamples('#toasts .toast')") code
        nav.wrap
          button.pink(@click="showToasts('#toast1')") Toast
          button.orange(@click="showToasts('#toast2')") Toast
          button.green(@click="showToasts('#toast3')") Toast
          button.blue(@click="showToasts('#toast4')") Toast
      #tooltips.col.s12.l6
        .medium-space
        h5
          span Tooltips
          a.chip.circle
            i(@click="showSamples('#tooltips nav a')") code
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
        .medium-space
        h5
          span Typography
          a.chip.circle
            i(@click="showSamples('#typography .col.s6 div')") code
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
        .large-divider
        div
          h4.center-align Summary
          #helpers.medium-device.large-device
            h6 Helpers
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
                div circle
                div flat
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
                b Others
                div shadow
                div right-shadow
                div left-shadow
                div bottom-shadow
                div top-shadow
                div small-device
                div medium-device
                div large-device
                div active
                div wrap
                div no-wrap
                div scroll
                div no-scroll
                div wave
                div no-wave
              .col
                b Themes
                div is-dark
                div is-light
            .space
          .row
            .col.s12
              h6 Elements
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
                span.orange-text none
              div
                span chip&nbsp;
                span.grey-text border, circle, active
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
                span.orange-text fill, prefix, sufix, label, invalid, textarea
              div
                span fixed&nbsp;
                span.grey-text left, right, top, bottom, center, middle, small, medium, large, round
              div
                span loader&nbsp;
                span.grey-text small, medium, large
              div
                span menu&nbsp;
                span.grey-text left, right, top, bottom, small, medium, large, border, round, flat
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
                span toast&nbsp;
                span.grey-text small, medium, large, border, round, flat, active
              div 
                span tooltip&nbsp;
                span.grey-text left, right, top, bottom, small, medium, large, border, round, flat
              div 
                span wave&nbsp;
                span.orange-text light, dark
              .space
              div 
                span &lt;body&gt;&nbsp;
                span.grey-text is-light, is-dark
              div 
                span &lt;button&gt;&nbsp;
                span.grey-text small, medium, large, border, round, circle, flat,&nbsp;
                span.orange-text none
              div 
                span &lt;circle&gt;
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
                span &lt;table&gt;&nbsp;
                span.grey-text small, medium, large, border, left-align, center-align, right-align
              div
                span &lt;video&gt;&nbsp;
                span.grey-text small, medium, large, border, round, circle,&nbsp;
                span.orange-text tiny, extra, responsive, empty-state
              .space
              .orange-text * Element unique helpers
          .space
          .row
            .col.s12
              h6 How to trigger elements?
              div Add or remove class "active"
              pre(v-html="htmlSample")
              .space
              div Or call javascript function to activate/deactivate an element
              pre(v-html="jsSample")
              .space
              div Or add attribute "data-ui" and call javascript function, to setup all automatically
              pre(v-html="autoSample")
        .large-divider
        div
          h4.center-align Thank you!
          .space
          .row
            .col.s6.m4.l3.center-align
              a(href="https://www.myrp.com.br", target="_blank")
                img.white.extra.border.circle(:src="'/myrp.png'")
              p Myrp
            .col.s6.m4.l3.center-align
              a(href="https://www.inventti.com.br", target="_blank")
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
          .space
          nav.center-align
            a.button.large(
              href="https://www.patreon.com/beercss",
              target="_blank"
            ) Support us
    #modal-colors.modal.right.large
      nav
        a(data-ui="#modal-colors")
          i arrow_back
        a(data-ui="#modal-colors")
          h5.no-margin Back
      .space
      .row
        .col.s6
          h5 Red
          .red-light-5 red-light-5
          .red-light-4 red-light-4
          .red-light-3 red-light-3
          .red-light-2 red-light-2
          .red-light-1 red-light-1
          .red red
          .red-dark-1 red-dark-1
          .red-dark-2 red-dark-2
          .red-dark-3 red-dark-3
          .red-dark-4 red-dark-4
          .red-border.border red-border
          .red-text red-text
        .col.s6
          h5 Pink
          .pink-light-5 pink-light-5
          .pink-light-4 pink-light-4
          .pink-light-3 pink-light-3
          .pink-light-2 pink-light-2
          .pink-light-1 pink-light-1
          .pink pink
          .pink-dark-1 pink-dark-1
          .pink-dark-2 pink-dark-2
          .pink-dark-3 pink-dark-3
          .pink-dark-4 pink-dark-4
          .pink-border.border pink-border
          .pink-text pink-text
        .col.s6
          h5 Purple
          .purple-light-5 purple-light-5
          .purple-light-4 purple-light-4
          .purple-light-3 purple-light-3
          .purple-light-2 purple-light-2
          .purple-light-1 purple-light-1
          .purple purple
          .purple-dark-1 purple-dark-1
          .purple-dark-2 purple-dark-2
          .purple-dark-3 purple-dark-3
          .purple-dark-4 purple-dark-4
          .purple-border.border purple-border
          .purple-text purple-text
        .col.s6
          h5 Deep-purple
          .deep-purple-light-5 deep-purple-light-5
          .deep-purple-light-4 deep-purple-light-4
          .deep-purple-light-3 deep-purple-light-3
          .deep-purple-light-2 deep-purple-light-2
          .deep-purple-light-1 deep-purple-light-1
          .deep-purple deep-purple
          .deep-purple-dark-1 deep-purple-dark-1
          .deep-purple-dark-2 deep-purple-dark-2
          .deep-purple-dark-3 deep-purple-dark-3
          .deep-purple-dark-4 deep-purple-dark-4
          .deep-purple-border.border deep-purple-border
          .deep-purple-text deep-purple-text
        .col.s6
          h5 Indigo
          .indigo-light-5 indigo-light-5
          .indigo-light-4 indigo-light-4
          .indigo-light-3 indigo-light-3
          .indigo-light-2 indigo-light-2
          .indigo-light-1 indigo-light-1
          .indigo indigo
          .indigo-dark-1 indigo-dark-1
          .indigo-dark-2 indigo-dark-2
          .indigo-dark-3 indigo-dark-3
          .indigo-dark-4 indigo-dark-4
          .indigo-border.border indigo-border
          .indigo-text indigo-text
        .col.s6
          h5 Blue
          .blue-light-5 blue-light-5
          .blue-light-4 blue-light-4
          .blue-light-3 blue-light-3
          .blue-light-2 blue-light-2
          .blue-light-1 blue-light-1
          .blue blue
          .blue-dark-1 blue-dark-1
          .blue-dark-2 blue-dark-2
          .blue-dark-3 blue-dark-3
          .blue-dark-4 blue-dark-4
          .blue-border.border blue-border
          .blue-text blue-text
        .col.s6
          h5 Light-blue
          .light-blue-light-5 light-blue-light-5
          .light-blue-light-4 light-blue-light-4
          .light-blue-light-3 light-blue-light-3
          .light-blue-light-2 light-blue-light-2
          .light-blue-light-1 light-blue-light-1
          .light-blue light-blue
          .light-blue-dark-1 light-blue-dark-1
          .light-blue-dark-2 light-blue-dark-2
          .light-blue-dark-3 light-blue-dark-3
          .light-blue-dark-4 light-blue-dark-4
          .light-blue-border.border light-blue-border
          .light-blue-text light-blue-text
        .col.s6
          h5 Cyan
          .cyan-light-5 cyan-light-5
          .cyan-light-4 cyan-light-4
          .cyan-light-3 cyan-light-3
          .cyan-light-2 cyan-light-2
          .cyan-light-1 cyan-light-1
          .cyan cyan
          .cyan-dark-1 cyan-dark-1
          .cyan-dark-2 cyan-dark-2
          .cyan-dark-3 cyan-dark-3
          .cyan-dark-4 cyan-dark-4
          .cyan-border.border cyan-border
          .cyan-text cyan-text
        .col.s6
          h5 Teal
          .teal-light-5 teal-light-5
          .teal-light-4 teal-light-4
          .teal-light-3 teal-light-3
          .teal-light-2 teal-light-2
          .teal-light-1 teal-light-1
          .teal teal
          .teal-dark-1 teal-dark-1
          .teal-dark-2 teal-dark-2
          .teal-dark-3 teal-dark-3
          .teal-dark-4 teal-dark-4
          .teal-border.border teal-border
          .teal-text teal-text
        .col.s6
          h5 Green
          .green-light-5 green-light-5
          .green-light-4 green-light-4
          .green-light-3 green-light-3
          .green-light-2 green-light-2
          .green-light-1 green-light-1
          .green green
          .green-dark-1 green-dark-1
          .green-dark-2 green-dark-2
          .green-dark-3 green-dark-3
          .green-dark-4 green-dark-4
          .green-border.border green-border
          .green-text green-text
        .col.s6
          h5 Light-green
          .light-green-light-5 light-green-light-5
          .light-green-light-4 light-green-light-4
          .light-green-light-3 light-green-light-3
          .light-green-light-2 light-green-light-2
          .light-green-light-1 light-green-light-1
          .light-green light-green
          .light-green-dark-1 light-green-dark-1
          .light-green-dark-2 light-green-dark-2
          .light-green-dark-3 light-green-dark-3
          .light-green-dark-4 light-green-dark-4
          .light-green-border.border light-green-border
          .light-green-text light-green-text
        .col.s6
          h5 Lime
          .lime-light-5 lime-light-5
          .lime-light-4 lime-light-4
          .lime-light-3 lime-light-3
          .lime-light-2 lime-light-2
          .lime-light-1 lime-light-1
          .lime lime
          .lime-dark-1 lime-dark-1
          .lime-dark-2 lime-dark-2
          .lime-dark-3 lime-dark-3
          .lime-dark-4 lime-dark-4
          .lime-border.border lime-border
          .lime-text lime-text
        .col.s6
          h5 Yellow
          .yellow-light-5 yellow-light-5
          .yellow-light-4 yellow-light-4
          .yellow-light-3 yellow-light-3
          .yellow-light-2 yellow-light-2
          .yellow-light-1 yellow-light-1
          .yellow yellow
          .yellow-dark-1 yellow-dark-1
          .yellow-dark-2 yellow-dark-2
          .yellow-dark-3 yellow-dark-3
          .yellow-dark-4 yellow-dark-4
          .yellow-border.border yellow-border
          .yellow-text yellow-text
        .col.s6
          h5 Amber
          .amber-light-5 amber-light-5
          .amber-light-4 amber-light-4
          .amber-light-3 amber-light-3
          .amber-light-2 amber-light-2
          .amber-light-1 amber-light-1
          .amber amber
          .amber-dark-1 amber-dark-1
          .amber-dark-2 amber-dark-2
          .amber-dark-3 amber-dark-3
          .amber-dark-4 amber-dark-4
          .amber-border.border amber-border
          .amber-text amber-text
        .col.s6
          h5 Orange
          .orange-light-5 orange-light-5
          .orange-light-4 orange-light-4
          .orange-light-3 orange-light-3
          .orange-light-2 orange-light-2
          .orange-light-1 orange-light-1
          .orange orange
          .orange-dark-1 orange-dark-1
          .orange-dark-2 orange-dark-2
          .orange-dark-3 orange-dark-3
          .orange-dark-4 orange-dark-4
          .orange-border.border orange-border
          .orange-text orange-text
        .col.s6
          h5 Deep-orange
          .deep-orange-light-5 deep-orange-light-5
          .deep-orange-light-4 deep-orange-light-4
          .deep-orange-light-3 deep-orange-light-3
          .deep-orange-light-2 deep-orange-light-2
          .deep-orange-light-1 deep-orange-light-1
          .deep-orange deep-orange
          .deep-orange-dark-1 deep-orange-dark-1
          .deep-orange-dark-2 deep-orange-dark-2
          .deep-orange-dark-3 deep-orange-dark-3
          .deep-orange-dark-4 deep-orange-dark-4
          .deep-orange-border.border deep-orange-border
          .deep-orange-text deep-orange-text
        .col.s6
          h5 Brown
          .brown-light-5 brown-light-5
          .brown-light-4 brown-light-4
          .brown-light-3 brown-light-3
          .brown-light-2 brown-light-2
          .brown-light-1 brown-light-1
          .brown brown
          .brown-dark-1 brown-dark-1
          .brown-dark-2 brown-dark-2
          .brown-dark-3 brown-dark-3
          .brown-dark-4 brown-dark-4
          .brown-border.border brown-border
          .brown-text brown-text
        .col.s6
          h5 Grey
          .grey-light-5 grey-light-5
          .grey-light-4 grey-light-4
          .grey-light-3 grey-light-3
          .grey-light-2 grey-light-2
          .grey-light-1 grey-light-1
          .grey grey
          .grey-dark-1 grey-dark-1
          .grey-dark-2 grey-dark-2
          .grey-dark-3 grey-dark-3
          .grey-dark-4 grey-dark-4
          .grey-border.border grey-border
          .grey-text grey-text
        .col.s6
          h5 Blue-grey
          .blue-grey-light-5 blue-grey-light-5
          .blue-grey-light-4 blue-grey-light-4
          .blue-grey-light-3 blue-grey-light-3
          .blue-grey-light-2 blue-grey-light-2
          .blue-grey-light-1 blue-grey-light-1
          .blue-grey blue-grey
          .blue-grey-dark-1 blue-grey-dark-1
          .blue-grey-dark-2 blue-grey-dark-2
          .blue-grey-dark-3 blue-grey-dark-3
          .blue-grey-dark-4 blue-grey-dark-4
          .blue-grey-border.border blue-grey-border
          .blue-grey-text blue-grey-text
        .col.s12
          h5 Black
          .black.grey-text black
          .black-border.border.grey-text black-border
          .black-text.grey-text black-text
          h5 White
          .white.grey-text white
          .white-border.border.grey-text white-border
          .white-text.grey-text white-text
          h5 Transparent
          .transparent.grey-text transparent
          .transparent-border.border.grey-text transparent-border
          .transparent-text.grey-text transparent-text
          h5 Color-1
          .color-1.grey-text color-1
          .color-1-border.border.grey-text color-1-border
          .color-1-text.grey-text color-1-text
          h5 Color-2
          .color-2.grey-text color-2
          .color-2-border.border.grey-text color-2-border
          .color-2-text.grey-text color-2-text
          h5 Color-3
          .color-3.grey-text color-3
          .color-3-border.border.grey-text color-3-border
          .color-3-text.grey-text color-3-text
          h5 Color-4
          .color-4.grey-text color-4
          .color-4-border.border.grey-text color-4-border
          .color-4-text.grey-text color-4-text
          h5 Color-5
          .color-5.grey-text color-5
          .color-5-border.border.grey-text color-5-border
          .color-5-text.grey-text color-5-text

    #modal.modal
      h5 Title
      div Complementary text
      nav
        button.none(@click="updateModal('modal active')") Default
        button.none(@click="updateModal('modal left active')") Left
        button.none(@click="updateModal('modal right active')") Right
        button.none(@click="updateModal('modal top active')") Top
        button.none(@click="updateModal('modal bottom active')") Bottom
        button.none(data-ui="#modal") Close

    #modal-samples.modal.right.large
      nav
        a(data-ui="#modal-samples")
          i arrow_back
        a(data-ui="#modal-samples")
          h5.no-margin Back
      .space
      .card.border(v-for="exemplo in samples")
        div(v-html="exemplo.html")
        .space(v-show="exemplo.html")
        pre(v-html="exemplo.sourceCode")

    #modal-calendar.modal
      .row
        .col.s12.m12.l4
          .grey-text Selected date
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
                  button.small.border.circle.no-margin 8
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
                  button.small.circle.no-margin 17
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
        button.none(data-ui="#modal-calendar") Cancel
        button.none(data-ui="#modal-calendar") Ok

    #modal-icons.modal.right.large
      nav
        a(data-ui="#modal-icons")
          i arrow_back
        a(data-ui="#modal-icons")
          h5.no-margin Back
      .space
      .card.border(v-for="exemplo in samples")
        div(v-html="exemplo.html")
        .space(v-show="exemplo.html")
        pre(v-html="exemplo.sourceCode")
      .space
      a.button.absolute.top.right.margin(
        href="https://material.io/resources/icons/?style=baseline",
        target="_blank"
      ) More icons
</template>

<script>
export default {
  data() {
    return {
      indexOfMenu: 1,
      samples: [],
      htmlSample: null,
      jsSample: null,
      autoSample: null,
      theme: true,
      mediaCard: 1,
      mediaImage: 1,
    };
  },
  watch: {},
  created() {
    window.$layout = null;
  },
  mounted() {
    this.htmlSample = hljs.highlight(
      "html",
      '<div class="modal active">...</div>\n<div class="dropdown active">...</div>\n<div class="overlay active">...</div>\n<div class="page active">...</div>\n<div class="toast active">...</div>'
    ).value;

    this.jsSample = hljs.highlight(
      "html",
      'ui("#modal");\nui("#dropdown");\nui("#overlay");\nui("#page");\nui("#toast");'
    ).value;

    this.autoSample = hljs.highlight(
      "html",
      '<a data-ui="#modal">...</a>\n<a data-ui="#dropdown">...</a>\n<a data-ui="#overlay">...</a>\n<a data-ui="#page">...</a>\n<a data-ui="#toast">...</a>\n\nui();'
    ).value;

    ui();

    this.resetTheme();
    this.badgeSamples();
    this.buttonSamples();
    this.inputSamples();
    this.listSamples();
    this.tableSamples();
    this.tabSamples();
    this.selectSamples();
    this.rowSamples();
    this.textareaSamples();

    setTimeout(() => {
      $("#logo").addClass("active");
    }, 1000);
  },
  methods: {
    resetTheme() {
      document.body.className = "";
    },
    updateTheme() {
      let css = document.body.className;

      if (css.indexOf("is-dark") === -1) {
        document.body.className = "is-dark";
        this.theme = "is-dark";
      } else {
        document.body.className = "";
        this.theme = "";
      }
    },
    addHomeScreen() {
      if (window.beercss && window.beercss.installEvent)
        window.beercss.installEvent.prompt();
    },
    updateMenu(menu, css) {
      var menu = $(menu);
      var dataUis = menu.find("a");
      var modals = menu.find(".modal");

      $(modals).removeClass("active");
      $(dataUis).removeClass("active");

      if (!css) {
        var sizes = ["small", "medium", "large"];

        this.indexOfMenu = this.indexOfMenu + 1;
        if (!sizes[this.indexOfMenu]) this.indexOfMenu = 0;

        css = sizes[this.indexOfMenu];
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

      return process(
        tag[0].outerHTML
          .replace(/\s+(onclick|style)\="[^\"]*"/gi, "")
          .replace(/\s+id\="(\w+)"/gi, ' id="$1-id"')
          .replace(/\s+data-ui\="#(\w+)"/gi, ' data-ui="#$1-id"')
          .replace(/\s+[a-z-]+\=(""|"#")/gi, "")
          .replace(/\n\<\/(circle|th)\>/gi, "</$1>")
      ).replace(/^\s+/g, "");
    },
    showSamples(selector, modal) {
      var elements = $(selector);
      this.samples = [];
      for (var i = 0; i < elements.length; i++) {
        var html = this.formatHtml($(elements[i]), true);
        var htmlFormatted = hljs.highlight("html", html).value;

        if (
          $(elements[i]).is(".menu") ||
          $(elements[i]).is(".modal") ||
          $(elements[i]).is(".toast") ||
          $(elements[i]).is(".container")
        )
          html = "";

        this.samples.push({
          html: html,
          sourceCode: htmlFormatted,
        });
      }

      Vue.nextTick(() => {
        ui();
        ui(modal || "#modal-samples");
        $(modal || "#modal-samples").scrollTop(0);
      });
    },
    showToasts(selector) {
      if (selector) {
        ui(selector);
        return;
      }

      ui("#toast1");
      ui("#toast2");
      ui("#toast3");
      ui("#toast4");
    },
    tabSamples() {
      $("#tabs input").on("click", function () {
        var ids = ["left", "right", "center-align", "right-align"];
        var pages = $("#tabs .page");
        var tabs = $("#tabs .tabs");

        for (var i = 0; i < ids.length; i++) {
          pages.removeClass(ids[i]);
          tabs.removeClass(ids[i]);

          var selector = "#" + ids[i] + "-tabs";
          if ($(selector).is(":checked")) {
            if (["left", "right"].indexOf(ids[i]) != -1) pages.addClass(ids[i]);
            if (["center-align", "right-align"].indexOf(ids[i]) != -1)
              tabs.addClass(ids[i]);
          }
        }
      });
    },
    buttonSamples() {
      $("#buttons input").on("click", function () {
        var ids = ["green", "orange", "pink", "small", "large"];
        var buttons = $("#buttons button:not(.border)");
        var buttonsBorder = $("#buttons button.border");

        for (var i = 0; i < ids.length; i++) {
          buttons.removeClass(ids[i]);
          buttons.removeClass(ids[i] + "-border");
          buttons.removeClass(ids[i] + "-text");

          buttonsBorder.removeClass(ids[i]);
          buttonsBorder.removeClass(ids[i] + "-border");
          buttonsBorder.removeClass(ids[i] + "-text");

          var selector = "#" + ids[i] + "-buttons";
          if ($(selector).is(":checked")) {
            buttons.addClass(ids[i]);
            if (["small", "medium", "large"].indexOf(ids[i]) == -1) {
              buttonsBorder.addClass(ids[i] + "-border");
              buttonsBorder.addClass(ids[i] + "-text");
            } else {
              buttonsBorder.addClass(ids[i]);
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
        "#border-inputs,#round-inputs,#fill-inputs,#small-inputs,#medium-inputs,#large-inputs,#text-inputs,#password-inputs,#file-inputs"
      ).on("click", function () {
        var ids = [
          "border",
          "fill",
          "round",
          "small",
          "large",
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
                labels.html("Choose a file");
                icons.html("attach_file");

                for (var j = 0; j < inputs.length; j++)
                  $("<input type='file' />").insertAfter(inputs[j]);
              }

              if (ids[i] == "text") {
                labels.html("Text");
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
              $("#inputs .field.label").addClass(ids[i]);
            else $("#inputs .field.label").removeClass(ids[i]);
          }
        }
      });
    },
    selectSamples() {
      $(
        "#border-selects,#round-selects,#fill-selects,#small-selects,#medium-selects,#large-selects"
      ).on("click", function () {
        var ids = ["border", "fill", "round", "small", "large"];
        for (var i = 0; i < ids.length; i++) {
          var selector = "#" + ids[i] + "-selects";
          if ($(selector).is(":checked"))
            $("#selects .field.label").addClass(ids[i]);
          else $("#selects .field.label").removeClass(ids[i]);
        }
      });
    },
    textareaSamples() {
      $(
        "#border-textareas,#round-textareas,#fill-textareas,#small-textareas,#medium-textareas,#large-textareas"
      ).on("click", function () {
        var ids = ["border", "fill", "round", "small", "large"];
        for (var i = 0; i < ids.length; i++) {
          var selector = "#" + ids[i] + "-textareas";

          if ($(selector).is(":checked"))
            $("#textareas .field.label").addClass(ids[i]);
          else $("#textareas .field.label").removeClass(ids[i]);
        }
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
  },
};
</script>

<style>
#logo {
  display: none;
  max-width: 100%;
  width: 360px;
  border-radius: 50%;
}

#logo.active {
  display: inline-block;
  animation: logo-intro 1s;
}

#container-logo {
  height: 360px;
}

pre {
  overflow: auto;
  padding: 8px;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.1);
}

.is-dark pre {
  background-color: rgba(255, 255, 255, 0.1);
}

pre * {
  vertical-align: text-bottom;
}

.hljs-string {
  color: #e91e63 !important;
}

.is-dark .hljs-string {
  color: #ff9800 !important;
}

#rows .row {
  border: 1px solid #9e9e9e50;
}

#rows .col {
  border: 2px solid #9e9e9e50;
}

#modal-colors .border {
  border: 2px solid;
}

#modal-colors .col > div {
  padding: 12px;
}

.logo-template {
  width: auto;
  height: 24px;
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

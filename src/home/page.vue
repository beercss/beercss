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
    a(@click="showSamples('#menu')")
      i code
      div Code
    a(data-ui="#more")
      i more_vert
      div More
    #more.modal.small.left(data-ui="#more")
      b More
      p Item 1
      p Item 2
      p Item 3
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
    a(@click="showSamples('#menu-bottom')")
      i code
      div Code
    a(data-ui="#more-bottom")
      i more_vert
      div More
    #more-bottom.modal.small.bottom(data-ui="#more-bottom")
      b More
      p Item 1
      p Item 2
      p Item 3
  #begin
    .row
      .col.s12
        .center-align
          .h4 
            span Beer css!
          .h6 Build material design interfaces in record time
        #container-logo.center-align.middle-align.padding
          img#logo(:src="'/favicon.png'")
        nav.center-align
          a.btn.large.border(
            href="https://www.npmjs.com/package/beercss",
            target="_blank"
          ) NPM
          a.btn.large.border(
            href="https://github.com/leonardorafael/beercss",
            target="_blank"
          ) Github
          a.btn.large(href="https://www.patreon.com/beercss", target="_blank") Support us
        .space
        .center-align An open source project created by Everton and Leonardo
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
        h5
          span Badges
          a.chip.circle
            i(@click="showSamples('#badges nav > a')") code
        .small-space
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
        h5
          span Buttons
          a.chip.circle
            i(@click="showSamples('#buttons .btn, #button button')") code
        nav.wrap
          a.btn Button
          a.btn
            i search
            span Button
          a.btn
            span Button
            i refresh
          a.btn.round Button
          a.btn.round 
            i place
            span Button
          a.btn.round 
            span Button
            i delete
          a.btn.circle
            i add
          a.btn.circle
            i edit
          a.btn.circle
            i home
          a.btn.border Button
          a.btn.border 
            i search
            span Button
          a.btn.border
            span Button
            i refresh
          a.btn.border.round Button
          a.btn.border.round 
            i place
            span Button
          a.btn.border.round 
            span Button
            i delete
          a.btn.border.circle
            i add
          a.btn.border.circle
            i edit
          a.btn.border.circle
            i home
      #chips.col.s12
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
          a.chip.active Filter
          a.chip.active
            i.small done
            span Filter
          a.chip.circle.active
            i home
          a.chip.border Filter
          a.chip.border
            i.small done
            span Filter
          a.chip.circle.border
            i refresh
      #colors.col.s12
        h5 
          span Colors
          a.chip.circle(data-ui="#modal-colors")
            i code
        nav
          a.btn(data-ui="#modal-colors") Colors
      #dropdowns.col.s12
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
              a.row.nowrap.middle-align
                .col.min
                  i home
                .col Title
              a.row.nowrap.middle-align
                .col.min
                  i home
                .col
                  div Title
                  label Complementary text
              a.row.nowrap.middle-align
                .col.min
                  img.circle.tiny(:src="'/beer-and-woman.jpg'")
                .col Title
              a.row.nowrap.middle-align
                .col.min
                  img.circle.tiny(:src="'/beer-and-woman.jpg'")
                .col
                  div Title
                  label Complementary text
          button(data-ui="#dropdown2")
            span Dropdown
            i arrow_drop_down
            #dropdown2.dropdown.nowrap(data-ui="#dropdown2")
              a Title
              a
                div Title
                label Complementary text
              a.row.nowrap.middle-align
                .col.min
                  i home
                .col Title
              a.row.nowrap.middle-align
                .col.min
                  i home
                .col
                  div Title
                  label Complementary text
              a.row.nowrap.middle-align
                .col.min
                  img.circle.tiny(:src="'/beer-and-woman.jpg'")
                .col Title
              a.row.nowrap.middle-align
                .col.min
                  img.circle.tiny(:src="'/beer-and-woman.jpg'")
                .col
                  div Title
                  label Complementary text
          button.circle.small(data-ui="#dropdown3")
            i arrow_back
            #dropdown3.dropdown.left.nowrap(data-ui="#dropdown3")
              a Title
              a
                div Title
                label Complementary text
              a.row.nowrap.middle-align
                .col.min
                  i home
                .col Title
              a.row.nowrap.middle-align
                .col.min
                  i home
                .col
                  div Title
                  label Complementary text
              a.row.nowrap.middle-align
                .col.min
                  img.circle.tiny(:src="'/beer-and-woman.jpg'")
                .col Title
              a.row.nowrap.middle-align
                .col.min
                  img.circle.tiny(:src="'/beer-and-woman.jpg'")
                .col
                  div Title
                  label Complementary text
          button.circle.small(data-ui="#dropdown4")
            i arrow_forward
            #dropdown4.dropdown.right.nowrap(data-ui="#dropdown4")
              a Title
              a
                div Title
                label Complementary text
              a.row.nowrap.middle-align
                .col.min
                  i home
                .col Title
              a.row.nowrap.middle-align
                .col.min
                  i home
                .col
                  div Title
                  label Complementary text
              a.row.nowrap.middle-align
                .col.min
                  img.circle.tiny(:src="'/beer-and-woman.jpg'")
                .col Title
              a.row.nowrap.middle-align
                .col.min
                  img.circle.tiny(:src="'/beer-and-woman.jpg'")
                .col
                  div Title
                  label Complementary text
          button(data-ui="#dropdown5") 
            span Calendar
            #dropdown5.dropdown.small-padding.nowrap(data-ui="#dropdown5")
              .row.nowrap
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
                      a.btn.none 1
                    td
                      a.btn.none 2
                    td
                      a.btn.none 3
                    td
                      a.btn.none 4
                    td
                      a.btn.none 5
                    td
                      a.btn.none 6
                    td
                      a.btn.none 7
                  tr
                    td
                      a.btn.small.border.circle.no-margin 8
                    td
                      a.btn.none 9
                    td
                      a.btn.none 10
                    td
                      a.btn.none 11
                    td
                      a.btn.none 12
                    td
                      a.btn.none 13
                    td
                      a.btn.none 14
                  tr
                    td
                      a.btn.none 15
                    td
                      a.btn.none 16
                    td
                      a.btn.small.circle.no-margin 17
                    td
                      a.btn.none 18
                    td
                      a.btn.none 19
                    td
                      a.btn.none 20
                    td
                      a.btn.none 21
                  tr
                    td
                      a.btn.none 22
                    td
                      a.btn.none 23
                    td
                      a.btn.none 24
                    td
                      a.btn.none 25
                    td
                      a.btn.none 26
                    td
                      a.btn.none 27
                    td
                      a.btn.none 28
                  tr
                    td
                      a.btn.none 29
                    td
                      a.btn.none 30
                    td
                      a.btn.none 31
                    td 1
                    td 2
                    td 3
                    td 4
      #icons.col.s12
        h5
          span Icons
          a.chip.circle
            i(@click="showSamples('#icons nav', '#modal-icons')") code
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
        .space
      #images.col.s12
        h5
          span Images
          a.chip.circle
            i(@click="showSamples('#images img')") code
        nav.wrap
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
      #loaders.col.s12
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
        h5
          span Modals
          a.chip.circle
            i(@click="showSamples('#modal, #modal-calendar')") code
        nav
          a.btn(data-ui="#modal") Modal
          a.btn(data-ui="#modal-calendar") Calendar
      #navs.col.s12
        h5
          span Navs
          a.chip.circle
            i(@click="showSamples('#navs nav')") code
        nav
          a.btn Button
          a.chip Filter
          i home
          a
            img.circle(:src="'/beer-and-woman.jpg'")
      #pages.col.s12
        h5
          span Pages
          a.chip.circle
            i(@click="showSamples('#pages .page')") code
        nav.wrap
          a.btn(
            onclick="$('#begin, #pages .page').attr('class', 'page left active');"
          ) From left
          a.btn(
            onclick="$('#begin, #pages .page').attr('class', 'page top active');"
          ) From top
          a.btn(
            onclick="$('#begin, #pages .page').attr('class', 'page bottom active');"
          ) From bottom
          a.btn(
            onclick="$('#begin, #pages .page').attr('class', 'page right active');"
          ) From right
        div(style="display: none")
          .page
      #rows.col.s12
        h5
          span Rows
          a.chip.circle
            i(@click="showSamples('#rows .row')") code
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
        .medium-space
        .row
          .col.s6 1
          .col.s6 2
        .medium-space
        .row
          .col.s12 1
        .medium-space
        .row
          .col.s12.m6.l3 1
          .col.s12.m6.l3 2
          .col.s12.m6.l3 3
          .col.s12.m6.l3 4
        .medium-space
        .row.nowrap
          .col max
          .col max
          .col max
        .medium-space
        .row.nowrap
          .col.min min
          .col.min min
          .col.min min
        .medium-space
        .row.nowrap
          .col.min min
          .col max
          .col.min min
        .space
      #tabs.col.s12
        h5
          span Tabs
          a.chip.circle
            i(@click="showSamples('#tabs > div')") code
        div
          .tabs
            a.active(data-ui="#tab1") Tab 1
            a(data-ui="#tab2") Tab 2
            a(data-ui="#tab3") Tab 3
          #tab1.page.right.padding.active
            h5 Tab 1
          #tab2.page.right.padding
            h5 Tab 2
          #tab3.page.right.padding
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
          #tab4.page.right.padding.active
            h5 Tab 1
          #tab5.page.right.padding
            h5 Tab 2
          #tab6.page.right.padding
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
          #tab7.page.right.padding.active
            h5 Tab 1
          #tab8.page.right.padding
            h5 Tab 2
          #tab9.page.right.padding
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
          #tab10.page.right.padding.active
            h5 Tab 1
          #tab11.page.right.padding
            h5 Tab 2
          #tab12.page.right.padding
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
          #tab13.page.right.padding.active
            h5 Tab 1
          #tab14.page.right.padding
            h5 Tab 2
          #tab15.page.right.padding
            h5 Tab 3
      #toasts.col.s12.l6
        h5
          span Toasts
          a.chip.circle
            i(@click="showSamples('#toasts .toast')") code
        nav.wrap
          a.pink.btn(@click="showToasts('#toast1')") Toast
          a.orange.btn(@click="showToasts('#toast2')") Toast
          a.green.btn(@click="showToasts('#toast3')") Toast
          a.blue.btn(@click="showToasts('#toast4')") Toast
      .col.s12.l6
        h5
          span Tooltips
          a.chip.circle
            i(@click="showSamples('#tooltips a')") code
        nav#tooltips.wrap
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
    #typography.row
      .col.s12
        h5
          span Typography
          a.chip.circle
            i(@click="showSamples('#typography .col.s6 div')") code
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
    #cards.row
      .col.s12
        h5
          span Cards
          a.chip.circle
            i(@click="showSamples('#cards .card')") code
      .col.s12.m6.l3
        .card
          .row.nowrap
            .col.min
              img.circle.large(:src="'/beer-and-woman.jpg'")
            .col
              h5.no-margin Title
              div Complementary text
          nav
            a.btn.none Link
      .col.s12.m6.l3
        .card.round
          .row.nowrap
            .col.min
              img.circle.large(:src="'/beer-and-woman.jpg'")
            .col
              h5.no-margin Title
              div Complementary text
          nav
            a.btn.none Link
      .col.s12.m6.l3
        .card.border
          .row.nowrap
            .col.min
              img.circle.large(:src="'/beer-and-woman.jpg'")
            .col
              h5.no-margin Title
              div Complementary text
          nav
            a.btn.none Link
      .col.s12.m6.l3
        .card.border.round
          .row.nowrap
            .col.min
              img.circle.large(:src="'/beer-and-woman.jpg'")
            .col
              h5.no-margin Title
              div Complementary text
          nav
            a.btn.none Link
      .col.s12.m6.l3
        .card.no-padding
          img.responsive.small(:src="'/beer-and-woman.jpg'")
          .padding
            h5.no-margin Title
            div Complementary text
            nav
              a.btn.none Link
      .col.s12.m6.l3
        .card.no-padding.round
          img.responsive.small(:src="'/beer-and-woman.jpg'")
          .padding
            h5.no-margin Title
            div Complementary text
            nav
              a.btn.none Link
      .col.s12.m6.l3
        .card.no-padding.border
          img.responsive.small(:src="'/beer-and-woman.jpg'")
          .padding
            h5.no-margin Title
            div Complementary text
            nav
              a.btn.none Link
      .col.s12.m6.l3
        .card.no-padding.border.round
          img.responsive.small(:src="'/beer-and-woman.jpg'")
          .padding
            h5.no-margin Title
            div Complementary text
            nav
              a.btn.none Link
      .col.s12.m6.l3
        .card.no-padding
          img.responsive.medium(:src="'/beer-and-woman.jpg'")
          .absolute.bottom.left.right.padding.bottom-shadow.white-text
            h5.no-margin Title
            div Complementary text
            nav
              a.btn.border.small Link
      .col.s12.m6.l3
        .card.no-padding.round
          img.responsive.medium.round(:src="'/beer-and-woman.jpg'")
          .absolute.bottom.left.right.padding.bottom-shadow.white-text
            h5.no-margin Title
            div Complementary text
            nav
              a.btn.border.small Link
      .col.s12.m6.l3
        .card.no-padding.border
          img.responsive.medium(:src="'/beer-and-woman.jpg'")
          .absolute.bottom.left.right.padding.bottom-shadow.white-text
            h5.no-margin Title
            div Complementary text
            nav
              a.btn.border.small Link
      .col.s12.m6.l3
        .card.no-padding.border.round
          img.responsive.medium.round(:src="'/beer-and-woman.jpg'")
          .absolute.bottom.left.right.padding.bottom-shadow.white-text
            h5.no-margin Title
            div Complementary text
            nav
              a.btn.border.small Link
      .col.s12.l6
        .card.no-padding
          .row.nowrap
            .col
              img.responsive(:src="'/beer-and-woman.jpg'")
            .col
              .padding
                h5 Title
                div Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                nav
                  a.btn.border Link
      .col.s12.l6
        .card.no-padding
          .row.nowrap
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
                  a.btn.border Link
    .row
      .col.s12.l6
        .card
          .h5 Title
          div 
            span Generated by&nbsp;
            a.link.b(target="_blank", href="https://www.chartjs.org/") chart.js
          .space
          div
            canvas#grafico0
          nav
            a.btn.none Link 1
            a.btn.none Link 2
      .col.s12.l6
        .card
          .h5 Title
          div 
            span Generated by&nbsp;
            a.link.b(target="_blank", href="https://www.chartjs.org/") chart.js
          .space
          div
            canvas#grafico1
          nav
            a.btn.none Link 1
            a.btn.none Link 2
    .row
      .col.s12
        h5
          span Lists
          a.chip.circle
            i(@click="showSamples('#list .row')") code
        #list.card
          nav.wrap
            label
              input#top-align-lists(type="radio", name="align-lists")
              span top-align
            label
              input#middle-align-lists(
                type="radio",
                name="align-lists",
                checked="checked"
              )
              span middle-align
            label
              input#bottom-align-lists(type="radio", name="align-lists")
              span bottom-align
            label
              input#divider-lists(type="checkbox", name="divider-lists")
              span divider
          .space
          label.large-space.middle-align Today
          .row.nowrap.middle-align
            .col.min
              i.light-green-text check_circle
            .col
              div Title
              label Complementary text
            .col.min
              nav
                a.btn.none Link
                a.btn.none
                  i more_vert

          .row.nowrap.middle-align
            .col.min
              i.orange-text warning
            .col
              div Title
              label Complementary text
            .col.min
              nav
                a.btn.none Link
                a.btn.none
                  i more_vert
          .row.nowrap.middle-align
            .col.min
              i.grey-text schedule
            .col
              div Title
              label Complementary text
            .col.min
              nav
                a.btn.none Link
                a.btn.none
                  i more_vert
          label.large-space.middle-align Yesterday
          .row.nowrap.middle-align
            .col.min
              input(type="checkbox")
            .col
              div Title
              label Complementary text
            .col.min
              nav
                a.btn.none Link
                a.btn.none
                  i more_vert
          .row.nowrap.middle-align
            .col.min
              input(type="checkbox")
            .col
              div Title
              label Complementary text
            .col.min
              nav
                a.btn.none Link
                a.btn.none
                  i more_vert
          .row.nowrap.middle-align
            .col.min
              input(type="checkbox")
            .col
              div Title
              label Complementary text
            .col.min
              nav
                a.btn.none Link
                a.btn.none
                  i more_vert
          label.large-space.middle-align Older
          .row.nowrap.middle-align
            .col.min
              img.circle.tiny(:src="'/beer-and-woman.jpg'")
            .col
              div Title
              label Complementary text
            .col.min
              nav
                a.btn.none Link
                a.btn.none
                  i more_vert
          .row.nowrap.middle-align
            .col.min
              img.circle.tiny(:src="'/beer-and-woman.jpg'")
            .col
              div Title
              label Complementary text
            .col.min
              nav
                a.btn.none Link
                a.btn.none
                  i more_vert
          .row.nowrap.middle-align
            .col.min
              img.circle.tiny(:src="'/beer-and-woman.jpg'")
            .col
              div Title
              label Complementary text
            .col.min
              nav
                a.btn.none Link
                a.btn.none
                  i more_vert
        h5
          span Tables
          a.chip.circle
            i(@click="showSamples('#table table')") code
        #table.card
          nav.wrap
            label
              input#small-tables(type="radio", name="size-tables")
              span small
            label
              input#medium-tables(
                type="radio",
                name="size-tables",
                checked="checked"
              )
              span medium
            label
              input#large-tables(type="radio", name="size-tables")
              span large
            label
              input#left-align-tables(
                type="radio",
                name="align-tables",
                checked="checked"
              )
              span left-align
            label
              input#center-align-tables(type="radio", name="align-tables")
              span center-align
            label
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
                  input(type="checkbox")
                td Line 1
                td Line 1
                td Line 1
                td
                  nav.right-align
                    a.btn.none Link
                    a.btn.none
                      i more_vert
              tr
                td
                  input(type="checkbox")
                td Line 2
                td Line 2
                td Line 2
                td
                  nav.right-align
                    a.btn.none Link
                    a.btn.none
                      i more_vert
              tr
                td
                  input(type="checkbox")
                td Line 3
                td Line 3
                td Line 3
                td
                  nav.right-align
                    a.btn.none Link
                    a.btn.none
                      i more_vert

        h5
          span Inputs
          a.chip.circle
            i(@click="showSamples('#inputs .field')") code
        #inputs.card
          nav.wrap
            label
              input#border-inputs(type="checkbox")
              span border
            label
              input#round-inputs(type="checkbox")
              span round
            label
              input#fill-inputs(type="checkbox")
              span fill
            label
              input#small-inputs(type="radio", name="size-inputs")
              span small
            label
              input#medium-inputs(
                type="radio",
                name="size-inputs",
                checked="checked"
              )
              span medium
            label
              input#large-inputs(type="radio", name="size-inputs")
              span large
            label
              input#text-inputs(
                type="radio",
                name="type-inputs",
                checked="checked"
              )
              span text
            label
              input#password-inputs(type="radio", name="type-inputs")
              span password
            label
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

        h5
          span Selects
          a.chip.circle
            i(@click="showSamples('#selects .field')") code
        #selects.card
          nav.wrap
            label
              input#border-selects(type="checkbox")
              span border
            label
              input#round-selects(type="checkbox")
              span round
            label
              input#fill-selects(type="checkbox")
              span fill
            label
              input#small-selects(type="radio", name="size-selects")
              span small
            label
              input#medium-selects(
                type="radio",
                name="size-selects",
                checked="checked"
              )
              span medium
            label
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
        h5
          span Checkboxes
          a.chip.circle
            i(@click="showSamples('#checkboxes .field')") code
        #checkboxes.card
          .row
            .col.s12
              .field.middle-align
                nav
                  label
                    input(type="checkbox")
                    span Item 1
                  label
                    input(type="checkbox")
                    span Item 2
                  label
                    input(type="checkbox")
                    span Item 3
            .col.s12
              .field.label.middle-align
                label.active A question?
                nav
                  label
                    input(type="checkbox")
                    span Item 1
                  label
                    input(type="checkbox")
                    span Item 2
                  label
                    input(type="checkbox")
                    span Item 3
            .col.s12
              .field.label.middle-align
                label.active A question?
                nav
                  label
                    input(type="checkbox")
                    span Item 1
                  label
                    input(type="checkbox")
                    span Item 2
                  label
                    input(type="checkbox")
                    span Item 3
                span.helper Complementary text
            .col.s12.l6
              .field.label.middle-align.invalid
                label.active A question?
                nav
                  label
                    input(type="checkbox")
                    span Item 1
                  label
                    input(type="checkbox")
                    span Item 2
                  label
                    input(type="checkbox")
                    span Item 3
                span.error Error text
        h5
          span Switches
          a.chip.circle
            i(@click="showSamples('#switches .field')") code
        #switches.card
          .row
            .col.s12
              .field.middle-align
                nav
                  label
                    input.switch(type="checkbox")
                    span Item 1
                  label
                    input.switch(type="checkbox")
                    span Item 2
                  label
                    input.switch(type="checkbox")
                    span Item 3
            .col.s12
              .field.label.middle-align
                label.active A question?
                nav
                  label
                    input.switch(type="checkbox")
                    span Item 1
                  label
                    input.switch(type="checkbox")
                    span Item 2
                  label
                    input.switch(type="checkbox")
                    span Item 3
            .col.s12
              .field.label.middle-align
                label.active A question?
                nav
                  label
                    input.switch(type="checkbox")
                    span Item 1
                  label
                    input.switch(type="checkbox")
                    span Item 2
                  label
                    input.switch(type="checkbox")
                    span Item 3
                span.helper Complementary text
            .col.s12.l6
              .field.label.middle-align.invalid
                label.active A question?
                nav
                  label
                    input.switch(type="checkbox")
                    span Item 1
                  label
                    input.switch(type="checkbox")
                    span Item 2
                  label
                    input.switch(type="checkbox")
                    span Item 3
                span.error Error text
        h5
          span Radios
          a.chip.circle
            i(@click="showSamples('#radios .field')") code
        #radios.card
          .row
            .col.s12
              .field.middle-align
                nav
                  label
                    input(type="radio", name="radio")
                    span Item 1
                  label
                    input(type="radio", name="radio")
                    span Item 2
                  label
                    input(type="radio", name="radio")
                    span Item 3
            .col.s12
              .field.label.middle-align
                label.active A question?
                nav
                  label
                    input(type="radio", name="radio")
                    span Item 1
                  label
                    input(type="radio", name="radio")
                    span Item 2
                  label
                    input(type="radio", name="radio")
                    span Item 3
            .col.s12
              .field.label.middle-align
                label.active A question?
                nav
                  label
                    input(type="radio", name="radio")
                    span Item 1
                  label
                    input(type="radio", name="radio")
                    span Item 2
                  label
                    input(type="radio", name="radio")
                    span Item 3
                span.helper Complementary text
            .col.s12
              .field.label.middle-align.invalid
                label.active A question?
                nav
                  label
                    input(type="radio", name="radio")
                    span Item 1
                  label
                    input(type="radio", name="radio")
                    span Item 2
                  label
                    input(type="radio", name="radio")
                    span Item 3
                span.error Error text

        #modal-colors.modal.right.large
          nav
            a(data-ui="#modal-colors")
              i arrow_back
            a.h5(data-ui="#modal-colors") Back
          nav
            label
              input(
                type="radio",
                name="radio",
                checked="checked",
                @click="updateColors(false)"
              )
              span background
            label
              input(type="radio", name="radio", @click="updateColors(true)")
              span text
          span.space
          .row.white-text.small-text
            .col.s6
              .red-light-5 #ffebee red-light-5
              .red-light-4 #ffcdd2 red-light-4
              .red-light-3 #ef9a9a red-light-3
              .red-light-2 #e57373 red-light-2
              .red-light-1 #ef5350 red-light-1
              .red #f44336 red
              .red-dark-1 #e53935 red-dark-1
              .red-dark-2 #d32f2f red-dark-2
              .red-dark-3 #c62828 red-dark-3
              .red-dark-4 #b71c1c red-dark-4
            .col.s6
              .pink-light-5 #fce4ec pink-light-5
              .pink-light-4 #f8bbd0 pink-light-4
              .pink-light-3 #f48fb1 pink-light-3
              .pink-light-2 #f06292 pink-light-2
              .pink-light-1 #ec407a pink-light-1
              .pink #e91e63 pink
              .pink-dark-1 #d81b60 pink-dark-1
              .pink-dark-2 #c2185b pink-dark-2
              .pink-dark-3 #ad1457 pink-dark-3
              .pink-dark-4 #880e4f pink-dark-4
            .col.s6
              .purple-light-5 #f3e5f5 purple-light-5
              .purple-light-4 #e1bee7 purple-light-4
              .purple-light-3 #ce93d8 purple-light-3
              .purple-light-2 #ba68c8 purple-light-2
              .purple-light-1 #ab47bc purple-light-1
              .purple #9c27b0 purple
              .purple-dark-1 #8e24aa purple-dark-1
              .purple-dark-2 #7b1fa2 purple-dark-2
              .purple-dark-3 #6a1b9a purple-dark-3
              .purple-dark-4 #4a148c purple-dark-4
            .col.s6
              .deep-purple-light-5 #ede7f6 deep-purple-light-5
              .deep-purple-light-4 #d1c4e9 deep-purple-light-4
              .deep-purple-light-3 #b39ddb deep-purple-light-3
              .deep-purple-light-2 #9575cd deep-purple-light-2
              .deep-purple-light-1 #7e57c2 deep-purple-light-1
              .deep-purple #673ab7 deep-purple
              .deep-purple-dark-1 #5e35b1 deep-purple-dark-1
              .deep-purple-dark-2 #512da8 deep-purple-dark-2
              .deep-purple-dark-3 #4527a0 deep-purple-dark-3
              .deep-purple-dark-4 #311b92 deep-purple-dark-4
            .col.s6
              .indigo-light-5 #e8eaf6 indigo-light-5
              .indigo-light-4 #c5cae9 indigo-light-4
              .indigo-light-3 #9fa8da indigo-light-3
              .indigo-light-2 #7986cb indigo-light-2
              .indigo-light-1 #5c6bc0 indigo-light-1
              .indigo #3f51b5 indigo
              .indigo-dark-1 #3949ab indigo-dark-1
              .indigo-dark-2 #303f9f indigo-dark-2
              .indigo-dark-3 #283593 indigo-dark-3
              .indigo-dark-4 #1a237e indigo-dark-4
            .col.s6
              .blue-light-5 #e3f2fd blue-light-5
              .blue-light-4 #bbdefb blue-light-4
              .blue-light-3 #90caf9 blue-light-3
              .blue-light-2 #64b5f6 blue-light-2
              .blue-light-1 #42a5f5 blue-light-1
              .blue #2196f3 blue
              .blue-dark-1 #1e88e5 blue-dark-1
              .blue-dark-2 #1976d2 blue-dark-2
              .blue-dark-3 #1565c0 blue-dark-3
              .blue-dark-4 #0d47a1 blue-dark-4
            .col.s6
              .light-blue-light-5 #e1f5fe light-blue-light-5
              .light-blue-light-4 #b3e5fc light-blue-light-4
              .light-blue-light-3 #81d4fa light-blue-light-3
              .light-blue-light-2 #4fc3f7 light-blue-light-2
              .light-blue-light-1 #29b6f6 light-blue-light-1
              .light-blue #03a9f4 light-blue
              .light-blue-dark-1 #039be5 light-blue-dark-1
              .light-blue-dark-2 #0288d1 light-blue-dark-2
              .light-blue-dark-3 #0277bd light-blue-dark-3
              .light-blue-dark-4 #01579b light-blue-dark-4
            .col.s6
              .cyan-light-5 #e0f7fa cyan-light-5
              .cyan-light-4 #b2ebf2 cyan-light-4
              .cyan-light-3 #80deea cyan-light-3
              .cyan-light-2 #4dd0e1 cyan-light-2
              .cyan-light-1 #26c6da cyan-light-1
              .cyan #00bcd4 cyan
              .cyan-dark-1 #00acc1 cyan-dark-1
              .cyan-dark-2 #0097a7 cyan-dark-2
              .cyan-dark-3 #00838f cyan-dark-3
              .cyan-dark-4 #006064 cyan-dark-4
            .col.s6
              .teal-light-5 #e0f2f1 teal-light-5
              .teal-light-4 #b2dfdb teal-light-4
              .teal-light-3 #80cbc4 teal-light-3
              .teal-light-2 #4db6ac teal-light-2
              .teal-light-1 #26a69a teal-light-1
              .teal #009688 teal
              .teal-dark-1 #00897b teal-dark-1
              .teal-dark-2 #00796b teal-dark-2
              .teal-dark-3 #00695c teal-dark-3
              .teal-dark-4 #004d40 teal-dark-4
            .col.s6
              .green-light-5 #e8f5e9 green-light-5
              .green-light-4 #c8e6c9 green-light-4
              .green-light-3 #a5d6a7 green-light-3
              .green-light-2 #81c784 green-light-2
              .green-light-1 #66bb6a green-light-1
              .green #4caf50 green
              .green-dark-1 #43a047 green-dark-1
              .green-dark-2 #388e3c green-dark-2
              .green-dark-3 #2e7d32 green-dark-3
              .green-dark-4 #1b5e20 green-dark-4
            .col.s6
              .light-green-light-5 #f1f8e9 light-green-light-5
              .light-green-light-4 #dcedc8 light-green-light-4
              .light-green-light-3 #c5e1a5 light-green-light-3
              .light-green-light-2 #aed581 light-green-light-2
              .light-green-light-1 #9ccc65 light-green-light-1
              .light-green #8bc34a light-green
              .light-green-dark-1 #7cb342 light-green-dark-1
              .light-green-dark-2 #689f38 light-green-dark-2
              .light-green-dark-3 #558b2f light-green-dark-3
              .light-green-dark-4 #33691e light-green-dark-4
            .col.s6
              .lime-light-5 #f9fbe7 lime-light-5
              .lime-light-4 #f0f4c3 lime-light-4
              .lime-light-3 #e6ee9c lime-light-3
              .lime-light-2 #dce775 lime-light-2
              .lime-light-1 #d4e157 lime-light-1
              .lime #cddc39 lime
              .lime-dark-1 #c0ca33 lime-dark-1
              .lime-dark-2 #afb42b lime-dark-2
              .lime-dark-3 #9e9d24 lime-dark-3
              .lime-dark-4 #827717 lime-dark-4
            .col.s6
              .yellow-light-5 #fffde7 yellow-light-5
              .yellow-light-4 #fff9c4 yellow-light-4
              .yellow-light-3 #fff59d yellow-light-3
              .yellow-light-2 #fff176 yellow-light-2
              .yellow-light-1 #ffee58 yellow-light-1
              .yellow #ffeb3b yellow
              .yellow-dark-1 #fdd835 yellow-dark-1
              .yellow-dark-2 #fbc02d yellow-dark-2
              .yellow-dark-3 #f9a825 yellow-dark-3
              .yellow-dark-4 #f57f17 yellow-dark-4
            .col.s6
              .amber-light-5 #fff8e1 amber-light-5
              .amber-light-4 #ffecb3 amber-light-4
              .amber-light-3 #ffe082 amber-light-3
              .amber-light-2 #ffd54f amber-light-2
              .amber-light-1 #ffca28 amber-light-1
              .amber #ffc107 amber
              .amber-dark-1 #ffb300 amber-dark-1
              .amber-dark-2 #ffa000 amber-dark-2
              .amber-dark-3 #ff8f00 amber-dark-3
              .amber-dark-4 #ff6f00 amber-dark-4
            .col.s6
              .orange-light-5 #fff3e0 orange-light-5
              .orange-light-4 #ffe0b2 orange-light-4
              .orange-light-3 #ffcc80 orange-light-3
              .orange-light-2 #ffb74d orange-light-2
              .orange-light-1 #ffa726 orange-light-1
              .orange #ff9800 orange
              .orange-dark-1 #fb8c00 orange-dark-1
              .orange-dark-2 #f57c00 orange-dark-2
              .orange-dark-3 #ef6c00 orange-dark-3
              .orange-dark-4 #e65100 orange-dark-4
            .col.s6
              .deep-orange-light-5 #fbe9e7 deep-orange-light-5
              .deep-orange-light-4 #ffccbc deep-orange-light-4
              .deep-orange-light-3 #ffab91 deep-orange-light-3
              .deep-orange-light-2 #ff8a65 deep-orange-light-2
              .deep-orange-light-1 #ff7043 deep-orange-light-1
              .deep-orange #ff5722 deep-orange
              .deep-orange-dark-1 #f4511e deep-orange-dark-1
              .deep-orange-dark-2 #e64a19 deep-orange-dark-2
              .deep-orange-dark-3 #d84315 deep-orange-dark-3
              .deep-orange-dark-4 #bf360c deep-orange-dark-4
            .col.s6
              .brown-light-5 #efebe9 brown-light-5
              .brown-light-4 #d7ccc8 brown-light-4
              .brown-light-3 #bcaaa4 brown-light-3
              .brown-light-2 #a1887f brown-light-2
              .brown-light-1 #8d6e63 brown-light-1
              .brown #795548 brown
              .brown-dark-1 #6d4c41 brown-dark-1
              .brown-dark-2 #5d4037 brown-dark-2
              .brown-dark-3 #4e342e brown-dark-3
              .brown-dark-4 #3e2723 brown-dark-4
            .col.s6
              .grey-light-5 #fafafa grey-light-5
              .grey-light-4 #f5f5f5 grey-light-4
              .grey-light-3 #eeeeee grey-light-3
              .grey-light-2 #e0e0e0 grey-light-2
              .grey-light-1 #bdbdbd grey-light-1
              .grey #9e9e9e grey
              .grey-dark-1 #757575 grey-dark-1
              .grey-dark-2 #616161 grey-dark-2
              .grey-dark-3 #424242 grey-dark-3
              .grey-dark-4 #212121 grey-dark-4
            .col.s6
              .blue-grey-light-5 #eceff1 blue-grey-light-5
              .blue-grey-light-4 #cfd8dc blue-grey-light-4
              .blue-grey-light-3 #b0bec5 blue-grey-light-3
              .blue-grey-light-2 #90a4ae blue-grey-light-2
              .blue-grey-light-1 #78909c blue-grey-light-1
              .blue-grey #607d8b blue-grey
              .blue-grey-dark-1 #546e7a blue-grey-dark-1
              .blue-grey-dark-2 #455a64 blue-grey-dark-2
              .blue-grey-dark-3 #37474f blue-grey-dark-3
              .blue-grey-dark-4 #263238 blue-grey-dark-4
            .col.s6
              .black.grey-text #000000 black
              .white.grey-text #ffffff white
              .transparent.grey-text N/A transparent

        #modal.modal
          h5 Title
          div Complementary text
          nav
            a.btn.none(onclick="$('#modal').attr('class', 'modal active');") Default
            a.btn.none(
              onclick="$('#modal').attr('class', 'modal left active');"
            ) Left
            a.btn.none(
              onclick="$('#modal').attr('class', 'modal right active');"
            ) Right
            a.btn.none(
              onclick="$('#modal').attr('class', 'modal top active');"
            ) Top
            a.btn.none(
              onclick="$('#modal').attr('class', 'modal bottom active');"
            ) Bottom
            a.btn.none(data-ui="#modal") Close

        #modal-samples.modal.right.large
          nav
            a(data-ui="#modal-samples")
              i arrow_back
            a.h5(data-ui="#modal-samples") Back
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
              .row.nowrap
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
                      a.btn.none 1
                    td
                      a.btn.none 2
                    td
                      a.btn.none 3
                    td
                      a.btn.none 4
                    td
                      a.btn.none 5
                    td
                      a.btn.none 6
                    td
                      a.btn.none 7
                  tr
                    td
                      a.btn.small.border.circle.no-margin 8
                    td
                      a.btn.none 9
                    td
                      a.btn.none 10
                    td
                      a.btn.none 11
                    td
                      a.btn.none 12
                    td
                      a.btn.none 13
                    td
                      a.btn.none 14
                  tr
                    td
                      a.btn.none 15
                    td
                      a.btn.none 16
                    td
                      a.btn.small.circle.no-margin 17
                    td
                      a.btn.none 18
                    td
                      a.btn.none 19
                    td
                      a.btn.none 20
                    td
                      a.btn.none 21
                  tr
                    td
                      a.btn.none 22
                    td
                      a.btn.none 23
                    td
                      a.btn.none 24
                    td
                      a.btn.none 25
                    td
                      a.btn.none 26
                    td
                      a.btn.none 27
                    td
                      a.btn.none 28
                  tr
                    td
                      a.btn.none 29
                    td
                      a.btn.none 30
                    td
                      a.btn.none 31
                    td 1
                    td 2
                    td 3
                    td 4
          nav.right-align
            a.btn.none(data-ui="#modal-calendar") Cancel
            a.btn.none(data-ui="#modal-calendar") Ok
      #responsive.col.s12
        h5 
          span Responsive
          a.chip.circle(@click="showSamples('#responsive nav')")
            i code
        .card
          nav.center-align
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
      .col.s12
        .large-divider
        div
          h4.center-align Summary
          #helpers.medium-device.large-device
            h6 Helpers
            .row.nowrap
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
            .row.nowrap
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
                div nowrap
                div wrap
              .col
                b Themes
                div is-dark
                div is-light
                div is-menu-left
                div is-menu-right
                div is-menu-top
                div is-menu-bottom
                div is-menu-small
                div is-menu-medium
                div is-menu-large
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
                span.orange-text auto
              div 
                span btn&nbsp;
                span.grey-text small, medium, large, border, round, circle, flat,&nbsp;
                span.orange-text none
              div
                span chip&nbsp;
                span.grey-text border, circle, active
              div
                span card&nbsp;
                span.grey-text small, medium, large, border, round, flat
              div 
                span container
              div 
                span dropdown&nbsp;
                span.grey-text left, right, small, medium, large, border, round, flat, active, nowrap
              div 
                span field&nbsp;
                span.grey-text small, medium, large, border, round, flat,&nbsp;
                span.orange-text fill, prefix, sufix, label, invalid
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
                span.grey-text top-align, bottom-align, middle-align, nowrap
              div 
                span &nbsp;&nbsp;&nbsp;&nbsp;col&nbsp;
                span.orange-text min, max, s1..12, m1..12, l1..12
              div 
                span toast&nbsp;
                span.grey-text small, medium, large, border, round, flat, active
              div 
                span tooltip&nbsp;
                span.grey-text left, right, top, bottom, small, medium, large, border, round, flat
              .space
              div 
                span &lt;body&gt;&nbsp;
                span.grey-text is-light, is-dark, is-menu-left, is-menu-right, is-menu-top, is-menu-bottom, is-menu-small, is-menu-medium, is-menu-large
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
                span &lt;input&gt;&nbsp;
                span.orange-text switch
              div
                span &lt;label&gt;&nbsp;
                span.grey-text active
              div 
                span &lt;nav&gt;&nbsp;
                span.grey-text top-align, bottom-align, middle-align, wrap
              div 
                span &lt;table&gt;&nbsp;
                span.grey-text small, medium, large, border, left-align, center-align, right-align
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
          .center-align 
            .h4 Thank you!
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
            a.btn.large(
              href="https://www.patreon.com/beercss",
              target="_blank"
            ) Support us
      #modal-icons.modal.right.large
        nav
          a(data-ui="#modal-icons")
            i arrow_back
          a.h5(data-ui="#modal-icons") Back
        .space
        .card.border(v-for="exemplo in samples")
          div(v-html="exemplo.html")
          .space(v-show="exemplo.html")
          pre(v-html="exemplo.sourceCode")
        .space
        .right-align
          a.btn(
            href="https://material.io/resources/icons/?style=baseline",
            target="_blank"
          ) More icons
</template>

<script>
$(window).on("load", () => {
  setTimeout(() => {
    $("#logo").addClass("active");
  }, 360);
});

export default {
  data() {
    return {
      indexOfMenu: 1,
      samples: [],
      htmlSample: null,
      jsSample: null,
      autoSample: null,
    };
  },
  watch: {},
  beforeMount() {
    $("body").addClass("is-dark");
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

    this.chartSamples();
    this.listSamples();
    this.tableSamples();
    this.inputSamples();
    this.selectSamples();
  },
  methods: {
    updateTheme() {
      var body = $("body");

      if (body.is(".is-dark")) body.removeClass("is-dark");
      else body.addClass("is-dark");
    },
    addHomeScreen() {
      if (window.beercss && window.beercss.installEvent)
        window.beercss.installEvent.prompt();
    },
    updateMenu(menu, css) {
      console.log(event.target);
      var body = $("body");
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
        body.removeClass(
          "is-menu-left is-menu-right is-menu-top is-menu-bottom"
        );
        body.addClass("is-menu-" + css);
        console.log(menu);
        $(menu).removeClass("left right top bottom");
        $(menu).addClass(css);
        $(menu).find("> .modal").removeClass("left right top bottom");
        $(menu).find("> .modal").addClass(css);
      }

      if (/small|medium|large/.test(css)) {
        body.removeClass("is-menu-small is-menu-medium is-menu-large");
        body.addClass("is-menu-" + css);

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
          $(elements[i]).is(".toast")
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
    updateColors(text) {
      $("#modal-colors .col > div").each(function () {
        var html = $(this).html();
        html = text
          ? html.replace(/(-light|-dark|$)/, "-text$1")
          : html.replace(/-text/, "");
        $(this).html(html);
      });
    },
    chartSamples() {
      for (var i = 0; i < 2; i++) {
        var lightBlue = [
          "#03a9f4",
          "#29b6f6",
          "#4fc3f7",
          "#81d4fa",
          "#b3e5fc",
          "#e1f5fe",
        ];
        var amber = [
          "#ffc107",
          "#ffca28",
          "#ffd54f",
          "#ffe082",
          "#ffecb3",
          "#fff8e1",
        ];
        var pink = [
          "#e91e63",
          "#ec407a",
          "#f06292",
          "#f48fb1",
          "#f8bbd0",
          "#fce4ec",
        ];
        var lightGreen = [
          "#8bc34a",
          "#9ccc65",
          "#aed581",
          "#c5e1a5",
          "#dcedc8",
          "#f1f8e9",
        ];
        var purple = [
          "#9c27b0",
          "#ab47bc",
          "#ba68c8",
          "#ce93d8",
          "#e1bee7",
          "#f3e5f5",
        ];
        var teal = [
          "#009688",
          "#26a69a",
          "#4db6ac",
          "#80cbc4",
          "#b2dfdb",
          "#e0f2f1",
        ];

        var colors = [lightBlue, amber, pink, lightGreen, purple];
        var type = i == 0 ? "bar" : "doughnut";
        var ctx = document.getElementById("grafico" + i);
        Chart.defaults.global.defaultFontColor = "#9e9e9e";

        var myChart = new Chart(ctx, {
          type: i == 0 ? "bar" : "doughnut",
          data: {
            labels: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
            datasets: [
              {
                label: "Label",
                data: [12, 19, 3, 5, 2],
                backgroundColor: colors[Math.floor(Math.random() * 5)],
                borderWidth: 0,
              },
            ],
          },
          options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          },
        });
      }
    },
  },
};
</script>

<style>
#modal-colors .col > div {
  padding: 12px;
}

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

pre * {
  vertical-align: text-bottom;
}

.hljs-string {
  color: #e91e63 !important;
}

.is-dark .hljs-string {
  color: #ff9800 !important;
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

#rows .row {
  border: 1px solid #9e9e9e50;
}

@media only screen and (max-width: 600px) {
  body {
    margin: 0 16px 72px 16px !important;
  }
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

<template lang="pug">
nav#navigation-drawer.left
  a(@click="updateTheme()")
    i palette
    span Theme
    .badge 1
  a
    i home
    span Home
    .badge.min
  a
    i search
    span Search
  a
    i share
    span Share
  hr
  hr.vertical
  .max
  label Subtitle
  a
    i widgets
    span Widgets
  a
    i more_vert
    span More
nav#navigation-ul-drawer.right
  ul
    li
      a(@click="updateTheme()")
        i palette
        span Theme
        .badge 1
    li
      a
        i home
        span Home
        .badge.min
    li
      a
        i search
        span Search
    li
      a
        i share
        span Share
    li
      hr
    li
      hr.vertical
    li.max
    li
      label Subtitle
    li
      a
        i widgets
        span Widgets
    li
      a
        i more_vert
        span More

main.responsive
  .row
    a(@click="updateTheme()")
      i.large palette
    .max
      h5 Test your changes here
      div Click on icon to change theme
  .overlay
  dialog.round.large-padding#default(data-ui="#default")
    h5 Default dialog
    nav.right-align
      button.border Cancel
      button Confirm

  .overlay
  dialog.left#left(data-ui="#left")
    h5 Left dialog
    nav.right-align
      button.border Cancel
      button Confirm

  .overlay
  dialog.top#top(data-ui="#top")
    h5 Top dialog
    nav.right-align
      button.border Cancel
      button Confirm

  .overlay
  dialog.right#right(data-ui="#right")
    h5 Right dialog
    nav.right-align
      button.border Cancel
      button Confirm

  .overlay
  dialog.bottom#bottom(data-ui="#bottom")
    h5 Bottom dialog
    nav.right-align
      button.border Cancel
      button Confirm

  .overlay
  dialog.left#navigation(data-ui="#navigation")
    ul.list
      li(@click="updateTheme()")
        i palette
        span Theme
      li.wave.round
        i home
        span Home
      li.wave.round
        i search
        span Search
      li.wave.round
        i share
        span Share
      li
        hr
      li
        label Subtitle
      li
        i widgets
        span Widgets
      li
        i more_vert
        span More
  .large-space
  h5 Shapes
  nav
    .shape.loading-indicator.circle.tiny
    .shape.loading-indicator.circle.small
    .shape.loading-indicator.circle.medium
    .shape.loading-indicator.circle.large
    .shape.loading-indicator.circle.extra
  nav
    .small-width.small-height
      .shape.loading-indicator.max
        img.responsive(:src="'/favicon.png'")
    .small-width.small-height
      .shape.loading-indicator.max
        video.responsive(autoplay, loop, muted, playsinline)
          source(:src="'/dance.mp4'", type="video/mp4")
  nav
    .shape.loading-indicator.transparent.medium
      button.responsive
        i search
    .shape.loading-indicator.transparent.medium
      button.responsive
        img.responsive(:src="'/favicon.png'")
    .shape.loading-indicator.transparent.medium
      button.responsive
        video.responsive(autoplay, loop, muted, playsinline)
          source(:src="'/dance.mp4'", type="video/mp4")
  .large-space
  nav
    label.radio.icon.small
      input(type="radio", name="radio")
      span
        i close
        i done
    label.radio.icon
      input(type="radio", name="radio")
      span
        i close
        i done
    label.radio.icon.large
      input(type="radio", name="radio")
      span
        i close
        i done
    label.radio.icon.extra
      input(type="radio", name="radio")
      span
        i close
        i done
    label.radio.small
      input(type="radio", name="radio")
      span
    label.radio
      input(type="radio", name="radio")
      span
    label.radio.large
      input(type="radio", name="radio")
      span
    label.radio.extra
      input(type="radio", name="radio")
      span
  nav
    label.checkbox.icon.small
      input(type="checkbox", name="checkbox")
      span
        i close
        i done
    label.checkbox.icon.medium
      input(type="checkbox", name="checkbox")
      span
        i close
        i done
    label.checkbox.icon.large
      input(type="checkbox", name="checkbox")
      span
        i close
        i done
    label.checkbox.icon.extra
      input(type="checkbox", name="checkbox")
      span
        i close
        i done
    label.checkbox.small
      input(type="checkbox", name="checkbox")
      span
    label.checkbox
      input(type="checkbox", name="checkbox")
      span
    label.checkbox.large
      input(type="checkbox", name="checkbox")
      span
    label.checkbox.extra
      input(type="checkbox", name="checkbox")
      span


  .large-space 
  div
    nav.tabbed
      a.active(data-ui="#page1") Item 1
      a(data-ui="#page2") Item 2
      a(data-ui="#page3") Item 3
      a(data-ui="#page4") Item 4
    #page1.page.active Page 1
    #page2.page Page 2
    #page3.page Page 3
    #page4.page Page 4
  h5 Menus
  nav
    button
      span Top 
      menu.top
        li Item
        li Item
        li More items
          menu.right.top
            li More items
              menu.right.top
                li Item
            li Item
            li More items
              menu.left.top
                li Item
            li Item
            li More items
              menu.left.top
                li Item
                li Item
                li Item
            li Item
    button
      span Bottom 
      menu.bottom
        li Item
        li Item
        li More items
          menu.right.bottom
            li More items
              menu.right.bottom
                li Item
            li Item
            li More items
              menu.left.bottom
                li Item
            li Item
            li More items
              menu.left.bottom
                li Item
                li Item
                li Item
            li Item
    button
      span Position 
      menu
        li Item
        li Item
        li More items
          menu.right
            li More items
              menu.right
                li Item
            li Item
            li More items
              menu.left
                li Item
            li Item
            li More items
              menu.left
                li Item
                li Item
                li Item
            li Item
    button
      span Normal 
      menu(id="menu")
        li(data-ui="#menu") Item
        li Item
        li More items
          menu
            li Item
            li(data-ui="#menu") Item
            li More items
              menu
                li Item
                li Item
                li(data-ui="#menu") More items
    button(onclick="#menu2")
      span OnClick 
      menu(id="menu2")
        li(data-ui="#menu2") Item
        li Item
        li More items
          menu
            li Item
            li(data-ui="#menu2") Item
            li More items
              menu
                li Item
                li Item
                li(data-ui="#menu2") More items
    button(data-ui="#menu3")
      span DataUi 
      menu(id="menu3")
        li(data-ui="#menu3") Item
        li Item
        li More items
          menu
            li Item
            li(data-ui="#menu3") Item
            li More items
              menu
                li Item
                li Item
                li(data-ui="#menu3") More items

  .large-space
  h5 Sliders
  .grid
    .col.s4
      article.small
        label.slider.max
          input(type="range")
          span
          .col.s4
    .col.s4
      button.chip
        span Chip
        label.slider.max
          input(type="range")
          span

  .large-space
  h5 Badges
  a
    i home
    .badge.min
  a
    i home
    .badge 1
  a
    i home
    .badge.min.top.left
  a
    i home
    .badge.top.left 1
  a
    i home
    .badge.min.bottom.left
  a
    i home
    .badge.bottom.left 1
  a
    i home
    .badge.min.bottom.right
  a
    i home
    .badge.bottom.right 1
  nav
    a
      i home
      .badge.min
    a
      i home
      .badge 1
    a
      i home
      .badge.min.top.left
    a
      i home
      .badge.top.left 1
    a
      i home
      .badge.min.bottom.left
    a
      i home
      .badge.bottom.left 1
    a
      i home
      .badge.min.bottom.right
    a
      i home
      .badge.bottom.right 1
  nav
    button.transparent.circle
      i home
      .badge.min
    button.transparent.circle
      i home
      .badge 1
    button.transparent.circle
      i home
      .badge.min.top.left
    button.transparent.circle
      i home
      .badge.top.left 1
    button.transparent.circle
      i home
      .badge.min.bottom.left
    button.transparent.circle
      i home
      .badge.bottom.left 1
    button.transparent.circle
      i home
      .badge.min.bottom.right
    button.transparent.circle
      i home
      .badge.bottom.right 1
  nav
    button
      i home
      span Button
      .badge.min.none
    button
      i home
      span Button
      .badge.none 1
    button.chip
      i home
      span Button
      .badge.min.none
    button.chip
      i home
      span Button
      .badge.none 1
  .tabs.left-align
    a.active(tabindex="0")
      i home
      span Tab
      .badge.min.none
    a(tabindex="0")
      i home
      span Tab
      .badge.none 1
    a(tabindex="0")
      i home
      span Tab
      .badge.none 1

  .large-space
  h5 Navigations
  .grid
    .s12.m6.l6
      h6 Using nav + *
      nav.vertical
        button Button
        button.chip Chip
        hr
        hr.vertical
        .max
        a Link
    .s12.m6.l6
      h6 Using nav + ul + li + *
      nav.vertical
        ul
          li
            button Button
          li
            button.chip Chip
          li
            hr
          li
            hr.vertical
          li.max
          li
            a Link
    .s12.m6.l6
      h6 Using nav + *
      nav.vertical.no-space
        a.row.wave
          i home
          span Home
        a.row.wave
          i search
          span Search
        a.row.wave
          i share
          span Share
    .s12.m6.l6
      h6 Using nav + ul + li + *
      nav.vertical.no-space
        ul
          li
            a.row.wave
              i home
              span Home
          li
            a.row.wave
              i search
              span Search
          li
            a.row.wave
              i share
              span Share
  .large-space
  h5 Lists
  .grid
    .s12.m6.l6
      h6 Default
      ul.list.border
        li Item
        li Item
        li Item
        li Item
    .s12.m6.l6
      h6 Default with li > a
      ul.list.border
        li
          a(href="#1") Item
        li
          a(href="#2") Item
        li
          a(href="#3") Item
        li
          a(href="#4") Item
    .s12.m6.l6
      h6 Nested
      ul.list.border
        li
          i home
          span Home
        li
          i search
          span Search
        li
          i share
          span Share
        li
          ul.list.border
            li
              i home
              span Home
            li
              i search
              span Search
            li
              i share
              span Share
    .s12.m6.l6
      h6 Nested using li > a
      ul.list.border
        li
          a(href="#1")
            i home
            span Home
        li
          a(href="#2")
            i search
            span Search
        li
          a(href="#3")
            i share
            span Share
        li
          ul.list.border
            li
              a(href="#4")
                i home
                span Home
            li
              a(href="#5")
                i search
                span Search
            li
              a(href="#6")
                i share
                span Share
    .s12.m6.l6
      h6 Expansion
      ul.list.border
        li Item
        li Item
        li
          details
            summary Header Item
            ul.list.border
              li Item
              li Item
    .s12.m6.l6
      h6 Expansion with li > a
      ul.list.border
        li
          a(href="#1") Item
        li
          a(href="#2") Item
        li
          details
            summary Header Item
            ul.list.border
              li
                a(href="#4") Item
              li
                a(href="#5") Item

  .large-space
  h5 Field with tooltip
  .field.label.border
    input
    label.front
      span Label
      a
        i info
        .tooltip Tooltip
      a
        img.circle(:src="'/favicon.png'")
        .tooltip Tooltip
      a
        svg(viewBox="0 0 24 24")
          path(d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z")
        .tooltip Tooltip
    .helper
      span Helper
      i.tiny info
      .tooltip.bottom Testando tooltip

  .large-space
  h5 Popover API
  nav
    button(popovertarget="dialog-popover") Dialog
    button(popovertarget="snackbar-popover") Snackbar

  dialog#dialog-popover(popover)
    h5 Popover dialog
    nav.right-align
      button(popovertarget="dialog-popover") Button

  #snackbar-popover.snackbar(popover)
    .max Popover snackbar
    button(popovertarget="snackbar-popover") Button

  .large-space
  h5 Dialogs and date picker
  nav
    button(data-ui="#default") Default
    button(data-ui="#left") Left
    button(data-ui="#top") Top
    button(data-ui="#right") Right
    button(data-ui="#bottom") Bottom
  .large-space
  h5 Slider, progress and field bindings
  .row
    .field.label.border
      input#text(v-model="number")
      label Input
    .field.label.border
      input(v-model="number")
      label Test
    label.slider.large.min
      input#range(v-model="number", type="range")
      span
    label.slider.large.min
      input#range(type="range", value="10")
      span
    progress

  label.progress-bar.css
    progress#css(:value="number", max="100")
  .row
    .field.label.border.max
      select(v-model="select")
        option
        option(value="1") Item 1
        option(value="2") Item 2
        option(value="3") Item 3
      label Test
    .field.border
      select(v-model="select")
        option
        option(value="1") Item 1
        option(value="2") Item 2
        option(value="3") Item 3

  .large-space
  h5 Navigation list inside elements
  .row
    button(@click="updateNavigationDrawer('left')") left
    button(@click="updateNavigationDrawer('right')") right
    button(data-ui="#navigation") dialog
  .row
    ul.list
      li.wave.round
        a(@click="updateTheme()")
          i palette
          span Theme
      li.wave.round
        a
          i home
          span Home
      li.wave.round
        a
          i search
          span Search
      li.wave.round
        a
          i share
          span Share
      li
        hr
      li
        label Subtitle
      li.wave.round
        a(data-ui="#menu4")
          i arrow_drop_down
          span Menu
          menu#menu4
            li Item 1
            li Item 2
            li Item 3
  .row
    ul.list
      li.wave.round(@click="updateTheme()")
        i palette
        span Theme
      li.wave.round
        i home
        span Home
      li.wave.round
        i search
        span Search
      li.wave.round
        i share
        span Share
      li
        hr
      li
        label Subtitle
      li.wave.round(data-ui="#menu5")
        i arrow_drop_down
        span Menu
        menu#menu5
          li Item 1
          li Item 2
          li Item 3

  .large-space
  h5 Steppers
  nav
    button.circle 1
    hr.max
    button.circle 1
    hr.max
    button.circle 1

  .large-space
  h5 Fields
  nav
    button(@click="domain.updateSize('#with-pure-css .field', 'small')") small
    button(@click="domain.updateSize('#with-pure-css .field', '')") medium
    button(@click="domain.updateSize('#with-pure-css .field', 'large')") large
    button(@click="domain.updateSize('#with-pure-css .field', 'extra')") extra
  .space
  #with-pure-css.grid
    .s1
      .field.label.border.suffix
        input(placeholder=" ", value="Input")
        label Direction
        i arrow_drop_down
        span.helper Helper
    .s1
      .field.label.border
        input(placeholder=" ")
        label Label
        span.helper Helper
    .s2
      .field.label.round.border
        input(placeholder=" ", value="Input")
        label Label
        span.helper Helper
    .s2
      .field.label.round.border
        input(placeholder=" ")
        label Label
        span.helper Helper
    .s3
      .field.label.round.border
        input(placeholder=" ", value="Input")
        label Label
        span.helper Helper
    .s3
      .field.label.round.border
        input(placeholder=" ")
        label Label
        span.helper Helper
    .s12.m6
      .field.label.fill.prefix
        i home
        input(placeholder=" ", disabled, value="100")
        label Label
        span.helper Helper
    .s12.m6
      .field.label.fill.round
        input(placeholder=" ")
        label Label
        span.helper Helper
    .s12.m6
      .field.label.fill.prefix.round
        i home
        input(placeholder=" ")
        label Label
        span.helper Helper
    .s12.m6
      .field.label.border
        input(placeholder=" ")
        label Label
        span.helper Helper
    .s12.m6
      .field.label.border.prefix
        i home
        input(placeholder=" ", disabled, value="100")
        label Label
        span.helper Helper
    .s12.m6
      .field.label.border.round
        input(placeholder=" ")
        label Label
        span.helper Helper
    .s12.m6
      .field.label.border.prefix.round
        i home
        input(placeholder=" ")
        label Label
        span.helper
          span Helper
  .large-space
  h5 Textareas
  .space
  .grid
    .s12.m6
      .field.label.border.prefix.small
        i home
        input(placeholder=" ")
        label Label
        span.helper
          span Helper
    .s12.m6
      .field.label.border.prefix.textarea.min.small
        i home
        textarea(placeholder=" ")
        label Label
        span.helper
          span Helper
    .s12.m6
      .field.label.border.prefix
        i home
        input(placeholder=" ")
        label Label
        span.helper
          span Helper
    .s12.m6
      .field.label.border.prefix.textarea.min
        i home
        textarea(placeholder=" ")
        label Label
        span.helper
          span Helper
    .s12.m6
      .field.label.border.prefix.large
        i home
        input(placeholder=" ")
        label Label
        span.helper
          span Helper
    .s12.m6
      .field.label.border.prefix.textarea.min.large
        i home
        textarea(placeholder=" ")
        label Label
        span.helper
          span Helper
    .s12.m6
      .field.label.border.prefix.extra
        i home
        input(placeholder=" ")
        label Label
        span.helper
          span Helper
    .s12.m6
      .field.label.border.prefix.textarea.min.extra
        i home
        textarea(placeholder=" ")
        label Label
        span.helper
          span Helper

    .s12.m6
      .field.label.fill.prefix.small
        i home
        input(placeholder=" ")
        label Label
        span.helper
          span Helper
    .s12.m6
      .field.label.fill.prefix.textarea.min.small
        i home
        textarea(placeholder=" ")
        label Label
        span.helper
          span Helper
    .s12.m6
      .field.label.fill.prefix
        i home
        input(placeholder=" ")
        label Label
        span.helper
          span Helper
    .s12.m6
      .field.label.fill.prefix.textarea.min
        i home
        textarea(placeholder=" ")
        label Label
        span.helper
          span Helper
    .s12.m6
      .field.label.fill.prefix.large
        i home
        input(placeholder=" ")
        label Label
        span.helper
          span Helper
    .s12.m6
      .field.label.fill.prefix.textarea.min.large
        i home
        textarea(placeholder=" ")
        label Label
        span.helper
          span Helper
    .s12.m6
      .field.label.fill.prefix.extra
        i home
        input(placeholder=" ")
        label Label
        span.helper
          span Helper
    .s12.m6
      .field.label.fill.prefix.textarea.min.extra
        i home
        textarea(placeholder=" ")
        label Label
        span.helper
          span Helper

    .s12.m6
      .field.label.fill.round.prefix.small
        i home
        input(placeholder=" ")
        label Label
        span.helper
          span Helper
    .s12.m6
      .field.label.fill.round.prefix.textarea.min.small
        i home
        textarea(placeholder=" ")
        label Label
        span.helper
          span Helper
    .s12.m6
      .field.label.fill.round.prefix
        i home
        input(placeholder=" ")
        label Label
        span.helper
          span Helper
    .s12.m6
      .field.label.fill.round.prefix.textarea.min
        i home
        textarea(placeholder=" ")
        label Label
        span.helper
          span Helper
    .s12.m6
      .field.label.fill.round.prefix.large
        i home
        input(placeholder=" ")
        label Label
        span.helper
          span Helper
    .s12.m6
      .field.label.fill.round.prefix.textarea.min.large
        i home
        textarea(placeholder=" ")
        label Label
        span.helper
          span Helper
    .s12.m6
      .field.label.fill.round.prefix.extra
        i home
        input(placeholder=" ")
        label Label
        span.helper
          span Helper
    .s12.m6
      .field.label.fill.round.prefix.textarea.min.extra
        i home
        textarea(placeholder=" ")
        label Label
        span.helper
          span Helper

  .large-space
  h5 Fields inside grid
  .grid
    .s4
      .field.label.border
        input
        label Label
        span.helper Helper
    .s4
      .field.label.border
        input
        label Label
        span.helper Helper
    .s4
      .field.label.border
        input
        label Label
        span.helper Helper
    .s4
      .field.label.border
        input
        label Label
        span.helper Helper
    .s4
      .field.label.border
        input
        label Label
        span.helper Helper
    .s4
      .field.label.border
        input
        label Label
        span.helper Helper
    .s6
      .field.label.border
        input
        label Label
        span.helper Helper
      .field.label.border
        input
        label Label
        span.helper Helper
      .field.label.border
        input
        label Label
        span.helper Helper
    .s6
      .field.label.border
        input
        label Label
        span.helper Helper
      .field.label.border
        input
        label Label
        span.helper Helper
      .field.label.border
        input
        label Label
        span.helper Helper
    .s12
      .field.label.border
        input
        label Label
        span.helper Helper
      .field.label.border
        input
        label Label
        span.helper Helper
      .field.border.label.border
        input
        label Label
        span.helper Helper
    .s12.m6
      .field.border.label
        input
        label Label
        span.helper Helper
    .s12.m6
      .field.middle-align
        label.slider
          input(type="range")
          span
        span.helper Helper
    .s12.m6
      .field.border.label.invalid
        input
        label Label
        span.error Error
    .s12.m6
      .field.middle-align.invalid
        label.slider
          input(type="range")
          span
        span.error Error
    .s12.m6
      .field.border.label
        input
        label Label
        span.helper Helper
    .s12.m6
      .field.middle-align
        nav
          label.radio
            input(type="radio")
            span Item 1
          label.radio
            input(type="radio")
            span Item 2
          label.radio
            input(type="radio")
            span Item 3
        span.helper Helper
    .s12.m6
      .field.border.label.invalid
        input
        label Label
        span.error Error
    .s12.m6
      .field.middle-align.invalid
        nav
          label.radio
            input(type="radio")
            span Item 1
          label.radio
            input(type="radio")
            span Item 2
          label.radio
            input(type="radio")
            span Item 3
        span.error Error
    .s12.m6
      .field.border.label
        input
        label Label
        span.helper Helper
    .s12.m6
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
        span.helper Helper
    .s12.m6
      .field.border.label.invalid
        input
        label Label
        span.error Error
    .s12.m6
      .field.middle-align.invalid
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
        span.error Error
    .s12.m6
      .field.border.label
        input
        label Label
        span.helper Helper
    .s12.m6
      .field.middle-align
        nav
          .max
            h6 Title
            div Some text here
          label.switch
            input(type="checkbox")
            span
        span.helper Helper
    .s12.m6
      .field.border.label.invalid
        input
        label Label
        span.error Error
    .s12.m6
      .field.middle-align.invalid
        nav
          .max
            h6 Title
            div Some text here
          label.switch
            input(type="checkbox")
            span
        span.error Error

  .large-space
  h5 Tables

  .grid.large-space
    .s12.m12.l6
      table
        thead
          tr
            th.min Header
            th Header
            th Header
        tbody
          tr
            td Cell
            td Cell
            td Cell
          tr
            td Cell
            td Cell
            td Cell
          tr
            td Cell
            td Cell
            td Cell
        tfoot
          tr
            th Footer
            th Footer
            th Footer
    .s12.m12.l6
      table.stripes
        thead
          tr
            th.min Header
            th Header
            th Header
        tbody
          tr
            td Cell
            td Cell
            td Cell
          tr
            td Cell
            td Cell
            td Cell
          tr
            td Cell
            td Cell
            td Cell
        tfoot
          tr
            th Footer
            th Footer
            th Footer
    .s12.m12.l6
      table.border
        thead
          tr
            th.min Header
            th Header
            th Header
        tbody
          tr
            td Cell
            td Cell
            td Cell
          tr
            td Cell
            td Cell
            td Cell
          tr
            td Cell
            td Cell
            td Cell
        tfoot
          tr
            th Footer
            th Footer
            th Footer
    .s12.m12.l6
      .small-height.scroll
        table.stripes.border
          thead.fixed
            tr
              th.min Header
              th Header
              th Header
          tbody
            tr
              td Cell
              td Cell
              td Cell
            tr
              td Cell
              td Cell
              td Cell
            tr
              td Cell
              td Cell
              td Cell
            tr
              td Cell
              td Cell
              td Cell
            tr
              td Cell
              td Cell
              td Cell
            tr
              td Cell
              td Cell
              td Cell
          tfoot.fixed
            tr
              th Footer
              th Footer
              th Footer
</template>

<script setup lang="ts">
import { ref } from "vue";
import domain from "../home/domain";
const updateTheme = () => {
  document.body.className = document.body.className.includes("dark") ? "light" : "dark";
};
const updateNavigationDrawer = (direction: string) => {
  const elemento = document.getElementById("navigation-drawer");
  if (elemento) elemento.className = "max " + direction;
};
const number = ref(0);
const select = ref();
</script>

<template lang="pug">
main.responsive
  .page.right.active
    .grid

      section.s12.m12.l8
        article.no-elevate.large-round
          .row
            img.medium(:src="'/reddit-profile.png'")
            .max
              .field.fill.round
                input(placeholder="Create Post", @click="openPostDialog('#post')")
            button.transparent.circle(@click="openPostDialog('#image-video')")
              i image
              .tooltip.bottom Create Media Post
            button.transparent.circle(@click="openPostDialog('#link')")
              i link
              .tooltip.bottom Create Link Post
        nav.scroll
          button.chip
            i rocket
            span Best
          button.chip
            i local_fire_department
            span Hot
          button.chip
            i news
            span New
          button.chip
            i arrow_circle_up
            span Top
          button.chip
            i trending_up
            span Rising
        article.no-elevate.round
          .row.top-align
            div
              nav.vertical.no-space.grey-text.center-align
                button.transparent.circle
                  i thumb_up
                div Vote
                button.transparent.circle
                  i thumb_down
            .max
              div
                .row
                  img.circle.small(:src="'/reddit-community.png'")
                  .max
                    b r/sveltejs
                    | &nbsp;
                    label.grey-text Posted by u/leonardorafalw 3 hours ago
                    h6.no-margin How do I disabled all A11y messages? They are annoying
                .medium-space
                div Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget ipsum purus. Donec commodo, eros quis molestie consectetur, turpis ex eleifend sem, id viverra sapien justo ut erat. Nam mattis est eu vulputate iaculis. Vestibulum mi leo, eleifend vitae dolor et, malesuada pulvinar velit. Duis pharetra erat sapien, eu auctor nisl lacinia vel. Cras id tristique nulla. Morbi facilisis, nibh sit amet tincidunt molestie, purus sem lacinia turpis, ac varius sem leo in orci. Suspendisse vitae est enim. Donec malesuada nunc sed ligula mollis, ut efficitur turpis varius. Vestibulum libero est, faucibus in nibh eget, eleifend ornare enim. Mauris et dictum quam. Praesent nisi ex, ultricies at mi nec, sodales congue lacus.

                p Etiam pulvinar vitae eros sed congue. Sed posuere sollicitudin lorem ut accumsan. Praesent at nisi ex. Vivamus nibh quam, finibus eget facilisis at, posuere et leo. Nam nisl velit, maximus id porttitor a, elementum sit amet odio. Nunc faucibus finibus lectus a facilisis. In finibus posuere purus quis tincidunt.
        article.no-elevate.round
          .row.top-align
            div
              nav.vertical.no-space.grey-text.center-align
                button.transparent.circle
                  i thumb_up
                div Vote
                button.transparent.circle
                  i thumb_down
            .max
              div
                .row
                  img.circle.small(:src="'/reddit-community.png'")
                  .max
                    b r/sveltejs
                    | &nbsp;
                    label.grey-text Posted by u/leonardorafalw 3 hours ago
                    h6.no-margin "The golden rule of assertions"
                .medium-space
                a.row.link(href="/")
                  span https://www.beercs.com
                  i link
        article.no-elevate.round
          .row.top-align
            div
              nav.vertical.no-space.grey-text.center-align
                button.transparent.circle
                  i thumb_up
                div Vote
                button.transparent.circle
                  i thumb_down
            .max
              div
                .row
                  img.circle.small(:src="'/reddit-community.png'")
                  .max
                    b r/sveltejs
                    | &nbsp;
                    label.grey-text Posted by u/leonardorafalw 3 hours ago
                    h6.no-margin Cheers to Craft Design: Beer CSS - A Lightweight Material Design Framework
                .medium-space
                a(href="/")
                  img.responsive.round(:src="'/background.png'")

      section.s12.m12.l4
        article.no-elevate.round
          .row
            i trophy
            div
              b Reddit Premium
              div The best Reddit experience
          nav
            button.responsive Try Now
        article.no-elevate.round
          h6 Home
          p Your personal Reddit frontpage. Come here to check in with your favorite communities.
          hr.medium
          nav.vertical
            button.responsive Create Post
            button.responsive.border Create Community
        article.no-elevate.round
          h6 Recent Posts
          .space
          ul.list
            li.wave.small-round
              img.small(:src="'/reddit-community.png'")
              .max.wrap
                div How do I disabled all A11y messages? They are annoying
                label.grey-text 5 points - 15 comments - 3h
            li.wave.small-round
              img.small(:src="'/reddit-community.png'")
              .max.wrap
                div "The golden rule of assertions"
                label.grey-text 4 points - 10 comments - 3h
            li.wave.small-round
              img.small(:src="'/reddit-community.png'")
              .max.wrap
                div Cheers to Craft Design: Beer CSS - A Lightweight Material Design Framework
                label.grey-text 3 points - 4 comments - 3h
  dialog#dialog-post
    nav.wrap
      h6 Create a post on
      .field.border.label.l.m
        input
        label Community
        i arrow_drop_down
        menu
          li
            i.tiny people
            span r/svelte
          li
            i.tiny people
            span r/svelte
          li
            i.tiny people
            span r/svelte
    .medium-space.l.m
    .medium-height.large-width
      .tabs.scroll.left-align.l.m
        a(data-ui="#post", tabindex="0")
          i news
          span Post
        a(data-ui="#image-video", tabindex="0")
          i image
          span Image &amp; Video
        a(data-ui="#link", tabindex="0")
          i link
          span Link
        a.grey-text
          i insert_chart
          span Pool
      .medium-space
      .page.top#post
        .field.border.label.s
          input
          label Community
          i arrow_drop_down
          menu
            li
              i.tiny people
              span r/svelte
            li
              i.tiny people
              span r/svelte
            li
              i.tiny people
              span r/svelte
        .field.border.label
          input
          label Title
        .field.border.label.extra.textarea
          textarea
          label Text (optional)

      .page.top#image-video
        .field.border.label.s
          input
          label Community
          i arrow_drop_down
          menu
            li
              i.tiny people
              span r/svelte
            li
              i.tiny people
              span r/svelte
            li
              i.tiny people
              span r/svelte
        .row
          .max
            .field.border.label
              input
              label Title
          button
            span Select a file
            input(type="file")

      .page.top#link
        .field.border.label.s
          input
          label Community
          i arrow_drop_down
          menu
            li
              i.tiny people
              span r/svelte
            li
              i.tiny people
              span r/svelte
            li
              i.tiny people
              span r/svelte
        .field.border.label
          input
          label Title
        .field.border.label
          textarea
          label Url
      .page.top#pool

    footer.fixed
      nav.right-align
        button.border(data-ui="#dialog-post") Cancel
        button(data-ui="#dialog-post") Confirm
</template>

<script setup lang="ts">
function openPostDialog (pageSelector: string) {
  ui(pageSelector);
  ui("#dialog-post");
}

function test() {
  alert("oi");
}
</script>

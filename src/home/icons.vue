<template lang="pug">
#icons
  .large-space
  h4
    span Icons
    a.chip.circle(@click="domain.showSamples(data, '#icons-sample nav', 'Icons', '#modal-icons', 'https://github.com/beercss/beercss/blob/main/docs/ICON.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="form-icons", checked, @click="domain.updateIcon()")
      span default
    label.radio
      input(type="radio", name="form-icons", @click="domain.updateIcon('fill')")
      span fill
  #icons-sample
    nav.wrap
      i.tiny home
      i.tiny account_circle
      i.tiny search
      i.tiny build
      i.tiny done
      i.tiny cached
      i.tiny star_rate
      i.tiny work
      i.tiny update
      i.tiny thumb_up
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
    nav.wrap
      i.extra home
      i.extra account_circle
      i.extra search
      i.extra build
      i.extra done
      i.extra cached
      i.extra star_rate
      i.extra work
      i.extra update
      i.extra thumb_up

  #modal-icons.modal.right.large
    header.fixed
      nav
        h5 Icons
        a.button.border(
          v-show="data.modalSample == '#modal-icons'"
          href="https://fonts.google.com/icons",
          target="_blank"
        ) More icons
        .max
        button.circle.transparent(data-ui="#modal-icons")
          i close
    .space
    div(v-if="data.modalSample == '#modal-icons'")
      article.border(v-for="exemplo in data.samples")
        div(v-html="exemplo.html")
        .space(v-show="exemplo.html")
        pre(v-html="exemplo.sourceCode")
      .space
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
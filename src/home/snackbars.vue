<template lang="pug">
#snackbars
  .large-space
  h4
    span Snackbars
    button.chip.circle(@click="domain.showSamples(data, '#snackbars .snackbar', 'Snackbars', null, 'https://github.com/beercss/beercss/blob/main/docs/SNACKBAR.md')")
      i code
  nav.wrap
    label.radio
      input(
        type="radio",
        name="position-snackbars",
        checked,
        @click="domain.updatePosition('#snackbars .snackbar')"
      )
      span bottom
    label.radio
      input(type="radio", name="position-snackbars", @click="domain.updatePosition('#snackbars .snackbar', 'top')")
      span top
  nav.wrap
    button.inverse-surface(@click="showToast('#snackbar-default')") Default
    button.error(@click="showToast('.snackbar.error')") Error
    button.primary(@click="showToast('.snackbar.primary')") Primary
    button.secondary(@click="showToast('.snackbar.secondary')") Secondary
    button.tertiary(@click="showToast('.snackbar.tertiary')") Tertiary
    button.inverse-surface(@click="showToast('#snackbar-action')") With action
  .snackbar#snackbar-default Some text here
  .snackbar.error Some text here
  .snackbar.primary Some text here
  .snackbar.secondary Some text here
  .snackbar.tertiary Some text here
  .snackbar#snackbar-action
    .max Some text here
    a.inverse-link Action
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";

const showToast = async (selector: string) => await ui(selector);
</script>

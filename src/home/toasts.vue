<template lang="pug">
#toasts
  .large-space
  h4
    span Toasts
    a.chip.circle(@click="domain.showSamples(data, '#toasts .toast', 'Toasts', null, 'https://github.com/beercss/beercss/blob/main/docs/TOAST.md')")
      i code
  nav.wrap
    label.radio
      input(
        type="radio",
        name="position-toasts",
        checked,
        @click="domain.updatePosition('#toasts .toast')"
      )
      span bottom
    label.radio
      input(type="radio", name="position-toasts", @click="domain.updatePosition('#toasts .toast', 'top')")
      span top
  nav.wrap
    button.inverse-surface(@click="showToast('#toast-default')") Default
    button.error(@click="showToast('.toast.error')") Error
    button.primary(@click="showToast('.toast.primary')") Primary
    button.secondary(@click="showToast('.toast.secondary')") Secondary
    button.tertiary(@click="showToast('.toast.tertiary')") Tertiary
    button.inverse-surface(@click="showToast('#toast-action')") With action
  .toast#toast-default Some text here
  .toast.error Some text here
  .toast.primary Some text here
  .toast.secondary Some text here
  .toast.tertiary Some text here
  .toast#toast-action
    .max Some text here
    a.inverse-link Action
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";

const showToast = (selector: string) => {
  ui(selector);
}
</script>

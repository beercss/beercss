<template lang="pug">
#fieldsets
  .large-space
  h4
    span Fieldsets
    button.chip.circle(@click="domain.showSamples(data, '#fieldsets fieldset', 'Fieldsets', null, null)")
      i code
  .space
  .grid
    .s12.m6.l6
      fieldset
        legend Select one or more
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
      fieldset
        legend Select one or more
        nav.vertical
          label.checkbox
            input(type="checkbox")
            span Item 1
          label.checkbox
            input(type="checkbox")
            span Item 2
          label.checkbox
            input(type="checkbox")
            span Item 3
    .s12.m6.l6
      fieldset
        legend Select one or more
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
      fieldset
        legend Select one or more
        nav.vertical
          label.radio
            input(type="radio")
            span Item 1
          label.radio
            input(type="radio")
            span Item 2
          label.radio
            input(type="radio")
            span Item 3
    .s12.m6.l6
      fieldset
        legend Fill all fields
        .field.border.label 
          input
          label Input
        .field.border.label 
          select
            option Item 1
            option Item 2
            option Item 3
          label Select
        .field.border.label.textarea 
          textarea
          label Textarea
          span.helper Helper text
    .s12.m6.l6
      fieldset
        legend Fill all fields
        .row
          .max
            .field.border.label.max
              input
              label Input
          .max
            .field.border.label 
              select
                option Item 1
                option Item 2
                option Item 3
              label Select
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
  
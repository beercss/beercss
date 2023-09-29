<template lang="pug">
.date
  nav.no-space.padding
    button.small.circle.transparent(:class="{ hidden: isMonthsOrYears() }", @click="reload(data.year, --data.month)")
      i chevron_left
    button.small.transparent.max(@click="select('#months')", :disabled="data.selectedPage === '#years'")
      span.capitalize {{ data.months[data.month].value }}
      i(:class="{ hidden: data.selectedPage === '#years' }") {{ data.selectedPage === '#months' ? 'arrow_drop_up' :  'arrow_drop_down' }}
    button.small.circle.transparent(:class="{ hidden: isMonthsOrYears() }", @click="reload(data.year, ++data.month)")
      i chevron_right
    button.small.circle.transparent(:class="{ hidden: isMonthsOrYears() }", @click="reload(--data.year, data.month)")
      i chevron_left
    button.small.transparent.max(@click="select('#years')", :disabled="data.selectedPage === '#months'")
      span {{ data.year }}
      i(:class="{ hidden: data.selectedPage === '#months' }") {{ data.selectedPage === '#years' ? 'arrow_drop_up' :  'arrow_drop_down' }}
    button.small.circle.transparent(:class="{ hidden: isMonthsOrYears() }", @click="reload(++data.year, data.month)")
      i chevron_right
  .divider(v-show="!isMonthsOrYears()")
  .scroll.no-round
    .page#empty
    .page.top#months
      a.row.wave.padding.capitalize(v-for="month in data.months", @click="reload(data.year, month.key)")
        i.small(:class="{ hidden: month.key !== data.month }") done
        span {{ month.value }}
    .page.top#years
      a.row.wave.padding(v-for="year in data.years", @click="reload(year.key, data.month)")
        i.small(:class="{ hidden: year.key !== data.year }") done
        span {{ year.value }}
    .page.right#days
      .space
      table
        thead
          tr
            th.center-align.bold.upper(v-for="week in data.weeks") {{ week.value }}
        tbody
          tr(v-for="days in data.days")
            td.no-padding.no-margin.center-align(v-for="day in days")
              button.no-margin.circle(:class="{ border: isToday(day) && !isSelected(day), transparent: !isToday(day) && !isSelected(day) }", @click="select('#days', day)") {{ day.value }}
  nav.right-align.padding.no-margin(v-show="!isMonthsOrYears()")
    button.small.transparent.bold
      span.primary-text Cancel
    button.small.transparent.bold
      span.primary-text Ok
  div(v-show="isMonthsOrYears()")
    .large-space
    .space
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import data from "./data";
import domain from "./domain";
import type { IKeyValue } from "./interfaces";

const select = (page: string, date?: IKeyValue) => {
  data.value.selectedPage = (data.value.selectedPage !== page) ? page : "#days";
  ui(data.value.selectedPage);

  if (!date) return;

  data.value.selectedDate = date.key;
};

const reload = (year: number, month: number) => {
  data.value = domain.getData(year, month, data.value.selectedDate);
  select("#empty");
  setTimeout(() => select("#days"), 100);
};

const isToday = (day: IKeyValue) => {
  return day.key === data.value.todayDate;
};

const isSelected = (day: IKeyValue) => {
  return day.key === data.value.selectedDate;
};

const isMonthsOrYears = () => {
  return data.value.selectedPage === "#months" || data.value.selectedPage === "#years";
};

onMounted(() => {
  select("#days");
});
</script>

<style scoped>
.date > .scroll {
  inline-size: 22.5rem;
  block-size: 19rem;
  overflow-block: auto;
  overflow-inline: hidden;
}
.date {
  display: inline-block;
  inline-size: auto;
  background-color: var(--surface-variant);
}
.hidden {
  visibility: hidden;
}
</style>

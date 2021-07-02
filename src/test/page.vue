<template lang="pug">
.container
  .space
  .row.no-wrap.middle-align
    .col.min
      a(@click="updateTheme()")
        i.large brightness_medium
    .col
      h5 Test your changes here
      div Click on icon to change theme
</template>

<script>
export default {
  methods: {
    updateTheme() {
      document.body.className =
        document.body.className.indexOf("is-dark") != -1
          ? "is-light"
          : "is-dark";
    },
  },
};
</script>
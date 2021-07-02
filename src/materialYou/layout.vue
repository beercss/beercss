<template lang="pug">
div
  #layout
</template>

<script>
export default {
  created() {
    window.$layout = this;
  },
  mounted() {
    ui();
  },
  methods: {
    redirect(component) {
      this.url = page.current;

      document.getElementById("layout").innerHTML = '<div id="app"></div>';
      document.body.scrollTop = 0;
      return new Vue({
        el: "#app",
        render: (h) => h(component),
      });
    },
  },
};
</script>

<style>
:root,
.is-dark,
.is-light {
  --small-round: 24px;
  --medium-round: 32px;
  --large-round: 40px;
}
</style>
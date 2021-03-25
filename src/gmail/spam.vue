<template lang="pug">
.container.max.page.right.active
  h5.center-align No messages
</template>

<script>
export default {
  data() {
    return {
      check: false,
      emails: [],
    };
  },
  watch: {
    check() {
      this.checkAll();
    },
  },
  mounted() {},
  methods: {
    checkAll() {
      for (var i = 0; i < this.emails.length; i++)
        this.emails[i].check = this.check;
    },
    check(email) {
      email.check = !email.check;
    },
    star(email) {
      email.star = !email.star;
    },
  },
};
</script>
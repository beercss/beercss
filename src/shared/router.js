import Vue from "vue";
window.$layout = null;

export default (url, component, layout) => {
  page(url, () => {
    if (layout && window.$layout)
      window.$layout.redirect(component);

    if (layout && !window.$layout) {
      document.getElementById("body").innerHTML = "<div id='app'></div>";
      document.body.scrollTop = 0;
      new Vue({
        el: '#app',
        mounted() {
          window.$layout.redirect(component);
        },
        render: h => h(layout),
      });
    }

    if (!layout) {
      document.getElementById("body").innerHTML = "<div id='app'></div>";
      document.body.scrollTop = 0;
      new Vue({
        el: '#app',
        render: h => h(component)
      });
    }
  });

  page.start();
};

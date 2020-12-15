export default (url, component) => {
  page(url, () => {
    document.body.innerHTML = "<div id='app'></div>";

    new Vue({
      el: '#app',
      render: h => h(component)
    });
  });

  page.start();
};

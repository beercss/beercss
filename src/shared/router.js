export default (url, component) => {
  page(url, () => {
    document.getElementById("body").innerHTML = "<div id='app'></div>";

    new Vue({
      el: '#app',
      render: h => h(component)
    });
  });

  page.start();
};

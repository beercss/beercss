export default (url, pagina) => {
  page(url, () => {
    document.body.innerHTML = "<div id='app'></div>";

    new Vue({
      el: '#app',
      render: h => h(pagina)
    });
  });

  page.start();
};

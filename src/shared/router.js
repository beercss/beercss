import Vue from "vue";

const redirect = (url, component, layout) => {
  let element = layout 
    ? document.getElementById("layout") || document.getElementById("body")
    : document.getElementById("body");
  
  element.innerHTML = "<div id='app'></div>";
  document.body.scrollTop = 0;
  
  return new Vue({
    el: '#app',
    mounted() {
      let event = new CustomEvent("redirected", { detail: { url: page.current } })
      window.dispatchEvent(event);

      if (layout && element.id == "body")
        return redirect(url, component, layout);
    },
    render: h => h(layout && element.id == "body" ? layout : component),
  });
}

export default (url, component, layout) => {
  page(url, () => {
    return redirect(url, component, layout);
  });

  page.start();
};

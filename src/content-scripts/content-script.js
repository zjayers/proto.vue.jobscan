console.log("Hello from the content-script");

import Vue from "vue";
import App from "@/overlay/App.vue";
import store from "@/store";

Vue.config.productionTip = false;

// '0' to assign the first (and only `HTML` tag)
const rootHTML = document.getElementsByTagName("html")[0];
rootHTML.setAttribute("class", ".jscan-sizer");
rootHTML.style.marginLeft = "200px";

const rootElement = document.createElement("div");
rootElement.id = "jscan-root-container";
document.body.prepend(rootElement);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#jscan-root-container");

import Vue from "vue";
import App from "../overlay/App.vue";
import store from "../store";
import { APP_ROOT_CONTAINER } from "../constants/constants";

Vue.config.productionTip = false;

// Create a root div to mount the Vue app to
const rootElement = document.createElement("div");

// Set the elements id to mount to
rootElement.id = APP_ROOT_CONTAINER;

// Append the new div element to the top of the body tag
document.body.prepend(rootElement);

// Create the Vue Instance
new Vue({
    store,
    render: h => h(App)
}).$mount(rootElement);

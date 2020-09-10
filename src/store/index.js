import Vue from "vue";
import Vuex from "vuex";
import personalInfoStore from "./modules/personal-info-store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { personalInfoStore },
});

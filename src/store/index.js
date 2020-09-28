import Vue from "vue";
import Vuex from "vuex";
import personalInfoStore from "./modules/personal-info-store";
import guiStore from "./modules/gui-store";
import jobBoardStore from "./modules/job-board-store";
import companyInfoStore from "./modules/company-info-store";
// import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

// const vuexLocal = new VuexPersistence({
//     storage: window.localStorage,
// });

export default new Vuex.Store({
    modules: { personalInfoStore, guiStore, jobBoardStore, companyInfoStore },
    // plugins: [vuexLocal.plugin],
});

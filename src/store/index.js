import Vue from "vue";
import Vuex from "vuex";
import personalInfoStore from "./modules/personal-info-store";
import guiStore from "./modules/gui-store";
import jobBoardStore from "./modules/job-board-store";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { personalInfoStore, guiStore, jobBoardStore }
});

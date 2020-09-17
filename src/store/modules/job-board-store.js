import { JobBoardData } from "../../data/JobBoardData";

const INITIAL_STATE = JobBoardData.map(site => ({ ...site, show: true }));

// -------- State -------- //
const state = {
    sites: INITIAL_STATE,
    allComplete: false
};

// -------- Getters -------- //
const getters = {
    getSites: state => state.sites,
    getAllComplete: state => state.allComplete
};

// -------- Mutations -------- //
const mutations = {
    setSites: (state, payload) => (state.sites = payload),
    setAllComplete: (state, payload) => (state.allComplete = payload),
    setSiteAsHidden: (state, index) => {
        state.sites[index].show = false;
    }
};

// -------- Actions -------- //
const actions = {
    updateSites: ({ commit }, payload) => commit("setSites", payload),
    updateSiteShownStatus: ({ commit }, index) => commit("setSiteAsHidden", index),
    updateAllComplete: ({ commit }, payload) => commit("setAllComplete", payload),
    toggleAllComplete: ({ commit, state }) => commit("setAllComplete", state.allComplete)
};

export default { state, getters, mutations, actions };

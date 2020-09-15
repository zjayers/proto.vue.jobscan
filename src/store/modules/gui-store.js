// -------- State -------- //
const state = {
    dockVisible: true,
    accordionIconVisible: false,
    accordionToolTipText: "Hide",
    sideBarVisible: true,
    sideBarId: "jx-sidebar-personal"
};

// -------- Getters -------- //
const getters = {
    getDockVisible: state => state.dockVisible,
    getAccordionIconVisible: state => state.accordionIconVisible,
    getAccordionToolTipText: state => state.accordionToolTipText,
    getSideBarVisible: state => state.sideBarVisible,
    getSideBarId: state => state.sideBarId
};
// -------- Mutations -------- //
const mutations = {
    setDockVisible: (state, payload) => (state.dockVisible = payload),
    setAccordionIconVisible: (state, payload) => (state.accordionIconVisible = payload),
    setAccordionToolTipText: (state, payload) => (state.accordionToolTipText = payload),
    setSideBarVisible: (state, payload) => (state.sideBarVisible = payload),
    setSideBarId: (state, payload) => (state.sideBarId = payload)
};

// -------- Actions -------- //
const actions = {
    updateDockVisible: ({ commit }, payload) => commit("setDockVisible", payload),
    toggleDockVisible: ({ commit }) => commit("setDockVisible", !state.dockVisible),
    updateAccordionIconVisible: ({ commit }, payload) => commit("setAccordionIconVisible", payload),
    toggleAccordionIconVisible: ({ commit }) => commit("setAccordionIconVisible", !state.accordionIconVisible),
    updateAccordionToolTipText: ({ commit }, payload) => commit("setAccordionToolTipText", payload),
    updateSideBarVisible: ({ commit }, payload) => commit("setSideBarVisible", payload),
    toggleSideBarVisible: ({ commit }) => commit("setSideBarVisible", !state.sideBarVisible),
    updateSideBarId: ({ commit }, payload) => commit("setSideBarId", payload)
};

export default { state, getters, mutations, actions };

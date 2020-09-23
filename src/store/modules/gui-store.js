// -------- State -------- //
const state = {
    dockVisible: true,
    accordionIconVisible: false,
    accordionToolTipText: "Hide",
    sideBarVisible: true,
    sideBarId: "jx-sidebar-job-board",
    activeButton: null,
    templateId: "",
    activeTemplate: null
};

// -------- Getters -------- //
const getters = {
    getDockVisible: state => state.dockVisible,
    getAccordionIconVisible: state => state.accordionIconVisible,
    getAccordionToolTipText: state => state.accordionToolTipText,
    getSideBarVisible: state => state.sideBarVisible,
    getSideBarId: state => state.sideBarId,
    getActiveButton: state => state.activeButton,
    getTemplateId: state => state.templateId,
    getActiveTemplate: state => state.activeTemplate
};
// -------- Mutations -------- //
const mutations = {
    setDockVisible: (state, payload) => (state.dockVisible = payload),
    setAccordionIconVisible: (state, payload) => (state.accordionIconVisible = payload),
    setAccordionToolTipText: (state, payload) => (state.accordionToolTipText = payload),
    setSideBarVisible: (state, payload) => (state.sideBarVisible = payload),
    setSideBarId: (state, payload) => (state.sideBarId = payload),
    setActiveButton: (state, payload) => (state.activeButton = payload),
    setTemplateId: (state, payload) => (state.templateId = payload),
    setActiveTemplate: (state, payload) => (state.activeTemplate = payload)
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
    updateActiveButton: ({ commit }, payload) => commit("setActiveButton", payload),
    updateSideBarId: ({ commit }, payload) => commit("setSideBarId", payload),

    updateTemplateVisible: ({ commit }, payload) => commit("setTemplateVisible", payload),
    toggleTemplateVisible: ({ commit }) => commit("setTemplateVisible", !state.sideBarVisible),
    updateActiveTemplate: ({ commit }, payload) => commit("setActiveTemplate", payload),
    updateTemplateId: ({ commit }, payload) => commit("setTemplateId", payload)
};

export default { state, getters, mutations, actions };

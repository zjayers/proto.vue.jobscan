// -------- State -------- //
const state = {
    contactName: "",
    companyName: "",
    jobTitle: "",
    keywords: [],
    template: "",
    contactType: "Outreach"
};

// -------- Getters -------- //
const getters = {
    getContactName: state => state.contactName,
    getCompanyName: state => state.companyName,
    getJobTitle: state => state.jobTitle,
    getKeywords: state => state.keywords,
    getTemplate: state => state.template,
    getContactType: state => state.contactType
};

// -------- Mutations -------- //
const mutations = {
    setContactName: (state, payload) => (state.contactName = payload),
    setCompanyName: (state, payload) => (state.companyName = payload),
    setJobTitle: (state, payload) => (state.jobTitle = payload),
    setKeywords: (state, payload) => (state.keywords = payload),
    setTemplate: (state, payload) => (state.template = payload),
    setContactType: (state, payload) => (state.contactType = payload)
};

// -------- Actions -------- //
const actions = {
    updateContactName: ({ commit }, payload) => commit("setContactName", payload),
    updateCompanyName: ({ commit }, payload) => commit("setCompanyName", payload),
    updateJobTitle: ({ commit }, payload) => commit("setJobTitle", payload),
    updateKeywords: ({ commit }, payload) => commit("setKeywords", payload),
    updateTemplate: ({ commit }, payload) => commit("setTemplate", payload),
    updateContactType: ({ commit }, payload) => commit("setContactType", payload)
};

export default { state, getters, mutations, actions };

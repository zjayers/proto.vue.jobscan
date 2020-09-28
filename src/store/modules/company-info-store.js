import { templates } from "../../data/Templates";

// -------- State -------- //
const state = {
    contactName: "",
    companyName: "",
    jobTitle: "",
    keywords: [],
    template: "",
    contactType: "",
};

// -------- Getters -------- //
const getters = {
    getContactName: (state) => state.contactName,
    getCompanyName: (state) => state.companyName,
    getJobTitle: (state) => state.jobTitle,
    getKeywords: (state) => state.keywords,
    getTemplate: (state) => state.template,
    getContactType: (state) => state.contactType,
};

// -------- Mutations -------- //
const mutations = {
    setContactName: (state, payload) => (state.contactName = payload),
    setCompanyName: (state, payload) => (state.companyName = payload),
    setJobTitle: (state, payload) => (state.jobTitle = payload),
    setKeywords: (state, payload) => (state.keywords = payload),
    setTemplate: (state, payload) => (state.template = payload),
    setContactType: (state, payload) => (state.contactType = payload),
    refreshTemplate: (state, store) => (state.template = parseTemplateContent(store, state.template)),
};

// -------- Actions -------- //
const actions = {
    updateContactName: ({ commit }, payload) => commit("setContactName", payload),
    updateCompanyName: ({ commit }, payload) => commit("setCompanyName", payload),
    updateJobTitle: ({ commit }, payload) => commit("setJobTitle", payload),
    updateKeywords: ({ commit }, payload) => commit("setKeywords", payload),
    updateTemplate: ({ commit }, payload) => commit("setTemplate", payload),
    updateContactType: ({ commit }, payload) => commit("setContactType", payload),
};

const error = "#dc3545";
const content = "#20c997";

function parseTemplateContent(store) {
    const activeTemplate = store.getters.getActiveTemplate.split("-").pop();
    const contactType = store.getters.getContactType;
    let parsedContent = templates[activeTemplate][contactType];
    for (const getter in store.getters) {
        const key = getter.replace("get", "").toUpperCase();
        const parsableKey = `<%-${key}-%>`;
        const parsablePlural = `<%-${key}_COUNT-%>`;
        const singularMatcher = new RegExp(parsableKey, "g");
        const pluralMatcher = new RegExp(parsablePlural, "g");
        let value = store.getters[getter];
        let valueCount = Array.isArray(value) ? value.length : 0;

        if (Array.isArray(value)) {
            value = value.map((val) => val.text);
            value = value.join(", ");
        }

        let style = `background-color: ${content} !important; border-radius: 4px; font-size: 12px; padding: 1px; color: white;`;

        if (!value || !value.length) {
            value = key;
            style = style.replace(content, error);
        }

        value = `<span style="${style}" class="jx-parsable">${value}</span>`;

        parsedContent = parsedContent.replace(singularMatcher, value);
        parsedContent = parsedContent.replace(pluralMatcher, valueCount);
    }

    return parsedContent ? parsedContent : "";
}

export default { state, getters, mutations, actions };

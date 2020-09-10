// -------- State -------- //
const state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    githubUsername: "",
    website: "",
    currentJobTitle: "",
    yearsOfExperience: "",
    personalSummary: "",
    platforms: ["Windows", "Mac", "Linux", "iOS", "Android"],
    skills: [],
};

// -------- Getters -------- //
const getters = {
    getFirstName: (state) => state.firstName,
    getLastName: (state) => state.lastName,
    getEmail: (state) => state.email,
    getPhoneNumber: (state) => state.phoneNumber,
    getGithubUsername: (state) => state.githubUsername,
    getWebsite: (state) => state.website,
    getCurrentJobTitle: (state) => state.currentJobTitle,
    getYearsOfExperience: (state) => state.yearsOfExperience,
    getPersonalSummary: (state) => state.personalSummary,
    getPlatforms: (state) => state.platforms,
    getSkills: (state) => state.skills,
};

// -------- Mutations -------- //
const mutations = {
    setFirstName: (state, payload) => (state.firstName = payload),
    setLastName: (state, payload) => (state.lastName = payload),
    setEmail: (state, payload) => (state.email = payload),
    setPhoneNumber: (state, payload) => (state.phoneNumber = payload),
    setGithubUsername: (state, payload) => (state.githubUsername = payload),
    setWebsite: (state, payload) => (state.website = payload),
    setCurrentJobTitle: (state, payload) => (state.currentJobTitle = payload),
    setYearsOfExperience: (state, payload) => (state.yearsOfExperience = payload),
    setPersonalSummary: (state, payload) => (state.personalSummary = payload),
    setPlatforms: (state, payload) => (state.platforms = payload),
    setSkills: (state, payload) => (state.skills = payload),
};

// -------- Actions -------- //
const actions = {
    updateFirstName: ({ commit }, payload) => commit("setFirstName", payload),
    updateLastName: ({ commit }, payload) => commit("setLastName", payload),
    updateEmail: ({ commit }, payload) => commit("setEmail", payload),
    updatePhoneNumber: ({ commit }, payload) => commit("setPhoneNumber", payload),
    updateGithubUsername: ({ commit }, payload) => commit("setGitProfile", payload),
    updateWebsite: ({ commit }, payload) => commit("setWebsite", payload),
    updateCurrentJobTitle: ({ commit }, payload) => commit("setCurrentJobTitle", payload),
    updateYearsOfExperience: ({ commit }, payload) => commit("setYearsOfExperience", payload),
    updatePersonalSummary: ({ commit }, payload) => commit("setPersonalSummary", payload),
    updatePlatforms: ({ commit }, payload) => commit("setPlatforms", payload),
    updateSkills: ({ commit }, payload) => commit("setSkills", payload),
};

export default { state, getters, mutations, actions };

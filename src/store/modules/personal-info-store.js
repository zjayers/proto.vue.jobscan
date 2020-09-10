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
  getFirstName: (state) => {
    return state.firstName;
  },
  getLastName: (state) => {
    return state.lastName;
  },
  getEmail: (state) => {
    return state.email;
  },
  getPhoneNumber: (state) => {
    return state.phoneNumber;
  },
  getGithubUsername: (state) => {
    return state.githubUsername;
  },
  getWebsite: (state) => {
    return state.website;
  },
  getCurrentJobTitle: (state) => {
    return state.currentJobTitle;
  },
  getYearsOfExperience: (state) => {
    return state.yearsOfExperience;
  },
  getPersonalSummary: (state) => {
    return state.personalSummary;
  },
  getPlatforms: (state) => {
    return state.platforms;
  },
  getSkills: (state) => {
    return state.skills;
  },
};

// -------- Mutations -------- //
const mutations = {
  mutateFirstName(state, payload) {
    state.firstName = payload;
  },
  mutateLastName(state, payload) {
    state.lastName = payload;
  },
  mutateEmail(state, payload) {
    state.email = payload;
  },
  mutatePhoneNumber(state, payload) {
    state.phoneNumber = payload;
  },
  mutateGithubUsername(state, payload) {
    state.githubUsername = payload;
  },
  mutateWebsite(state, payload) {
    state.website = payload;
  },
  mutateCurrentJobTitle(state, payload) {
    state.currentJobTitle = payload;
  },
  mutateYearsOfExperience(state, payload) {
    state.yearsOfExperience = payload;
  },
  mutatePersonalSummary(state, payload) {
    state.personalSummary = payload;
  },
  mutatePlatforms(state, payload) {
    state.platforms = payload;
  },
  mutateSkills(state, payload) {
    state.skills = payload;
  },
};

// -------- Actions -------- //
const actions = {
  updateFirstName({ commit }, payload) {
    commit("mutateFirstName", payload);
  },
  updateLastName({ commit }, payload) {
    commit("mutateLastName", payload);
  },
  updateEmail({ commit }, payload) {
    commit("mutateEmail", payload);
  },
  updatePhoneNumber({ commit }, payload) {
    commit("mutatePhoneNumber", payload);
  },
  updateGithubUsername({ commit }, payload) {
    commit("mutateGitProfile", payload);
  },
  updateWebsite({ commit }, payload) {
    commit("mutateWebsite", payload);
  },
  updateCurrentJobTitle({ commit }, payload) {
    commit("mutateCurrentJobTitle", payload);
  },
  updateYearsOfExperience({ commit }, payload) {
    commit("mutateYearsOfExperience", payload);
  },
  updatePersonalSummary({ commit }, payload) {
    commit("mutatePersonalSummary", payload);
  },
  updatePlatforms({ commit }, payload) {
    commit("mutatePlatforms", payload);
  },
  updateSkills({ commit }, payload) {
    commit("mutateSkills", payload);
  },
};

export default { state, getters, mutations, actions };

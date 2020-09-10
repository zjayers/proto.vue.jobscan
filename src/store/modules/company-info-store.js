// -------- State -------- //
const state = {
  value: null,
};

// -------- Getters -------- //
const getters = {
  getValue: (state) => {
    return state.value;
  },
};

// -------- Mutations -------- //
const mutations = {
  setValue(state, payload) {
    state.value = payload;
  },
};

// -------- Actions -------- //
const actions = {
  updateValue({ commit }, payload) {
    commit("setValue", payload);
  },
};

export default { state, getters, mutations, actions };

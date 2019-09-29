import axios from "axios";

const state = {
  todo: null,
  deletetodo: false,
  deletetodoError: null,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
};
const mutations = {
  deletetodoStart: state => (state.registered = true),
  deletetodoStop: (state, errorMessage) => {
    state.deletetodo = false;
    state.deletetodoError = errorMessage;
  }
};
const actions = {
  todoRegistration({ commit }, regData) {
    commit("deletetodoStart");

    axios
      .delete(
        "http://localhost:8086/api/v1/todo",
        {
          ...delData
        },
        this.state.headers
      )
      .then(response => {
        localStorage.setItem("todo", response.data.data.tasks);
        commit("registrationStop", null);
        commit("updateTask", response.data.data.tasks);
      })
      .catch(error => {
        commit("registrationStop", error.response.data.error);
        commit("updateTask", null);
      });
  },
  fetchTask({ commit }) {
    commit("updateTask", localStorage.getItem("todo"));
  }
};

export default {
  state,
  mutations,
  actions
};

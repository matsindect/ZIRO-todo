import axios from "axios";

const state = {
  todo: null,
  registered: false,
  registrationError: null,
  loginSuccessful: false,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
};
const mutations = {
  registrationStart: state => (state.registered = true),
  registrationStop: (state, errorMessage) => {
    state.registered = false;
    state.registeredError = errorMessage;
    state.loginSuccessful = !errorMessage;
  },
  updateTask: (state, todo) => {
    state.todo = todo;
  }
};
const actions = {
  todoRegistration({ commit }, regData) {
    commit("registrationStart");

    axios
      .post(
        "http://localhost:8086/api/v1/todo",
        {
          ...regData
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

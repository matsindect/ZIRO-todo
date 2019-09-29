import axios from "axios";

const state = {
  accessToken: null,
  user_id: null,
  loggingIn: false,
  loginError: null,
  loginSuccessful: false,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
};
const mutations = {
  loginStart: state => (state.loggingIn = true),
  loginStop: (state, errorMessage) => {
    state.loggingIn = false;
    state.loginError = errorMessage;
    state.loginSuccessful = !errorMessage;
  },
  updateAccessToken: (state, accessToken) => {
    state.accessToken = accessToken;
  },
  updateUserId: (state, user_id) => {
    state.user_id = user_id;
  }
};
const actions = {
  doLogin({ commit }, loginData) {
    commit("loginStart");

    axios
      .post(
        "http://localhost:8086/api/v1/users/login",
        {
          ...loginData
        },
        this.state.headers
      )
      .then(response => {
        localStorage.setItem("accessToken", response.data.token);
        localStorage.setItem("user_id", response.data.data.user._id);
        commit("loginStop", null);
        commit("updateAccessToken", response.data.token);
        commit("updateUserId", response.data.data.user._id);
      })
      .catch(error => {
        commit("loginStop", error.response.data.error);
        commit("updateAccessToken", null);
      });
  },
  fetchAccessToken({ commit }) {
    commit("updateAccessToken", localStorage.getItem("accessToken"));
    commit("updateUserId", localStorage.getItem("user_id"));
  }
};

export default {
  state,
  mutations,
  actions
};

import Vue from "vue";
import axios from "axios";

const state = {
  todosList: {},
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
};
const actions = {
  loadTodos({ commit }) {
    axios
      .get(
        `http://localhost:8086/api/v1/todo?user_id=${localStorage.getItem(
          "user_id"
        )}`,
        state.headers
      )
      .then(todosList => {
        commit("SET_TODOS", todosList.data.data.tasks);
      });
  }
};
const mutations = {
  SET_TODOS(state, todosList) {
    Vue.set(state, "todosList", todosList);
  }
};

export default {
  state,
  mutations,
  actions
};

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
      .get("http://localhost:8086/api/v1/todo")
      .then(r => r.data)
      .then(todosList => {
        commit("SET_TODOS", todosList.data.tasks);
      });
  }
};
const mutations = {
  SET_TODOS(state, todosList) {
    state.todosList = todosList;
  }
};

export default {
  state,
  mutations,
  actions
};

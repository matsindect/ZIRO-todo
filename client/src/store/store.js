import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import login from "./modules/login";
import todoreg from "./modules/register";
import getTodos from "./modules/getTodos";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    todoreg,
    getTodos
  }
});

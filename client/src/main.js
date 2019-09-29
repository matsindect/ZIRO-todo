import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./routes/router";
import store from "./store/store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Vue.prototype.$http = axios;
// const token = localStorage.getItem("accessToken");
// if (token) {
//   Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
// }
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});

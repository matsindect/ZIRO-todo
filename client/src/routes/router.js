import Vue from "vue";
import Router from "vue-router";
import store from "../store/store";
import HomePage from "../view/LoggedIn.vue";
import LoginPage from "../view/Login.vue";
import RegisterPage from "../view/Signup.vue";
import CurrentTasks from "../view/CurrentTasks.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    { path: "/", component: LoginPage },
    { path: "/login", component: LoginPage },
    { path: "/register", component: RegisterPage },
    { path: "/dashboard", component: HomePage, meta: { requiresAuth: true } },
    { path: "/tasks", component: CurrentTasks, meta: { requiresAuth: true } },

    // otherwise redirect to home
    { path: "*", redirect: "/" }
  ]
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!store.getters.isLoggedIn) {
//       next({ path: "/login" });
//     } else {
//       next(); // go to wherever I'm going
//     }
//   } else {
//     next(); // does not require auth, make sure to always call next()!
//   }
// });
export default router;

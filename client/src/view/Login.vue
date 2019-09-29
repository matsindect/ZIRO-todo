<template>
    <div class="wrapper fadeInDown">
        <div id="formContent">
            <!-- Tabs Titles -->

            <!-- Icon -->
            <div class="fadeIn first">
            </div>
            <p v-if="loginError">{{ loginError }}</p>
            <p v-if="accessToken">Login Successful</p>
            <!-- Login Form -->
            <form @submit.prevent="loginSubmit">
            <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" v-model="email">
            <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" v-model="password">
            <input type="submit" class="fadeIn fourth" value="Log In">
            </form>

            <!-- Remind Passowrd -->
            <div id="formFooter">
            <router-link class="underlineHover" to="/forgot-password">Forgot Password?</router-link>
            
            <router-link class="underlineHover" to="/register"> Sign Up</router-link>  
            </div>

        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapState(["loggingIn", "loginError", "accessToken"])
  },
  methods: {
    ...mapActions(["doLogin"]),
    loginSubmit() {
      this.doLogin({
        user_email_address: this.email,
        user_password: this.password
      }).then(response => {
        this.$router.push("/dashboard");
      });
    }
  }
};
</script>

<style>
</style>

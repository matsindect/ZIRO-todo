<template>
    <div class="wrapper fadeInDown">
        <div id="formContent">
            <!-- Tabs Titles -->

            <!-- Icon -->
            <div class="fadeIn first">
            <h3>Welcome</h3>

            <h4>Add Task</h4>
            </div>
            <p v-if="registrationError">{{ registrationError }}</p>
            <!-- Login Form -->
            <form @submit.prevent="TaskSubmit">
            <input type="text" id="login" class="fadeIn second" name="user_name" placeholder="Task Name" v-model="todo_name">
            <label>Priority Level</label>
            <select v-model="todo_priority">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <input type="text" id="login" class="fadeIn fourth" name="todo_description" placeholder="Desrciption" v-model="todo_description">
            <label>Task Date</label>
            <input type="Date" id="login" class="fadeIn fifth" name="todo_date" v-model="todo_date">
            <input type="text" id="login" class="fadeIn sixth" name="todo_time" placeholder="Time" v-model="todo_time">
            <input type="submit" class="fadeIn eighth" value="Add Task">
            </form>

            <!-- Remind Passowrd -->
            <div id="formFooter">
            <a class="underlineHover" href="#">Forgot Password?</a>
            <a class="underlineHover" href="#">Sign in</a>
            </div>

        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      todo_name: "",
      todo_priority: "",
      todo_description: "",
      todo_date: "",
      todo_time: ""
    };
  },
  computed: {
    ...mapState(["registered", "registrationError", "todo"])
  },
  methods: {
    ...mapActions(["todoRegistration", "fetchTask"]),
    TaskSubmit() {
      this.todoRegistration({
        todo_name: this.todo_name,
        todo_priority: this.todo_priority,
        todo_description: this.todo_description,
        todo_date: this.todo_date,
        todo_time: this.todo_time,
        user_id: localStorage.getItem("user_id")
      }).then(() => {
        this.$router.push("/tasks");
      });
    }
  }
};
</script>

<style>
</style>

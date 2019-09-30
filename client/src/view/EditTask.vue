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
            <form @submit.prevent="fetchTodo()">
            <label>Choose Task to Edit</label>
            <select v-model="todoId">
                <option v-for="todo in todosList" :key="todo._id" v-bind:value="todo._id">{{todo.todo_name}}</option>
            </select>
<!--             
            <input type="text" id="login" class="fadeIn second" name="user_name"  v-model="todo_name"> -->
            <label>Priority Level</label>
            <select v-model="todo_priority">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <input type="text" id="login" class="fadeIn fourth" name="todo_description" placeholder="Desrciption" v-model="todo_description">
            <label>Task Date</label>
            <input type="Date" id="login" class="fadeIn fifth" name="todo_date" v-model="todo_date">
            <label for="appt">Choose a time for your Task:</label>
            <input type="text" id="login" class="fadeIn sixth" name="todo_time" v-model="todo_time" placeholder="2019-09-29T01:55:49.373+00:00">
            <input type="submit" class="fadeIn eighth" value="Edit Task">
            </form>

            <!-- Remind Passowrd -->
            <div id="formFooter">
            <router-link class="underlineHover" to="/tasks">View Tasks</router-link>
            
            <router-link class="underlineHover" to="/register"> Logout</router-link> 
            </div>

        </div>
    </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      todo_name: "",
      todo_priority: "",
      todo_description: "",
      todo_date: "",
      todo_time: "",
      todoId:"",
      headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
    };
  },
  mounted() {
    return this.$store.dispatch("loadTodos");
  },
  computed: {
    ...mapState(["registered", "registrationError", "todo"]),
   todosList() {
      return this.$store.state.getTodos.todosList;
    }
  },
  methods: {
    
    
    fetchTodo(){
        axios
      .patch(
        `http://localhost:8086/api/v1/todo/${this.todoId}`,{
        todo_priority: this.todo_priority,
        todo_description: this.todo_description,
        todo_date: this.todo_date,
      }, this.headers).then(() => {
        this.$router.push("/tasks");
      });
    },
     
  }
};
</script>

<style>
</style>

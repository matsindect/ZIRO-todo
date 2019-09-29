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
            <label>Choose Task to Edit</label>
            <select >
                <option v-for="todo in todosList" :key="todo._id" value="">{{todo.todo_name}}</option>
            </select>
            
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
            <label for="appt">Choose a time for your Task:</label>
            <input type="time" id="login" class="fadeIn sixth" name="todo_time" v-model="todo_time" value="13:30">
            <input type="submit" class="fadeIn eighth" value="Add Task">
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
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      todo_name: "",
      todo_priority: "",
      todo_description: "",
      todo_date: "",
      todo_time: "",
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
    
    
    fetchTodo(todoId){
        axios
      .patch(
        `http://localhost:8086/api/v1/todo/${todoId}`,{
        todo_name: this.todo_name,
        todo_priority: this.todo_priority,
        todo_description: this.todo_description,
        todo_date: this.todo_date,
        todo_time: this.todo_time,
        user_id: localStorage.getItem("user_id")
      }).then(() => {
        this.$router.push("/tasks");
      });
    },
     
  }
};
</script>

<style>
</style>

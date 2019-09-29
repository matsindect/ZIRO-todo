<template>
    <div class="wrapper fadeInDown" id="GetData">
        <div id="formContent" >
            <!-- Tabs Titles -->

            <!-- Icon -->
            <div class="fadeIn first">
            <h3>Welcome</h3>

            <h4>My To Do List</h4>
            <div >
                <table>
                    <tr v-for="todos in todosList" :key="todos._id">
                        <td>{{todos.todo_name}}</td>
                        <td>{{todos.todo_date}}</td>
                        <td>{{todos.todo_time}}</td>
                        <td><a href="#" @click="deleteTodo(todos._id)">Delete</a></td>
                    </tr>
                </table>
            </div>

            <!-- Remind Passowrd -->
            <div id="formFooter">
            <router-link class="underlineHover" to="/add-task">Add New Task</router-link>
            
            <router-link class="underlineHover" to="/edit-task"> Edit</router-link>  
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from "vuex";
export default {
  name: "CurrentTask",
  mounted() {
    return this.$store.dispatch("loadTodos");
  },
  computed: {
    todosList() {
      return this.$store.state.getTodos.todosList;
    }
  },
  methods:{
    deleteTodo: function (todoId){
      axios
      .delete(
        `http://localhost:8086/api/v1/todo/${todoId}`
      ).then(()=>{
        window.location.reload()
      })
      
    }
  }
};
</script>

<style scoped>
#formContent {
  width:600px!important;
}
table, tr ,td{
  border:1px solid black
}
</style>

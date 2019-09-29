<template>
    <div class="wrapper fadeInDown" id="GetData">
        <div id="formContent">
            <!-- Tabs Titles -->

            <!-- Icon -->
            <div class="fadeIn first">
            <h3>Welcome</h3>

            <h4>Add Task</h4>
            <div >
                <table>
                    <tr v-for="todos in todosList" :key="todos._id">
                        <td>{{todos.todo_name}}</td>
                        <td></td>
                    </tr>
                </table>
            </div>

            <!-- Remind Passowrd -->
            <div id="formFooter">
            <a class="underlineHover" href="#">Forgot Password?</a>
            <a class="underlineHover" href="#">Sign in</a>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CurrentTask",
  created() {
    this.$store.dispatch("loadTodos");
  },
  computed: { ...mapState(["todosList"]) },
  methods: {
    testFn() {
      console.log(this.todosList);
    }
  }
};
</script>

<style>
</style>

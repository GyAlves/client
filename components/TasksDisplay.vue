<template>
  <div class="tasks_container">
    <Task />
  </div>
</template>

<script>
import Task from "./Task.vue";
export default {
  name: "TasksDisplay",
  components: {
    Task,
  },
};
</script>

<style>
.tasks_container {
  width: 100%;
  height: 80%;
  padding-top: 3em;
  padding-left: 2em;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: initial;
}
</style>

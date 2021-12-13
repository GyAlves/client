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
  padding: 2em;

  border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

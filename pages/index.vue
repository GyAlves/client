<template>
  <div class="container">
    <Header />
    <Divider />
    <TasksDisplay />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Divider from "../components/Divider.vue";
import TasksDisplay from "../components/TasksDisplay.vue";

export default {
  components: {
    Header,
    Divider,
    TasksDisplay,
  },
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.container {
  width: 375px;
  height: 812px;
  background: #fffbfa;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>

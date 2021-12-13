<template>
  <div class="container">
    <main class="main">
      <Header />
      <Divider />
      <TasksDisplay />
    </main>
    <aside class="aside"></aside>
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
  height: 80vh;
  background-color: #fefcfd;
  border-radius: 10px;
  margin-top: 5em;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.container .main {
  width: 65%;
  height: 90%;
  border: 1px solid;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container .aside {
  width: 30%;
  height: 90%;
  border: 1px solid;
}
</style>

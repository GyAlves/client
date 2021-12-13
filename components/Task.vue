<template>
  <div class="task_container">
    <div class="done_btn_container"></div>
    <div class="task_description_container">
      <div class="description_container">
        <h2>Learn VueJs</h2>
        <span>Learn vueJs using youtube videos</span>
      </div>
      <div class="priority_label_container">
        <p>Low</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
};
</script>

<style>
.task_container {
  width: 75%;
  height: 20%;
  border-radius: 10px;
  padding-top: 1em;
  border: 2px solid #3b335577;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
}

.task_container .done_btn_container {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 3px solid #5d5d81;
}

.task_container .task_description_container {
  width: 85%;
  height: 90%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.task_container .task_description_container .description_container {
  height: 87%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.task_container .task_description_container .description_container h2 {
  font-size: 1.2em;
  color: #5d5d81;
}

.task_container .task_description_container .description_container span {
  color: #5d5d816c;
}

.task_container .task_description_container .priority_label_container {
  width: 17%;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #69abe8;
  color: #ffffff;
}
</style>

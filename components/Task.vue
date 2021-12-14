<template>
  <div class="task_container">
    <div class="complete_task_btn"></div>
    <div class="task_description">
      <h3>Learn VueJs</h3>
      <span>Freecodecamp youtube videos</span>
    </div>
    <div class="delete_task_btn">X</div>
  </div>
</template>

<script>
export default {
  name: "Task",
};
</script>

<style>
.task_container {
  position: absolute;
  width: 290px;
  height: 72.51px;
  left: 47px;
  top: 231px;

  background: #8bd7d2;
  border: 4px solid #00bd9d5e;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.task_container .complete_task_btn {
  width: 25px;
  height: 25.53px;
  border-radius: 50%;
  border: 3px solid #00bd9d;

  background-color: #fffbfa;
}

.task_container .task_description {
  width: 65%;
  height: 70%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.task_container .task_description h3 {
  font-size: 0.9em;
  color: #fffbfa;
}

.task_container .task_description span {
  font-size: 0.8em;
  color: #fffbfac4;
}

.task_container .delete_task_btn {
  width: 10%;
  height: 50%;
  font-size: 1.5em;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fffbfa;
}
</style>

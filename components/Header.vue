<template>
  <div class="header_container">
    <h2>Welcome, Gyasmin</h2>
    <div class="add_container">
      <p>Add task</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header_container {
  width: 100%;
  height: 13%;
  padding: 2em;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.header_container h2 {
  color: #3b3355;
}

.header_container .add_container {
  width: 140px;
  height: 40px;
  border-radius: 11px;
  background-color: #3b3355;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fefcfd;
}

.header_container .add_container:hover {
  cursor: pointer;
  background-color: #3b3355cc;
}
</style>

<template>
  <div class="header_container">
    <div class="add_task_btn"></div>
    <div class="header_description">
      <span
        >Welcome back, <br />
        <p>Gyasmin</p></span
      >
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
  height: 20%;
}

.add_task_btn {
  width: 100%;
  height: 40%;
}

.header_description {
  width: 100%;
  height: 60%;
  padding-left: 1.5em;
}

.header_description span {
  font-size: 24px;
  color: #0000004b;
}

.header_description p {
  color: #00bd9d;
  font-weight: bold;
}
</style>

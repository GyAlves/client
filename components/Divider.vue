<template>
  <div class="divider_container">
    <span>My tasks</span>
    <div class="line_container"></div>
  </div>
</template>

<script>
export default {
  name: "Divider",
};
</script>

<style>
.divider_container {
  width: 100%;
  height: 3%;
  padding-left: 2em;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
}

.divider_container span {
  color: #5d5d81;
}

.divider_container .line_container {
  width: 90%;
  height: 1px;
  border: 1px solid;

  border-color: #bfcde0;
}
</style>

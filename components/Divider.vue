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
  padding-left: 1.5em;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
}

.divider_container span {
  color: #00000050;
}

.divider_container .line_container {
  width: 75%;
  height: 1px;
  border: 1px solid;

  border-color: #00bd9d5e;
}
</style>

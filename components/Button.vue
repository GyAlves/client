<template>
  <div class="support_button">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: String,
  },
};
</script>

<style>
.support_button {
  font-weight: bold;
  font-size: 20px;
  line-height: 142.69%;

  letter-spacing: 0.03em;
  text-decoration: none;

  color: #ffffff;
  margin-top: 2.2em;

  width: 295px;
  height: 44px;

  background: #26c485;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
}

.support_button:hover {
  cursor: pointer;
}
</style>

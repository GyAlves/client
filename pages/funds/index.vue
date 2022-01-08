<template>
  <div class="discover_container">
    <SubHeader />
    <DiscoverDisplay />
  </div>
</template>

<script>
import SubHeader from "../../components/SubHeader.vue";
import DiscoverDisplay from "../../components/DiscoverDisplay.vue";

export default {
  components: {
    SubHeader,
    DiscoverDisplay,
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
  background-color: #f3eff5;
}
.discover_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>

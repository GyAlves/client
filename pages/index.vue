<template>
  <div>
    <SubHeader />
    <ImageHero />
    <Home />
  </div>
</template>

<script>
import ImageHero from "../components/ImageHero.vue";
import SubHeader from "../components/SubHeader.vue";
import Home from "../components/Home.vue";

export default {
  components: {
    SubHeader,
    Home,
    ImageHero,
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
</style>

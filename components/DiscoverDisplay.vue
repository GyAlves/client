<template>
  <div class="discover_display_container">
    <Card v-for="cardInfo in fundsCards" :key="cardInfo.id" :card="cardInfo" />
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import { cards } from "../assets/data.js";

export default {
  name: "DiscoverDisplay",
  components: {
    Card,
  },
  data() {
    return {
      fundsCards: cards,
    };
  },
};
</script>

<style>
.discover_display_container {
  width: 100%;
  height: 44em;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>

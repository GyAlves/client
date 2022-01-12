<template>
  <div class="wrapper">
    <div class="discover_display_container">
      <Card v-for="cardInfo in allFunds" :key="cardInfo.id" :card="cardInfo" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Card from "../components/Card.vue";

export default {
  name: "DiscoverDisplay",
  components: {
    Card,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchFunds"]),
  },
  computed: {
    ...mapGetters(["allFunds"]),
  },

  created() {
    this.fetchFunds();
  },
};
</script>

<style>
.wrapper {
  width: 100%;
  height: 34em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10em;
}
.discover_display_container {
  width: 100%;
  height: 36em;
  padding: 3em;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>

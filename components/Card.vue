<template>
  <div class="card_container">
    <div class="card_title">
      <p>{{ card.title }}</p>
      <DeleteFund v-on:click.native="deleteFund" />
    </div>
    <div class="card_description">
      <div class="details">
        <div class="money">
          <p>R$ {{ card.current }}</p>
          <b />
          <span>of {{ card.target }} backed</span>
        </div>
        <div class="supporters">
          <p>{{ card.supporters }}</p>
          <b />
          <span>Supporters</span>
        </div>
      </div>
      <NuxtLink :to="`/funds/${card._id}`" id="button">
        <Button title="Support this project" />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Button from "../components/Button.vue";
import DeleteFund from "../components/DeleteFund.vue";

export default {
  name: "Card",
  props: ["card"],
  components: {
    Button,
    DeleteFund,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["deleteById"]),

    deleteFund() {
      this.deleteById(this.card._id);
    },
  },
};
</script>

<style>
#button {
  text-decoration: none;
}

.card_container {
  width: 27%;
  height: 30em;

  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
}

.card_container .card_title {
  width: 100%;
  height: 14em;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2em;
}

.card_container .card_title p {
  font-weight: bold;
  font-size: 36px;
  line-height: 51px;
  letter-spacing: 0.03em;

  color: #454955;
}

.card_container .card_description {
  width: 100%;
  height: 20em;

  background: #454955;
  border-radius: 20px 20px 0px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
}

.card_container .card_description .details {
  width: 100%;
  height: 13em;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 1em;
  justify-content: space-evenly;
}

.card_container .card_description .details .money p {
  font-weight: bold;
  font-size: 24px;
  line-height: 142.69%;

  letter-spacing: 0.03em;

  color: #ffffff;
}

.card_container .card_description .details .money span {
  font-weight: bold;
  font-size: 14px;
  line-height: 142.69%;

  /* or 20px */
  letter-spacing: 0.03em;

  color: rgba(243, 239, 245, 0.73);
}

.card_container .card_description .details .supporters p {
  font-weight: bold;
  font-size: 24px;
  line-height: 142.69%;

  letter-spacing: 0.03em;

  color: #ffffff;
}

.card_container .card_description .details .supporters span {
  font-weight: bold;
  font-size: 14px;
  line-height: 142.69%;

  /* or 20px */
  letter-spacing: 0.03em;

  color: rgba(243, 239, 245, 0.73);
}
</style>

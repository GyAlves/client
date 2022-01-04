<template>
  <div class="card_container">
    <div class="card_title">
      <p>{{ card.title }}</p>
    </div>
    <div class="card_description">
      <div class="details">
        <div class="money">
          <p>R$ {{ card.current_fund }}</p>
          <b />
          <span>of {{ card.target }} backed</span>
        </div>
        <div class="supporters">
          <p>{{ card.supporters }}</p>
          <b />
          <span>Supporters</span>
        </div>
      </div>
      <div class="support_button">
        <span>Support this project</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["card"],
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style>
.card_container {
  width: 375px;
  height: 550px;

  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.card_container .card_title {
  width: 100%;
  height: 14em;

  display: flex;
  align-items: center;
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
  height: 25em;

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

.card_container .support_button {
  margin-top: 2.2em;

  width: 295px;
  height: 44px;

  background: #26c485;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.card_container .support_button span {
  font-weight: bold;
  font-size: 20px;
  line-height: 142.69%;

  /* or 29px */
  letter-spacing: 0.03em;

  color: #ffffff;
}

.support_button:hover {
  cursor: pointer;
}
</style>

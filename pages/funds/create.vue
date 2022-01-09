<template>
  <div class="create_fund_container">
    <SubHeader />
    <div class="create_fund_form">
      <h3>Create your fund</h3>

      <div class="fund_input_container">
        <v-text-field
          class="input_container"
          label="Fund name"
          filled
          rounded
          dense
        ></v-text-field>
        <v-text-field
          class="input_container"
          label="Expiration date"
          filled
          rounded
          dense
        ></v-text-field>
        <v-text-field
          class="input_container"
          label="Target value"
          filled
          rounded
          dense
        ></v-text-field>
        <v-text-field
          class="input_container"
          label="Description"
          filled
          rounded
          dense
        ></v-text-field>
      </div>

      <Button title="Create" />
    </div>
  </div>
</template>

<script>
import SubHeader from "../../components/SubHeader.vue";
import Button from "../../components/Button.vue";
export default {
  components: {
    SubHeader,
    Button,
  },
};
</script>

<style>
.create_fund_container {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.create_fund_form {
  width: 40%;
  height: 34em;
  margin-top: 1em;
  padding: 2em;

  background: #ffffff;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.create_fund_form h3 {
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

  color: rgba(13, 10, 11, 0.58);
}

.create_fund_form .fund_input_container {
  width: 100%;
  height: 18em;
  margin-top: 1em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

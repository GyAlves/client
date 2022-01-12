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
          v-model="title"
        ></v-text-field>
        <v-text-field
          class="input_container"
          label="Author"
          filled
          rounded
          dense
          v-model="author"
        ></v-text-field>
        <v-text-field
          class="input_container"
          label="Expiration date"
          filled
          rounded
          dense
          v-model="expiration"
        ></v-text-field>
        <v-text-field
          class="input_container"
          label="Target value"
          filled
          rounded
          dense
          v-model="target"
        ></v-text-field>
        <v-text-field
          class="input_container"
          label="Description"
          filled
          rounded
          dense
          v-model="description"
        ></v-text-field>
      </div>
      <Button v-on:click.native="sendFund" title="Create" id="createFundBtn" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import SubHeader from "../../components/SubHeader.vue";
import Button from "../../components/Button.vue";

export default {
  data() {
    return {
      title: "",
      author: "",
      expiration: "",
      target: "",
      description: "",
    };
  },
  components: {
    SubHeader,
    Button,
  },
  methods: {
    ...mapActions(["createFund"]),

    sendFund: function () {
      const fund = {
        title: this.title,
        author: this.author,
        expiration: this.expiration,
        target: this.target,
        description: this.description,
      };

      this.createFund(fund);
    },
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
  height: 40em;
  margin-top: 5em;

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
  margin-top: 1em;

  color: rgba(13, 10, 11, 0.58);
}

.create_fund_form .fund_input_container {
  width: 100%;
  height: 20em;
  margin-top: 1.5em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#createFundBtn {
  margin-bottom: 1em;
}
</style>

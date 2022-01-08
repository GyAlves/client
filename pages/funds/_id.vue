<template>
  <div class="fund_info_container">
    <SubHeader />
    <div v-if="fund" class="info_description_container">
      <div class="fund_header">
        <div class="fund_title">
          {{ fund.title }}
        </div>
        <div class="fund_header_desc">
          <p>
            Author: <span>{{ fund.author }}</span>
          </p>
          <p>
            Expires: <span>{{ fund.date }}</span>
          </p>
        </div>
      </div>
      <div class="about_fund">
        <div class="fund_dec">
          <span>About the fund</span>
          <p>{{ fund.description }}</p>
        </div>
        <div class="fund_stats">
          <ul>
            <li>
              <p>
                Target: <span>{{ fund.target }}</span>
              </p>
            </li>
            <li>
              <p>
                Current: <span>{{ fund.current_fund }}</span>
              </p>
            </li>
            <li>
              <p>
                Supporters: <span>{{ fund.supporters }}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="fund_donation">
        <Input />
        <Button title="Donate" />
      </div>
    </div>
    <div v-else>Product not found</div>
  </div>
</template>

<script>
import Input from "../../components/Input.vue";
import Button from "../../components/Button.vue";

export default {
  components: {
    Button,
    Input,
  },
  computed: {
    fund() {
      const fund = this.$store.getters.getFundById(this.$route.params.id);
      this.fund_title = fund.title;
      return fund;
    },
  },
  data() {
    return {
      fund_title: "",
    };
  },
};
</script>

<style>
.fund_info_container {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.info_description_container {
  width: 40%;
  height: 45em;

  margin-top: 2em;

  background: #ffffff;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.info_description_container .fund_header {
  width: 80%;
  height: 10em;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.info_description_container .fund_header .fund_title {
  width: 50%;
  height: 100%;
  margin-top: 1.5em;

  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 142.69%;

  /* or 68px */
  letter-spacing: 0.03em;

  color: #454955;
}

.info_description_container .fund_header .fund_header_desc {
  width: 40%;
  height: 100%;

  padding-top: 2em;
  padding-left: 1em;
}

.info_description_container .fund_header .fund_header_desc p {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 142.69%;

  /* or 31px */
  letter-spacing: 0.03em;
  padding-bottom: 1em;

  color: #454955;
}

.info_description_container .fund_header .fund_header_desc span {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.05em;

  color: rgba(13, 10, 11, 0.35);
}

.info_description_container .about_fund {
  width: 90%;
  height: 16em;

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  border-top: 3px solid rgba(13, 10, 11, 0.212);
}

.info_description_container .fund_donation {
  width: 100%;
  height: 10em;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 2em;
}

.info_description_container .about_fund .fund_dec {
  width: 50%;
  height: 100%;

  padding-top: 2em;
  padding-left: 2em;
}

.info_description_container .about_fund .fund_dec span {
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 142.69%;

  /* or 68px */
  letter-spacing: 0.03em;

  color: #454955;
}

.info_description_container .about_fund .fund_dec p {
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.095em;
  padding-top: 1em;

  color: rgba(13, 10, 11, 0.46);
}

.info_description_container .about_fund .fund_stats {
  width: 40%;
  padding-left: 1.4em;
  padding-top: 1em;
}

.info_description_container .about_fund .fund_stats ul {
  list-style-type: none;
}

.info_description_container .about_fund .fund_stats ul li {
  margin-top: 1em;
}
.info_description_container .about_fund .fund_stats ul li p {
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 142.69%;

  /* or 31px */
  letter-spacing: 0.03em;

  color: #454955;
}

.info_description_container .about_fund .fund_stats ul li span {
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.05em;

  color: rgba(13, 10, 11, 0.35);
}
</style>

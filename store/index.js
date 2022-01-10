import axios from "axios";

const state = {
  funds: []
};

const getters = {
  allFunds: (state) => state.funds
};

const actions = {
  async fetchFunds({ commit }) {
    const response = await axios.get(`http://localhost:5000/api/v1/funds`);
    commit("setFunds", response.data.funds)
  },

  async createFund({ commit }, fund) {
    const response = await axios.post(`http://localhost:5000/api/v1/funds`, fund);
    commit("createFund", response.data.fund);
  },

  async deleteById({ commit }, fund_id) {
    await axios.delete(`http://localhost:5000/api/v1/funds/${fund_id}`);
    commit("deleteFund", fund_id)
  }
}

const mutations = {
  setFunds: (state, funds) => (state.funds = funds),
  createFund: (state, fund) => (state.funds.push(fund)),
  deleteFund: (state, fund_id) => (state.funds = state.funds.filter(fund => fund.id !== fund_id)),
}

export default {
  getters,
  state,
  mutations,
  actions,
}

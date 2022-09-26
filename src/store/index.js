const store = {
  state: {
    author: 'HLN177',
    count: 0
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.amount;
    }
  },
  getters: {
    getAuthor(state) {
      return state.author;
    }
  }
};

export default store;
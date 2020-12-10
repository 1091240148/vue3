import { createStore } from 'vuex'

export default createStore({
  state: {
    count:0
  },
  mutations: {
  },
  getters:{
    getCount: (state, getters) => {
      console.log(state, getters);
      return state.count
    },
  },
  actions: {
  },
  modules: {
  }
})

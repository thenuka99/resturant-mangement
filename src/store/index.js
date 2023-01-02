import { createStore } from 'vuex'
import counterModule from './modules/counter.module'

export default createStore({
  state: {
    counterState:counterModule.state
  },
  getters: {
    getCounterState:function(state){
      return state.counterState.counter;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    counterModule
  }
})

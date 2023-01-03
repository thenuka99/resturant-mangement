import { createStore } from 'vuex';
import counterModule from './modules/counter.module';
import employeeModule from './modules/employee.module';

export default createStore({
  state: {
    counterState: counterModule.state,
    employeeState: employeeModule.state
  },
  getters: {
    getCounterState: function (state) {
      return state.counterState.counter;
    },
    getEmployeeState: function (state) {
      return state.employeeState.employeeList;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    counterModule,
    employeeModule
  }
})

import axios from "axios";

export default {
    namespaced: true,
    state: {
        employeeList: {
            loading: false,
            employees: [],
            errorMessage: null
        }
    },
    mutations: {
        GET_EMPLOYEES_REQUEST: function (state) {
            state.employeeList.loading = true;
        },
        GET_EMPLOYEES_SUCCESS: function (state, payload) {
            state.employeeList.loading = false;
            state.employeeList.employees = payload.employees;
        },
        GET_EMPLOYEES_FAILED: function (state, payload) {
            state.employeeList.loading = false;
            state.employeeList.errorMessage = payload.error
        }
    },
    actions: {
        getEmployees: async function ({commit}) {
            try {
                commit("GET_EMPLOYEES_REQUEST");
                let dataURL = `https://jsonplaceholder.typicode.com/users`;
                let response = await axios.get(dataURL);
                console.log(response)
                commit("GET_EMPLOYEES_SUCCESS", {employees: response.data});
            } catch (error) {
                commit("GET_EMPLOYEES_FAILED", {error: error});
            }
        }
    }
}
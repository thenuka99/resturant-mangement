<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success">Employee List</p>
        <p class="fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias
          aliquam aliquid aperiam dignissimos dolor doloribus dolorum est facere
          ipsam, laborum molestiae molestias numquam, quis tempore ut, veritatis
          voluptates voluptatum.
        </p>
      </div>
    </div>
  </div>

  <div v-if="loading" class="container">
    <div class="row">
      <div class="col">
        <Spinner />
      </div>
    </div>
  </div>

  <div
    v-if="!loading && errorMessage"
    class="container"
  >
    <div class="row">
      <div class="col">
        <p class="fw-bold text-danger">{{ employeeState.errorMessage }}</p>
      </div>
    </div>
  </div>

  <div
    v-if="!loading"
    class="container"
  >
    <div class="row">
      <div class="col">
        <table class="table table-hover text-center table-striped">
          <thead class="bg-secondary text-white">
            <tr>
              <th>SNO</th>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
              <th>Company</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="employee in employees" :key="employee.id">
              <td>{{ employee.id }}</td>
              <td>{{ employee.name }}</td>
              <td>{{ employee.email }}</td>
              <td>{{ employee.website }}</td>
              <td>{{ employee.company.name }}</td>
              <td>{{ employee.address.city }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Spinner from "./SpinLoader.vue";

export default {
  name: "EmployeeList",
  components: { Spinner },
  data() {
    return {
      loading: false,
      errorMessage: null,
      employees: [],
    };
  },
  created: async function () {
    try {
      this.loading=true;
      let dataURL = `https://jsonplaceholder.typicode.com/users`;
      let response = await axios.get(dataURL);
      console.log(response);
      this.employees = response.data;
      this.loading=false;
    } catch (error) {
      this.loading=false;
      this.errorMessage=this.error;
    }
  },
};
</script>

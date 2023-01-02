<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success">Employee List</p>
        <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aliquam aliquid aperiam
          dignissimos dolor
          doloribus dolorum est facere ipsam, laborum molestiae molestias numquam, quis tempore ut, veritatis voluptates
          voluptatum.</p>
      </div>
    </div>
  </div>

  <div v-if="employeeState.loading" class="container">
    <div class="row">
      <div class="col">
        <Spinner/>
      </div>
    </div>
  </div>

  <div v-if="!employeeState.loading && employeeState.errorMessage" class="container">
    <div class="row">
      <div class="col">
        <p class="fw-bold text-danger">{{ employeeState.errorMessage }}</p>
      </div>
    </div>
  </div>

  <div v-if="!employeeState.loading && employeeState.employees.length > 0" class="container">
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
          <tr v-for="employee in employeeState.employees" :key="employee.id">
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
import Spinner from "./SpinLoader.vue";
import {mapGetters} from "vuex";

export default {
  name: "EmployeeList",
  components: {Spinner},
  created: function () {
    this.$store.dispatch("employeeModule/getEmployees");
  },
  computed: mapGetters({
    employeeState: "getEmployeeState"
  })
}
</script>

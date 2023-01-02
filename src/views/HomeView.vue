<template>
  <div class="home">
    <h2>{{ counterState.count }}</h2>
  <button v-on:click="increment(1)">increment</button> |
  <button v-on:click="decrement(1)">decrement</button> |
  <button @click="increment(5)">increment x 5</button> |
  <button @click="decrement(5)">decrement x 5</button> 
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HomeView',
  data() {
    return {
      value: 0,
    };
  },
  methods:{
    increment(value){
      this.$store.dispatch("counterModule/incrementcounter",{value:value})        
    },
    decrement(value){
      this.$store.dispatch("counterModule/incrementcounter",{value:value})        
    },
  },
  computed: mapGetters({
    counterState : "getCounterState"
  })
}
</script>

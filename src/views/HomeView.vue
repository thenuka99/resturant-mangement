<template>
  <div class="home">
    <h2>{{ value }}</h2>
  <button v-on:click="increment(1,$event)">increment</button> |
  <button v-on:click="decrement(1,$event)">decrement</button> |
  <button @click="increment(5,$event)">increment x 5</button> |
  <button @click="decrement(5,$event)">decrement x 5</button> 
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data() {
    return {
      value: 0,
    };
  },
  methods:{
    increment(n,event){
        this.value +=n
        console.log(event)
    },
    decrement(n,event){
        this.value -=n
        console.log(event)
    },
  }
}
</script>

<template>
  <h1>{{ title }}</h1>
  <br />
  <input type="text" ref="name" />
  <button @click="handleClick">Add</button>
  <Model />
</template>

<script>
import Model from './components/Model.vue'

export default {
  name: 'App',
  data: () => {
    return {
      title : 'Hello World :) !'
    }
  }, 
  methods: {
    handleClick() {
      console.log(this.$refs.name.value);
      this.$refs.name.classList.add('add');
    }
  },
  components: {
    Model
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

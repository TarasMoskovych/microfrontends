<template>
  <div class="vue-app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  data() {
    return {
      msg: `Welcome to Your Vue.js App with version: ${VUE_VERSION}`,
    };
  },
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
.vue-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

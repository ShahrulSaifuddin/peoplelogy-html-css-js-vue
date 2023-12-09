<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <TheCounter />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TheCounter from './components/TheCounter.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
    TheCounter,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>

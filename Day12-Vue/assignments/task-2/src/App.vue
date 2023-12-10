<template>
  <div class="container">
    <CounterDownApp />
  </div>
</template>

<script>
import CounterDownApp from './components/CounterDownApp.vue';
export default {
  name: 'App',
  components: {
    CounterDownApp,
  },
};
</script>

<style>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  width: min(600px, 90%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.25rem;
  padding: 2rem 1rem;
}
</style>

<template>
  <!-- <MakeHome /> -->
  <FetctApi />
</template>

<script>
// import MakeHome from './components/MakeHome.vue';
import FetctApi from './components/FetctApi.vue';

export default {
  name: 'App',
  components: {
    // MakeHome,
    FetctApi,
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
  margin-top: 60px;
}
</style>

<template>
  <div class="container">
    <!-- <TodoApp /> -->
    <!-- <hr /> -->
    <!-- <CounterDownApp /> -->
    <!-- <hr> -->
    <CheckoutFormApp />
  </div>
</template>

<script>
// import TodoApp from './components/TodoApp.vue';
// import CounterDownApp from './components/CounterDownApp.vue';
import CheckoutFormApp from './components/CheckoutFormApp.vue';
export default {
  name: 'App',
  components: {
    // TodoApp,
    // CounterDownApp,
    CheckoutFormApp,
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

/* CSS */
.button-16 {
  touch-action: manipulation;
  all: unset;
  position: relative;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  background-color: #f0f7fa;
  box-shadow: inset 0 -4px 8px #87bfd8, 0 4px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  color: #0470e3;
  transition: transform 0.4s cubic-bezier(0.55, 1, 0.15, 1);
  will-change: transform;
  margin: 2rem 0;
}
.button-16:active {
  transform: scale(0.92);
}
.button-16:active::after {
  opacity: 1;
}
.button-16::after {
  content: '';
  position: absolute;
  inset: 0;
  border-image-source: url('https://csspro.com/css-3d-buttons/buttons-img/mario-button-borders.webp');
  border-image-slice: 50%;
  border-image-width: 40px;
  border-style: solid;
  transform: scale(1.04, 1.08);
  opacity: 0;
  transition-property: opacity;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.55, 1, 0.15, 1);
  will-change: transform;
}
.button-16:focus-visible::after {
  opacity: 1;
  animation: pulsate-16 1s infinite;
}

@keyframes pulsate-16 {
  0% {
    transform: scale(1.04, 1.08);
  }
  50% {
    transform: scale(1.08, 1.12);
  }
  100% {
    transform: scale(1.04, 1.08);
  }
}
</style>

<template>
  <div>
    <h1>Counter</h1>
    <p :class="colorCounter">{{ msg }}</p>
    <p>{{ counter }}</p>
    <div class="btn-container">
      <button @click="decrease">Decrease</button>
      <button @click="increase">Increase</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      msg: '',
      colorCounter: null,
    };
  },
  methods: {
    increase() {
      this.counter++;
    },
    decrease() {
      this.counter--;
    },
  },
  watch: {
    counter(val) {
      if (val > 0) {
        this.msg = 'positive';
        this.colorCounter = 'green';
      } else if (val < 0) {
        this.msg = 'negative';
        this.colorCounter = 'red';
      } else if (val == 0) {
        this.msg = 'zero';
        this.colorCounter = 'black';
      } else {
        this.msg = '';
      }
    },
  },
};
</script>

<style scoped>
h1 {
  margin: 2rem 0;
  text-transform: uppercase;
}
button {
  margin: 1rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background: transparent;
  transition: all 0.3s ease-out;
  cursor: pointer;
}
p {
  padding: 5px;
  text-transform: capitalize;
}
button:hover {
  background: black;
  color: white;
}
.green {
  color: green;
}
.red {
  color: red;
}
.black {
  color: black;
}
</style>

<template>
  <h1 :style="{ color: isColorDefault ? 'black' : 'red' }">
    {{ displayName() }}
  </h1>
  <button @click="toggleColor">Click me</button>
  <hr />
  <form @submit.prevent>
    <input type="text" placeholder="Enter your name" v-model="enteredName" />
    <br />
    <input type="email" placeholder="Enter your email" v-model="enteredEmail" />
    <br />
    <button type="submit" @click="submit">submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: 'World',
      isColorDefault: true,
      enteredName: '',
      enteredEmail: '',
    };
  },
  methods: {
    displayName() {
      return `Hello ${this.name}`;
    },
    toggleColor() {
      this.isColorDefault = !this.isColorDefault;
    },
    submit() {
      console.log(this.enteredName, this.enteredEmail);
      this.enteredEmail = '';
      this.enteredName = '';
    },
  },
};
</script>

<style></style>

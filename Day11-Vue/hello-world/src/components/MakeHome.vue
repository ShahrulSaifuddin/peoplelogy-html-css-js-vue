<template>
  <h1>{{ displayName() }}</h1>
</template>

<script>
export default {
  data() {
    return {
      name: 'World',
    };
  },
  methods: {
    displayName() {
      return `Hello ${this.name}`;
    },
  },
};
</script>

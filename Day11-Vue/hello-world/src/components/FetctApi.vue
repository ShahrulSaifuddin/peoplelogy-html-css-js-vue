<template>
  <h1>API</h1>
  <ul v-for="item in list" :key="item.id">
    <li>{{ item.id }}</li>
    <li>{{ item.email }}</li>
    <li>{{ item.first_name }}</li>
    <li>{{ item.last_name }}</li>
    <li><img :src="item.avatar" alt="" /></li>
  </ul>
</template>

<script>
import axios from 'axios';
console.log(axios);

export default {
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      this.list = response.data.data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

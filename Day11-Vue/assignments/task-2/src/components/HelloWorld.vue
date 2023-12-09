<template>
  <div class="container">
    <section>
      <h1>API</h1>

      <table>
        <tr>
          <th>ID</th>
          <th>CATEGORY</th>
          <th>IMAGE</th>
        </tr>
        <tr v-for="item in lists" :key="item.idDrink">
          <td>{{ item.idDrink }}</td>
          <td>{{ item.strCategory }}</td>
          <td><img :src="item.strDrinkThumb" /></td>
        </tr>
      </table>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
console.log(axios);
export default {
  data() {
    return {
      lists: [],
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
      );
      console.log(response.data.drinks);
      this.lists = response.data.drinks;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  display: grid;
  place-items: center;
}
form {
  margin: 3rem 0;
}
input {
  margin: 0.25rem 0;
  width: 300px;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}
button {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background: transparent;
  transition: all 0.3s ease-out;
  margin-top: 1rem;
}
button:hover {
  background: black;
  color: white;
}
table,
tr,
th,
td {
  border: 1px solid white;
  padding: 1rem;
}

table {
  border-collapse: collapse;
  width: 100%;
}
img {
  width: 100px;
}
</style>

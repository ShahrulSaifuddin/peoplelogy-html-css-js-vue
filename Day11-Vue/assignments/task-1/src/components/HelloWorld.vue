<template>
  <div class="container">
    <section>
      <h1>Form</h1>
      <form @submit.prevent>
        <input
          type="text"
          placeholder="Enter your name"
          v-model="enteredName"
        />
        <br />
        <input
          type="text"
          placeholder="Enter your email"
          v-model="enteredEmail"
        />
        <br />
        <input
          type="text"
          placeholder="Enter your password"
          v-model="enteredPassword"
        />
        <br />
        <button type="submit" @click="submit">Submit</button>
      </form>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
        <tr>
          <td>{{ formDetails.name }}</td>
          <td>{{ formDetails.email }}</td>
          <td>{{ formDetails.password }}</td>
        </tr>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      enteredEmail: '',
      enteredPassword: '',
      formDetails: {},
    };
  },
  methods: {
    submit() {
      this.formDetails = {
        name: this.enteredName,
        email: this.enteredEmail,
        password: this.enteredPassword,
      };
      this.enteredName = '';
      this.enteredEmail = '';
      this.enteredPassword = '';
    },
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
  border: 1px solid black;
  padding: 1rem;
}

table {
  border-collapse: collapse;
}
</style>

<template>
  <h1>checkout form</h1>
  <form @submit.prevent>
    <div class="form-group">
      <label for="name">name:</label>
      <input v-model="formData.name" type="text" id="name" required />
    </div>
    <div class="form-group">
      <label for="email">email:</label>
      <input v-model="formData.email" type="email" id="email" required />
    </div>
    <div class="form-group">
      <label for="shipping">shipping address:</label>
      <textarea
        v-model="formData.shipping"
        type="text"
        id="shipping"
        rows="5"
        required
      ></textarea>
    </div>
    <div class="form-group">
      <label for="credit">credit card:</label>
      <input v-model="formData.credit" type="text" id="credit" required />
    </div>
    <button @click="submitForm" class="button-16" role="button">
      <span class="text">Submit</span>
    </button>
  </form>
  <div v-show="orderSubmitted">
    <h2>order submited!</h2>
    <p><b>name: </b>{{ formData.name }}</p>
    <p><b>email: </b>{{ formData.email }}</p>
    <p><b>shipping address: </b>{{ formData.shipping }}</p>
    <p><b>credit cars: </b>{{ formData.credit }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        shipping: '',
        credit: '',
      },
      orderSubmitted: false,
    };
  },
  methods: {
    submitForm() {
      this.orderSubmitted = true;
    },
  },
};
</script>

<style scoped>
h1 {
  text-transform: uppercase;
}
.form-group {
  display: grid;
  text-align: start;
  margin-top: 1.5rem;
  gap: 0.5rem;
}
label {
  text-transform: capitalize;
  font-weight: bolder;
}
input,
textarea {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  resize: vertical;
}
h2 {
  text-transform: uppercase;
  margin-bottom: 1rem;
}
p {
  text-transform: capitalize;
  margin-top: 0.25rem;
}
</style>

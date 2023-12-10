<template>
  <h1>Todo App</h1>
  <form @submit.prevent>
    <input
      type="text"
      placeholder="Enter your todo list here"
      v-model="newTodo"
    />
    <button type="submit" @click="addTodo">Add Task</button>
  </form>
  <div class="lists-container">
    <!-- <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.name }}
        <span>
          <button @click="removeTodo(todo.id)">Remove</button>
        </span>
      </li>
    </ul> -->
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span v-if="todo.editing">
          <input
            type="text"
            v-model="todo.name"
            @keyup.enter="saveEdit(todo.id)"
            @keyup.esc="cancelEdit(todo)"
          />
        </span>
        <span v-else>
          {{ todo.name }}
        </span>
        <span>
          <button @click="toggleEdit(todo)">Edit</button>
          <button @click="removeTodo(todo.id)">Remove</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid';
export default {
  data() {
    return {
      newTodo: '',
      todos: [],
    };
  },
  methods: {
    addTodo() {
      const newItem = { id: nanoid(), name: this.newTodo.trim() };
      this.todos.push(newItem);
    },
    removeTodo(itemId) {
      const index = this.todos.findIndex((todo) => todo.id === itemId);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    },
    toggleEdit(todo) {
      todo.editing = !todo.editing;
    },
    saveEdit(itemId) {
      const todo = this.todos.find((t) => t.id === itemId);
      if (todo) {
        todo.editing = false;
      }
    },
    cancelEdit(todo) {
      todo.editing = false;
    },
  },
};
</script>

<style scoped>
h1 {
  text-transform: uppercase;
}
.lists-container {
  display: flex;
  justify-content: center;
}
ul {
  width: min(600px, 70%);
}
li {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  text-transform: capitalize;
}
form {
  margin: 2rem 0;
}
input {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}
button {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease-out;
}

button:hover {
  background: black;
  color: white;
}
</style>

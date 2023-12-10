<template>
  <h1>countdown app</h1>
  <form @submit.prevent>
    <input
      type="number"
      v-model="enteredNumber"
      min="1"
      placeholder="Set countdown in second"
    />
    <button @click="startCountdown" :disabled="isCounting">start</button>
  </form>
  <div v-if="isCounting">
    <h2>time remaining</h2>
    <p>{{ formatTime() }}</p>
  </div>
  <div v-if="isCountdownComplete">
    <h2>countdown complete</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enteredNumber: null,
      duration: null,
      isCounting: false,
      hour: 0,
      minute: 0,
      second: 0,
      isCountdownComplete: false,
      intervalId: null,
    };
  },
  methods: {
    startCountdown() {
      this.duration = this.enteredNumber;
      this.isCountdownComplete = false;
      this.enteredNumber = null;
      if (this.duration > 0 && !this.isCounting) {
        this.isCounting = true;
        this.intervalId = setInterval(() => {
          if (this.duration > 0) {
            this.duration--;
            this.calculateTime();
          } else {
            clearInterval(this.intervalId);
            this.isCounting = false;
            this.isCountdownComplete = true;
          }
        }, 1000);
      }
    },
    calculateTime() {
      this.hour = Math.floor(this.duration / 3600);
      this.minute = Math.floor((this.duration % 3600) / 60);
      this.second = this.duration % 60;
    },
    formatTime() {
      const formattedHour = this.hour.toString().padStart(2, '0');
      const formattedMinute = this.minute.toString().padStart(2, '0');
      const formattedSecond = this.second.toString().padStart(2, '0');
      return `${formattedHour} : ${formattedMinute} : ${formattedSecond}`;
    },
  },
};
</script>

<style scoped>
h1 {
  text-transform: uppercase;
}
h2 {
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

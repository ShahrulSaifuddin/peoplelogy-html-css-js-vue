const decrement = document.getElementById('decrement');
const increment = document.getElementById('increment');
const countEl = document.getElementById('count');

let count = 0;

function updateCount() {
  countEl.textContent = count;
}

decrement.addEventListener('click', () => {
  count--;
  updateCount();
});

increment.addEventListener('click', () => {
  count++;
  updateCount();
});

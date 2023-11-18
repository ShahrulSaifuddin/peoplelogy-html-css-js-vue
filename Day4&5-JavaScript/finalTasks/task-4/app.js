const result = document.querySelector('.result');
const btn = document.querySelector('.btn');

const msg = ['shahrul', 'arif', 'aaron'];

btn.addEventListener('click', () => {
  /* display random array item */
  result.textContent = 'Hi from ' + msg[Math.floor(Math.random() * msg.length)];
});

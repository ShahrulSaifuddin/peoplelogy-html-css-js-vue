/* TASK 4 */

/* Declare Variables */
const result = document.querySelector('.result');
const btn = document.querySelector('.btn');

/* Array */
const msg = ['shahrul', 'arif', 'aaron'];

/* Button click event listener to get random msg array */
btn.addEventListener('click', () => {
  /* display random array item */
  result.textContent = 'Hi from ' + msg[Math.floor(Math.random() * msg.length)];
  console.log('Hi from ' + msg[Math.floor(Math.random() * msg.length)]);
});

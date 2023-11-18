/* declare variables */
const stringDOM = document.getElementById('text');
const stringResultsDOM = document.getElementById('result');

function reverseString() {
  /* Reverse string method */
  let result = stringDOM.value.split('').reverse().join('');

  /* display result into browser */
  stringResultsDOM.innerHTML = 'Reverse String: ' + result;

  /* display result into console log */
  console.log('Reverse String: ' + result);
}

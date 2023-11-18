/* TASK 2 */

/* Declare Variable */
const num = document.getElementById('num');

/* Check Number Function */
function checkNumber() {
  let result; // store the final result based on user input
  if (num.value > 0) {
    result = 'positive';
  } else if (num.value == 0) {
    result = 'zero';
  } else if (num.value < 0) {
    result = 'negative';
  } else {
    result = 'Please Enter Number Only';
  }

  /* Display Result */
  // Validate the input number
  if (!isNaN(num.value)) {
    document.getElementById('result').innerHTML = 'The result is ' + result;
    console.log(result);
  } else {
    document.getElementById('result').innerHTML = result;
  }
}

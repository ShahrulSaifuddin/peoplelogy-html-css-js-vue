/* Declare Variable */
const num = document.getElementById('num');

/* Function */
function checkNumber() {
  let result;
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
  if (!isNaN(num.value)) {
    document.getElementById('result').innerHTML = 'The result is ' + result;
    console.log(result);
  } else {
    document.getElementById('result').innerHTML = result;
  }
}

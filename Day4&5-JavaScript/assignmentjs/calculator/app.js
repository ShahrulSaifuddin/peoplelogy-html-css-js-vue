const btns = document.querySelectorAll('.btn');
const clear = document.querySelector('.clear');
const result = document.getElementById('result');
const equal = document.querySelector('.equal');

for (btn of btns) {
  btn.addEventListener('click', (e) => {
    appendToResult(e.target.innerText);
  });
}

/* Clear Calculator Field */
clear.addEventListener('click', () => {
  result.value = '';
});

/* Calculate Result */
equal.addEventListener('click', () => {
  calculateResult();
});

/* Functions */
function appendToResult(btnValue) {
  document.getElementById('result').value += btnValue;
}

function calculateResult() {
  try {
    document.getElementById('result').value = eval(
      document.getElementById('result').value
    );
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

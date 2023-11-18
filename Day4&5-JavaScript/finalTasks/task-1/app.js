/* declare variable */
const num1 = parseFloat(prompt('Please enter your first number'));
const num2 = parseFloat(prompt('Please enter your second number'));

/* calculation */
const add = num1 + num2;
const subtraction = num1 - num2;
const multiply = num1 * num2;
let division;
if (num2 === 0) {
  division = 'Cannot divide by zero';
} else {
  division = (num1 / num2).toFixed(2);
}

/* display result */
document.write('First Number: ' + num1 + '<br>');
document.write('Second Number: ' + num2 + '<br><br>');

/* Addition */
document.write(
  'Result of Addition: ' + num1 + ' + ' + num2 + ' = ' + add.toFixed(2) + '<br>'
);
console.log(
  'Result of Addition: ' + num1 + ' + ' + num2 + ' = ' + add.toFixed(2)
);
/* Subtraction */
document.write(
  'Result of Subtraction: ' +
    num1 +
    ' - ' +
    num2 +
    ' = ' +
    +subtraction.toFixed(2) +
    '<br>'
);
console.log(
  'Result of Subtraction: ' +
    num1 +
    ' - ' +
    num2 +
    ' = ' +
    +subtraction.toFixed(2)
);
/* Multiplication */
document.write(
  'Result of Multiplication: ' +
    num1 +
    ' * ' +
    num2 +
    ' = ' +
    +multiply.toFixed(2) +
    '<br>'
);
console.log(
  'Result of Multiplication: ' +
    num1 +
    ' * ' +
    num2 +
    ' = ' +
    +multiply.toFixed(2)
);
/* Division */
document.write('Result of Division: ' + num1 + ' / ' + num2 + ' = ' + division);
console.log('Result of Division: ' + num1 + ' / ' + num2 + ' = ' + division);

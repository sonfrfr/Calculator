const prompt = require('prompt-sync')();

const operator = prompt("Enter your operator here(+/-/x/%) ");

const num1 = parseFloat(prompt("Enter your first number here: "));
const num2 = parseFloat(prompt("Enter your second number here: "));

let result;

if (operator == '+') {
    result = num1 + num2
}
else if (operator == '-') {
    result = num1 - num2
}
else if (operator == 'x') {
    result = num1 * num2
}
else if (operator == '%') {
    result = num1 / num2
}

console.log(`${num1} ${operator} ${num2} = ${result}`)
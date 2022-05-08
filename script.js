//let num1 = prompt("enter number 1");
//let num2 = prompt("enter number 2");

function add(num1, num2) {
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);

    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    }
    if (operator === '-') {
        return subtract(num1, num2);
    }
    if (operator === '*') {
        return multiply(num1, num2);
    }
    if (operator === '/') {
        return divide(num1, num2);
    }
}

/*
console.log(add(num1, num2));
console.log(subtract(num1, num2));
console.log(multiply(num1, num2));
console.log(divide(num1, num2));
*/
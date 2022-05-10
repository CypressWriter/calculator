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

const displayTop = document.querySelector("#display-top");
const displayBottom = document.querySelector("#display");

let displayArray = "";
let firstNum = 0;
let secondNum = 0;
let operatorPressed = false;
let addition = false;
let subtraction = false;
let multiplication = false;
let division = false;
let dotPressed = false;

const addbtn = document.querySelector("#add");
addbtn.addEventListener("click", () => {
    if (operatorPressed === true) return;
    displayArray += "+";
    displayTop.textContent = displayArray;
    operatorPressed = true;
    addition = true;
    dotPressed = false;
});
const subtractbtn = document.querySelector("#subtract");
subtractbtn.addEventListener("click", () => {
    if (operatorPressed === true) return;
    displayArray += "-";
    displayTop.textContent = displayArray;
    operatorPressed = true;
    subtraction = true;
    dotPressed = false;
});
const multiplybtn = document.querySelector("#multiply");
multiplybtn.addEventListener("click", () => {
    if (operatorPressed === true) return;
    displayArray += "*";
    displayTop.textContent = displayArray;
    operatorPressed = true;
    multiplication = true;
    dotPressed = false;
});
const dividebtn = document.querySelector("#divide");
dividebtn.addEventListener("click", () => {
    if (operatorPressed === true) return;    
    displayArray += "/";
    displayTop.textContent = displayArray;
    operatorPressed = true;
    division = true;
    dotPressed = false;
});

const deletebtn = document.querySelector("#delete");
deletebtn.addEventListener("click", () => {
    if (operatorPressed === false) {
        firstNum = firstNum.slice(-1);
        displayArray = displayArray.slice(-1);
        displayTop.textContent = displayArray;
    }
    else if (operatorPressed === true) {
        secondNum = secondNum.slice(-1);
        displayArray = displayArray.slice(-1);
        displayTop.textContent = displayArray;
    }
})

const onebtn = document.querySelector("#one");
onebtn.addEventListener("click", () => {
    displayArray += "1";
    displayTop.textContent = displayArray;
    if (operatorPressed === false) {
        firstNum += "1";
    }
    else {
        secondNum += "1";
    }
});
const twobtn = document.querySelector("#two");
twobtn.addEventListener("click", () => {
    displayArray += "2";
    displayTop.textContent = displayArray;
    if (operatorPressed === false) {
        firstNum += "2";
    }
    else {
        secondNum += "2";
    }
});
const threebtn = document.querySelector("#three");
threebtn.addEventListener("click", () => {
    displayArray += "3";
    displayTop.textContent = displayArray;
    if (operatorPressed === false) {
        firstNum += "3";
    }
    else {
        secondNum += "3";
    }
});
const fourbtn = document.querySelector("#four");
fourbtn.addEventListener("click", () => {
    displayArray += "4";
    displayTop.textContent = displayArray;
    if (operatorPressed === false) {
        firstNum += "4";
    }
    else {
        secondNum += "4";
    }
});
const fivebtn = document.querySelector("#five");
fivebtn.addEventListener("click", () => {
    displayArray += "5";
    displayTop.textContent = displayArray;
    if (operatorPressed === false) {
        firstNum += "5";
    }
    else {
        secondNum += "5";
    }
});
const sixbtn = document.querySelector("#six");
sixbtn.addEventListener("click", () => {
    displayArray += "6";
    displayTop.textContent = displayArray;
    if (operatorPressed === false) {
        firstNum += "6";
    }
    else {
        secondNum += "6";
    }
});
const sevenbtn = document.querySelector("#seven");
sevenbtn.addEventListener("click", () => {
    displayArray += "7";
    displayTop.textContent = displayArray;
    if (operatorPressed === false) {
        firstNum += "7";
    }
    else {
        secondNum += "7";
    }
});
const eightbtn = document.querySelector("#eight");
eightbtn.addEventListener("click", () => {
    displayArray += "8";
    displayTop.textContent = displayArray;
    if (operatorPressed === false) {
        firstNum += "8";
    }
    else {
        secondNum += "8";
    }
});
const ninebtn = document.querySelector("#nine");
ninebtn.addEventListener("click", () => {
    displayArray += "9";
    displayTop.textContent = displayArray;
    if (operatorPressed === false) {
        firstNum += "9";
    }
    else {
        secondNum += "9";
    }
});
const zerobtn = document.querySelector("#zero");
zerobtn.addEventListener("click", () => {
    displayArray += "0";
    displayTop.textContent = displayArray;
    if (operatorPressed === false) {
        firstNum += "0";
    }
    else {
        secondNum += "0";
    }
});
const dotbtn = document.querySelector("#dot");
dotbtn.addEventListener("click", () => {
    if (dotPressed === false)
    {
        displayArray += ".";
        displayTop.textContent = displayArray;
        if (operatorPressed === false) {
            firstNum += ".";
        }
        else {
            secondNum += ".";
        }
        dotPressed = true;
    }
});


const equalsbtn = document.querySelector("#equals");
equalsbtn.addEventListener("click", () => {
    let result = 0;
    if (addition === true) {
        result = add(firstNum, secondNum);
        displayBottom.textContent = result;
    }
    else if (subtraction === true) {
        result = subtract(firstNum, secondNum);
        displayBottom.textContent = result;
    }
    else if (multiplication === true) {
        result = multiply(firstNum, secondNum);
        displayBottom.textContent = result;
    }
    else if (division === true) {
        if (secondNum === "0" || secondNum === 0) {
            displayBottom.textContent = "OOPSIE";
            return;
        }
        result = divide(firstNum, secondNum);
        displayBottom.textContent = result;
    }

    operatorPressed = false;

    addition = false;
    subtraction = false;
    multiplication = false;
    division = false;

    firstNum = result;
    secondNum = 0;

    displayArray = firstNum;
    displayTop.textContent = displayArray;
});

const clearbtn = document.querySelector("#clear");
clearbtn.addEventListener("click", () => {
    displayTop.textContent= "";
    displayArray = "";
    displayBottom.textContent = "0";

    operatorPressed = false;

    addition = false;
    subtraction = false;
    multiplication = false;
    division = false;

    firstNum = 0;
    secondNum = 0;
});
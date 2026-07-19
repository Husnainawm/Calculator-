// Selecting the elements from the DOM
let display = document.getElementsByClassName(".screen");
let input = document.querySelectorAll(".number");
let operator = document.querySelectorAll(".operator");
let equals = document.querySelector(".equal");
let clear = document.querySelector(".clear");

// Initializing variables to keep track of the calculator's state
let currentInput = '0';     
let previousInput = '';      
let operator = null;  
let shouldResetScreen = false; 

function updateDisplay() {
    display.textContent = currentInput;
}

function appendNumber(number) {
    if (currentInput === '0' || shouldResetScreen) {
        currentInput = number;
        shouldResetScreen = false;
    } else {
        currentInput += number;
    } 
    updateDisplay();
}

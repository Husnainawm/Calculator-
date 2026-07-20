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

function chooseOperator(op) {
    if (operator !== null) {
        calculate();
    }
    previousInput = currentInput;
    operator = op;
    shouldResetScreen = true;
}  

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    
    switch (operator) {
        case '+':
            result = prev + current;    
            break;
        case '-':
            result = prev - current;    
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
               result = current ===0 ? "Error" : prev / current;
            break;
        default:
            return;
            
        }

        function Handleclear(){
            currentInput="0";
            previousInput='';
            operator=null;
            updateDisplay();
        }
    }
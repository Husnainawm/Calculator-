// Selecting the elements from the DOM
let display = document.querySelector(".screen");
let input = document.querySelectorAll(".number");
let operatorbtn = document.querySelectorAll(".operator");
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
        case 'x':
            result = prev * current;
            break;
        case '/':
               result = current ===0 ? "Error" : prev / current;
            break;
        default:
            return;
            
        }
       
        currentInput = result.toString();
        operator = null;
        previousInput = '';
        updateDisplay();

    }

         function Handleclear(){
            currentInput="0";
            previousInput='';
            operator=null;
            updateDisplay();
        }

        function handleEqual() {
            if (operator === null || shouldResetScreen) return;
            calculate();
            shouldResetScreen = true;
        }

        input.forEach(button => {
            button.addEventListener('click', () => appendNumber(button.textContent));
        });

        operatorbtn.forEach(button => {
            button.addEventListener('click', () => chooseOperator(button.textContent));
        });

        equals.addEventListener('click', handleEqual);
        clear.addEventListener('click', Handleclear);


        updateDisplay();
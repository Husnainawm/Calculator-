# Simple Calculator

A basic calculator built with vanilla HTML, CSS, and JavaScript — no frameworks or libraries. Built as a project to practice core JavaScript concepts like DOM manipulation, event handling, and state management.

## Features

- Add, subtract, multiply, and divide
- Clear button to reset the calculator
- Handles chained operations (e.g. `5 + 3 + 2 =`)
- Division-by-zero protection (displays "Error" instead of crashing)

## Tech Stack

- **HTML** — structure and layout
- **CSS** — styling
- **JavaScript (Vanilla)** — calculator logic, no libraries or frameworks

## How It Works

The calculator keeps track of its state using a few key variables:

| Variable | Purpose |
|---|---|
| `currentInput` | The number currently shown on the display |
| `previousInput` | The number entered before an operator was chosen |
| `operator` | The pending math operation (`+`, `-`, `*`, `/`) |
| `shouldResetScreen` | A flag that tells the calculator whether the next digit should start a new number |

### Flow

1. User clicks a number → `appendNumber()` updates `currentInput` and refreshes the display.
2. User clicks an operator (`+`, `-`, etc.) → `chooseOperator()` saves the current number as `previousInput` and stores which operator was chosen.
3. User clicks another number → starts building the second number.
4. User clicks `=` → `calculate()` runs the actual math based on the stored operator, using a `switch` statement.
5. User clicks `C` → everything resets to the initial state.

## Running the Project

1. Clone this repository:
   ```bash
   git clone <https://github.com/Husnainawm/Calculator-.git>
   ```
2. Open `index.html` in your browser — no build steps or installs required.

## What I Learned

Building this project helped me practice:
- Selecting and manipulating DOM elements (`querySelector`, `querySelectorAll`)
- Adding event listeners to multiple buttons at once with `.forEach()`
- Managing UI state with plain JavaScript variables
- Debugging real errors using the browser console (e.g. duplicate variable declarations, wrong DOM selector methods)

## Possible Improvements

- Keyboard support (typing numbers/operators instead of only clicking)
- Percentage and decimal point support
- Operation history display

## License

This project is open source and available for anyone to use or modify.

// script.js

// Append numbers/operators to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Invert the sign of the number
function invertSign() {
    let display = document.getElementById('display').value;
    if (display) {
        document.getElementById('display').value = parseFloat(display) * -1;
    }
}

// Calculate the result
function calculate() {
    let display = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(display);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

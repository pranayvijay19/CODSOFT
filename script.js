const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let previousInput = '';
let operator = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = null;
            display.innerText = '0';
        } else if (value === '=') {
            if (currentInput && operator) {
                currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                display.innerText = currentInput;
                previousInput = '';
                operator = null;
            }
        } else if (button.classList.contains('operator')) {
            if (currentInput) {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.innerText = currentInput;
        }
    });
});

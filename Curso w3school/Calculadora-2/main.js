const buttons_numbers = document.querySelectorAll('.button-numbers');
const buttons_operators = document.querySelectorAll('.op');
const buttons_delete = document.querySelectorAll('.button-delete');
const display = document.querySelector('#display');
const displayOldValue = document.querySelector('#display-old')


const calculator = {
    displayValue: '',
    displayOldValue: '',
    waitingForSecondOperand: false,
}

function updateDisplay(){
    display.value = calculator.displayValue
    displayOldValue.innerText = calculator.displayOldValue;
}

updateDisplay();

//create a fuction that will be called when the button is clicked
buttons_numbers.forEach(button_number => {
    button_number.addEventListener('click', () => {
            calculator.displayValue = calculator.displayValue + button_number.innerText
            calculator.waitingForSecondOperand = false;
            updateDisplay()    
    })
})

buttons_operators.forEach(button_operator => {
    button_operator.addEventListener('click', () => {
        if(button_operator.innerText == '='){
            if(!calculator.waitingForSecondOperand){
                CalcOperations();
            }
        }else if(button_operator.innerText == '.'){
            calculator.displayValue = calculator.displayValue + button_operator.innerText
            updateDisplay()
        }else{
            if(calculator.waitingForSecondOperand){
                calculator.displayValue = calculator.displayValue.slice(0, calculator.displayValue.length-2) + button_operator.innerText + " ";
            }else{
                calculator.displayValue = calculator.displayValue + " " +button_operator.innerText + " ";
            }
            calculator.waitingForSecondOperand = true;
            updateDisplay()
        }
    })
})

buttons_delete.forEach(buttons_delete => {
    buttons_delete.addEventListener('click', () => {
        if(buttons_delete.innerText == '←'){            
            if(calculator.waitingForSecondOperand){
                calculator.displayValue = calculator.displayValue.slice(0, -2);
            }else{
                if(calculator.displayValue.slice(-1) == ' '){
                    calculator.displayValue = calculator.displayValue.slice(0, -3);
                    calculator.waitingForSecondOperand = false;
                }else{
                    calculator.displayValue = calculator.displayValue.slice(0, -1);
                    calculator.waitingForSecondOperand = false;
                }
            }
            updateDisplay()
        }
        if(buttons_delete.innerText == 'AC'){
            calculator.displayValue = '';
            calculator.displayOldValue = '';
            calculator.waitingForSecondOperand = false;
            updateDisplay();
        }
    })
})

function CalcOperations(){
    calculator.displayOldValue = calculator.displayValue;
    calculator.displayValue = eval(display.value);
    updateDisplay();
}

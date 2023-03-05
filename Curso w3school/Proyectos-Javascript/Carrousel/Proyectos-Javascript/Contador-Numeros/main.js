const display_number = document.getElementById('number');
const button = document.querySelectorAll('.btn');

const displayController = {
    displayValue: '0',
}

function updateDisplay(){
    display_number.innerText = displayController.displayValue;
    if(parseInt(displayController.displayValue) < 0){
        display_number.style.color = 'red';
    }else if(parseInt(displayController.displayValue) > 0){
        display_number.style.color = 'green';
    }else{
        display_number.style.color = 'black';
    }
}
updateDisplay();

//create a function that will be called when the button is clicked
button.forEach(button => {
    button.addEventListener('click', () => {
        if(button.innerText == "Decrementar"){
            displayController.displayValue = parseInt(displayController.displayValue) - 1;
        }
        
        if(button.innerText == "Cero"){
            displayController.displayValue = '0';
        }

        if(button.innerText == "Aumentar"){
            displayController.displayValue = parseInt(displayController.displayValue) + 1;
        }
        
        updateDisplay();
    })
})
const calculatorDisplay = document.querySelector('h1');
const clearBtn = document.getElementById('clear-btn');

let firstValue= 0;
let operaorValue= '';
let awaitingNextValue= false;

let buttonList = document.querySelectorAll('button');

buttonList.forEach((button) => {

    if (button.classList.length == 0){
        button.addEventListener('click', () =>
        sendNumberValue(button.value));
        console.log(button);
    }

    if (button.classList.contains('operator')){
        button.addEventListener('click' , () =>
        useOperator(button.value));
    }

    if (button.classList.contains('decimal')){
        button.addEventListener('click' , () =>
        addDecimal());
    }

});


function sendNumberValue(buttonValue){
    console.log(buttonValue);

}
function useOperator(buttonValue){
    console.log(buttonValue);
}
function addDecimal(){
    console.log('decimal');
}

function sendNumberValue(number) {
    if(awaitingNextValue === true) {
        calculatorDisplay.textContent= number
        awaitingNextValue = false;
    } else {
        const dispalyValue =calculatorDisplay.textContent
        if (dispalyValue ==0) {
            calculatorDisplay.textContent= number
        }
        else{
            calculatorDisplay.textContent += number
        }
    }

}
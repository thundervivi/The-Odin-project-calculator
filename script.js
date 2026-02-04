const buttons = document.querySelectorAll('.digits');
const userInput = document.querySelector('input')
const equalButton = document.querySelector('.equal');
let num1 = '';
let num2 = '';
let operator = '';

buttons.forEach( button => {
    button.addEventListener('click', function(event){
        const buttonText = event.target.textContent;
        const signs = ['-', '+', '*', '/']
        if(signs.includes(buttonText)){
            operator = buttonText;
            userInput.value = '';
        } else{
            if (operator === ''){
                num1 += buttonText;
                userInput.value = num1;
            } else{
                num2 += buttonText;           
                userInput.value = num2;
            }
        }
    })
})


function addNumbers(a,b){
    return a + b;
}

function substractNumbers(a,b){
    return a - b;
}

function mutliplyNumbers(a,b){
    return a *b;
}

function divideNumbers(a,b){
    return a / b;
}

function operateNumber(a,b,op){
    switch(op){
        case '+':
            console.log(addNumbers(a,b));
            break;
        case '-':
            userInput.value = substractNumbers(a,b);
            break;
        case '*':
            userInput.value = mutliplyNumbers(a,b);
            break;
        case '/':
            userInput.value = divideNumbers(a,b);
            break
    }
}



equalButton.addEventListener('click', function(){
    operateNumber(Number(num1),Number(num2),operator);
});




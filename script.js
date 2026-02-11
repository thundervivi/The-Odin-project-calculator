const buttons = document.querySelectorAll('.digits, .signs, .last');
const userInput = document.querySelector('input');
const equalButton = document.querySelector('.equal');
const removeButton = document.querySelector('.remove');

let num1 = '';
let num2 = '';
let operator = '';
let isEqualButtonClicked = false;
const signs = ['-', '+', '*', '/']

function remove(){
    if(isEqualButtonClicked){
        userInput.value = '';
        num1 = '';
        num2 = '';
        operator = '';
    }else{
        if(num2 != ''){
            num2 = num2.slice(0, -1)
            userInput.value = num2;
        }else if( operator != ''){
            operator = ''
            userInput.value = num1;
        }else{
            num1 = num1.slice(0, -1);
            userInput.value = num1;
        }
    }
}

function addNumbers(a,b){
    return a + b;
}

function substractNumbers(a,b){
    return a - b;
}

function mutliplyNumbers(a,b){
    return a * b;
}

function divideNumbers(a,b){
    return a / b;
}


function operateNumber(a,b,op){
    switch(op){
        case '+':
            let result = addNumbers(a,b);
            userInput.value = Math.round(result * 100) / 100;
            return result;
            break;
        case '-':
            let subResult = substractNumbers(a,b);
            userInput.value = Math.round(subResult * 100) / 100;
            return subResult;
            break;
        case '*':
            let multiResult = mutliplyNumbers(a,b);
            userInput.value = Math.round(multiResult * 100) / 100;
            return multiResult;
            break;
        case '/':
            if( a === 0 || b === 0){
                // Use of double quotes here...
                userInput.value = "Oops! ,error 0 can't be used here"
            } else{
                let diviResult = divideNumbers(a,b);
                userInput.value = Math.round(diviResult * 100) / 100;
                return diviResult; 
            }
            break
    }
}


userInput.addEventListener('keydown', (event) => {  
    if(event.key === 'Enter'){  
        const typedValue = userInput.value;
        for(const sign of signs){
            if(typedValue.includes(sign)){
                operator = sign;
                let parseTypedValue = typedValue.split(operator);
                num1 = parseTypedValue[0];
                num2 = parseTypedValue[1];  
            }
        }
        operateNumber(Number(num1), Number(num2), operator);
    }
})



buttons.forEach( button => {
    button.addEventListener('click', function(event){
        console.log('Button clicked:', event.target.textContent);
        const buttonText = event.target.textContent;
        if(signs.includes(buttonText)){
            if(num2 != ''){
                let result = operateNumber(Number(num1), Number(num2), operator);
                num1 = result;
                num2 = '';
            }
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



equalButton.addEventListener('click', function(){
    isEqualButtonClicked = true;
    operateNumber(Number(num1),Number(num2),operator);
});

removeButton.addEventListener('click', function(){
    remove();
})





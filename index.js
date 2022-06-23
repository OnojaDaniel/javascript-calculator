// read numbers in the program
    const num1 = parseFloat( prompt('Enter the first number: '));
    const num2 = parseFloat( prompt('Enter the second number: '));
//read operator
    const operator = prompt('Enter operator (+, -, /, *)');
    let result = 0;
    if(isNaN(num1) || isNaN(num2)){
        alert('Kindly refresh the page again!');
    }else{
        if(operator == '+'){
            result = num1 + num2;
        }else if(operator == '-'){
            result = num1 - num2;
        }else if(operator == '*'){
            result = num1 * num2;
        }else if(operator == '/'){
            result = num1 / num2;
        }
        alert(result);
    }
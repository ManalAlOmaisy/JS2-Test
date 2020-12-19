/** 
 * Let's make a calculation function to solve all calculation issues in one place.
 * 
 * The function should take an array of numbers as the first value, and a string representation of the operator as a second parameter.
 * It returns the result of the calculation.
 * 
 * At the bottom of the file there is some test code that will log the result to the console. You can use this to check that your code is correct.
 */

function calculate(numbers, operator) {

    if(operator === 'add'){
        return numbers.reduce((Total, num) => Total + num,0);
    }
    if(operator === 'multiply'){
        return numbers.reduce((num1, num2) => num1 * num2);
    }
    if(operator === 'divide'){
        return numbers.reduce((num1, num2) => num1 / num2);
    }
    if(operator === 'subtract'){
        return numbers.reduce((num1, num2) => num1 - num2);
    }
   return true;
}

/**
 * TEST CODE. DO NOT EDIT
 */
console.log(calculate([1,2], 'add')); // should be 3
console.log(calculate([3,2,4], 'multiply')); // should be 24
console.log(calculate([6,2], 'divide')); // should be 3
console.log(calculate([100, 23, 21, 4], 'subtract')) // should be 52
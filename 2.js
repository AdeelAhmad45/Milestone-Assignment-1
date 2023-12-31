/**2) Calculator
Create a javascript program that takes in two numbers and a string operator. Make use of a switch statement
to perform the operation on the two numbers.
The calculator function should:
i) Take in two numbers, num1 and num2, and a string representing a mathematical operator, operatorJ
ii)Use a switch statement to determine which operation to perform based on the value of the operatorJ
ii) If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical
iv) operation and store the result in a variable called resultJ
v) If the operator is not one of the valid operators, log "Invalid operator" to the console. */

function calculator(num1, num2, operator) {
    let result;
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        console.log('Invalid operator');
        return;
    }
  
    console.log(result);
  }
  
  calculator(5, 1, '+'); 
  calculator(5, 10, '-'); 
  calculator(5, 10, '*'); 
  calculator(5, 10, '/'); 
  calculator(5, 10, '%'); 
  

/**Output:
  6
  -5
  50
  0.5
  Invalid operator
 */
/* Functions
Functions are the most efficient way to reuse code and make them imperative in programming

You can pass values in functions as arguments as well.

Functions are reusable code that take inputs and return outputs.
Code Examples:
*/

function execute() {
    console.log("Example 1: Success!");
}
execute();

const x = 3;
const y = 2;

function execute2(num1, num2){
    return num1 + num2;
    // return returns whatever you want and ends the  function;
}

console.log("Example 2:", execute2(x, y));


/* Exercise
1. Write a function called calculator that takes any three numbers as arguments and returns the product of all
three numbers.

2. Log the result of the function with the following numbers and 23, 44, 12 and find the solution.
*/

function  calculator(number1, number2, number3){
    return number1 * number2 * number3;
}

console.log("Solution:", calculator(23, 44, 12));


/* Global Vs Local Scope & Functions in JavaScript
Scope in JavaScript refers to the current context of code, which determines the accessibility of variables
to JavaScript. The two types of scope are local and global:

Global variables are those declared outside of a block.
Local variables are those declared inside of a block.

var variables automatically move to the global scope which can create unintended problems in your code.

Using let and const can be much more precise. This can be evidently seen with functions.

Code Examples:
*/
let a = 2;
function blockOfCode(){
    let a = 3;
    return a;
}
console.log(blockOfCode(), a);
/* The a in the function is different because it's local scope, the a declared in the lines above the function
are global scope. */


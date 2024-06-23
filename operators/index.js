/* another easy way to increment and decrement numbers in JavaScript is with the
operators ++ and --

1. Create a reassignable ES6 variable y which is not read only and assign it the value of 4.
2. Subtract 1 from y using the decrement operator and console log the result.
*/

let i = 7;
i++;
console.log("example", i);

// Solution:
let y = 4;
y--;
console.log("Solution:", y);


/* The Remainder Operator in JavaScript 
If we want to find the remainder of the division of two numbers
We can use the remainder operator in JavaScript

The remainder operator is the percentage sign: %

The division of two numbers yields the quotient 4 / 2 = 2;
If you take 4 and you split it into two groups you have one group
group A has 2, ,and another group, group B has 2. 
What is the remainder?

We can use mathematics to check whether a number is even or odd
with the remainder of the division of the number by 2.
*/

console.log("Example 1:", 4 % 2);

console.log("Example 2:", 7 % 4);
console.log("Example 3:", 7 % 3);


/* Exercise
Declare a read only variable remainder equal to the remainder of 4 divided by 1 using the remainder operator.

Log the result and make an assessment of the number 4!
*/

const remainder = 4 % 1;
console.log("Solution:", remainder);

/* Compounding with augmented operators
Augmented assignment operators ( +=, -= *=, /= ) mathematically changes the value of the right operand to a 
variable and assigns the result to the variable. The types of the two operands determine the behavior of 
the assignment operator.
-----
what the heck am i even talking about?? IN ENGLISH PLEASE - 

You can assign a variable it's current memory state and then make a 
mathematical change to it to modify the variable. This happens quite often
in coding. Ex1

The short hand form of this would be with augmented operators as follow: 
Ex2
*/

let x = 5;
x = x + 4;
console.log("Example 1 of augmented operators:", x);

let y5 = 5;
y5 += 4;
console.log("Example 2 of augmented operators:", y5);

/*  Declare a reassignable variable a and set it to 10;
using the augmented product operator multiply a (is the variabler) by a number which will yield the result
40.

Log the response.
*/

let a = 10;
a *= 4;

console.log('solution for augmented operators:', a);

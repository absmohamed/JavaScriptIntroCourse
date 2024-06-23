/* In JavaScript you can assign one variable to another using the assignment operator: =

Recall declaring and assigning variables:
var hello = "welcome!"

Code examples:
Lets say we're building a game and we want to assign some characters to say hello and
others not to
*/

// var teacher = "Welcome!";
// var student = "Welcome!";
// var friend = "Welcome!";
// var uncle;

// Imagine we have 10,000 characters
var hello = "Welcome!"

var teacher = hello;
var student = hello;
var friend =  hello;
var uncle;
// console will show uncle as undefined, but if we say var uncle = null, console will show null
// this is important to know because undefined and null are not the same.
console.log("Example", teacher, student, friend, uncle);

/* Exercise
Build Your First Basic Calculator in JavaScript
1. Declare two variables as numbers and initialize them.
One variable named five should be initialized to the number 5
Another variable named four should be initialized to the number 4

2. Declare another variable called calculator and using the assignment operator
assign to the calculator variable the variable five plus the variable four 
so that the results yield 9.

3. Display your result in the Console

4. Bonus! Create your own calculator and share the code on discord! 
*/
var five = 5;
var four = 4;

var calculator = five + four;
console.log("Solution:", calculator);

var seventySeven = 77;
var eightyEight = 88;

var calculatorTwo = eightyEight - seventySeven;
console.log("Bonus:", calculatorTwo);


/* An issue with using var to declare variables is that it can easily be over written

ES6, which was a update standardization to JavaScript addressed this issue by introducing
the let variable. If we replace var with let we will then get an error to avoid making the
mistake

let is a great way to remove the possibility of accidentally redefining variables but
ES6 didn't stop there. It gave JS another awesome gift by introducing the const variable

The const variable has all the same features as let but it also is read only. That means
that you can't accidentally reassign the const variable without throwing an error. */

let cat = 'meow';
// let cat = 'woof';

console.log('Example:', cat);

// read only vs reassignable
let yourBestFriend = "Jack";
yourBestFriend = "Susan";

const yourWorstEnemy = "Tom";
// yourWorstEnemy = "Jordan"; can't reassign a const variable.

console.log(yourBestFriend, yourWorstEnemy);

// Exercise: 1. Create a read only variable x and assign it the string 'This is read only.'

const x = "This is read only";
console.log("Exercise Solution:", x);
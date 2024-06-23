/* 
The if/else statement executes a block of code if a specified 
condition is true (boolean). If the condition is false, another block of 
code can be executed. The if/else statement is a part of 
JavaScript's "Conditional" Statements, which are used to perform 
different actions based on different conditions. 

Booleans are datatype which contain true or false values.

let isItRaining = true;

Equality operators are different than assignment
Assignment Ex: let x = 2;
Equality Operators include: ==, ===, <, >, <=, >=
Ex. x > y, a <= b

*/
const x = 3;
const y = 3;

function conditional(){
    if(x <= y){
        return true;
    } else {
        return false;
    }
}

console.log(conditional());

/* Create a time travel program that can send us back in time!
1. Create two const global variables speed and time and intialise speed and time to any
numbers as long as time is less than speed.

2. Create an additional reassignable variable called loadData as a boolean and initialise
it to false.

Now we have our global programming variables set up and it's time to set the wheels in
motion!

3. Write a function timeTravel that takes two arguments x and y. Add conditional logic to
the function that checks whether x is greater than or equal to y. If this is true then return the function
so that loadData is modified to true. If it's false then return loadData explicitly again to equal false.

4. Write a second function called nebular that checks to see if loadData is true or false. If it's true then
nebular should run a console log with the string input: "Welcome to the stone age!"

5. Execute both functions inputting speed and time as arguments for timeTravel setting speed to x and time as
y.

*/

const speed = 247;
const time = 33;
let loadData = false;

console.log("state of load data before:", loadData);

function timeTravel(x, y){
    if (x >= y){
        return loadData = true;
    } else {
        return loadData = false;
    }
}

function nebular(){
    if(loadData === true){
        console.log("Welcome to the stone age!")
    }
};

timeTravel(speed, time);
nebular();

console.log("state of load data after:", loadData);
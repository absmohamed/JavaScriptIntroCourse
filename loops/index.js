/* Loops
Loops can execute a block of code a number of times.

JavaScript Loops
Loops are helpful, in order to repeat the same code over and over again, and provide
different values each time.

Often this is the case when working with arrays:

Code Examples:
*/

let users = ['abz', 'tommy', 'arthur', 'ada'];

console.log('Example 1:', users.length);

/* for loop
3 expressions in the for loop
1. initialise index
2. second expression denotes how long or to where do we wish to loop until
3. we can decide what happens to i for the next iteration
*/

for(let i = 0; i < users.length; i++){
    console.log("incrementing for loop", users[i]);
    console.log(i);
}


/* new for loop that's going to decrement */
for(let i = users.length - 1; i >= 0; i--){
    console.log("decrementing for loop", users[i]);
    console.log(i);
}

/* Exercise
Create an algorithm using a for loop that can add the sum of natural numbers up to 50
(You should use ES6 correctly for variable storage)

So positive whole numbers example: 1, 2, 3, etc
The sum of natural numbers of 3 ex: 1 + 2 + 3 = 6
*/

let sum = 0;
const n = 50;

for(let i = n; i >= 1; i--){
    // sum = sum + i;
    sum += i;
}
console.log('Solution', sum);
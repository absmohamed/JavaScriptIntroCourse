/* Escape literals allow us to use quotations and change the indenting in our strings
so that JavaScript can format the strings properly
\' = single quote
\" = double quote
\\ = backslash
\n = newline
\t = tab 
*/

let hello = "abz welcome's you";
console.log("example single quote", hello);
console.log('abz told me today, "stop being lazy"');

/* Exercise: Log a console message with the following sentence: 'the cat jumped over the moon' so that each
word starts on a new line */

console.log('Solution:', '\nthe \ncat \njumped \nover \nthe \nmoon');


/* What is concatenating in Javascript
concatenating in javaScript is when you add one string(or append) to another string.

Code Examples:
*/
const partOne = "what would you like";
const partTwo = " to be when you grow up";

console.log("Example:", partOne + partTwo);
console.log("Example 2:", partOne.concat(partTwo));

/* Exercise
1. Initialize a reassignable variable  
named newPhrase to the incomplete following sentence: 'once upon a time'

2. Using the Augmented Plus Operator modify the phrase variable so that
the sentence is completed with your own words by concatenating them to 
the phrase variable and log your results. 
`;
*/

let newPhrase = 'once upon a time';
console.log('Solution:', (newPhrase += " there was a great king"));
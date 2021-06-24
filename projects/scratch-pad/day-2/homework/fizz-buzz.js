// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
//counter loop (for loop) to get numbers 1 - 100
//any multiples of three (ex. 3,6,9) needs to print "Fizz" instead of the number
//any multiples of five (ex. 5, 10, 15) needs to print "Buzz" instead of the number
//any multiples of both three and five needs to print "FizzBuzz"

//for loop: starts. at 1, ends at 100 and updates ++
 for(let counter = 1; counter <= 100; counter++) {
//if statements to check if the values of both mutiples of 3 and 5 
if (counter % 3 === 0 && counter % 5 === 0) {
    //if true, console.log "FizzBuzz"
    console.log("FizzBuzz");
    //else if statement to check the value of multiples of 3
} else if (counter % 3 === 0) {
    //if true, console.log("Fizz")
    console.log("Fizz");
    //else if statement to check the value of multiples of 5
} else if (counter % 5 === 0) {
    //if true, console.log("Buzz")
    console.log("Buzz");
    //if the number is not true for any other above conditions, use the number
    //in the for loop variable
} else {
    //console.log the number
    console.log(counter);
}
}
}
fizzBuzz();
    // YOUR CODE GOES ABOVE HERE //






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}
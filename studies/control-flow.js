/*
 * CONTROL FLOW:
 *
 * 0. Control flow is how the javascript interepter reads our code. In a more
 *    defined definition it is the order in which statements are executed in a 
 *    program. The interpreter reads from top to bottom, left to right. Control flow allows
 *    us to do great things with out code, like hoist functions (calling a declared 
 *    function before it written in the code). Always pay attention to the order your code is
 *    written. Some errors can occur simply by initializing a variable after it is written in, 
 *    for example, a function.
 *
 *
 * Example //
 *    Below is an example of how control flow effects how the code is read and why
 *    it is so important to be conscious of the order we write our code. When working on this
 *    project, I was stumped on my test was failing. I had my loop working and I had my
 *    logic for my conditional statements correct. My problem was the order that I had my 
 *    conditional statements. In the FizzBuzz assignment, "FizzBuzz" needed to be the first 
 *    conditional statement because if not, some of the multiples of both 3 and 5 were skipped
 *    due to the true conditional statements from "Fizz" and "Buzz".
 */
 
 function fizzBuzz() {
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
fizzBuzz()


/* 
     The FizzBuzz exercise is made up of block statements. Block statements are used to group
     statements by { } curly brackets. The most common block statements are those used with
     while, for, and if statements. Condtional statements (if, else if, and else) as shown above
     includes a conditional statement that if true, will execute the statements in the code block.
     It will continue down the conditional statements until it finds one that evaluates to true. If
     it doesn't. it will execute the default (in switch), and else in if-else if statements.

     If you have a series of if statements, they are all checked even if a match has been found!

*/

//.  FALSEY VALUES :
/*. 
     These are values that evaluate to false:
     -NULL
     -UNDEFINED
     -NaN
     -"" EMPTY STRING
     -0
     -FALSE
     
     ALL OTHER VALUES ARE TRUTHY VALUES.
*/

//.  SWITCH STATEMENTS:
/*  
     Switch statements start with a variable called switch value and that value is what
     each case is judged against to see if they match. If they are a match, the code in the case 
     runs. If there is no match, the default case will run. The difference between if...else and
     switch statements is that 1. you have that default incase there is no match and 2. if the
     match is found, that case runs and the break statement stops the switch statement from running.
*/ 
     var animalSounds = "frog";
     
     switch (animalSounds) {
         
         case "dog":
           console.log("woof woof");
           break;
         case "cat":
           console.log("meow");
           break;
         case "frog":
           console.log("ribbit");
           break;
         default:
           console.log("That's not an animal!");
           break;
     }
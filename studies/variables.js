/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
//Uses the assignment operator (=)
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


//It is best practice when naming variables, to name them in camelcase. This makes code easier to read
//4. camelcase //
var camelCase = "best practice";

//It is also best practice to make your variables something related to what they are holding.
//5. naming variables //
var firstName = "Kathryn";

//RULES FOR VARIABLES //
/*
There are certain keywords that you can not use as a variable because they are reserved in the 
Javascript language. Keywords are words that tell the interpreter to do something. Examples of these reserved words are :
var let const for in while function alert eval window parseFloat document location date

More rules include that variables must begin with a letter, underscore_, or dollar sign ($). It
can not start with a number. You can not use a dash (-) or a period (.) in variable names.
Another thing to note is that variables are case sensitive. 
*/

let _thisFruit = "banana";
let $thisVegetable = "green beans";

//The above var variable is the ES5 way of writing variables
//ES6 came out with new ways to store values, let and constant.
//let and const are considered block scope variables, meaning they can not be used
//outside of the function, loop, or conditional statement they were created.
//However, var is considered to be function scoped because they can be called outside of a loop
//or function, but are stuck to the function.

//let is the now preferred way to declare a variable.
let lastName = "Holloway";

//Using the let keyword will allow you to reassign the variable

lastName = "Milford";
console.log(lastName); // prints "Milford"

//The second new way of writing variables with ES6 is const
const isHuman = true;

/*
const can not be reassigned because const means constant value.
One other important thing to note about const, is that it has to have an assignment
const can never be without a value.


const doesNotWork; // will show err because there is nothing assigned

Variables can hold any type of data, simple or complex. Functions, objects, arrays
can all be store in variables. Variables are very useful because it allows us to use the
information stored in the variables thoughout our code. This avoids making us hard copy the value
into our code, and it allows us to keep our code D.R.Y. (DO NOT REPEAT YOURSELF!).
*/

//HOISTING VARIABLES

/*
Along with functions, var variables are hoisted to the top of the call stack. The memory will not store 
the value of the variable, it will simply acknowledge it exists and will throw a UNDEFINED error
if trying to reference the var variable before it appears in the code.

*/

console.log(whoops) // will return UNDEFINED

var whoops = "I will show my value after I have been written in the code.";

console.log(whoops) //will return "I will show my value after I have been written in the code."


/*
Instead of the UNDEFINED error you recieve calling a var variable before it appears in the code, let and
const will give you a REFERENCE error. This is because const and let variables are not hoisted to the top
of the call stack. There is no reference in memory that they exist.
*/
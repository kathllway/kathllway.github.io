// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  //Start: 0
  //Stop: array.length
  //Update: i++
  
  //For loop:
  for(let i = 0; i <= array.length; i++) {
    console.log(array[i]);
  }
  
  //for of loop with 
  //I: array
  //O: console.log array's values
  //for (let i of array){
    //console.log(i);
  }
  
  
  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  //Start: array.length-1
  //Stop: 0
  //Update: i--
  
  //For loop:
  for(let i = array.length-1; i >= 0; i--) {
    console.log(array[i]);
  }
  
  
  //For of loop:
  //variable arrInReverse to hold the array in reverse value
  //const arrInReverse = array.reverse();
  //run for of loop on array
  //for(let i of arrInReverse) {
  //  console.log(i);
  //}
  
}
  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //

  //Use built-in Object.keys() method to return an 
  //Array of the input object's keys
  return Object.keys(object);
}
  // YOUR CODE ABOVE HERE //


/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //I: object
  //O: print keys on object to the console
  //For in loop:
  for(let key in object){
    console.log(key, object[key]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //I: object
  //O: an array of the input object's values
  //Use built-in Object.values() method on object input
  
  return Object.values(object);
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //I: object
  //O: console.log() the input's object's values
  //Use a for in loop:
  //In order to get a object's value from the key, use this syntax: object[value]
  
  for(let value in object) {
    console.log(object[value]);
  }
  
  
  
 
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  //I: object
  //O: number of key/value pairs in the input's object
  //Use built-in method Object.keys() method with .length property
  
  return Object.keys(object).length;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  //I: object
  //O: object's values in reverse
  //Call function that loops over the values in the array and 
  //print values to console.log()
  

   //Using built-in object method to grab values from the object
   let objectValues = Object.values(object);
   //Using reverse method to reverse those values
   let reverseTheValues = objectValues.reverse();
   //Using previous made function to print values in an array
   //and passing my reversed values as the argument
   console.log(printArrayValues(reverseTheValues));
 
  
}
    
  // YOUR CODE ABOVE HERE //






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}

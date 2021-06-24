// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //I: value
    //O: Array.isArray(value) which will return a boolean value if the input is 
    //an array
    
    const isValueAnArray = Array.isArray(value);
    return isValueAnArray;
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
//I: value
//O: return true if the parameter (value) is an object. Return false if the value is 
//an "object" like: array, null, and date. Use typeof to compare the value with object.
    
//Create a conditional statement that compares the value with Array.isArray() built-in method.
   if (Array.isArray(value)) {
       return false;
   }
//Create a conditional statement that compares the value with null. 
   if (value === null) {
       return false;
   }
//Create a conditional statement that compares the value with date(). Need to use instanceof
    if (value instanceof Date) {
        return false;
    }
//Create a conditional statement that compares the value with object.
    if (typeof value === 'object') {
        return true;
    } else {
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
  //I: parameter (value)
  //O: return true of value is array. Return false, if not an array.
  
  //**null, date, and array will show up as an object with typeof operator
  
  //Create a conditional statement to compare null with value.
     if (value === null) {
         return false;
     }
  //Create a conditional statement to compare date with value.
     if (value instanceof Date) {
         return false;
     }
  //Create a conditional statement to compare array with value. Return true if Arr
     if (Array.isArray(value)) {
         return true;
     }
  //Create a conditional statement to compare object with value. Return true if Obj
    if (typeof value === 'object') {
        return true;
    } else {
        return false;
    }
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string" -y
 *    - "array" -y
 *    - "object" -y
 *    - "undefined" -y
 *    - "number" -y
 *    - "boolean" -y
 *    - "null" -y
 *    - "function" -y
 *    - "date" -y
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //I: parameter (value)
    //O: return typeof value as a string
    
    //Use conditional statements to compare typeof value with data type values
   if (Array.isArray(value)) {
       return "array";
   }
   if (value === null) {
       return "null";
   }
   
   if (value === undefined) {
       return "undefined";
   }
   
   if (value instanceof Date) {
       return "date";
   }
   
    if (typeof value === "string") {
        return "string";
    } 
    if (typeof value === "number") {
        return "number";
    }
    
    if (typeof value === "function") {
        return "function";
    }
    
    if (typeof value === "boolean") {
        return "boolean";
    }
    
    if (typeof value === "object") {
        return "object";
    }
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}

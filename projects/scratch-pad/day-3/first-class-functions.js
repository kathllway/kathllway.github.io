// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //I: base (value could be string or number)
    //O: return number > base return true, else false
    //O: return string > base return true, else false
    //Need to compare if the typeof parameter(base) is a number or string
    //If it is, if needs to return a function 
            
        if (typeof base === 'number') {
            return numberFunction;
        } 
        
        if (typeof base === "string") {
            return stringFunction;
        }
   
   //Create function to compare the base with a number. If base is less than the 
   //number, return true. Else, return false.
    function numberFunction(num) {
        
        if (base < num) {
            return true;
        } else {
            return false;
        }
    };
    
    //Create function to compare base with a string. If base is less than string,
    //return true. Else, return false.
    
    function stringFunction(string) {
        
        if (base < string) {
            return true;
        } else {
            return false;
        }
    };
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //I: base (value could be string or number)
    //O: return typeOf number < base
    //O: return typeOf string < base
    
    //Compare the typeof base with number. If it is a number, return 
    //lessThanNumber function
    
    if (typeof base === "number") {
        return lessThanNumber;
    }
    
    //Compare the typeof base with string. If it is a string, return
    //lessThanString function
    if (typeof base === "string") {
        return lessThanString;
    }
    
    //Create a function that compares if the number is less than the base. If yes,
    //return true. Else, return false.
    
    function lessThanNumber(number) {
        if (base > number) {
            return true;
        } else {
            return false;
        }
    };
    
    //Create a function that compares if the string is less than the base. If yes,
    //return true. Else, return false.
    
    function lessThanString(string) {
        if (base > string) {
            return true;
        } else {
            return false;
        }
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //I: startWith
    //O: true or false, whether a string starts with a startsWith character
    
    //Create a function that takes a string as the parameter. 
    //Compare the first letter of the string with the startsWith parameter (single char)
    //To make case insensitive, change both letters toLowerCase
    //If the letters match, return true. Else, return false.
    
    function strFunction (string) {
        if (string[0].toLowerCase() === startsWith.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }
    
    return strFunction;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //I: endsWith
    //O: return true if the endsWith parameter is the same char as the char at the 
    //end of the string. If they are not the same, return false
    
    //Create a function that takes a string as the parameter.
    //Compare the last letter of the string (slice method) with the endsWith parameter
    //To make case insensitive, applu toLowerCase to both arguments.
    //If the last char of the string is equal to the endsWith char, return true.
    //Else, return false.
    
    function strngFunction (string) {
        if (string.slice(-1).toLowerCase() === endsWith.toLowerCase()){
            return true; 
        } else {
            return false;
        }
    }
    
    return strngFunction;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    //Start: 0
    //Stop: string.length-1
    //Update: ++
    
    //Create empty array to push modified strings into from for-loop
    const myArr = [];
    
    //Create for-loop to loop over all the characters of the string.
    //Pass the strings[i] as argument for the built-in modify function.
    //Push into the empty array
    for (let i = 0; i <= strings.length-1; i++) {
       myArr.push(modify(strings[i]));
    //console.log(modify(strings[i]));
    };
    console.log(myArr);
    return myArr;
    
    //Another way: To use .map() below which takes for loop and simplifies to one line of code
    //Map() is a built in loop.
    //return strings.map(modify);
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //Start: 0
    //Stop: .length-1
    //Update: ++
    
   //Create a for loop to loop over the charaters in the string.
   //Create a condition statement that passes the strings[i] into the built-in test function
   //as an argument and compares if the strings do not pass, return false to stop the loop. If the
   //strings do pass the test, return true.
    
    for (let i = 0; i <= strings.length-1; i++){
        if (test(strings[i]) !== true) {
          return false;
        }
      }
        return true;
        
    
    

    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}

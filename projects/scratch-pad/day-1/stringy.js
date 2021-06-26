// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    //I: string
    //O: return .length property on string
    return string.length;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    //I: string
    //O: return string with .toLowerCase() method
    return string.toLowerCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    //I: string
    //O: return string with .toUpperCase() method
    return string.toUpperCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    
    //I: one parameter: string
    //O: returns a new string to dash-case. must be lowercase.
    //toDashCase function using .split() and .join() methods
    
    let splitAndJoinMethod = string.split(' ').join('-');
    return splitAndJoinMethod.toLowerCase();
    
    //toDashCase using replace()
    
    //Regex method:
    //let stringWithReplace = string.replace(/ /g , '-');
    //return stringWithReplace.toLowerCase();
}

    // YOUR CODE ABOVE HERE //



/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    
    //first char of string and char need to match in capitalization
    
 
    //I: 2 parameters,string and char
    //O: true if string begins with the same character. false if not
    //Variable: firstWordOfChar = string.charAt(0) (first char of the string)
    let firstWordOfChar = string.charAt(0);
    
    //If statement to check if first letter of string and char are the same
    if(firstWordOfChar.toLowerCase() === char.toLowerCase()){
        return true;
    } else {
        return false;
    }
    
    
}
 
    

    // YOUR CODE ABOVE HERE //


/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //

    //I: 2 parameters: string and char
    //O: true if last char in string and char argument match. else, false.

  //Variable: lastCharOfWord = string.slice(-1) to get the last char of the string
  let lastCharOfWord = string.slice(-1);
  //If statement to compare if the last char in the string is the same as char
  if (lastCharOfWord.toLowerCase() === char.toLowerCase()) {
      return true;
  } else {
      return false;
  }



}
    // YOUR CODE ABOVE HERE //


/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //I: 2 parameters: stringOne and stringTwo
    //O: join (concat) stringOne and stringTwo into one string
    //Variable concatStrings, joins stringOne and stringTwo with + operator
let concatStrings = stringOne + stringTwo;
    //Return the concatStrings variable
return concatStrings;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //Array.from method will create a new array
    var args = Array.from(arguments);
    //return the join method to the array
    return args.join('');


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //Compare the length of stringOne to stringTwo's length
    //If stringOne is longer than stringTwo return stringOne, else return stringTwo
  if(stringOne.length > stringTwo.length) {
       return stringOne;
  } else {
      return stringTwo;
  }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
  //Init variable arrayOfOrderedStrings to an array. Use sort method to sort in alphebetical order.
  const arrayOfOrderedStrings = [stringOne, stringTwo].sort();
  //Init variable highestValue to the first position of arrayOfOrderedStrings because that with be the 
  //highest value.
  const highestValue = arrayOfOrderedStrings[0];
  
  //If statement to compare if stringOne is equal to stringTwo. If so, return 0.
  if (stringOne === stringTwo) {
      return 0;
  }
  //If statement to compare if stringOne to the highestValue variable. If so, return 1.
  //else, return -1.
  if (stringOne === highestValue){
      return -1;
  } else {
      return 1;
  }

 

//If stringOne is > stringTwo return 1

//If stringTwo is > stringOne return -1

//If stringOne === stringTwo return 0
}
    // YOUR CODE ABOVE HERE //



/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
 //Init arrOfOrderedPairs to a array with elements of stringOne and stringTwo. Add sort() method
 //to alphabetical order.
 const arrOfOrderedPairs = [stringOne, stringTwo].sort();
 //Init lowestValue to stringTwo, because stringOne will have the highest value.
 const lowestValue = arrOfOrderedPairs[1];
 
 //If statement to return a value of 0 if stringOne and stringTwo are equal.
 if (stringOne === stringTwo){
     return 0;
 }
 //If statement to return if stringOne is less than the lowestValue, return 1. Else, return -1.
 if (stringOne === lowestValue){
     return -1;
 } else {
     return 1;
 }

}
    // YOUR CODE ABOVE HERE //



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}

/*
 * String Manipulation:
 *
 * 0. Methods and properties can be used on strings because Javascript treats strings as objects.
 *.   MDN has all of the methods and properties that can be performed on a string value.
 *
*/
//.   STRING LENGTH - will return the length of the string
      var strLength = "1234";
      console.log(strLength.length);  // will return 4
      
//.   To access the last character in the string you can do length -1
      console.log(strLength.length - 1); /// will return 4

//.   SLICE METHOD - will take a part of the string and return that part in a new string
//    Takes two parameters (start position, end position) 
//.   Can take in negative numbers, but if they are negative, it will start from the end of the string
      var sentence = "My dog is cute.";
      console.log(sentence.slice(3, 5)); // will return "dog"
      
//.   SUBSTRING METHOD - similar to slice method, but does not accept negative numbers.
      console.log(sentence.substring(3,5)) // will return "dog"
      
//.   If you leave of the second parameter, the rest of the string is sliced.

//.   REPLACE METHOD - returns a new string. replaces a specific value with another value. Will only replace first matching value.
//.   Is case sensitive
      var changeSentence = sentence.replace("dog", "cat"); // returns "My cat is cute."
      
//.   TOUPPERCASE METHOD - returns the string, with all the characters in uppercase.
      var makeStrUpperCased = "im a little low";
      console.log(makeStrUpperCased.toUpperCase()); // returns "IM A LITTLE LOW"
      
//.   TOLOWERCASE METHOD - returns a string to lowercase
      var makeStrLowerCased = "IM VERY LOUD";
      console.log(makeStrLowerCased.toLowerCase()); // returns "im very loud"
      
//.   CONCAT METHOD - joins two or more strings. Can be used instead of the plus operator. Returns a new string.
      var myFirstString = "I like";
      var mySecondString = "chocolate icecream.";
      console.log(myFirstString.concat(" ", mySecondString)); // returns "I like chocolate icecream."
      
//.   TRIM METHOD - removes whitespace from both sides of the string.
      var iNeedMySpace = "   i like space    ";
      console.log(iNeedMySpace.trim());  // returns "i like space"
      
//.   CHARAT METHOD - returns a specific character in a string. returns by index. return empty string if no character is found
      var almostDone = "I will be getting icecream very soon.";
      console.log(almostDone.charAt(7)); // will return "b"
      
//.   SPLIT METHOD - converts a string into an array
      var str = "I am so happy!";
      var newArr = str.split();  // returns ["I", "am", "so", "happy!"]
      
      
//.   TO REVIEW STRING MANIPULATION WITH OPERATORS, SEE OPERATORS NOTES!

/*
 * DataTypes:
 *
 * 0. Datatypes in Javascript are either simple/ primitive or complex. 
 *
*/
 
 //. SIMPLE/ PRIMITIVE DATATYPES:
 
/* 
    Simple datatypes are values that are stored in variables and have a max bit size of 8. Because they are 
    not big in size, they are held in the memory of the variable. This is why they are referred to as being 
    simple. Simple datatypes are atomic and immutable (not changing the original value) and this is because 
    when you reassign a simple datatype you are getting a copy of the original value. This is a MAJOR 
    difference between simple and complex datatypes.


*/

//.  EXAMPLES OF SIMPLE DATATYPES:

//.  NUMBERS = as simple as that, it is numbers... integers.
     var num = 11;  // typeof number
     
     
//   STRINGS = consists of letters and other characters
     var string = "I am a string!";  // typeof string
     
//.  BOOLEAN = true or false
     var outOfStock = false; // typeof boolean
     
//   NULL = built-in value. Allows the programmer to intentionally add this value to a variable
     var unsureOfValue = null;   //can not be checked with typeof operator
     
//.  UNDEFINED = built-in value. Can appear if the variable has been declared but not yet initalized.
     //Also can appear if variable is being called before it has been initalized in the code. 
     var coffee;  // returns undefined // typeof undefined
     
//.  NaN = built in value. Means, Not a Number. Will return if the value expected was suppose to be a number. 
     //should use the isNaN() global function to check if a value is NaN
     // parseInt() will also check if the value is a number.
     console.log(parseInt("hi!")); // will return NaN
     
     
//   COMPLEX DATATYPES:

/*
     Complex datatypes are indefinite in size, meaning they are not held down to the 8 bit simple datatype requirement.
     Since complex datatypes can be an infinite size, they are considered to be copy by reference. This means that when
     you are reassigning a complex datatype you are referencing the same location where the original datatype is referencing.
     If you change a value to any other the complex datatypes you are referencing, it will change all references that point 
     to that object.

*/

//.  EXAMPLES OF COMPLEX DATATYPES:

//   ARRAYS = stores a "list" of values.

     var literalArray = [];
     
//.  Arrays are stored in variables. They store these variables by using square brackets. [ ]. All of the values inside
//.  of an array are called elements. Elements are seperated by a comma.

     var fruits = ["bananas", "strawberries", "oranges"];
     
//   Elements in an array are accessed by their index- the same as how we access characters in strings. They have an index
//.  that starts at 0.

//.  0 = "bananas"
//.  1 = "strawberries"
//.  2 = "oranges"
    
//.  Use bracket notation (array notation) to retrieve an element in an array. To do this, use the index number
     console.log(fruits[0]); // will return "bananas"
     
//.  To get the length of an array (how many elements are in the array), you can use the .length property.
     console.log(fruits.length); // will return 3
     
     
//.  METHODS ON ARRAYS:

//.  There are some great built in methods for arrays. Instead of having to create a for loop, you can look up
//.  methods that will do the looping for you! .map() .join() .filter() .split() .slice() 
//.  **Always check MDN to see if there is a simipler way to write your code!


//.  OBJECTS = collections of values. Objects are organized by key: value pairs, called properties. The keys in an object 
//             are actually strings. If you remember this, it makes sense for when you try to reference a key with bracket 
//             notation. Obejcts are also held in a variable and use curly brackets { }. Properties are seperated by commas.
//             Objects can store functions, other objects, and arrays as values.

      var literalObject = { };
      
      var aboutMe = {
          firstName: "Kathryn",
          lastName: "Holloway",
          age: 29,
          foods: ["pizza", "bananas", "rice"]
          
      }
    
//.   To access keys in an object, you use bracket notation or dot notation. It is best practice to use dot notation if you know
//.   the key name. 

      console.log(aboutMe.firstName); // will return "Kathryn"
      console.log(aboutMe["age"]);   //  will return 29
      
/*
      FAVORITE NEW WAY TO RETRIEVE ALL OF AN OBJECT'S KEY:
      Object.keys()
      
      Object.keys() is a built in method that will return the keys in an object. Returns keys in an array the same way a for in loop would.



      FAVORITE WAY TO RETRIEVE ALL OF AN OBJECT'S VALUES:
      Object.values()
      
      Same as with Object.keys(), built in method that returns all the object's values in an array.
*/


//.    FUNCTIONS = functions are also considered complex datatypes. In order to keep my notes DRY, check out the functions section.
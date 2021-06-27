/*
 * FUNCTIONS:
 *
 * 0. Functions give us the ability to group a series of statements together that perform
 *.   a certain task. It lets us keep our code DRY by giving programmers the ability to
 *.   reuse the function in other parts of our script instead of having to rewrite it.
 *.   Functions make our code organized, and when labeled properly, it is easy to read.
 *.   
*/
//.   DECLARING FUNCTIONS: 
//.   To declare a function, you need to use the function keyword, followed by the name
//.   of the function, a list of parameters in parenthesises () seperated by commas, and
//.   statements in curly brackets { }.
      
      function add(num) {
          var sum = num + 2;
          return sum;
      };
      
/*
      The above function takes a num value as the parameter. It then uses that num value
      in the code body to add to the number 2. The function returns the result of the sum 
      variable. Any number can be passed as an argument when calling the function.
*/
//.   CALLING THE FUNCTION:
      add(8);
//.   When printing to the console, the result will return 10
      console.log(add(8)); // returns 10
//    Can store the result by calling the function in a variable.

//    THINGS TO THINK ABOUT WHEN USING VALUES AS PARAMETERS:
/*
      Adding a primitive value as a parameter will not change the value globally or if calling
      the function, even if the function changes the value of the parameter. If you pass in a
      complex argument, like an object or array, and function changes the object's properties,
      it will be changed outside of the function also.
    
*/

//.   DIFFERENCE BETWEEN PARAMETERS AND ARGUMENTS:
/*
      Parameters are what the function takes in the the code body. Functions do not have to have
      parameters, it can just be an empty (). However, if there is a parameter, it must be used
      within the code block. Arguments is what is passed to the parameters when the function is called.
*/
      function example(parameter){
          return;
      };
      
      
      //example(argument);
      
//.   Above is an example of a named function. The name of the function is example.
//.   Functions can also be store in variables. This is called a function expression.
//.   Most of the time when you see a function expression, the function name is deleted.
//.   This makes the function an anonymous function because it has no name. Anonymous
//.   and function expressions are not read until the interpreter gets to that statement.

      var add = function(num1, num2){
          return num1 + num2;
      };
      
//.  Inputs of a function are the parameters, which accept arguments to be passed in. In
//   order for the function to give us an output we must use the return keyword. This is
//.  very important!! However, functions do not need to return a value, most of the time
//.  you want them to!

//.  If a variable is declared and initalized in a function, it can not be used outside
//   of the function code block. 
/*
 * OPERATORS:
 *
 * 0. There are many types of operators. They can be distinguished by how many
 *.   how many operands the operator needs. Urary operators take one operand,
 *.   binary operators take two, and the ternary operator takes three. Now is as
 *.   good as a time as any to review what statements and expressions are.
 *.   
 *.   Statements are actions. They are the instructions programmers give. 
 *.   Statements should end with a semicolon. Expressions result in a single value.
 *.   All expressions are statements! Expressions need operators to let 
 *.   programmers create a single value from more than one value.
*/

//.   ASSIGNMENT OPERATORS:
//.   uses an equal (=) sign to assign a value to a variable.
      var animal = "dog";
      
/* 
      There are other assignment operators that take the arithmetic operators below
      and combine them with the equals operator. 
      EXAMPLE :
       x += y
       x = x + y
      
*/
      
      
//.   ARITHMETIC OPERATORS:
//.   **Order matters!** Multiplication and division will be determined before
//.   subtraction and addition.

/*.   + Add (adds values together)
      - Subtract (subtracts values from eachother)
      * Multiply (multiplies two values)
      / Divide (divides to values)
      % Modulus (divides two values and returns the remainder)
      ++ Increment (adds 1 to current value)
      -- Decrement (subtracts 1 from current value)

*/

//.   STRING OPERATOR:
//.   Uses the plus + sign to concat (join) two strings together.

      var greeting = "Hi, ";
      var name = "Kathryn";
      var concatStrings = greeting + name; // will return "Hi, Kathryn!"
      
//.   COMPARISON OPERATORS:
//.   Compares two values(operands) and returns a boolean (true or false)

/*.  
      ==  Equal to (compares two values to see if they are the same)
      === Strictly equal to (**Best practice. compares to makes sure values are the same values and datatypes)
      !=  Not equal to (compares two values to see if they are not the same)
      !== Strictly not equal to (**Best practice. compares if values and datatypes are not the same)
      >   Greater than (checks if number on the left is greater than the number on the right)
      <   Less than (checks if the number on the left is less than the right on the right)
      >=  Greater than or equal to (same as > but can also be equal to the number)
      <=  Less than or equal to (same as < but can also be equal to the number)
*/
      var currentAge = 29;
      var ageNextYear = 30;
      var ageComparison = currentAge < ageNextYear; //will return true
      

//.   LOGICAL OPERATORS:
//.   Allows programmers to compare the result of multiple operators

/*
      &&  Logical AND - Will test for more than one condition. If both expressions
          are true, the expression returns true. If one expression returns false,
          the expression returns false.
     
      ||. Logical OR - Will test atleast one condition. If either expression returns
          true, the expression returns true. If both return false, the expression
          return false.
          
      !   Logical NOT - Also called the BANG operator. Takes a boolean value and inverts
          it. Reverses the state of the expression. True becomes false or vice versa.
          
*/
      
//.    CONDITIONAL (TERNARY) OPERATOR
//.    This operator will assign a value to a variable based on a condition

//.    Syntax: varName = (condition) ? value1:value2

//.    EXAMPLES OF UNARY OPERATORS:
//.    Operators with only one operand

//.    DELETE - deletes an object's property
//.    delete object.property

//.    ** Use .splice() on array rather than delete if you want to remove an element

//.    TYPEOF - returns a string indicating the type of the unevaluated operand
//     typeof greeting // returns string

//.    **typeof can will return object for null and array. Use Array.isarray() for array
//.     and instanceof for DATE

//.    INSTANCEOF - returns true if specified object is of the specified object type
//.    returns boolean value

//.    object instanceof operator
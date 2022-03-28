  ==  equal to

  === equal value and equal type

  != Not equal

  !== Not equal value and not equal type

  > Greater than

  > Less than

  >= Greater than or equal to

  <= Less than or equal to  

  || or 

  && and
  

  Conditonal Statements

  If to specify a block of code to be executed if a specific condition is true

  Else to specify a block of code to be executed if the same condition is false

  else if to specify a new condition to test if first condition is false

  switch is specify many alternative blocks of code to be executed.



Conditional ternary operator

This conditional operator takes three operands , a condition, an expression to execute if truthy and an expression to executive if flashy. The syntax is as follows

condition ? <expression if true> : <expression if false>

example : auth ? renderApp() : renderLogin();


Objects
They are data types used to store keyed collections and more complex data types

example: const person ={
    name: "Joe",
    age: 12,
    height: 12.4 ;
    sayHi: Hi(){
        console.log("HI")
    }
}

You can access object properties in two ways

person.name
person["name"]

You can assign and delete variable:

person.nationality = "Ghanaian"   -- assign or reassign
delete person.nationality    -- delete


Methods
An object in a function is basically called a method


Array
An array is an object that enables a collection of multiple items under a single variable name.

const pets = ["Dogs", "Cats", "Snake"]

You can access an array by refering to the index number

pets.push("Parrot") - add new element to the array

pets.splice - delete item


Loops - To repeat an action

For -  for (let i = 0 ; i < 5 ; i++){
    let text = "Number is " + i;
} 

While
do while
for in
for of


Spread Syntax

Allows an iterable such as an array expression or string to be expanded

Rest Syntax

Allows a function to accept an infinite number of arguments as an array


ForEach() methods
It calls a function for each element in an array.


map() method
It creates a new array from calling a function for every array element, calls a function once for each element in an array. 

filter() method 
creates new array that creates a new array with all elements  that pass the test implemented by the provided function.

reduce () method
executes  a reducer function for array element ,returns  a single value, the function accumulated result

Object method
retrieves an array of direct enumerable property values. It returns a new array object that contains  key/value pairs for each index in the array.

Nullish coalescing operator

is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined and otherwise returns its left-hand side operand
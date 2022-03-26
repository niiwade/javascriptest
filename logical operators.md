  ==  equal to

  === equal value and equal type

  != Not equal

  !== Not equal value and not equal type

  > Greater than

  > Less than

  >= Greater than or equal to

  <= Less than or equal to  


  

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
// function age(num1, num2) {
//     console.log(num1 + num2)
// }

// age(2, 2)


// arrow functions. In writing such function always remember it does not have its own
// bindings to this or super and should not be used as methods

const age = (num1, num2) => {
    console.log(num1 + num2)
}

age(2, 34)
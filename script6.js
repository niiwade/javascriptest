// const sum = (x, y, z) => {
//     return x + y + z;
// }
// const numbers = [1, 23, 21];
// console.log(sum(...numbers))



// //merge array


// const person = ["John", "Prince", "Wale"]

// const morePersons = ["Wade", "Nii", "Issac"]

// const allPerson = [...person, ...morePersons]

// console.log(allPerson)


// //merge object

// let obj = {
//     product: "Chair",
//     cost: 122,

// }

// let obj2 = {
//     product: "fridge",
//     cost: 1224,
//     color: "Brown"
// }

// let allObj = { ...obj }


// console.log(allObj)


//Rest syntax

const books = (bk, ...bk1) => {
    console.log(bk)
    console.log(bk1)
}

const line = ["Harry Potter", "James Bond", "hailey Berry", "Prince of Persia", "Tee James", "Price of Sope", "splineter Cell"]

books(...line)
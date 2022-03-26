const sum = (x, y, z) => {
    return x + y + z;
}
const numbers = [1, 23, 21];
console.log(sum(...numbers))



//merge


const person = ["John", "Prince", "Wale"]

const morePersons = ["Wade", "Nii", "Issac"]

const allPerson = [...person, ...morePersons]

console.log(allPerson)
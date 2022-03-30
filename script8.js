//nullish coalescing operator

const Myname = NaN || "Isaac";


console.log(Myname)





const member1 = "Wade"
const member2 = "Wise"
let member3 = undefined
const backupMember = "Mike"

const rockBand = {
    guitarist: member1,
    drummer: member2,
    bassist: member3 || backupMember
}

console.log(rockBand)


//Optional Chaining 

const Adventurer = {
    name: "wade",
    dog: {
        name: "googy"
    },
    goHiking: () => console.log("We are going hiking")
}

Adventurer.goHiking()



const props = {
    number: 100,
    string: "sewwet",
    array: [0, 2, 3]
}

const { number, string, array } = props

console.log(array)



const week = () => {
    return ["Sat", "Sun"]
}

const [day1, day2] = week()

console.log(day2)
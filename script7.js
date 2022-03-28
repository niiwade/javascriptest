//foreach

// const numbers = [3, 2, 4]
// let sum = 0;

// numbers.forEach((ele) => {
//     sum += ele
// })

// console.log(sum)


//map


// const movies = [
//     {
//         director: "Wof Gang",
//         title: "Troy"
//     },
//     {
//         director: "Scott Tray",
//         title: "Blade Runner"
//     },
//     {
//         director: "Wade Josce",
//         title: "Gladiator"
//     }
// ]


// const newEpicMovies = movies.map((movie) => {
//     const revisedMovie = { ...movie }


//     revisedMovie.director === "Scott Tray" ? revisedMovie.viewed = true : revisedMovie.viewed = false

//     return revisedMovie
// })


// console.log(newEpicMovies)


// const students = [
//     {
//         name: "wade",
//         class: "Level 1",
//         age: 21
//     },
//     {
//         name: "nii",
//         class: "Level 2",
//         age: 25
//     },
//     {
//         name: "Prince",
//         class: "level 3",
//         age: 33
//     }
// ]

// const newStudents = students.map((student) => {
//     const studentList = { ...student }

//     studentList.name === "wade" ? studentList.new = true : studentList.new = false

//     return studentList
// })



// console.log(newStudents)


// const schools = [
//     {
//         name: "UCC",
//         level: "TOP",
//         course: 122
//     },
//     {
//         name: "UG",
//         level: "TOP",
//         course: 112
//     },
//     {
//         name: "UEW",
//         level: "MID",
//         course: 93
//     }
// ]


// const newSchools = schools.map((school) => {
//     schoolList = { ...school }

//     schoolList.level === "TOP" ? schoolList.level = true : schoolList.level = false

//     return schoolList
// })


// console.log(newSchools)



//filter()

const organization = [
    {
        name: "Micosoft",
        sector: "General Tech"
    },
    {
        name: "Tesla",
        sector: "Automative Tech"
    },
    {
        name: "Wise",
        sector: "Fintech"
    },
    {
        name: "Paystack",
        sector: "Fintech"
    },
    {
        name: "Lazerpay",
        sector: "Fintech"
    }
]


const financial = organization.filter(
    (companies) =>
        companies.sector === "Fintech"
)

console.log(financial)





const countries = [
    {
        name: "Ghana",
        region: "Africa"
    },
    {
        name: "USA",
        region: "North America"
    },
    {
        name: "UK",
        region: "Europe"
    },
    {
        name: "China",
        region: "Asia"
    },
    {
        name: "India",
        region: "Asia"
    }
]

const country = (allcountries) => {
    return allcountries.region === "Asia"
}

const listOfCountries = countries.filter(country)

console.log(listOfCountries)



//reduce

const cart = [
    {
        description: "Eggs", quantity: 2, price: 12, total: 12
    },
    {
        description: "Bread", quantity: 1, price: 7, total: 7
    },
    {
        description: "Bacon", quantity: 2, price: 60, total: 60
    }
]


const total = cart.reduce((accum, item) =>
    accum + item.total,
    0
)


console.log(total)
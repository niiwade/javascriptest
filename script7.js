//foreach

// const numbers = [3, 2, 4]
// let sum = 0;

// numbers.forEach((ele) => {
//     sum += ele
// })

// console.log(sum)


//map


const movies = [
    {
        director: "Wof Gang",
        title: "Troy"
    },
    {
        director: "Scott Tray",
        title: "Blade Runner"
    },
    {
        director: "Wade Josce",
        title: "Gladiator"
    }
]


const newEpicMovies = movies.map((movie) => {
    const revisedMovie = { ...movie }


    revisedMovie.director === "Scott Tray" ? revisedMovie.viewed = true : revisedMovie.viewed = false

    return revisedMovie
})


console.log(newEpicMovies)


const students = [
    {
        name: "wade",
        class: "Level 1",
        age: 21
    },
    {
        name: "nii",
        class: "Level 2",
        age: 25
    },
    {
        name: "Prince",
        class: "level 3",
        age: 33
    }
]

const newStudents = students.map((student) => {
    const studentList = { ...student }

    studentList.name === "wade" ? studentList.new = true : studentList.new = false

    return studentList
})



console.log(newStudents)


const schools = [
    {
        name: "UCC",
        level: "TOP",
        course: 122
    },
    {
        name: "UG",
        level: "TOP",
        course: 112
    },
    {
        name: "UEW",
        level: "MID",
        course: 93
    }
]


const newSchools = schools.map((school) => {
    schoolList = { ...school }

    schoolList.level === "TOP" ? schoolList.level = true : schoolList.level = false

    return schoolList
})


console.log(newSchools)
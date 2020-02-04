const animals = [ 'lions', 'tigers', 'bears']

for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i])
}


const examScores = [98, 77, 84, 91, 57, 66]

for (let i = 0; i < examScores.length; i++){
    console.log(i, examScores[i])
}

const myStudents = [
    {
        firstName: 'Zeus',
        grade: 86
    },
    {
        firstName: 'Artemis',
        grade: 97
    },
    {
        firstName: 'Apollo',
        grade: 90
    },
    {
        firstName: 'Hera',
        grade: 90
    }

]

for (let i = 0; i < myStudents.length; i++) {
    let student = myStudents[i]
    console.log(`${student.firstName} scored ${student.grade}`)
}


const word = 'stressed'
let reversedWord = ""
for(let i = word.length; i >= 0; i--) {
    reversedWord += word[i]
}


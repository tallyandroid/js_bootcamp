// function multiply(x, y) {
//     y = typeof y === 'undefined' ? 1 : y
//     return x * y
// }

//Default Parameted example


function multiply(x, y = 1) {
    return x * y
}

const greet = (person, greeting = 'hi') => {
    console.log(`${greeting}, ${person}!`)
}

const blah = (x, y = [1, 2, 3]) => {
    console.log(x, y)
}
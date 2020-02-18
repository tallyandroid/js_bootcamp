//block scope

// if(true) {
//     let animal = "eel"
//     console.log(animal)
// }
// console.log(animal)

//there is no block scope for var

// if(true) {
//     var animal = "eel"
//     console.log(animal)
// }
// console.log(animal)

let animals = ['grizzly bear', 'panda bear', 'spectacled bear']

for (var i = 0; i < animals.length; i++) {
    console.log(i, animals[i])
}

function doubleArr(arr) {
    const result = []
    for(let num of arr) {
        let double = num * 2
        result.push(double)
    }
    return result
}


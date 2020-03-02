// var animal 
// console.log(animal)
// animal = 'Tapir'
// console.log(animal)


let shrimp = 'Harlequin Shrimp'
console.log(shrimp)

//let and const are not hoisted

howl()

function howl() {
    console.log("AWOOOOOOOO")
}

//functions are hoisted

//function expressions are not hoisted
console.log(hoot)
var hoot = function() {
    console.log("HOOOOOO HOOOOO")
}

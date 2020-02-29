// //Returning Functions
// function makeBetweenFunc(min, max) {
//     return function(val) {
//         return val >= min && val <= max
//     }
// }

// const inAgeRange = makeBetweenFunc(18, 100)

// inAgeRange(17)
// inAgeRange(68)

// function multiplyBy(num) {
//     return function(x){
//         return x * num 
//     }
// }

// const triple = multiplyBy(3)
// const double = multiplyBy(2)
// const halve = multiplyBy(0.5)

function makeBetweenFunc(x,y) {
    return function(num) {
       return num >= x && num <= y
    }
}
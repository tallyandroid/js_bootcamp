const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1]

nums.forEach(function (n) {
    console.log(n * n)
})

nums.forEach(function (el) {
    if(el % 2 === 0) {
        console.log(el)
    }
})


const numbers = [20, 21, 22,  23,  24, 25, 26, 27]

numbers.forEach(function (num) {
    console.log(num * 2)
})

function printTriple(n) {
    console.log(n * 3)
}

numbers.forEach(printTriple)
const target = Math.floor(Math.random() * 10)
let guess = Math.floor(Math.random() * 10)


while (true) {
    if(target === guess) break
    guess = Math.floor(Math.random() * 10)
}


console.log(`Target: ${target} Guess: ${guess}`)
console.log(`CONGRATS YOU WIN!!`)


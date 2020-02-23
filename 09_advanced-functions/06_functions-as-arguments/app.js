//example

// function callTwice(func) {
//     func()
//     func()
// }

// function laugh() {
//     console.log('HAHAHAHAHAHAHAHAHAHAAA')
// }

// callTwice(laugh)

function callThreeTimes(f) {
    f()
    f()
    f()
}

function cry() {
    console.log("BOO HOO I'M SO SAD!")
}

function rage() {
    console.log("I HATE EVERYTHING")
}

callThreeTimes(cry)

function repeatNTimes(action, num) {
    for (let i = 0; i < num; i++) {
        action()
    }
}

repeatNTimes(rage, 13)

function pickOne(f1, f2) {
    let rand = Math.random();
    if (rand < 0.5) {
        f1()
    } else {
        f2()
    }
}

pickOne(cry, rage)
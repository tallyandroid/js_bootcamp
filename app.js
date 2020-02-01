if ( 1 === 1) {
 console.log("It's true")   
}

// Performance Review 
// 3 - superstar
// 2 - meets expectations
// 1 - needs improvement
// anything else - wtf?


let rating = 3

if (rating === 3) {
    console.log('YOU ARE A SUPERSTAR')
} else if (rating === 2) {
    console.log('MEETS EXPECTATIONS')
} else if (rating === 1) {
    console.log('Nahhh')
} else {
    console.log('You need to chill')
}

// let num = 37

// if (num % 2 !== 0) {
//     console.log('ODD NUMBER')
// }

//nested conditionals
// let password = 'hellokitty'

// if(password.length >= 6) {
//     if(password.indexOf(' ') === -1) {
//         console.log("Valid password!")
//     } else {
//         console.log('Password is long enough, but cannot contain spaces')
//     }
// } else {
//     console.log("Password must be longer")
// }

let mystery = 5

if(mystery) {
    console.log("TRUTHY")
} else {
    console.log("FALSY")
}

let password = 'chickenGal'

if (password.lemgth >= 8 && password.indexOf(' ') === -1) {
    console.log('VALID PASSWORD')
} else {
    console.log('INVALID PASSWORD')
}

let num = 3 

if (num >= 1 && num <= 10) {
    console.log('number is between 1 and 10')
} else {
    console.log('Please guess a number between 1 and 10')
}

let age = 76

if (age < 6 || age >= 65) {
    console.log("You get in for free!")
} else {
    console.log("That will be $10 please")
}

let color = 'violet'

if (color === 'purple' || color === 'lilac' || color === 'violet') {
    console.log('GREAT CHOICE')
}

let day = 3

if (day === 1) {
    console.log("Monday")
} else if (day === 2) {
    console.log("Tuesday")
} else if (day === 3) {
    console.log ("Wednesday")
} else if (day === 4) {
    console.log ("Thursday")
}

//switch statement
switch(day) {
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3: 
    console.log("Wednesday")
    break
}
// //Callback function example

// function callTwice(func) {
//     func()
//     func()
// }

// function laugh() {
//     console.log("HAHAHAHAHAHAHAHA")
// }

// callTwice(laugh)// callback function, pass a function as an arg!
// //"HAHAHAHAHAHAHAHAHAHAHA"
// //"HAHAHAHAHAHAHAHAHAHAHA"

// function grumpus() {
//     alert("GAHHHH GO AWAY!")
// }
// setTimeout(grumpus, 5000)

// setTimeout(function () {
//     alert("WELCOME!")
// }, 5000)


const btn = document.querySelector('button')
btn.addEventListener('click', function() {
    alert("WHY DID YOU CLICK ME!!???")
})

// function square(x) {
//     return x * x 
//     console.log('ALL DONE')
// }

// function isPurple(color) {
//     if(color.toLowerCase() === 'purple') {
//         return true
//     }  
//     return false
// }


// function isPurple() {
//     returncolor.toLowerCase() === 'purple'
// }

function containsPurple(arr) {
    for(let color of arr) {
        if(color === 'purple' || color === 'magenta') {
            return true
        }
        
    }
    return false
}
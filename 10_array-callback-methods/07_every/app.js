//EVERY
//Tests whether  all elements in the array
//pass the provided function.  It returns
//a Boolean value.

const  words = ["dog", "dig", "log", "bag", "wag"]

const all3Lets = words.every(word => word.length === 3)


const allEndInG = words.every(word => {
    const last = word.lemgth-1
    return word[last]  === 'g'
})


const someStartWithD = words.some(word => word[0] === 'd')
const someStartWithD = words.every(word => word[0] === 'd')


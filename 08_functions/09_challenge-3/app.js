function isPangram(sentence) {
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        let lowerCased = sentence.toLowerCase()
        if(lowerCased.indexOf(char) === -1) {
            return false
        }
    }
    return true
}
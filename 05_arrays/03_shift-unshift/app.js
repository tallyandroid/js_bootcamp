//Shift - remove from start
//unshift - add to start

let dishesToDo = ['big platter']

dishesToDo.unshift('large plate')

dishesToDo.unshift('small plate')

dishesToDo.unshift('mug')

dishesToDo.unshift('spoon')


dishesToDo.shift()

console.log(dishesToDo)

// with unshift, you can add in multiple things at once

dishesToDo.shift('small plate', 'large plate')
console.log(dishesToDo)


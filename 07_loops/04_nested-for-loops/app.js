let str = 'LOL'
for (let i = 0; i <= 4; i++) {
    console.log("Outer:", i)
    for (let j = 0; j < str.length; j++) {
        console.log(' Inner:', str[j])
    }
}

for (let k = 1; k <= 10; k++) {
    console.log('OUTER LOOP:', k)
    for (let l = 10; l >=0; l -= 2) {
        console.log('  INNER LOOP', l)
    }
}
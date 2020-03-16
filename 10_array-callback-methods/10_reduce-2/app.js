const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64]

const maxGrade = grades.reduce((map, currentVal) => {
    if (currentVal > max) return currentVal;
    return max
})

const maxGrade = grades.reduce((max, currVal) => {
    return Math.max(max, currVal)
})

const minGrade = grades.reduce((min, currVal) => {
    Math.min(min, currentVal)
})

const sum = [10, 20, 30, 40, 50].reduce((sum, currVal) => {
    return sum + currVal
}, 1000)
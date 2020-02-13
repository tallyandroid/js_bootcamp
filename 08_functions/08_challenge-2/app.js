function avg(arr) {
    let total = 0
    //loop over each num
    for(let num of arr){
        total += num
    }
    //add them together
    //divide by the number of nums
    let res = total / arr.length
    return res
}
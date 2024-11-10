let nums = [1 , 2 ,3 ,4 ,5 ,6]


// function claculateSum() {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i]
//     }
//     return sum;
// }

function claculateSum() {
    var sum = 0;
    nums.forEach((prev) => {
        sum += prev
    })
    return sum;
}

console.log(claculateSum())
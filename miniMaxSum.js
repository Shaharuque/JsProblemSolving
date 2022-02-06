//Hacker-rank
function miniMaxSum(arr) {
    // Write  your code here
    let minSum=0
    let maxSum=0
    //let maxMin=[]
    arr.sort((a, b) => a - b); // For ascending sort for minimum sum
    // console.log(arr)
    for(let i=0;i<arr.length-1;i++){
        minSum+=arr[i]
    }
    // console.log(minSum)
    // maxMin.push(minSum)
    arr.sort((a, b) => b - a); // For descending sort for max sum
    // console.log(arr)
    for(let i=0;i<arr.length-1;i++){
        maxSum+=arr[i]
    }
    // console.log(maxSum)
    // maxMin.push(maxSum)
    console.log(minSum + " " + maxSum) //space seperated answer
}
const arr=[5,4,1,2,3]
miniMaxSum(arr);
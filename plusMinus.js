//(Hacker-rank) Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

function plusMinus(arr) {
    // Write your code here
    let ratioArr=[]
    let countNegative=0
    let countPositive=0
    let countZero=0
    for(let element of arr){
        if(element<0){
            countNegative++
        }
        else if(element>0){
            countPositive++
        }
        else{   //array element 0 holey
            countZero++
        }
    }

    let positive=Number((countPositive/arr.length).toFixed(6))
    // console.log(positive)
    let negative=Number((countNegative/arr.length).toFixed(6))
    let zero =Number((countZero/arr.length).toFixed(6))
    ratioArr.push(positive)
    ratioArr.push(negative)
    ratioArr.push(zero)
    console.log(ratioArr)
}
arr = [-4, 3, -9, 0, 4, 1]
plusMinus(arr)
// console.log(typeof(result[0]))
// var twoPlacedFloat = parseFloat((10.02745).toFixed(5));
// console.log(twoPlacedFloat)
// result.push(twoPlacedFloat)
// console.log(result)
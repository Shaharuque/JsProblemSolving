//Reverse a number
//I take the approach to make number into string then reverse it then the reversed string converted to integer and return it
const num = 1002;

function reverseGivenInteger(num) {
    
    let convertNum=num.toString() //converter int number into string
    // console.log(convertNum)
    let reverseNumber=''   //empty string
    for(let element of convertNum){
        reverseNumber=element+reverseNumber;
    }
    // console.log(reverseNumber)
    let reversed=parseInt(reverseNumber)  //convert string into int number
    return reversed
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)
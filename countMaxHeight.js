//Hacker Rank
//Count max heights candles



function birthdayCakeCandles(candles) {
    // Write your code here
    let maxHeight=candles[0]
    let count=0;
    for(let element of candles){
        if(maxHeight<element){
            maxHeight=element
        }
    }
    // console.log(maxHeight)
    for(let element of candles){
        if(element==maxHeight){
            count++
        }
    }
    return count
    
}
let candles=[3, 2, 1 ,3]
console.log(birthdayCakeCandles(candles))
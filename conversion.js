
/*function feetToinch(feet){
    let calculatedInch=feet*12;
    return calculatedInch;
}

console.log(feetToinch(2))*/

/*function centiTometer(cent){
    let meter=cent/1000;
    return meter;
}

console.log(centiTometer(500))*/

/*function paperRequirements(first,second,third){
    firstBook=100;
    secondBook=200;
    thirdBook=300;
    return (first*firstBook+ second*secondBook+ third*thirdBook)
}

const total_page=paperRequirements(10,20,30);
console.log(`total pages needed to print books ${total_page}`)*/

//Max string length return
/*function bestFriend(bestfriends){
    let maxLength=bestfriends[0]
    for(friend of bestfriends){
        if(maxLength.length<friend.length){
            maxLength=friend
        }
    }
    return maxLength
}

const arr=["shaik", "shakib", "choity","mir Zafar"]
console.log(bestFriend(arr))*/


//loop will stop works whenever gets a negative number and returns all positive number before stoping
function findingPositive(numbers){
    const positiveNumber=[]
    for(let number of numbers){
        if(number>=0){
            positiveNumber.push(number)
        }
        else{       //if gets negative number loop breaks
            break;
        }
    }
    return positiveNumber
}





const numbers=[5,6,8,-1,-2,1,0,3,4,-5]
const positiveNumbers=findingPositive(numbers)
console.log(positiveNumbers)
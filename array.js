// Remove duplicate items from an array

/*function duplicateFind(arr){
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        if(newArr.indexOf(arr[i])==-1){       //array tey desired element jodi na thakey tahley -1 return korey
           newArr.push(arr[i])
        }  
    }
    console.log(newArr)
}

let arr=[1,2,3,4,4,5,7,8,8,8,8,8,8]
duplicateFind(arr)*/

//After removing duplicates sort the array and return 2nd large element
function duplicateFind(arr){
    let newArr=[];

    //for of loops
    for(let element of arr){
        // console.log(element)
        if(newArr.indexOf(element)==-1){
            newArr.push(element);
        }
    }
    return newArr
}

function secondLarge(unique){
    unique.sort(function(a, b){return a - b});
    // console.log("sorted array in ascending order:",unique)
    let secondlargest=unique[unique.length-2];
    return [unique,secondlargest]
}

arr=[4,4,4,3]
let uniqueArray=duplicateFind(arr)
console.log("After removing duplicates:",uniqueArray)

let [sortedArray,Second]=secondLarge(uniqueArray) //Array Destructuring
console.log("sorted array in ascending order:",sortedArray)
console.log("second largest amoung array element:",Second)

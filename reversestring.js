var story="hi i am watermelon"

function reverse(story){
    let reverseString='';
    for(let element of story){
        reverseString=element+reverseString;
    }
    return reverseString
}

console.log(reverse(story))

//counting vowels in a string

/*let str="shaik Amin HSAIK"
// console.log(str[0])

function vowelCount(str){
    let count=0;
    for(let element of str){
        if(element=='a'|| element=='e'||element=='i'|| element=='o'|| element=='u'||element=='A'|| element=='E'||element=='I'|| element=='O'|| element=='U'){
            count++
        }
    }
 return count
}

console.log(vowelCount(str))*/

//Another way
let str="shaik Amin HSAIK"

function vowelCount(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        let element=str[i].toLowerCase()
        // console.log(element)
        if(element=='a'|| element=='e'||element=='i'|| element=='o'|| element=='u'){
            count++
        }
    }
 return count
}

console.log(vowelCount(str))
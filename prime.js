

function prime(num){
    let isPrime=true
    if(num==0 || num==1){
        console.log("Neither prime not composite")
    }
    else{
        for(let i=2;i<num;i++){
            if(num%i==0){
                isPrime=false   
                break;            
            }
        }
        return isPrime
    }  
}

let result=prime(10)
//console.log(result)
if(result==true){
    console.log("Number is prime");
}
else{
    console.log("Number not prime")
}
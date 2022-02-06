

function price(quantity){
    //error handing
    if(typeof(quantity)!='number'){
        return "Not valid input"
    }
    else if(quantity<0){
        return "Please Enter quantity greater then zero"
    }
    else if(quantity>20){
        return "put less then or equal to 20kg"
    }

    if(quantity<=2){
        let totalPrice=25*quantity;
        return totalPrice;
    }
    else{
        let totalPrice=30*quantity
        return totalPrice;
    }
}
console.log(price(20))
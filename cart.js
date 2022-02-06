


function cart(phones){
    let total=0;
    for(let phone of phones){
        total=total+(phone.price*phone.quantity)
    }
    return total
}


const phones=[
    {name:"walton",price:4000,camera:5 ,quantity:2},
    {name:"Oppo",price:6000,camera:10 ,quantity:4},
    {name:"walton-x",price:3000,camera:50 ,quantity:6},
    {name:"Iphone",price:40000,camera:15 ,quantity:2},
    {name:"One-plus",price:2000,camera:20 ,quantity:8},
    {name:"walton-prime",price:40,camera:10,quantity:7}
    ]

console.log(cart(phones))
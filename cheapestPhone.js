//Find the cheapest phone from an array of phones objects
const phones=[
{name:"walton",price:4000,camera:5 },
{name:"Oppo",price:6000,camera:10 },
{name:"walton-x",price:3000,camera:50 },
{name:"Iphone",price:40000,camera:15 },
{name:"One-plus",price:2000,camera:20 },
{name:"walton-prime",price:40,camera:10 }
]

cheapestPhone=phones[0]
// console.log(cheapestPrice)
 for(let phone of phones){
    if(phone.price<cheapestPhone.price && phone.camera<cheapestPhone.camera){
        cheapestPhone=phone
    }
 }
 console.log(cheapestPhone)
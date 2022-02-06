

function animalCount(miles){
    let firstAnimals=10;
    let secondAnimals=50;
    let thirdAnimals=100;

    if(miles<=10){
        let animals=firstAnimals*miles;
        return animals
    }
    else if(miles<=20){
        let first10miles=10*firstAnimals;
        let restMiles=miles-10;
        let restMilesAnimals=restMiles*secondAnimals;
        return (first10miles+restMilesAnimals)
    }
    else{
        let first10miles=10*firstAnimals;
        let second10Miles=10*secondAnimals;
        let restMiles=miles-20;
        let restMilesAnimals=restMiles*thirdAnimals;
        return (first10miles+second10Miles+restMilesAnimals)
    }
}
console.log(animalCount(21))
"use strict";
class Dog {
}
class Cat {
}
class Rat {
}
// newtype=union of all 3
// const obj:{name:string}={}
function filterDogs(arr) {
    let filteredArr = arr.filter((animal) => {
        if (animal instanceof Dog)
            return animal;
    });
    return filteredArr;
}
const animals = [new Dog(), new Cat(), new Rat(), new Dog(), new Cat()];
console.log(filterDogs(animals));

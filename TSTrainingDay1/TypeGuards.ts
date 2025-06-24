class Dog {
// name:string
}
class Cat {
// name:string

}
class Rat {
// name:string

}

type newType = Dog | Cat | Rat ;
// newtype=union of all 3



// const obj:{name:string}={}


function filterDogs(arr: newType[]): Dog[]{
let filteredArr = arr.filter((animal) => {
    if(animal instanceof Dog)
        return animal
})
return filteredArr
}

const animals: newType[] = [new Dog(), new Cat(), new Rat(), new Dog(), new Cat()]

console.log(filterDogs(animals))
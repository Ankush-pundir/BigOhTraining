interface Person {
    name: String,
    age: number
}

let personObject: Person = {
    name : "Abc",
    age : 20
}

function personDetails(obj: Person): string {
    return `Name: ${obj.name}, Age: ${obj.age}`
}




console.log(personDetails(personObject))
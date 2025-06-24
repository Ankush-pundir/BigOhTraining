"use strict";
let personObject = {
    name: "Abc",
    age: 20
};
function personDetails(obj) {
    return `Name: ${obj.name}, Age: ${obj.age}`;
}
console.log(personDetails(personObject));

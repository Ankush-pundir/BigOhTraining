"use strict";
const user = {
    firstName: "Tony",
    lastName: "Stark",
    age: 54
};
function transformKeys(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
console.log(transformKeys(user, { firstName: "first", lastName: "last" }));

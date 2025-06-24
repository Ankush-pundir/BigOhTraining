"use strict";
function loggerWrapper(fn) {
    return ((a, b) => {
        console.log(`Calling function ${fn.name} with arguments: ${a}, ${b}`);
        return fn(a, b);
    });
}
function add(a, b) {
    return a + b;
}
const loggedAdd = loggerWrapper(add);
const value = loggedAdd(3, 5);
console.log(value);

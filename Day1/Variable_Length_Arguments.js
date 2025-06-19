function addition(...args) {  // using spread operator handle variable length arguments
    let sum = 0;
    for (const arg of args) {   // using for of loop gets each arguments and add it to sum
        sum += arg     
    }
    return sum;  //  after getting sum return the sum
}


function multiplication(...args){
    let res = 1;
    for (const arg of args) {
        res *= arg   // get argument one by one and find the product
    }
    return res;   // after getting product of arguments return 
}


console.log(multiplication(1,2,3,4))
console.log(addition(1,2,3,4))
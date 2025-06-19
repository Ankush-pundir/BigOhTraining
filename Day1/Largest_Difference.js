function largestDifference (arr) {
    let smallNum = Number.MAX_SAFE_INTEGER; // assign largest integer value to smallNum
    let lrgstNum = Number.MIN_SAFE_INTEGER; // assign smallest integer value to LrgstNum

   for (const num of arr) {
    if(num > lrgstNum) {
        lrgstNum = num;    // finding the largest element of arr
    } 
    if (num < smallNum) {
        smallNum = num;   // finding the smallest element of arr
    }
   }
   return lrgstNum - smallNum;   // and then get the largest difference and returning it
}


// example usage

console.log(largestDifference([10, 3, 5, 1, 9]))
console.log(largestDifference([-10, 0, 10, 20]))


function doubleElement(arr: number[]): number[] {
    return arr.map((num): number => {
    return num*2
 })
}

console.log(doubleElement([1,2,3,4]))
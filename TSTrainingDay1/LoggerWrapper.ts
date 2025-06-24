function loggerWrapper(fn: Function): Function {
    return ((a: number, b:number): number => {
      console.log(`Calling function ${fn.name} with arguments: ${a}, ${b}`);
      return fn(a,b);
    });
  }
  


function add(a: number, b: number): number {
    return a+b
}
  const loggedAdd = loggerWrapper(add);
  
  const value = loggedAdd(3, 5); 
  console.log(value);          
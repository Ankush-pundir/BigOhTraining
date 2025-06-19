function calculator(func, ...args) {
  if (typeof func !== "function") {  // check first argument is function or not
    throw new Error("first argument must be a function");
  }

  const expectedArgs = func.length; // get the function arguments
  const receivedArgs = args.length; // get the arguments passed

  if (receivedArgs !== expectedArgs) { // if they are not equal then throw an error
    throw new Error(
      `functions works with ${expectedArgs} arguments but got  ${receivedArgs}.`
    );
  }

  try {
    return func(...args); // and if everything right then call the function with the arguments
  } catch (error) {
    throw new Error("Error :: " + error.message);
  }
}

const areaOfRectangle = (l,b) => l*b;
const areaOfCircle = (r) => 3.14 * r * r
const celsiusToFahrenheit = (tempInCelcius) => (tempInCelcius * 9)/5 + 32
const fahrenheitToCelsius = (tempInFah) => (((tempInFah-32)*5)/9)
const add = (a,b) => a+b


console.log(calculator(areaOfCircle, 5))

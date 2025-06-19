

// function to validate inputs 
// if allowNegative and allowZero is not passed then they are bydefault true
function validateInputs(args, expectedCount, allowNegative = true, allowZero = true) {
    if (args.length !== expectedCount) {    // if func expected args not matched to arguments passed in function
        return `Error: Expected ${expectedCount} arguments, but got ${args.length}.`;
    }

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];     
        // check weather is undefined or null
        if (arg === undefined || arg === null) {
            return `Error: Argument ${i + 1} is uninitialized or undefined.`;
        }

        // validate it a number
        if (typeof arg !== 'number' || isNaN(arg)) {
            return `Error: Argument ${i + 1} is not a valid number.`;
        }

        // check negatives are allowed
        if (!allowNegative && arg < 0) {
            return `Error: Argument ${i + 1} is negative, which is not allowed.`;
        }

        // checks zero are allowed
        if (!allowZero && arg === 0) {
            return `Error: Argument ${i + 1} is zero, which is not allowed.`;
        }
    }

    return 'VALID'; 
}


// add function
function add(...args) {
    const validation = validateInputs(args, 2, true, true); 
    if (validation !== 'VALID') return validation;

    return `Result: ${args[0] + args[1]}`;
}

// divide function
function divide(...args) {
    const validation = validateInputs(args, 2, true, false); 
    if (validation !== 'VALID') return validation;

    return `Result: ${args[0] / args[1]}`;
}



console.log(divide("dvdfvdfv",10,4))
console.log(add(2,4,6,8,10))

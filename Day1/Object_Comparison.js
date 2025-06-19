function assertObjectsEqual(actual, expected, testName) {
  //Do not use stringify to Compare
  const actualStr = JSON.stringify(actual); // get actualStr as json string of actual object
  const expectedStr = JSON.stringify(expected); // get expectedStr as json string of expected object

  if (actualStr === expectedStr) {
    // strict comparison of the json strings
    return `Passed: ${testName}`;
  } else {
    return `FAILED [${testName}] Expected ${expectedStr}, but got ${actualStr}`;
  }
}

// example usage
var expected = {
  foo: 6,
  bar: {
    name: "riotesh",
    address: {
      city: "Noida",
      pin: "1234",
    },
  },
};
var actual = {
  foo: 5,
  bar: 6,
  address: {
    city: "Noida",
    pin: "1234",
  },
};

console.log(
  assertObjectsEqual(actual, expected, "detects that two objects are equal")
);

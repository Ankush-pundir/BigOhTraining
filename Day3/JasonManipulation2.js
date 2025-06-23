function flattenObject(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    const value = obj[key];

    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      flattenObject(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  }
  return result;
}

const input = {
  keyOne: "value One",
  keyTwo: "value Two",
  keyThree: "value Three",
  keyFour: {
    keyA: true,
    keyB: false,
    keyC: {
      keyCOne: "key C one value",
      keyCTwo: "key C two value",
      keyCThree: 1234,
    },
  },
};

const flattened = flattenObject(input);
console.log(flattened);

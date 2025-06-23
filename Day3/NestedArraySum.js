function sumNestedArray(arr) {
  if (arr.length === 0) return 0;

  const [curr, ...arg] = arr;

  if (Array.isArray(curr)) {
    return sumNestedArray(curr) + sumNestedArray(arg);
  } else {
    return curr + sumNestedArray(arg);
  }
}

console.log(sumNestedArray([1, [2, [3, 4]], 5]));

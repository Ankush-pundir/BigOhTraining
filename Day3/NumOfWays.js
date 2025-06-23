function countWays(arr, target) {
  let count = 0;

  function backtrack(index, currentSum) {
    if (index === arr.length) {
      if (currentSum === target) {
        count++;
      }
      return;
    }

    backtrack(index + 1, currentSum + arr[index]);
    backtrack(index + 1, currentSum - arr[index]);
  }

  backtrack(0, 0);
  return count;
}

const arr = [-1, 9, 8, -3, 4];
const target = 5;

console.log(countWays(arr, target));

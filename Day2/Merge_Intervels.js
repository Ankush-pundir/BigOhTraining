function mergeIntervals(intervals) {
  if (intervals.length <= 1) return intervals;

  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const last = merged[merged.length - 1];
    const current = intervals[i];

    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      merged.push(current);
    }
  }

  return merged;
}

console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

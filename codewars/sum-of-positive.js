// description:

// You get an array of numbers, return the sum of all of the positives ones.

// solution:

function positiveSum(arr) {
    return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
  }
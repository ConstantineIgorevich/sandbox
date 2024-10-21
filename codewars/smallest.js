// description:

// Given an array of integers your solution should find the smallest integer. 

// solution:

function findSmallestInt(arr) {
    return arr.reduce((min, el) => el < min ? el : min, arr[0])
  }
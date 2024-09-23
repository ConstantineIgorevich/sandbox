// description:

// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// If the array is invalid (empty, or contains negative integers or integers with more than 1 digit), return nil (or your language's equivalent).

// solution:

function upArray(arr){
    if (!arr.length) {
      return null;
    }
    let discharge = 1;
    const result = [...arr];
    for (let i = result.length - 1; i >= 0; i--){
      if (result[i] < 0 ||  Number.isNaN(result[i]) || result[i] > 9) {
        return null;
      }
      result[i] = result[i] + discharge;
      if (result[i] === 10) {
        result[i] = 0;
        discharge = 1;
      } else {
        discharge = 0;
      }
    }
    if (discharge === 1) {
      result.unshift(1);
    }
    return result;
  }
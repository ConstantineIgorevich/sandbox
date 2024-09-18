// description:

// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

// solution:

function countPositivesSumNegatives(input) {
    if (!Array.isArray(input)) {
      return [];
    } else if (input.length === 0) {
      return [];
    }
    return input.reduce((acc, currentInteger) => {
      if(currentInteger === 0) {
        return acc;
      }
      if(currentInteger > 0) {
        acc[0] += 1;
      } else {
        acc[1] += currentInteger;
      }
      return acc;
    }, [0, 0])
  }
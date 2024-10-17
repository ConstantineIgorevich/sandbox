// description:

// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The string can contain any char.

// solution:

function XO(str) {
    const arr = str.split('').reduce((acc, el) => {
      return el.toUpperCase() === 'X' ?  [++acc[0], acc[1]] : el.toUpperCase() === 'O' ?  [acc[0], ++acc[1]] :  acc
    }, [0, 0]);
  return arr[0] === arr[1];
}
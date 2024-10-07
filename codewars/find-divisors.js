// description:

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with 
// all of the integer's divisors(except for 1 and the number itself), from smallest to largest. 
// If the number is prime return the string '(integer) is prime' 

// solution:

function divisors(integer) {
    const result = [];
    for(let i = 2; i < integer; i++) {
      if (!(integer % i)) {
        result.push(i);
      }
    }
    return result.length ? result : `${integer} is prime`;
  };
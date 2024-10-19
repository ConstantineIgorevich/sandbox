// description:

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// solution:

function solution(number) {
    if (number < 0) {
      return 0;
    }
  
    let sum = 0;
  
    for (let i = 3; i < number; i++) {
      if (!(i % 3) || !(i % 5)) {
        sum += i;
      }
    }
    
    return sum;
  }
// description:

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.  

// solution:

function findNextSquare(sq) {
    const number = Math.sqrt(sq);
    if (Number.isInteger(number)){
      return (number + 1)**2;
    }
    return -1;
  }
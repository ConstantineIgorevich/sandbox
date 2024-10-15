// description:

// Given an integral number, determine if it's a square number

// solution:

var isSquare = function(n){
    return (n >= 0) ? Number.isInteger(Math.sqrt(n)) : false;
  }
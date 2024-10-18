// description:

// Implement a function to calculate the distance between two points in n-dimensional space. 
// The two points will be passed to your function as arrays of the same length.

// solution:

function euclideanDistance(point1, point2){
    let sum = 0;
    for (let i = 0; i < point1.length; i++) {
      sum += ((point1[i] - point2[i]) ** 2)
    }
    return +Math.sqrt(sum).toFixed(2)
  }


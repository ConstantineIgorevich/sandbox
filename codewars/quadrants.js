// description:

// Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). 
// x and y are non-zero integers, therefore the given point never lies on the axes.

// solution:

function quadrant(x, y) {
    if(x === 0 || y === 0) return 0;
    if (x > 0) return y > 0 ? 1 : 4;
    else return y > 0 ? 2 : 3;
  } 
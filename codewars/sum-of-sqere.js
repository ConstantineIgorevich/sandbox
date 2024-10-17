// description:

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// solution:

function squareSum(numbers){
    return numbers.reduce((sum, el)=> sum+=el**2,0);
    }
// description:

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// solution:

function highAndLow(numbers){
    const max = Math.max(...numbers.split(' '));
    const min = Math.min(...numbers.split(' '));
    return `${max} ${min}`;
  }
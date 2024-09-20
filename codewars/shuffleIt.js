// description:

// Create a function shuffleIt. The function accepts two or more parameters. The first parameter arr is an array of numbers, followed by an arbitrary number of numeric arrays. Each numeric array contains two numbers, which are indices for elements in arr (the numbers will always be within bounds). For every such array, swap the elements. Try to use all your new skills: arrow functions, the spread operator, destructuring, and rest parameters.

// solution:

function shuffleIt(...args){
    if(args.length === 1) {
      return args[0];
    }
     for (let i = 1; i < args.length; i++) {
       let temp = args[0][args[i][0]];
       args[0][args[i][0]] = args[0][args[i][1]];
       args[0][args[i][1]] = temp;
     } 
     return args[0];
   }
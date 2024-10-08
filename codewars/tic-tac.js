// description:

// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? 
// Our goal is to create a function that will check that for us!

// solution:


function isSolved(board) {
    const length = board.length;
    let isEmpty = false;
    const arr = [...board, [], [], [], [], []];
    for (let i = 0; i < arr.length; i++) {
        let isRow = true;
        let prev = arr[i][0];
      for(let j = 0; j < arr[i].length; j++) {
        if(i < length) {
            if(i === j)  arr[6].push(arr[i][j]);
            if (j === length - 1 - i) arr[arr.length - 1].push(arr[i][j]);
            arr[length + j].push(arr[i][j]);
        }
        if(!arr[i][j]) isEmpty = true;
        if(prev !== arr[i][j]) isRow = false;
        prev = arr[i][j];
      }
      if (isRow && prev) return prev;
    }
    return isEmpty ? -1 : 0;
  }
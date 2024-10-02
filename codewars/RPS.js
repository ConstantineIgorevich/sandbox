// description:

// Let's play! You have to return which player won! In case of a draw return Draw!.

// solution:

const rps = (p1, p2) => {
    switch (p1) {
      case 'rock':
        switch (p2) {
          case 'rock':
            return 'Draw!';
          case 'scissors':
            return 'Player 1 won!';
          case 'paper':
            return 'Player 2 won!';
        }
      case 'scissors':
        switch (p2) {
          case 'rock':
            return 'Player 2 won!';
          case 'scissors':
            return 'Draw!';
          case 'paper':
            return 'Player 1 won!';
        }
      case 'paper':
        switch (p2) {
          case 'rock':
            return 'Player 1 won!';
          case 'scissors':
            return 'Player 2 won!';
          case 'paper':
            return 'Draw!';
        }
    }
  };
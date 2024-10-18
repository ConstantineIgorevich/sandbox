// description:

// Your task is to return a number that represents the total number of points scored by a team from Los Angeles.

// solution:

function getLosAngelesPoints(results) {  
    const isCorrect = (team) => {
      const arr = team.split(' ');
      if (arr[0] === 'Los' && arr[1] === 'Angeles' && arr[2] && arr[2].length > 1 && arr[2][0].toLowerCase() !== arr[2][0]) {
        return true; 
      }
      return false;
    }
    return results.reduce((sum, [team, point]) =>  isCorrect(team) ? sum + +point.split(':')[0] : sum, 0);
  }
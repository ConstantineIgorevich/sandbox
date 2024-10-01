// description:

// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. 
// Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// solution:

function points(games) {
    return games.reduce((sum, el) => {
      if(+el[0] > +el[2]){
        sum += 3;
      } else if (+el[0] === +el[2]) {
        sum += 1
      }
      return sum;
    }, 0)
  }

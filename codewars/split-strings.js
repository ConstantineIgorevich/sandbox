// description:

// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// solution:

function solution(str){
    const result = [];
    if (str.length === 0) {
      return result;
    }
    let bigramm = '';
    for (let i=0; i<str.length; i++) {
      if(bigramm.length < 2) {
        bigramm += str[i];
      } else {
        result.push(bigramm);
        bigramm = str[i];
      }
    }
    if (bigramm.length === 1) {
      bigramm += '_';
    }
    result.push(bigramm);
    return result;
  }
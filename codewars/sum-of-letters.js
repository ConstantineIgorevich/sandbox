// description:

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// solution:

function wordsToMarks(string){
    return string.split('').reduce((sum, letter) => {
      return sum += letter.toUpperCase().charCodeAt(0) - 64;
    }, 0);
  }
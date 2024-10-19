// description:

// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed

// solution:

function spinWords(string){
    return string.split(' ').map( el => el.length > 4 ? el.split('').reverse().join('') : el).join(' ');
  }
// description:

// Simple, given a string of words, return the length of the shortest word(s).

// solution:

function findShort(s){
    return s.split(' ').reduce((min, el) => min ? el.length < min ? el.length : min : el.length, null)
  }
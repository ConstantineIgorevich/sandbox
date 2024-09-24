// description:

// Find the first character that repeats in a String and return that character.

// solution:

function firstDup (s) {
    for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j < s.length; j++) {
        if(s[i] === s[j]) {
          return s[i];
        }
      }
    }
  }
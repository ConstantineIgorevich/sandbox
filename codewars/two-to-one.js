// description:

// Take 2 strings s1 and s2 including only letters from a to z. 
// Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// solution:


function longest(s1, s2) {
    const unic = [];
    return (s1 + s2)
      .split('')
      .sort()
      .filter(letter => {
      if (unic.indexOf(letter) === -1) {
        unic.push(letter);
        return true;
      }
      return false;
    })
    .join('');
  }
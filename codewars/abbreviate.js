// description:

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// solution:

function abbrevName(name){
    const nameArr = name.toUpperCase().split(' ')
    return `${nameArr[0][0]}.${nameArr[1][0]}`
  }
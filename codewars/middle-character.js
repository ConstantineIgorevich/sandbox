// description:

// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// solution:

function getMiddle(s)
{ 
  return s.length % 2
    ? s[Math.floor(s.length / 2)]
    :`${s[Math.floor(s.length / 2) - 1]}${s[Math.floor(s.length / 2)]}`  
}
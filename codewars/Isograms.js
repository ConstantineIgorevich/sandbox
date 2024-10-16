// description:

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

// solution:

function isIsogram(str){
    for (let i = 0; i < str.length; i++){
      for (let j = i+1; j  < str.length; j ++){
         if (str[i].toUpperCase() === str[j].toUpperCase()){
           return false;
         } 
      }
    }
    return true;
  }
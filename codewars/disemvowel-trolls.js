// description:

// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// solution:

function disemvowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const result = str.split('').filter(letter => {
      for (let i = 0; i < vowels.length; i ++) {
        if(vowels[i] === letter.toLowerCase()) {
          return false;
        }
      }
      return true;
    }).join('');
    return result;
    }

console.log(disemvowel('some test string'));
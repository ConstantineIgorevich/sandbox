// description:

// https://www.codewars.com/kata/54b724efac3d5402db00065e/javascript

// solution:

decodeMorse = function(morseCode){
    const arrayOfWords = morseCode.trim().split('   ');
    return arrayOfWords.map(word => word.split(' ').map(letter => MORSE_CODE[letter]).join('')).join(' ');
  }
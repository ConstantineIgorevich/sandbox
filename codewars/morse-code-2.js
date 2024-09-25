// description:

// https://www.codewars.com/kata/54b72c16cd7f5154e9000457/javascript

// solution:

var decodeBits = function(bits){
    const trimmed = bits.replace(/0/g, ' ').trim().replace(/ /g, '0');
    const oneUnit = defineOneUnit(trimmed);
    const dot = '1'.repeat(oneUnit);
    const dash = '111'.repeat(oneUnit);
    const betweenWords = '0000000'.repeat(oneUnit);
    const betweenSymbols = '000'.repeat(oneUnit);
      return bits.replace(new RegExp(betweenWords, 'g'), '   ').replace(new RegExp(dash, 'g'), '-').replace(new RegExp(dot, 'g'), '.').replace(new RegExp(betweenSymbols, 'g'), ' ').replace(/0/g, '');
  }
  
  var decodeMorse = function(morseCode){
      const arrayOfWords = morseCode.trim().split('   ');
      return arrayOfWords.map(word => word.split(' ').map(letter => MORSE_CODE[letter]).join('')).join(' ');
  }
  
  var defineOneUnit = function(bits) {
      const bitsInSymbol = bits.split('').reduce((acc, bit) => {
          if (!acc.previous){
              acc.previous = bit;
              acc.count += 1;
          } else {
              if (acc.previous === bit) {
                  acc.count += 1;
              } else {
                  acc.array.push(acc.count);
                  acc.count = 1;
                  acc.previous = bit;
              }
          }
          return acc;
      }, {previous: false, count: 0, array: []})
      return  bitsInSymbol.array.length ? Math.min(...bitsInSymbol.array) : bitsInSymbol.count;
  }
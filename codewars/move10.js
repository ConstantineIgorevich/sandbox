// description:

// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.

// solution:

function moveTen(s){
  
    return s.split('').map(el => {
      let newIndex = el.charCodeAt() + 10;
      newIndex = newIndex > 122 ? (newIndex % 122) + 96 : newIndex;
      return String.fromCharCode(newIndex);
    
    })
      .join('');
  }
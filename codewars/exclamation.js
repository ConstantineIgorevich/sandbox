// description:

// Remove all exclamation marks from the end of sentence.

// solution:

function remove (string) {  
    let isStart = true;
    return string.split('').reverse().map(el => {
      let result = el;
      if (isStart){
        el === '!' ? result = ' ' : isStart = false;
      }
      return result;
    }).reverse().join('').trim();
  }
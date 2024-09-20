// description:

// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.

// solution:

function flickSwitch(arr){
    let bool = true
    return arr.map(el => {
      if (el === 'flick') {
        bool = !bool
      }
      return bool
    })
  }
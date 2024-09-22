// description:

// Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).

// solution:

function countSheeps(sheep) {
    return sheep.reduce((sum, el) => el ? ++sum : sum, 0)
  }
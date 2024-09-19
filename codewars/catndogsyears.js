// description:

// I have a cat and a dog which I got as kitten / puppy.

// I forget when that was, but I do know their current ages as catYears and dogYears.

// Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

// NOTES:

// Results are truncated whole numbers of "human" years
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// solution:

var ownedCatAndDog = function(catYears, dogYears) {
    let ownedCat = 0;
    let ownedDog = 0;
    let remainingCat = catYears - 15;
    if(remainingCat >= 0) {
    ownedCat++;
    if (remainingCat >= 9) {
      remainingCat -= 9;
      ownedCat++;
      while(remainingCat >= 4) {
        remainingCat -= 4;
        ownedCat++;
      }
    }
    }
    let remainingDog = dogYears - 15;
    if (remainingDog >= 0) {
    ownedDog++;
    if (remainingDog >= 9) {
      remainingDog -= 9;
      ownedDog++;
      while(remainingDog >= 5) {
        remainingDog -= 5;
        ownedDog++;
      }
    }
    }
    return [ownedCat, ownedDog];
  }
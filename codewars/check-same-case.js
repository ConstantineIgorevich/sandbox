// description:

// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0

// solution:

function sameCase(a, b) {
  if (!isLetter(a) || !isLetter(b)) {
    return -1;
  }
  if (isUpper(a) === isUpper(b)) {
    return 1;
  }
  return 0;
}

function isLetter(c) {
  return c.toLowerCase() !== c.toUpperCase();
}

function isUpper(d) {
  return d.toUpperCase() === d;
}

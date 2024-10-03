// description:

// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

// solution:

function capitalize(s,arr){
    return s.split('').map((el, i) => arr.includes(i) ? el.toUpperCase() : el).join('');
  };
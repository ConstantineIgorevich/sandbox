// description:

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// solution:

function friend(friends){
    return friends.reduce((arr, name) => name.length === 4 ? [...arr, name] : arr, []);
  }
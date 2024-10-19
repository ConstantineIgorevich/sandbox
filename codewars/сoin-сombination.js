// description:

// The function takes cents value (int) and needs to return the minimum number of coins combination of the same value.

// solution:

function coinCombo (cents) {
    const result = [0, 0, 0, 0];
    let remainder = cents;
    result[3] = Math.floor(remainder / 25);
    remainder -= 25 * result[3]; 
    result[2] = Math.floor(remainder / 10);
    remainder -= 10 * result[2];
    result[1] = Math.floor(remainder / 5);
    remainder -= 5 * result[1];
    result[0] = remainder;
      return result;
  }
// description:

// You have to write a function printer_error which given a string will return the error rate of the printer 
// as a string representing a rational whose numerator is the number of errors and the denominator the length 
// of the control string. Don't reduce this fraction to a simpler expression. 

// solution:

function printerError(s) {
    let count = 0;
    const errors = s.split('').filter(letter => letter.charCodeAt(0) < 97 || letter.charCodeAt(0) > 109);
    return `${errors.length}/${s.length}`;
  }
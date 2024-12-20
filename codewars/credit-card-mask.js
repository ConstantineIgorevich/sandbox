// description:

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. 
// However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// solution:

function maskify(cc) {
    return cc.split('')
    .reverse()
    .map((el, i) => i < 4 ? el : '#')
    .reverse()
    .join('');
  }
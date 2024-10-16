// description:

// accum("abcd") -> "A-Bb-Ccc-Dddd"

// solution:

function accum(s) {
	return s.split('').map((el, i) => {
    let str = el.toUpperCase();
    for ( let j = 0; j < i; j++) {
      str += el.toLowerCase();
    }
    str += i === s.length - 1 ? '' : '-';
    return str;
  })
  .join('');
}
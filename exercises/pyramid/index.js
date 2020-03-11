// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  // create an empty string / set vars
  let space = " ";
  let hash = "#";
  let step = "";
  let count = 1;
  if (n === 1) {
    return hash;
  } else
    while (count <= n) {
      // spaces on the sides are equal to n-count
      // number of steps outside the middle column is 2 more than count, so plus 1 on each side
      step = space
        .repeat(n - count)
        .concat("", hash.repeat(count * 2 - 1))
        .concat("", space.repeat(n - count));
      count++;
      console.log(step);
      space = " ";
      step = "";
    }
}

module.exports = pyramid;

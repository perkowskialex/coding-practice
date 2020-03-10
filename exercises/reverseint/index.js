// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // find negative or positive
  let sign = Math.sign(n);
  // to string
  n = n
    .toString()
    .split("")
    .reverse()
    .join("");
  // make sure its negative or positive
  return sign * parseInt(n);
}

module.exports = reverseInt;

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  console.log(str);
  let result = {};
  for (let char of str) {
    result[char] = result[char] + 1 || 1;
  }
  return Object.keys(result).reduce((a, b) => (result[a] > result[b] ? a : b));
}

module.exports = maxChar;

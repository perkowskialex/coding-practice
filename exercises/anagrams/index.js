// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // convert to lowercase and clean string to remove punc and spaces
  stringA = stringA
    .toLowerCase()
    .replace(/([^\w])/g, "")
    .split("")
    .sort(function(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    })
    .join("");
  stringB = stringB
    .toLowerCase()
    .replace(/([^\w])/g, "")
    .split("")
    .sort(function(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    })
    .join("");
  return stringA === stringB;
}
module.exports = anagrams;

// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // lets make it recursive
  // base case check if the str ends match, if they dont it will solve a lot of time
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  reversed = str
    .split("")
    .reverse()
    .join("");
  return str === reversed;
}

module.exports = palindrome;

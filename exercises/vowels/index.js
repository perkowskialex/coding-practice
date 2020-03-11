// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   // empty array for holding vowels
//   let vowels = ["a", "e", "i", "o", "u"];
//   let arr = [];
//   // place str to lower case and split for iteration
//   str = str.toLowerCase().split("");
//   // loop
//   for (let i = 0; i < str.length; i++) {
//     // if vowel not in array, push
//     if (vowels.includes(str[i])) {
//       arr.push(str[i]);
//       console.log(str[i]);
//     }
//   }
//   return arr.length;
// }

// second method
function vowels(str) {
  let matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

// return length of array
module.exports = vowels;

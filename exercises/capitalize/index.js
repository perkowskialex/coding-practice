// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'
function capitalize(str) {
  let words = [];
  // split string
  str = str.split(" ");
  // for loop
  // upper case 1st letter
  // join w string
  // push result into words array
  for (let i of str) words.push(i[0].toUpperCase() + i.slice(1));
  // join words into a string and return
  return words.join(" ");
}

module.exports = capitalize;

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
function steps(n) {
  // create an empty string / set vars
  let space = " ";
  let hash = "#";
  let step = "";
  let count = 1;
  // while loop that checks if n is a certain int value, then
  while (n >= count) {
    // make step using hash
    step = step.concat("", hash.repeat(count));
    step = step.concat(space.repeat(n - count));
    // console log the step
    console.log(step);
    // increment count
    count++;
    step = "";
  }
}
module.exports = steps;

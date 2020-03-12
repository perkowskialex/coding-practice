// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let result = [];
  let counter = 1;

  // start column
  let sc = 0;
  let ec = n - 1;
  // start row
  let sr = 0;
  let er = n - 1;
  // last number to print out is n^2

  for (let i = 0; i < n; i++) {
    result.push([]);
  }

  while (sc <= ec && sr <= er) {
    // top row
    for (let i = sc; i <= ec; i++) {
      result[sr][i] = counter;
      counter++;
    }
    // add one to start row value
    sr++;

    // right column;
    for (let i = sr; i <= er; i++) {
      result[i][ec] = counter;
      counter++;
    }
    // decrement column
    ec--;
    // bottom row
    for (let i = ec; i >= sr; i--) {
      result[er][i] = counter;
      counter++;
    }
    er--;
    // start column

    for (let i = er; i >= sr; i--) {
      result[i][sc] = counter;
      counter++;
    }
    sc++;
  }
  return result;
}

module.exports = matrix;

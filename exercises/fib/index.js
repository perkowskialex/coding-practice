// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// 0  1  1
// a  b  c

function fib(n) {
  let a = 0;
  let b = 1;
  let c = a + b;
  // console.log('start for loop')
  for (let i = 0; i < n - 2; i++) {
    a = b;
    //   console.log(a)
    b = c;
    //   console.log(b)
    c = a + b;
    //   console.log(c)
  }
  return c;
}

module.exports = fib;

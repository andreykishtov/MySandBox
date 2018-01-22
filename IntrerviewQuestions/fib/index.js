// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memorize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

fib = memorize(fib);

module.exports = fib;

// function fib(n, last = 0, curr = 1) {
//   if (n === 0) {
//     return last;
//   }
//   return fib(n - 1, curr, last + curr);
// }

// function fib(n) {
//   const arr = [0, 1];

//   let index = 2;

//   while (index <= n) {
//     arr.push(arr[index - 1] + arr[index - 2]);
//     index++;
//   }

//   return arr[n];
// }

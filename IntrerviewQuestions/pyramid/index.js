// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  for (let row = 0; row < n; row++) {
    let level = '';

    for (let column = 0; column < 2 * n - 1; column++) {
      const midPoint = Math.floor((2 * n - 1) / 2);
      column >= midPoint - row && column <= midPoint + row ? (level += '#') : (level += ' ');
    }
    console.log(level);
  }
}

module.exports = pyramid;

// function pyramid(n, row = 0, stair = '') {
//   if (n === row) {
//     return;
//   }

//   if (n + n - 1 === stair.length) {
//     console.log(`|${stair}|`);
//     return pyramid(n, row + 1);
//   }

//   let middle = n % 2 === 0 || n === 1 ? Math.floor(n / 2) : Math.ceil(n / 2);

//   stair.length >= middle - row && stair.length <= middle + row ? (stair += '#') : (stair += ' ');

//   pyramid(n, row, stair);
// }
// pyramid(4);

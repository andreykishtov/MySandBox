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
  Array(n)
    .fill('')
    .map((item, index, arr) => {
      let string = '';

      for (let i = 0; i <= index; i++) {
        string += '#';
      }

      for (let i = index; i < n - 1; i++) {
        string += ' ';
      }

      return string;
    })
    .forEach(item => console.log(item));
}

module.exports = steps;

// function steps(n) {
//   Array(n)
//     .fill('')
//     .map((item, index, arr) => {
//       let string = '';

//       for (let i = 0; i <= index; i++) {
//         string += '#';
//       }

//       for (let i = index; i < n - 1; i++) {
//         string += ' ';
//       }

//       return string;
//     })
//     .forEach(item => console.log(item));
// }

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((reverse, character) => character + reverse, '');
}

module.exports = reverse;

// function reverse(str) {
//   let reversed = '';
//   for (const iterator of str) {
//     reversed = iterator + reversed;
//   }
//   return reversed;
// }

// function reverse(str) {
//   let newString = '';
//   for (let index = 0; index < str.length; index++) {
//     newString += str[str.length - index - 1];
//   }
//   return newString;
// }

// function reverse(str) {
//   return str
//     .split('')
//     .map((item, index, arr) => arr[arr.length - index - 1])
//     .join('');
// }

// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

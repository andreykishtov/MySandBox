// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const counter = {};
  let maxNumber = 0;
  let letter = '';

  str.split('').forEach(element => (counter[element] = counter[element] ? counter[element]++ : 1));

  for (const key in counter) {
    if (maxNumber < counter[key]) {
      maxNumber = counter[key];
      letter = key;
    }
  }
  return letter;
}

module.exports = maxChar;

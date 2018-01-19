// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const aObject = createMap(stringA);
//   const bObject = createMap(stringB);

//   if (Object.keys(aObject).length !== Object.keys(bObject).length) {
//     return false;
//   }

//   for (const key in aObject) {
//     if (aObject[key] !== bObject[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// function createMap(str) {
//   const map = {};
//   str
//     .replace(/[^\w]/g, '')
//     .toLowerCase()
//     .split('')
//     .forEach(element => (map[element] = map[element] + 1 || 1));
//   return map;
// }

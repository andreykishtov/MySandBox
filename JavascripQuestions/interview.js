//How would you sort an ES6 Map Object?

var map = new Map();
map.set('2-1', 'foo');
map.set('0-1', 'bar');
map.set('3-1', 'baz');
var mapAsc = new Map([...map.entries()].sort());
console.log(mapAsc);

//How would you filter an Array of Objects in ES6?

var family = [
  { name: 'Jack', age: 26 },
  { name: 'Jill', age: 22 },
  { name: 'James', age: 5 },
  { name: 'Jenny', age: 2 }
];
family.filter(person => person.age > 18); //Filters the Array of Objects

var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];

computeProduct(unsortedArray); // 21000

function sortIntegers(a, b) {
  return a - b;
}

// Greatest product is either (min1 * min2 * max1 || max1 * max2 * max3)
function computeProduct(unsorted) {
  var sortedArray = unsorted.sort(sortIntegers),
    product1 = 1,
    product2 = 1,
    array_n_element = sortedArray.length - 1;

  // Get the product of three largest integers in sorted array
  for (var x = array_n_element; x > array_n_element - 3; x--) {
    product1 = product1 * sortedArray[x];
  }

  product2 = sortedArray[0] * sortedArray[1] * sortedArray[array_n_element];

  if (product1 > product2) return product1;

  return product2;
}

emoving duplicates of an array and returning an array of only unique elements
// ES6 Implementation
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

Array.from(new Set(array)); // [1, 2, 3, 5, 9, 8]

// ES5 Implementation
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

uniqueArray(array); // [1, 2, 3, 5, 9, 8]

function uniqueArray(array) {
  var hashmap = {};
  var unique = [];

  for(var i = 0; i < array.length; i++) {
    // If key returns undefined (unique), it is evaluated as false.
    if(!hashmap.hasOwnProperty(array[i])) {
      hashmap[array[i]] = 1;
      unique.push(array[i]);
    }
  }

  return unique;
}


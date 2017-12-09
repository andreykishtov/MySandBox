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

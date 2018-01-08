const smartAdd = first => second => third => first + second + third;

function smartAddEs5(first) {
  return function(second) {
    return function(third) {
      return first + second + third;
    };
  };
}

console.log(smartAdd(1)(2)(3));
console.log(smartAddEs5(1)(2)(3));

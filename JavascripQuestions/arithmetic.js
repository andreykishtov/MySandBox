// leetcode.com/problems/arithmetic-slices/description/

https: function difference(a, b) {
  return a - b;
}

var numberOfArithmeticSlices = function(A) {
  let length = A.length;
  if (length < 3) {
    return;
  }

  let result = A.filter(
    (item, index, arr) =>
      index < length - 2 && difference(item, arr[index + 1]) === difference(arr[index + 1], arr[index + 2])
  );

  return length - result.length === 2;
};

function checkPerm(A) {
  let len = A.length - 2;
  let counter = 3;
  let countPerm = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < A.length - counter + 1; j++) {
      countPerm += numberOfArithmeticSlices(A.slice(j, j + counter));
    }
    counter++;
  }
  return countPerm;
}

let x = checkPerm([-1, 1, 3, 3, 3, 2, 1, 0]);
console.log(x);

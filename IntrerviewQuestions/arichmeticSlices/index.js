// A sequence of number is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

// For example, these are arithmetic sequence:

// 1, 3, 5, 7, 9
// 7, 7, 7, 7
// 3, -1, -5, -9
// The following sequence is not arithmetic.

// 1, 1, 2, 5, 7

// A zero-indexed array A consisting of N numbers is given. A slice of that array is any pair of integers (P, Q) such that 0 <= P < Q < N.

// A slice (P, Q) of array A is called arithmetic if the sequence:
// A[P], A[p + 1], ..., A[Q - 1], A[Q] is arithmetic. In particular, this means that P + 1 < Q.

// The function should return the number of arithmetic slices in the array A.

// Example:

// A = [1, 2, 3, 4]

// return: 3, for 3 arithmetic slices in A: [1, 2, 3], [2, 3, 4] and [1, 2, 3, 4] itself.

const check = (arr, start) => {
  let diff;
  let lastDiff;
  for (let index = start; index < arr.length; index++) {
    lastDiff = diff;
    diff = Math.abs(arr[index] - arr[index + 1]);
    if (lastDiff && diff !== lastDiff) {
      return index - start;
    }
  }
};

const arithmetic = arr => {
  let result = 0;
  for (let index = 0; index < arr.length; index++) {
    const len = check(arr, index);
    if (len >= 2) {
      result += len - 1;
    }
  }
  return result;
};

// function diffrence(a,b){
//   return (a-b);
// }

// var numberOfArithmeticSlices = function(A) {
//   let length = A.length;
//   if(length < 3){
//       return;
//   }

// let result = A.filter(item,index,arr)=> (index < length - 2 && diffrence(item,arr[index+1]) === diffrence(arr[index+1],arr[index+2]))

//   return length - result.length === 2;
// };

// function checkPerm(A){
//   let len = A.length-3
//   let counter=3
//   for(let i=0;i<len;i++){
//       counter++
//    for(let j=0;j<len-counter;j++){
//       numberOfArithmeticSlices(A.slice(j,j+counter))
//    }
//   }
// }

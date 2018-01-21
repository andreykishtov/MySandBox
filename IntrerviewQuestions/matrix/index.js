// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const matArr = [];
  for (let index = 0; index < n; index++) {
    matArr.push([]);
  }

  let startNum = 1;
  let endNum = n * n;
  for (let index = 0; index < Math.floor(n / 2) + 1; index++) {
    if (startNum === endNum) {
      matArr[index][index] = endNum;
      return matArr;
    }
    startNum = addToArray(matArr, index, index, n - index - 1, n - index - 1, startNum);
  }
  return matArr;
}

function addToArray(arr, sRow, sCol, eRow, eCol, num) {
  for (let index = sCol; index < eCol; index++) {
    arr[sRow][index] = num++;
  }

  for (let index = sRow; index < eRow; index++) {
    arr[index][eCol] = num++;
  }

  for (let index = eCol; index > sCol; index--) {
    arr[eRow][index] = num++;
  }

  for (let index = eRow; index > sRow; index--) {
    arr[index][sCol] = num++;
  }

  return num;
}

module.exports = matrix;

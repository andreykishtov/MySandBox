function solution(A) {
  let biggest = 0;
  A.forEach((item, index) => {
    let counter = 0;
    for (let count = index; count <= A.length; count++) {
      counter += A[count];
      if (counter >= 0 && biggest <= count - index) {
        biggest = count - index + 1;
      }
    }
  });
  return biggest;
}

console.log(solution([-1, -1, 1, -1, 1, 0, 1, -1, -1]));

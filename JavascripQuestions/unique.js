const arr = [1, 1, 2, 2, 7, 7, 4, 3, 3];
let num = 0;
for (const iterator of arr) {
  num = num ^ iterator;
}

console.log(num);

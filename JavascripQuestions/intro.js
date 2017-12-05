// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

function centuryFromYear(year) {
  let full;
  if (year < 100) {
    return 1;
  }
  let str = '' + year;
  if (year < 1000) {
    full = year % 10;
    return full ? parseInt(str[0]) + 1 : parseInt(str[0]);
  }
  full = year % 100;
  return full ? parseInt(str[0] + str[1]) + 1 : parseInt(str[0] + str[1]);
}

function centuryFromYear(year) {
  return Math.ceil(year / 100);
}

//Given the string, check if it is a palindrome.

function checkPalindrome(inputString) {
  let arr = inputString.split('');
  let len = arr.length;
  return arr.filter((item, index) => item === arr[len - 1 - index]).length === len;
}

function checkPalindrome(inputString) {
  return (
    inputString ==
    inputString
      .split('')
      .reverse()
      .join('')
  );
}

function checkPalindrome(inputString) {
  return [...inputString].reverse().join('') === inputString;
}

// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function adjacentElementsProduct(inputArray) {
  return inputArray.reduce(
    (acc, item, index, arr) => (acc < item * arr[index + 1] ? item * arr[index + 1] : acc),
    -1000
  );
}

function adjacentElementsProduct(arr) {
  return Math.max(...arr.slice(1).map((x, i) => [x * arr[i]]));
}

// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

function makeArrayConsecutive2(statues) {
  let sortedArray = statues.sort((a, b) => a - b);
  let flag;
  return sortedArray.reduce((counter, item, index, arr) => {
    if (index > arr.length - 2) return counter;
    flag = true;
    while (flag) {
      ++item === arr[index + 1] ? (flag = false) : counter++;
    }
    return counter;
  }, 0);
}

function makeArrayConsecutive2(sequence) {
  return Math.max(...sequence) - Math.min(...sequence) + 1 - sequence.length;
}

function makeArrayConsecutive2(statues) {
  return Math.max.apply(null, statues) - Math.min.apply(null, statues) - statues.length + 1;
}

// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

function almostIncreasingSequence(sequence) {
  return (
    0 !=
    sequence.filter((item, ind, array) => {
      let indexArr = [...array];
      indexArr.splice(ind, 1);
      let counter = 0;
      let filtered = indexArr.reduce((acc, item) => {
        if (acc < item) {
          ++counter;
        }
        return item;
      }, -Infinity);
      if (counter === sequence.length - 1) {
        return true;
      }
    }).length
  );
}

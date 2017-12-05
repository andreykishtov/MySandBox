function almostIncreasingSequence(sequence) {
  let len = sequence.length;
  for (let index = 0; index < len - 1; ++index) {
    if (sequence[index] >= sequence[index + 1]) {
      let arr = [...sequence.slice(0, index), ...sequence.slice(index + 1, len)];
      if (check(arr)) {
        return true;
      }
    }
  }
  return false;
}

function check(Arr) {
  let result = true;
  Arr.reduce((acc, currentValue) => {
    if (acc >= currentValue) {
      result = false;
    }
    return currentValue;
  }, -Infinity);
  return result;
}

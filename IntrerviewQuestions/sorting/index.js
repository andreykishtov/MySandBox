// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let index = 0; index < arr.length; index++) {
    for (let j = 0; j < arr.length - 1 - index; j++) {
      if (arr[j] > arr[j + 1]) {
        const lower = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lower;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let index = 0; index < arr.length - 1; index++) {
    let minIndex = index;
    for (let j = index + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (index !== minIndex) {
      const lower = arr[index];
      arr[index] = arr[minIndex];
      arr[minIndex] = lower;
    }
  }
  return arr;
}

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort };

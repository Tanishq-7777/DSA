function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let isSorted = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let k = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = k;
        isSorted = true;
      }
      if (!isSorted) break;
    }
  }
  return arr;
}
console.log(bubbleSort([1, 4, 5, 2, 7]));

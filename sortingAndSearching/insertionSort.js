function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currElem = arr[i];
    let prev = i - 1;
    while (currElem < arr[prev] && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = currElem;
  }
  return arr;
}
console.log(insertionSort([7, 4, 9, 8, 2, 1]));

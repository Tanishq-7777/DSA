//! You can only apply binary search to a sorted array
function binarySearch(arr, num) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let middle = Math.floor((r + l) / 2);
    if (arr[middle] == num) {
      return middle;
    } else if (arr[middle] > num) {
      r = middle - 1;
    } else if (arr[middle] < num) {
      l = middle + 1;
    }
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 6, 9], 6));

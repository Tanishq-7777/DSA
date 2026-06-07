//! You can only apply binary search to a sorted array
// function binarySearch(arr, num) {
//   let l = 0;
//   let r = arr.length - 1;

//   while (l <= r) {
//     let middle = Math.floor((r + l) / 2);
//     if (arr[middle] == num) {
//       return middle;
//     } else if (arr[middle] > num) {
//       r = middle - 1;
//     } else if (arr[middle] < num) {
//       l = middle + 1;
//     }
//   }
//   return -1;
// }
// console.log(binarySearch([1, 2, 3, 6, 9], 6));
function mergeSorted(arr1, arr2) {
  let result = [];
  let x1 = 0;
  let x2 = 0;
  while (x1 < arr1.length && x2 < arr2.length) {
    if (arr1[x1] <= arr2[x2]) {
      result.push(arr1[x1]);
      x1++;
    } else {
      result.push(arr2[x2]);
      x2++;
    }
  }
  while (x1 < arr1.length) result.push(arr1[x1++]);
  while (x2 < arr2.length) result.push(arr2[x2++]);
  return result;
}
function mergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  }
  let left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  let right = mergeSort(arr.slice(Math.floor(arr.length / 2)));
  return mergeSorted(left, right);
}
console.log(mergeSort([9, 8, 7, 2, 3, 4, 5]));

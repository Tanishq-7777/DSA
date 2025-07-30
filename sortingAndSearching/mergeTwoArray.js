function mergeSorted(left, right) {
  let x1 = 0;
  let x2 = 0;
  let arr = [];
  for (let i = 0; i < left.length + right.length; i++) {
    if (left[x1] < right[x2] || x2 >= right.length) {
      arr[i] = left[x1];
      x1++;
    } else if (left[x1] > right[x2] || x1 >= left.length) {
      arr[i] = right[x2];
      x2++;
    }
  }
  return arr;
}
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  let right = mergeSort(arr.slice(Math.floor(arr.length / 2)));
  return mergeSorted(left, right);
}
console.log(mergeSort([1, 4, 7, 9, 10, 2, 6, 20, 8]));
//! Another merge function;
function whileMerge(left, right) {
  let i = 0;
  let j = 0;
  let res = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  return [...res, ...left.slice(i), ...right.slice(j)];
}

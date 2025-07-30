function removeDuplicates(arr, val) {
  let x = 0; //! this is my pointer.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
      x++;
      arr[x] = arr[i];
    }
  }
  return arr;
}
console.log(removeDuplicates([1, 5, 5, 6, 7, 8, 9, 5]));

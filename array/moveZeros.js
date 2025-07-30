let arr = [0, 1, 0, 3, 12];
let arr2 = [1, 2, 0, 7];
let x = 0;
function moveZeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      let k = arr[x];
      arr[x] = arr[i];
      arr[i] = k;
      x++;
    }
  }
  console.log(arr);
}
moveZeros(arr);

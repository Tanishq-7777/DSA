//! Sum of all odd nubers in an array.
let arr = [5, 3, 2, 0, 1];
function arrSum(num) {
  if (num == 0) {
    return arr[num] % 2 != 0 ? arr[0] : 0;
  } else if (arr[num] % 2 != 0) {
    return arr[num] + arrSum(num - 1);
  } else {
    return arrSum(num - 1);
  }
}
console.log(arrSum(arr.length - 1));

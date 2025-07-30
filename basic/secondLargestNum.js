let arr = [1, 2, 4, 5, 6, 2, 77, 57, 69, 3, 7];
function secondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest; //1,6
      largest = arr[i]; //2,77
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}
console.log(secondLargest(arr));

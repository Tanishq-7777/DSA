// let arr = [5, 78, 66, 45, 99, 2, 21, -4, 6, 4, 7];
// function heapifyDown(arr, i, n) {
//   let left = i * 2 + 1;
//   let right = i * 2 + 2;
//   let max = i;
//   if (left < n && arr[max] < arr[left]) {
//     max = left;
//   }
//   if (right < n && arr[max] < arr[right]) {
//     max = right;
//   }
//   if (max != i) {
//     let temp = arr[max];
//     arr[max] = arr[i];
//     arr[i] = temp;
//     heapifyDown(arr, max, n);
//   }
// }
// function heapSort(arr) {
//   let n = arr.length;
//   //create a Max Heap.
//   for (let i = Math.floor(n / 2); i >= 0; i--) {
//     heapifyDown(arr, i, n);
//   }
//   //sorting -> replace 1st with last Elem
//   for (let i = n - 1; i > 0; i--) {
//     [arr[i], arr[0]] = [arr[0], arr[i]];
//     heapifyDown(arr, 0, i);
//   }
//   console.log(arr);
// }
// heapSort(arr);
//*Heap Sort for decending order;
let arr = [-10, 10, 100, 131, 67];
function heapifyUp(arr, i, n) {
  let smallest = i;
  while (true) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < n && arr[smallest] > arr[left]) {
      smallest = left;
    }
    if (right < n && arr[smallest] > arr[right]) {
      smallest = right;
    }
    if (smallest != i) {
      [arr[smallest], arr[i]] = [arr[i], arr[smallest]];
      i = smallest;
    } else {
      break;
    }
  }
}
function heapifySort(arr) {
  let n = arr.length;
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    heapifyUp(arr, i, n);
  }
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyUp(arr, 0, i);
  }
  console.log(arr);
}
heapifySort(arr);

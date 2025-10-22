function slide(arr, k) {
  let result = [];
  for (let i = 0; i <= arr.length - k; i++) {
    let j = 0;
    for (j = i; j < k + i; j++) {
      if (arr[j] < 0) {
        break;
      }
    }
    if (j < k + i) {
      result.push(-1);
    } else {
      result.push(0);
    }
  }
  return result;
}
console.log(slide([-18, -11, 2, 4, 6, -2], 3)); //output --> [-1,-1,0,-1]

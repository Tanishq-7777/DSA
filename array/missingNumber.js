function missingNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    let x = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == i) {
        x++;
      }
    }
    if (x == 0) {
      console.log(i);
      break;
    }
  }
}
missingNumber([3, 0, 2, 1, 5]);

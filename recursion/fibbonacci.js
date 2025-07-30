function fibbonacci(num) {
  if (num == 0 || num == 1) {
    return num;
  }
  return fibbonacci(num - 1) + fibbonacci(num - 2);
}
console.log(fibbonacci(6));

function powerTwo(num) {
  if (num == 1) {
    return true;
  } else if (num < 1 && num > 0) {
    return false;
  }
  return powerTwo(num / 2);
}
console.log(powerTwo(1));

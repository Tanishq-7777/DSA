function nToOne(num) {
  if (num == 10) {
    console.log(num);
    return;
  }
  console.log(num);
  num++;
  nToOne(num);
}
nToOne(1);

let kmp = [0];
let i = 0;
let j = 1;
str = "adcadde";
let arr = [0];
while (j < str.length) {
  if (str[i] == str[j]) {
    i++;
    arr[j] = i;
    j++;
  } else {
    if (i == 0) {
      arr[j] = 0;
      j++;
    } else {
      i = arr[i - 1];
    }
  }
}
console.log(arr);

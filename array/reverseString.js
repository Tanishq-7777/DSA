var reverseString = function (s) {
  let x;
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    x = s.length - 1 - i;
    let k = s[x];
    s[x] = s[i];
    s[i] = k;
  }
  return s;
};
console.log(reverseString(["h", "e", "l", "l", "o"]));

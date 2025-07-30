function reverseString(s, k) {
  s = s.split("");

  for (let i = 0; i < s.length; i += 2 * k) {
    console.log("hey");
    for (let j = 0; j < Math.floor(k / 2); j++) {
      let temp = s[i];
      s[i] = s[k + i - j - 1];
      s[k + i - j - 1] = temp;
    }
  }
  console.log(s);
}
reverseString("abcdefgh", 2);

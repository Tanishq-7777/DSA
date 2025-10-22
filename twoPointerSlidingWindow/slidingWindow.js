var lengthOfLongestSubstring = function (s) {
  let map = {};
  let i = 0;
  let j = 0;
  let max = 0;
  while (j < s.length) {
    let wS = j - i + 1;

    if (!map[s[j]]) {
      map[s[j]] = j;
      j++;
      max = Math.max(max, wS);
    } else {
      if (map[s[j]] >= i) {
        i = map[s[j]] + 1;
        map[s[j]] = j;
        wS = j - i + 1;

        max = Math.max(max, wS);
        j++;
      } else {
        map[s[j]] = j;
        wS = j - i + 1;
        max = Math.max(max, wS);
        j++;
      }
    }
    console.log(max);
  }
  return max;
};
console.log(lengthOfLongestSubstring("abcabcbb"));

let str1 = "anagram";
let str2 = "nagaram";
let map = {};
function anagram(s1, t) {
  for (let i = 0; i < s1.length; i++) {
    if (!map[s1[i]]) {
      map[s1[i]] = 1;
    } else {
      map[s1[i]]++;
    }
  }
  console.log(map);
  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]] | (map[t[i]] < 0)) {
      return false;
    } else if (map[t[i]]) {
      map[t[i]]--;
    }
  }
  return true;
}
console.log(anagram(str1, str2));

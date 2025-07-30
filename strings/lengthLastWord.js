// let str = "hey";
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }
let s = "tannishq";
s = s.split("");
let myMap = {};
for (let i = 0; i < s.length; i++) {
  if (!myMap[s[i]]) {
    myMap[s[i]] = 1;
  } else {
    myMap[s[i]]++;
  }
}
console.log(myMap);

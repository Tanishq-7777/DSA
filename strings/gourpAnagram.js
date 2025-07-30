function groupAnagram(strs) {
  let myObj = {};
  for (let i = 0; i < strs.length; i++) {
    if (!myObj[strs[i].split("").sort().join("")]) {
      myObj[strs[i].split("").sort().join("")] = [strs[i]];
    } else {
      myObj[strs[i].split("").sort().join("")].push(strs[i]);
    }
  }
  console.log(Object.values(myObj));
}
groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]);

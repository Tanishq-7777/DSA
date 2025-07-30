function Node(val) {
  this.val = val;
  this.next = null;
}
let head = new Node(1);
let n2 = new Node(2);
let n3 = new Node(1);
head.next = n2;
n2.next = n3;
function listToArray(head) {
  let curr = head;
  let arr = [];
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }
  return arr;
}
let arr = listToArray(head);
function palindrome(arr) {
  let x = arr.length - 1;
  let x1 = 0;
  let middle = Math.floor(arr.length / 2);
  for (let i = 0; i <= middle; i++) {
    if (arr[x] !== arr[x1]) return false;
    x--;
    x1++;
  }
  return true;
}
console.log(palindrome(arr));

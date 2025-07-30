function Node(val) {
  this.val = val;
  this.next = null;
}
// function MyList() {
//   this.head = null;
//   this.size = 0;
// }
// MyList.prototype.add = function (val) {
//   let curr = new Node(val);
//   let curr2 = this.head;
//   if (this.head == null) {
//     this.head = curr;
//     this.size++;
//   } else {
//     while (curr2.next) {
//       curr2 = curr2.next;
//     }
//     curr2.next = curr;
//     this.size++;
//   }
// };
// let newList = new MyList();
// newList.add(1);
// newList.add(4);
// newList.add(2);
// newList.add(6);
// newList.add(5);
// newList.add(4);
// MyList.prototype.seeNode = function () {
//   let curr = this.head;
//   while (curr) {
//     console.log(curr);
//     curr = curr.next;
//   }
// };
// MyList.prototype.removeVal = function (target) {
//   let curr = this.head;
//   let prev = this.head;
//   while (curr) {
//     if (curr == target) {
//       prev.next = prev.next.next;
//     } else {
//       let temp = curr;
//       curr = curr.next;
//       prev = temp;
//     }
//   }
// };
// console.log("New Node");
// newList.removeVal(6);
// newList.seeNode();

//! creting a function to nderstand sets and check if two linked list have same path.
let headA = new Node(1);
let a1 = new Node(2);
let a2 = new Node(3);
let headB = new Node(7);
let b1 = new Node(8);
let c1 = new Node(12);
let c2 = new Node(15);
let c3 = new Node(12);
headA.next = a1;
a1.next = a2;
a2.next = c1;
headB.next = b1;
b1.next = c1;
c1.next = c2;
c2.next = c3;
function checkCommonPath(headA, headB) {
  let curr = headB;
  let curr2 = headA;
  let mySet = new Set();
  while (curr) {
    mySet.add(curr);
    curr = curr.next;
  }
  while (curr2) {
    if (mySet.has(curr2)) {
      return curr2;
    }
    curr2 = curr2.next;
  }
  return null;
}
console.log(checkCommonPath(headA, headB));

function MyList() {
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

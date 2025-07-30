/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let e1 = l1;
  let e2 = l2;
  let myResult = new ListNode();
  let curr = myResult;
  let carry = 0;
  while (e1 || e2 || carry) {
    let sum = (!e1 ? 0 : e1.val) + (!e2 ? 0 : e2.val) + carry;
    let digit = Math.floor(sum % 10);
    carry = Math.floor(sum / 10);

    let newNode = new ListNode(digit);
    curr.next = newNode;
    curr = curr.next;
    e1 = e1 && e1.next;
    e2 = e2 && e2.next;
  }
  return myResult.next;
};

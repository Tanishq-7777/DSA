/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next) return head;
  let slow = head;
  let fast = head;
  let curr = head;
  let length = 0;
  while (curr) {
    curr = curr.next;
    length++;
  }
  let newK = k % length;
  if (newK == 0) return head;
  for (let i = 0; i < newK; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  let newHead = slow.next;
  fast.next = head;
  slow.next = null;
  return newHead;
};

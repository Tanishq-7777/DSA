var getIntersectionNode = function (headA, headB) {
  let b1Set = new Set();
  let curr = headB;
  while (curr) {
    b1Set.add(curr);
    curr = curr.next;
  }
  let curr2 = headA;
  while (curr2) {
    if (b1Set.has(curr2)) {
      return curr2;
    }
    curr2 = curr2.next;
  }
  return null;
};

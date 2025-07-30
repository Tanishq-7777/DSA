var removeNthFromEnd = function (head, n) {
  // //find prev and use this magical statement prev.next = prev.next.next;
  // let sentinal = new ListNode();
  // sentinal.next = head;
  // //find the length of the node;
  // let length = 0;
  // while(head){
  //     head = head.next;
  //     length++;
  // }
  // //find till where you want to run loop to find prev elem.
  // let prevFinder = length - n;
  // let prev = sentinal;
  // for(let i =0; i< prevFinder; i++){
  //     prev = prev.next;
  // }
  // prev.next = prev.next.next;
  // return sentinal.next;

  let sentinal = new ListNode();
  sentinal.next = head;
  let first = sentinal;
  let second = head;
  for (let i = 0; i < n; i++) {
    second = second.next;
  }
  while (second) {
    second = second.next;
    first = first.next;
  }
  first.next = first.next.next;
  return sentinal.next;
};

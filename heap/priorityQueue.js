class MaxPriorityQueue {
  constructor() {
    this.heap = [];
  }
  enqueue(val, priority) {
    this.heap.push({ val, priority });
    this.heapifyUp();
  }
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (this.heap[index].priority > this.heap[parent].priority) {
        [this.heap[index], this.heap[parent]] = [
          this.heap[parent],
          this.heap[index],
        ];
        index = parent;
      } else {
        break;
      }
    }
  }
  dequeue() {
    let max = this.heap[0];
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    this.heap.pop();
    this.heapifyDown();
    return max;
  }
  heapifyDown() {
    let index = 0;
    while (true) {
      let largest = index;
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      if (
        left < this.heap.length &&
        this.heap[largest].priority < this.heap[left].priority
      ) {
        largest = left;
      }
      if (
        right < this.heap.length &&
        this.heap[largest].priority < this.heap[right].priority
      ) {
        largest = right;
      }
      if (largest != index) {
        [this.heap[largest], this.heap[index]] = [
          this.heap[index],
          this.heap[largest],
        ];
        index = largest;
      } else {
        break;
      }
    }
  }
  front() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.heap.length == 0;
  }
}
let pQ = new MaxPriorityQueue();
pQ.enqueue("Accedent", 5);
pQ.enqueue("fever", 2);
pQ.enqueue("HeartAttack", 10);
console.log(pQ);
console.log(pQ.dequeue());
console.log(pQ.dequeue());
console.log(pQ.dequeue());

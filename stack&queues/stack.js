let stack = [];
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);
stack.push(10);
stack.push(20);
stack.push(30);
//! to see peak element or top element
console.log(stack[stack.length - 1]);

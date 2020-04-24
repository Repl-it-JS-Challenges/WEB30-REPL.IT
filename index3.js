class Stack {
  constructor() {
    this.storage = [];
  }

  add(item) {
    this.storage.push(item);
  }

  remove(item) {
    this.storage.pop(item);
  }

  numOfItems() {
    return this.storage.length === 0 ? 'There are no items in your stack' : this.storage.length;
  }
}
const myStack = new Stack();
console.log(myStack.numOfItems()); // <--- "There are no items in your Stack."
myStack.add('first');
myStack.add('second');
myStack.add('third');
console.log(myStack.numOfItems()); // <--- 3
console.log(myStack.storage); // <--- [ 'first', 'second', 'third' ]
myStack.remove();
console.log(myStack.storage); // <--- [ 'first', 'second' ]
myStack.remove();
console.log(myStack.storage); // <--- [ 'first' ]
myStack.remove();
console.log(myStack.storage); // <--- []
console.log(myStack.numOfItems()); // <--- "There are no items in your Stack."

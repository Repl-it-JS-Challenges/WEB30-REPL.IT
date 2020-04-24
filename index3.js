// stack class  - instructions in repl.it

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

// vowel count --> Write a function which counts the number of vowels in a given string. Return the count number.

// Passing the string "Hello world!" as an argument to your vowelCount() function would result in the number 3 being returned.

function vowelCount(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let lowerCaseSplitStr = str.toLowerCase().split('');
  let count = 0;
  lowerCaseSplitStr.forEach((letter) => {
    if (vowels.includes(letter) === true) {
      count++;
    }
  });
  return count;
}

console.log(vowelCount('Hello World!'));

// to binary string -->  Given a positive (or 0) number, return a string of 1's and 0's representing it's binary value: toBinaryString(6) should return "110" (no leading 0).
function toBinaryString(number) {
  let binary = [];

  if (!number) return '0';

  for (let i = number; i > 0; i = Math.floor(i / 2)) {
    binary.unshift(i % 2);
  }

  return binary.join('');
}

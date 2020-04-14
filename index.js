// #1 Write a function that takes an array of strings and return the longest string in the array.

function longestString(arr) {
  let longest = '';
  for (let i = 0; i < arr.length; i++) {
    const string = arr[i];
    if (string.length > longest.length) {
      longest = string;
    }
  }
  return longest;
}

const strings1 = ['short', 'really, really long!', 'medium'];
console.log(longestString(strings1)); // <--- 'really, really long!'

// #2 Write a function called reverseString that accepts a string and returns a reversed copy of the string.

function reverseString(str) {
  let seperate = str.split('');
  let reverse = seperate.reverse();
  newString = reverse.join('');
  return newString;
}

console.log(reverseString('raf'));
console.log(reverseString('lem'));

// # 3 Write a function called reverseNumber that reverses a number.

function reverseNumber(num) {
  num = num + '';
  return num.split('').reverse().join('');
}

console.log(reverseNumber(123456));

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

// # 4 Write a function that takes in a string, reverses the 'casing' of that string, and returns the "reversed-casing" string.

function reverseCase(str) {
  newString = '';
  for (i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      newString += str[i].toLowerCase();
    } else {
      newString += str[i].toUpperCase();
    }
  }
  return newString;
}

console.log(reverseCase('HELLO world'));

// #5 Write a function called commonElements that has parameters for two arrays.  Return an array of all items that are present in both arrays.  Do not modify the arrays that are passed in.

function commonElements(arr1, arr2) {
  var dupes = [];
  for (i = 0; i < arr1.length; i++) {
    let itemOne = arr1[i];
    for (j = 0; j < arr2.length; j++) {
      let itemTwo = arr2[j];
      if (itemOne === itemTwo) {
        dupes.push(itemTwo);
      }
    }
  }
  return dupes;
}
arr1 = [1, 2, 3, 4, 5, 6, 7];
arr2 = [3, 4, 5, 6];
console.log(commonElements(arr1, arr2));

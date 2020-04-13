// #1 Write a function that takes an array of strings and return the longest string in the array.

function longestString(arr) {
  let longest = '';
  for (let i = 0; i < arr.length; i++) {
    const string = arr[i];
    if (string.length > longest.lenth) {
      longest = string;
    }
  }
  return longest;
}

const strings1 = ['short', 'really, really long!', 'medium'];
console.log(longestString(strings1)); // <--- 'really, really long!'

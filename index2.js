// #6 Complete the function so that it converts dash-delimited ("kebab" case) & underscore-delimited ("snake" case) words into "camel" casing. The first word within the output should be capitalized only if the original word was capitalized.
function toCamelCase(str) {
  return str.replace(/_(\w)/g, (m) => m[1].toUpperCase()).replace(/-(\w)/g, (m) => m[1].toUpperCase());
}

console.log(toCamelCase('the-stealth-warrior'));
console.log(toCamelCase('The_stealth_warrior'));

// #7 Write a function called sortString that takes a string of letters and returns a string with the letters sorted in alphabetical order.
function sortString(str) {}

sortString('AzycxbCwBaA');

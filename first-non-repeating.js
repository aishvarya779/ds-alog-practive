// Given a string, find its first non-repeating character
// https://www.geeksforgeeks.org/given-a-string-find-its-first-non-repeating-character/

// time complexity O(n)
let str = 'geeksforgeeks';

const nonRepeatedChar = str => {
  let arr = str.split('');
  let res = {};
  for (let start = 0; start < arr.length; start++) {
    if (res[arr[start]]) {
      res[arr[start]]++;
    } else {
      res[arr[start]] = 1;
    }
  }
  for (let key in res) {
    if (res[key] === 1) {
      return key;
    }
  }
  return false;
};

console.log(nonRepeatedChar(str));

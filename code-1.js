/* 
An array is a type of data structure that stores elements of the same type in a contiguous block of memory. 
In an array, , of size , each memory location has some unique index,  (where ), that can be referenced as 
 (you may also see it written as ).
Given an array, , of  integers, print each element in reverse order as a single line of space-separated integers.

link : https://www.hackerrank.com/challenges/arrays-ds/problem
*/

const reverseOrder = arr => {
  let result = '';
  console.log(arr);
  for (let end = arr.length - 1; end > -1; end--) {
    result += arr[end] + ' ';
  }
  console.log(result);
};
reverseOrder([1, 2, 3, 4, 5, 6]);

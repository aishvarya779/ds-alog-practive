const binarySearch = (arr, key) => {
  let left = 0;
  let right = arr.length - 1;
  console.log(key);
  let reult = searchAlgo(arr, left, right, key);
  return reult;
};

const searchAlgo = (arr, l, r, key) => {
  if (r >= l) {
    mid = Math.floor((l + r) / 2);

    if (arr[mid] === key) {
      return 'mid is ' + mid;
    } else {
      if (arr[mid] > key) {
        return searchAlgo(arr, l, mid - 1, key);
      } else {
        return searchAlgo(arr, mid + 1, r, key);
      }
    }
  }
  //   console.log(arr, l, r, mid);
  return -1;
};
let arr = [1, 2, 3, 4, 5, 26];
let key = 26;
console.log(binarySearch(arr, key));

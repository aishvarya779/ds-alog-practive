const bubbleSort = arr => {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 1; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
console.log(bubbleSort([48, 25, 41, -15, 9, 6, 9, 3, 4]));

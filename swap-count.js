let arr = [7, 1, 3, 2, 4, 5, 6];

const swapCount = arr => {
  let count = 0;
  for (let start = 0; start < arr.length; start++) {
    let smallestPosition = start;
    for (let j = start + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestPosition]) {
        smallestPosition = j;
      }
    }

    if (start !== smallestPosition) {
      let temp = arr[start];
      arr[start] = arr[smallestPosition];
      arr[smallestPosition] = temp;
      count++;
    }
  }
  console.log(arr);
  return count;
};

console.log(swapCount(arr));

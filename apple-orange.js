// https://www.hackerrank.com/challenges/apple-and-orange/problem

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  let appleDistance = apples.map(apple => apple + a);
  let orangeDistance = oranges.map(orange => orange + b);
  let appleCount = appleDistance.filter(item => item >= s && item <= t);
  let orangeCount = orangeDistance.filter(item => item >= s && item <= t);
  console.log(appleCount.length);
  console.log(orangeCount.length);
};

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);

// problem link: https://www.hackerrank.com/challenges/grading/problem

const gradingStudents = grades => {
  // Write your code here
  for (let start = 0; start < grades.length; start++) {
    let difference = 5 - (grades[start] % 5);
    if (grades[start] > 37 || difference < 3) {
      grades[start] += difference;
    }
  }
  return grades;
};
let grades = [73, 67, 38, 33];
console.log(gradingStudents(grades));
console.log(grades);

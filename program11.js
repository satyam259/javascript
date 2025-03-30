// print all 2d array

// output 1,2,3,4,5,6
function twod(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[0].length; j++) {
      console.log(a[i][j], "j");
    }
  }
  return a;
}
const a = [
  [1, 2],
  [3, 4],
  [5, 6],
];
twod(a, "print all 2d array");

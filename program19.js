function countzero(arr) {
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 0) {
        // console.log(arr[i][j]);
        count++;
      }
    }
  }
  return count;
}
console.log(
  countzero([
    [0, 1, 1],
    [0, 1, 0],
    [1, 0, 0],
  ]),
  "count zeros in 2d array"
);

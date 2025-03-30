function findDup(arr) {
  var arrDup = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) != i && arrDup.indexOf(arr[i]) == -1) {
      console.log(arr.indexOf(arr[i]) != i, arr.indexOf(arr[i]), i);
      arrDup.push(arr[i]);
    }
  }
  return arrDup;
}
var arr = [4, 2, 34, 4, 1, 12, 1, 4];

console.log(findDup(arr), "show duplicate values in array");
